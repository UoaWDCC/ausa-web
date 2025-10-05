import Accordian from '../components/generic/accordian/Accordian';
import React from 'react';

const faqData = [
  {
    question: "What kinds of wellbeing support are available at UOA?",
    answer: "Most universities offer a range of wellbeing support services to help students manage both personal and academic challenges. These can include free or low-cost counselling sessions, student support advisors, peer mentoring, wellbeing workshops, and spaces to connect with others. Many universities also provide academic accommodations if you’re experiencing difficulties that affect your studies. You can usually find details on your university’s student services or wellbeing page, or by reaching out directly to your student support centre"
  },
  {
    question: "What kinds of wellbeing support are available at UOA?",
    answer: "Most universities offer a range of wellbeing support services to help students manage both personal and academic challenges. These can include free or low-cost counselling sessions, student support advisors, peer mentoring, wellbeing workshops, and spaces to connect with others. Many universities also provide academic accommodations if you’re experiencing difficulties that affect your studies. You can usually find details on your university’s student services or wellbeing page, or by reaching out directly to your student support centre"
  },
  {
    question: "What kinds of wellbeing support are available at UOA?",
    answer: "Most universities offer a range of wellbeing support services to help students manage both personal and academic challenges. These can include free or low-cost counselling sessions, student support advisors, peer mentoring, wellbeing workshops, and spaces to connect with others. Many universities also provide academic accommodations if you’re experiencing difficulties that affect your studies. You can usually find details on your university’s student services or wellbeing page, or by reaching out directly to your student support centre"
  }
];

const FAQ = () => {
  return (
    // for testing accordian, mt-40 is also for testing
    <div className="mt-40 px-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-black">Frequently Asked Questions</h1>
      <div className="divide-y divide-[#043873]">
        {faqData.map((faq, index) => (
          <Accordian key={index} title={faq.question} content={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;

