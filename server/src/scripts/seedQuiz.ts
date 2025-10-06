// server/src/scripts/seedQuiz.ts

import dotenv from "dotenv"
import path from "path"

// Load .env file
dotenv.config({ path: path.join(__dirname, "../../.env") })

import FirestoreCollections from "../data-layer/adapters/FirestoreCollections"

const sampleQuiz = {
  title: "UoA Student Wellbeing Assessment",
  description:
    "Find personalized support resources based on how you're feeling",
  startQuestionId: "q1",
  questions: {
    q1: {
      id: "q1",
      text: "How are you feeling?",
      description: "Select what best describes your current situation",
      options: [
        {
          id: "opt1",
          text: "Lonely",
          resources: [
            {
              id: "res1",
              title: "Maclaurin Chaplaincy",
              description: "Connect with other students and join social groups",
              url: "https://www.auckland.ac.nz/en/students/student-support/personal-support/spiritual-religious-support/maclaurin-chaplaincy/about-maclaurin-chaplaincy.html",
              type: "directory",
            },
            {
              id: "res2",
              title: "Campus Clubs and Societies",
              description: "Find communities that match your interests",
              url: "https://www.auckland.ac.nz/en/on-campus/life-on-campus/clubs-societies/discover-clubs.html#Sports-Recreation",
              type: "directory",
            },
            {
              id: "res3",
              title: "Fun happenings around the city",
              description:
                "Connect with students who understand what you're going through",
              url: "https://ourauckland.aucklandcouncil.govt.nz/events/",
              type: "directory",
            },
            {
              id: "res4",
              title: "AUSA Buddies (for international students)",
              description:
                "Specialized support for international students feeling isolated",
              url: "https://www.auckland.ac.nz/en/on-campus/international-students.html",
              type: "directory",
            },
          ],
        },
        {
          id: "opt2",
          text: "I'm lost in general",
          resources: [
            {
              id: "res5",
              title: "University of Auckland Website",
              description:
                "Free confidential counselling to help you find direction",
              url: "https://www.auckland.ac.nz/en.html",
              type: "directory",
            },
            {
              id: "res6",
              title: "Student Services Online",
              description:
                "Get help with finding your path and making decisions",
              url: "https://www.auckland.ac.nz/en/students/my-tools/sso.html",
              type: "directory",
            },
          ],
        },
        {
          id: "opt3",
          text: "Struggling academically",
          resources: [
            {
              id: "res7",
              title: "Aegrotat and compassionate consideration",
              description: "Aegrotat  and compassionate consideration",
              url: "https://www.auckland.ac.nz/en/students/academic-information/exams-and-final-results/during-exams/aegrotat-compassionate-consideration.html",
              type: "directory",
            },
          ],
        },
        {
          id: "opt4",
          text: "Sad / Overwhelmed / Anxious",
          nextQuestionId: "q2", // Leads to more questions about support type
        },
        {
          id: "opt5",
          text: "I need urgent help / Hopelessness",
          resources: [
            {
              id: "res9",
              title: "Emergency Services - Call 111",
              description:
                "If you're in immediate danger or having thoughts of suicide, call 111 now",
              url: "tel:111",
              type: "hotline",
            },
            {
              id: "res10",
              title: "Helplines",
              description:
                "Free call or text 1737 any time for support from a trained counsellor",
              url: "https://mentalhealth.org.nz/helplines",
              type: "hotline",
            },
            {
              id: "res11",
              title: "Lifeline",
              description:
                "Call 0800 543 354 or text HELP (4357) for 24/7 support",
              url: "tel:0800543354",
              type: "hotline",
            },
            {
              id: "res12",
              title: "Samaritans",
              description: "Call 0800 726 666 for confidential support",
              url: "tel:0800726666",
              type: "hotline",
            },
          ],
        },
        {
          id: "opt6",
          text: "Struggling financially",
          resources: [
            {
              id: "res13",
              title: "Student Job Search",
              description: "Find part-time work opportunities for students",
              url: "https://www.auckland.ac.nz/https://www.sjs.co.nz/?gad_source=1&gad_campaignid=21755270091&gbraid=0AAAAA9yRfnLYVGsGuZBVgLjuJYYl8YrF5&gclid=CjwKCAjwiY_GBhBEEiwAFaghviLTLMNpWZLbOnsfV3lY9QPMqoiM-rBefMWSoGx6dEJE48sX6vXH7BoCXC4QAvD_BwE/students/student-support/employment-opportunities.html",
              type: "directory",
            },
            {
              id: "res14",
              title: "StudyLink",
              description: "Apply for student loans and living cost allowances",
              url: "https://www.studylink.govt.nz/",
              type: "directory",
            },
            {
              id: "res15",
              title: "Student Hardship Grants",
              description: "Emergency financial support for unexpected costs",
              url: "https://www.auckland.ac.nz/en/study/fees-and-money-matters/financial-support/hardship-support.html",
              type: "directory",
            },
          ],
        },
      ],
    },
    q2: {
      id: "q2",
      text: "What kind of support are you looking for?",
      description: "Based on your answer of feeling sad/overwhelmed/anxious",
      options: [
        {
          id: "opt7",
          text: "External supports",
          resources: [
            {
              id: "res16",
              title: "Mental Health Foundation NZ",
              description:
                "Resources and information about mental health support",
              url: "https://mentalhealth.org.nz",
              type: "article",
            },
            {
              id: "res17",
              title: "Anxiety New Zealand Trust",
              description: "Support groups and resources for managing anxiety",
              url: "https://www.anxiety.org.nz",
              type: "directory",
            },
            {
              id: "res18",
              title: "Depression.org.nz",
              description: "Information and support for depression",
              url: "https://depression.org.nz",
              type: "article",
            },
          ],
        },
        {
          id: "opt8",
          text: "UoA supports",
          resources: [
            {
              id: "res19",
              title: "Campus Care Team",
              description: "Immediate support and guidance from trained staff",
              url: "https://www.auckland.ac.nz/en/students/student-support/personal-support/te-papa-manaaki-campus-care.html",
              type: "directory",
            },
            {
              id: "res20",
              title: "Health and counselling appointments",
              description:
                "Book an appointment with university doctors and nurses",
              url: "https://www.auckland.ac.nz/en/students/student-support/personal-support/student-health-counselling.html",
              type: "directory",
            },
          ],
        },
      ],
    },
  },
}

async function seedQuiz() {
  try {
    console.log("🌱 Starting to seed quiz data...")

    const now = new Date()
    const docRef = await FirestoreCollections.quizzes.add({
      ...sampleQuiz,
      createdAt: now,
      updatedAt: now,
    })

    console.log(`✅ Quiz created successfully with ID: ${docRef.id}`)
    console.log("🎉 Seeding complete!")

    process.exit(0)
  } catch (error) {
    console.error("❌ Error seeding quiz:", error)
    process.exit(1)
  }
}

seedQuiz()
