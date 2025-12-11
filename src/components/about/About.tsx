// src/components/about/About.tsx
import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 px-4 pt-28 pb-20 flex justify-center items-start">

      <motion.div
        className="max-w-4xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
          About Us
        </h1>

        {/* Rounded box with shadow */}
        <motion.div
          className="bg-white rounded-xl shadow-2xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
            We are a specialized technology company dedicated to providing end-to-end digital solutions for your business. We excel in Web Development, where our experts custom-build and meticulously design your website, ensuring it has a dynamic interface, powerful functionality, and a flawless user experience. Alongside this, we offer robust Cloud Hosting services, giving your essential applications and data a secure, high-speed, and perfectly scalable environment on the internet. Our integrated approach ensures you receive a complete solution, a high-performing online platform that is secure, reliable, and perfectly positioned to drive your continuous growth.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
