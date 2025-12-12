// src/components/about/About.tsx
import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 px-4 pt-28 pb-20 flex justify-center items-start relative overflow-hidden">

      {/* Floating background circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-blue-200/20 rounded-full"
          style={{
            width: `${100 + i * 60}px`,
            height: `${100 + i * 60}px`,
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
          }}
          animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        className="max-w-4xl text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
          About Us
        </h1>

        {/* Rounded box with shadow */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
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
