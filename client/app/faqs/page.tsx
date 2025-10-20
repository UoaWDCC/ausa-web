"use client"

import Accordian from "../components/generic/accordian/Accordian"
import Button from "../components/generic/button/regular/Button"
import React, { useState, useEffect } from "react"

const tabConfigs = [
  {
    label: "University Support",
    bg: "var(--btn-secondary-bg)",
    gradient: "to bottom, var(--white), var(--btn-secondary-bg)",
    faqs: [
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
    ],
  },
  {
    label: "External Support",
    bg: "var(--btn-tertiary-bg-hover)",
    gradient: "to bottom, var(--white), var(--btn-tertiary-bg-hover)",
    faqs: [
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
    ],
  },
  {
    label: "Emergency Support",
    bg: "var(--btn-primary-bg-press)",
    gradient: "to bottom, var(--white), var(--btn-primary-bg-press)",
    faqs: [
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
    ],
  },
]

const FAQ = () => {
  const [activeTab, setActiveTab] = useState(tabConfigs[0])

  useEffect(() => {
    document.body.style.background = `linear-gradient(${activeTab.gradient})`
  }, [activeTab])

  return (
    <div className="flex flex-col pt-20 min-h-screen px-4">
      <h2 className="h2 text-primary-emphasis mb-6 leading-tight sm:leading-[100px]">
        Frequently Asked Questions
      </h2>
      <p className="b3-body text-primary-emphasis mb-8 mt-4">
        Have questions about mental wellbeing or how to use our resources? Our
        FAQ section covers common queries with simple, supportive answers to
        help you find what you need quickly and confidently.
      </p>
      <div className="flex flex-wrap sm:flex-row gap-4 mb-10">
        {tabConfigs.map((tab) => (
          <Button
            key={tab.label}
            label={tab.label}
            backgroundColor={
              activeTab.label === tab.label ? tab.bg : "var(--light-grey)"
            }
            className="px-6 py-3 rounded-full whitespace-nowrap w-48 justify-center text-[var(--black)!important]"
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>
      <h3 className="h3 text-primary-emphasis mb-6 leading-snug">
        {activeTab.label}
      </h3>
      <div className="divide-y divide-[#043873] w-full pb-8">
        {activeTab.faqs.map((faq, index) => (
          <Accordian key={index} title={faq.question} content={faq.answer} />
        ))}
      </div>
    </div>
  )
}

export default FAQ
