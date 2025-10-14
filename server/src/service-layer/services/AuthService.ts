
import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import FirestoreCollections from '../../data-layer/adapters/FirestoreCollections';
import type { User } from '../../business-layer/models/User';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN: string | number = process.env.JWT_EXPIRES_IN || '24h';

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET must be defined in environment variables');
}

export const authService = {
  // Register new user
  async register(email: string, password: string, displayName?: string) {
    // Check if user exists
    const snapshot = await FirestoreCollections.users
      .where('email', '==', email)
      .get();
    
    if (!snapshot.empty) {
      throw new Error('User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = {
      email,
      password: hashedPassword,
      displayName: displayName || undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
      role: "user" as const,
    };

    // Save to Firestore
    const docRef = await FirestoreCollections.users.add(newUser);

    // Generate token
    const token = this.generateToken(
      docRef.id,
      email,
      displayName || email,
      "user"
    );

    return {
      token,
      user: {
        id: docRef.id,
        email,
        displayName: displayName || undefined,
        role: "user" as const,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt,
      },
    };
  },

  // Login user
  async login(email: string, password: string) {
    // Find user
    const snapshot = await FirestoreCollections.users
      .where('email', '==', email)
      .get();

    if (snapshot.empty) {
      throw new Error('Invalid credentials');
    }

    const userDoc = snapshot.docs[0];
    const userData = userDoc.data() as User;

    // Verify password
    const isValidPassword = await bcrypt.compare(password, userData.password);
    
    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    // Update last login
    await FirestoreCollections.users.doc(userDoc.id).update({
      updatedAt: new Date(),
    });

    // Generate token
    const token = this.generateToken(
      userDoc.id,
      userData.email,
      userData.displayName || userData.email,
      userData.role
    );

    return {
      token,
      user: {
        id: userDoc.id,
        email: userData.email,
        displayName: userData.displayName,
        role: userData.role,
        createdAt: userData.createdAt,
        updatedAt: new Date(),
      },
    };
  },

  // Get user by ID
  async getUserById(uid: string) {
    const doc = await FirestoreCollections.users.doc(uid).get();
    
    if (!doc.exists) {
      return null;
    }

    const userData = doc.data() as User;
    
    return {
      id: doc.id,
      email: userData.email,
      displayName: userData.displayName,
      role: userData.role,
      createdAt: userData.createdAt,
      updatedAt: userData.updatedAt,
    };
  },

  // Generate JWT token
  generateToken(uid: string, email: string, name: string, role: string): string {
    const payload = { uid, email, name, role };
    const options: jwt.SignOptions = { 
      expiresIn: JWT_EXPIRES_IN as jwt.SignOptions['expiresIn']
    };
    return jwt.sign(payload, JWT_SECRET, options);
  },

  // Verify JWT token
  verifyToken(token: string) {
    return jwt.verify(token, JWT_SECRET);
  },
};