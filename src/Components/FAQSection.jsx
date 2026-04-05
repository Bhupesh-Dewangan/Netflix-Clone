import React, { useState } from "react";
import faqs from "../Data/FAQ.js";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors duration-200">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold text-white">{question}</h2>
        <span className="text-white text-3xl px-3">{isOpen ? "x" : "+"}</span>
      </div>

      {isOpen && (
        <div className="px-4 pb-4 text-white text-md">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

function FAQSection() {
  return (
    <section className="w-[85%] mx-auto mb-10">
      <h1 className="text-2xl font-bold tracking-tight text-white mb-6">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
