// src/components/contact/ContactForm.tsx
import React from "react";

const ContactForm: React.FC = () => {
  return (
    <form className="space-y-6">

      {/* Full Name */}
      <div>
        <input
          type="text"
          placeholder="Your Full name"
          className="w-full border-b border-gray-400 p-2 focus:outline-none focus:border-black"
        />
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Your email address"
          className="w-full border-b border-gray-400 p-2 focus:outline-none focus:border-black"
        />
      </div>

      {/* Phone */}
      <div>
        <input
          type="tel"
          placeholder="Your Phone Number"
          className="w-full border-b border-gray-400 p-2 focus:outline-none focus:border-black"
        />
      </div>

      {/* Services Needed */}
      <div>
        <p className="font-bold text-blue-900">What services you need?</p>

        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Web App Development
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" /> Mobile App Development
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" /> Web/Graphic Design
          </label>
          
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Other
          </label>
        </div>
      </div>

      {/* Work With Us */}
      <div>
        <p className="font-bold text-blue-900">Work with us</p>

        <div className="mt-2 space-y-2 text-sm text-gray-700">
          <label className="flex items-center gap-2">
            <input type="radio" name="work" /> Have your own team
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="work" /> Have a new project
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="work" /> Need dedicated team
          </label>
        </div>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg hover:bg-yellow-500 transition"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default ContactForm;
