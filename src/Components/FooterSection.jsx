import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function FooterSection() {
  return (
    <section className="mx-auto mb-10 w-[92%] sm:w-[88%] lg:w-[85%]">
      <p className="mb-6 mt-6 text-center text-base text-white sm:text-lg">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="mx-auto mb-6 flex w-full max-w-3xl flex-col gap-2 sm:flex-row">
        <input
          type="email"
          placeholder="Email address"
          className="w-full rounded-md border border-gray-500 bg-transparent px-4 py-3 text-white sm:w-[70%]"
        />
        <Link to="/login" className="w-full sm:w-[30%]">
          <button className="w-full rounded-md bg-red-600 px-4 py-3 font-bold text-white hover:bg-red-700">
            Get Started <span className="text-2xl pl-5"> &gt; </span>
          </button>
        </Link>
      </div>

      <Footer />
    </section>
  );
}

export default FooterSection;
