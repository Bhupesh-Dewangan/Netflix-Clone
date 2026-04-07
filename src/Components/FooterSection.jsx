import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function FooterSection() {
  return (
    <section className="w-[85%] mx-auto mb-10">
      <p className="text-lg text-center text-white mt-6 mb-6">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex gap-2 w-[70%] mx-auto mb-6">
        <input
          type="email"
          placeholder="Email address"
          className="bg-transparent border border-gray-500  text-white rounded-md px-4  w-[80%]"
        />
        <Link to="/signup">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-3 rounded-md w-full">
            Get Started <span className="text-2xl pl-5"> &gt; </span>
          </button>
        </Link>
      </div>

      <Footer />
    </section>
  );
}

export default FooterSection;
