// src/components/contact/Contact.tsx
import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import logo from "../../assets/logo.jpg";

const ContactUs: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white pt-28 px-6 md:px-16 lg:px-32">

      {/* Small Label */}
      <p className="text-lg md:text-2xl font-bold text-blue-900">
        CONTACT US
      </p>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-3 leading-tight max-w-3xl">
        Let’s build something<br /> 
        <span className="text-blue-900">amazing together</span>
      </h1>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 items-start">

        {/* Left Section With Image */}
        <div className="w-full flex justify-center">
          <motion.img
            src={logo}
            alt="Web Development"
            className="rounded-2xl shadow-lg w-3/4 md:w-2/3 h-auto object-cover max-h-[350px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* Right Form Section */}
        <div>
          <ContactForm />
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
