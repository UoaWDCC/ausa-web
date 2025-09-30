"use client"
import Image, { StaticImageData } from "next/image"
import React from "react"

interface ContactsLeftProps {
    title1: string
    title2: string
    subtitle?: string
    backgroundImage?: StaticImageData
}

const ContactsLeft: React.FC<ContactsLeftProps> = ({
    title1,
    title2,
    subtitle,
    backgroundImage,
}) => {
    return (
        <div className="relative w-full h-full rounded-lg overflow-hidden flex">
            {/* Background Image */}
            <Image
                src={backgroundImage || "/default-background.jpg"}
                alt="Background"
                fill
                className="object-cover object-center absolute inset-0 z-0 opacity-92"
                priority
            />

            {/* Text */}
            <div className="relative z-10 px-6">
                <h3 className="text-6xl mb-2 mt-15 justify-left text-shadow-lg">{title1}</h3>
                <h3 className="text-6xl mb-2 mt-5 italic text-orange-300 text-shadow-lg">{title2}</h3>
                <p className="text-lg mb-2 mt-5 text-shadow-lg">{subtitle}</p>
            </div>
        </div>
    )  
}

export default ContactsLeft