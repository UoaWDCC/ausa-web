import "dotenv/config"
import ResourceRepository from "../data-layer/repositories/ResourceRepository"
;(async () => {
  const resourceRepository = new ResourceRepository()
  resourceRepository.createResource("academic", {
    title: "Academic",
    description:
      "Studying can be challenging, but the right support makes all the difference. Here, you’ll find tools and services to help you succeed—whether it’s study skills, time management, tutoring, or academic advice. Remember, asking for help is a sign of strength, not weakness.",
    resources: [
      {
        header: "Learning Essentials",
        description: "Develop your research and study skills",
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        href: "https://learningessentials.auckland.ac.nz/",
      },
      {
        header: "Libraries and Learning Services",
        description: "Access to libraries and learning resources",
        image:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        href: "https://www.auckland.ac.nz/en/library.html",
      },
    ],
  })

  resourceRepository.createResource("land-environment", {
    title: "Financial",
    description:
      "Financial difficulties can be overwhelming, but you're not alone. Explore resources for budgeting, scholarships, financial aid, and support to help you manage your finances and focus on your studies.",
    resources: [
      {
        header: "Scholarships and Awards",
        description: "Find scholarships and awards to fund your studies",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        href: "https://www.auckland.ac.nz/en/study/scholarships-and-awards.html",
      },
      {
        header: "Financial Wellbeing",
        description: "Tips and suggestions about managing your money",
        image:
          "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        href: "https://www.auckland.ac.nz/en/students/student-support/personal-support/be-well/financial-wellbeing.html",
      },
    ],
  })

  resourceRepository.createResource("financial-stability", {
    title: "External",
    description:
      "Beyond the university, there are external opportunities and resources to enhance your career, community involvement, and personal growth. Discover career services, job boards, and more.",
    resources: [
      {
        header: "Career Development and Employability Services",
        description: "Plan and prepare for your future work and life",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        href: "https://www.auckland.ac.nz/en/students/student-support/academic-support/career-development-and-employability-services.html",
      },
      {
        header: "Student Job Board",
        description: "Search and apply for graduate and internship positions",
        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        href: "https://auckland.careercentre.me/welcome/university-of-auckland",
      },
    ],
  })

  resourceRepository.createResource("mental-emotional", {
    title: "Wellbeing",
    description:
      "Your wellbeing is paramount. Access resources for mental health, physical health, relationships, and overall wellness to support a balanced and fulfilling university life.",
    resources: [
      {
        header: "Be Well",
        description:
          "Tools and information to help you care for your physical, emotional and spiritual wellbeing",
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        href: "https://www.auckland.ac.nz/en/students/student-support/personal-support/be-well.html",
      },
      {
        header: "Student Health and Counselling",
        description: "Support for mental health and counselling services",
        image:
          "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        href: "https://www.auckland.ac.nz/en/students/student-support/personal-support/student-health-counselling.html",
      },
    ],
  })
})()
