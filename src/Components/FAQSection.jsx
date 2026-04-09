import React, { useState } from "react";
import faqs from "../Data/FAQ.js";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-md bg-neutral-800 transition-colors duration-200 hover:bg-neutral-700">
      <div
        className="flex cursor-pointer items-center justify-between p-4 sm:p-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="pr-3 text-base font-semibold text-white sm:text-lg">{question}</h2>
        <span className="px-2 text-2xl text-white sm:px-3 sm:text-3xl">{isOpen ? "x" : "+"}</span>
      </div>

      {isOpen && (
        <div className="px-4 pb-4 text-sm text-white sm:px-5 sm:pb-5 sm:text-base">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

function FAQSection() {
  return (
    <section className="mx-auto mb-10 w-[92%] sm:w-[88%] lg:w-[85%]">
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
