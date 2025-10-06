import Accordian from "../components/generic/accordian/Accordian"
import Button from "../components/generic/button/regular/Button"
import React from "react"

const faqData = [
  {
    question: "What kinds of wellbeing support are available at UOA?",
    answer:
      "Most universities offer a range of wellbeing support services to help students manage both personal and academic challenges. These can include free or low-cost counselling sessions, student support advisors, peer mentoring, wellbeing workshops, and spaces to connect with others. Many universities also provide academic accommodations if you’re experiencing difficulties that affect your studies. You can usually find details on your university’s student services or wellbeing page, or by reaching out directly to your student support centre",
  },
  {
    question: "What kinds of wellbeing support are available at UOA?",
    answer:
      "Most universities offer a range of wellbeing support services to help students manage both personal and academic challenges. These can include free or low-cost counselling sessions, student support advisors, peer mentoring, wellbeing workshops, and spaces to connect with others. Many universities also provide academic accommodations if you’re experiencing difficulties that affect your studies. You can usually find details on your university’s student services or wellbeing page, or by reaching out directly to your student support centre",
  },
  {
    question: "What kinds of wellbeing support are available at UOA?",
    answer:
      "Most universities offer a range of wellbeing support services to help students manage both personal and academic challenges. These can include free or low-cost counselling sessions, student support advisors, peer mentoring, wellbeing workshops, and spaces to connect with others. Many universities also provide academic accommodations if you’re experiencing difficulties that affect your studies. You can usually find details on your university’s student services or wellbeing page, or by reaching out directly to your student support centre",
  },
]

const FAQ = () => {
  return (
    <div className="mt-40 px-8 mx-auto flex flex-col pb-16">
      <h2 className="h2 text-primary-emphasis mb-6">
        Frequently
        <br />
        <div className="mt-10">Asked Questions</div>
      </h2>
      <p className="b3-body text-primary-emphasis mb-8 w-full mt-4">
        Have questions about mental wellbeing or how to use our resources? Our
        FAQ section covers common queries with simple, supportive answers to
        help you find what you need quickly and confidently.
      </p>
      <div className="flex flex-row gap-4 mb-20">
        <Button
          label="University Support"
          backgroundColor="var(--btn-secondary-bg)"
          className="px-6 py-3 rounded-full"
        />
        <Button
          label="External Support"
          backgroundColor="var(--btn-tertiary-bg-hover)"
          className="px-6 py-3 rounded-full"
        />
        <Button
          label="Emergency Support"
          backgroundColor="var(--btn-primary-bg-press)"
          className="px-6 py-3 rounded-full"
        />
      </div>
      <h3 className="h3 text-primary-emphasis mb-6">University Support</h3>
      <div className="divide-y divide-[#043873] w-full">
        {faqData.map((faq, index) => (
          <Accordian key={index} title={faq.question} content={faq.answer} />
        ))}
      </div>
    </div>
  )
}

export default FAQ
