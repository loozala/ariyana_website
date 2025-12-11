// src/components/home/Home.tsx
import React from "react";
import { motion } from "framer-motion";


const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Quotation Section */}
      <section className="py-12 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Innovation | Transform | Creation
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-500">
          We help businesses create meaningful digital experiences by combining creativity, technology, and strategy.
        </p>
      </section>

      {/* Services Sections */}
      <section id="services" className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white shadow-lg rounded-lg p-8 hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">Design</h2>
            <p>We craft visually stunning and user-friendly designs that communicate your brand effectively and delight your users.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">Launch</h2>
            <p>From planning to deployment, we ensure a smooth and successful launch of your digital products.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">Develop</h2>
            <p>Our expert developers turn ideas into robust, scalable, and high-performing solutions.</p>
          </div>
        </div>
      </section>

      {/* About Section inside Home */}
      <section id="about" className="py-20 px-4 flex justify-center items-start">
        <motion.div
          className="max-w-4xl text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
            Aariyana Tech
          </h1>
          <motion.div
            className="bg-white rounded-xl shadow-2xl p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We are a specialized technology company dedicated to providing end-to-end digital solutions for your business. We excel in Web Development, where our experts custom-build and meticulously design your website, ensuring it has a dynamic interface, powerful functionality, and a flawless user experience. Alongside this, we offer robust Cloud Hosting services, giving your essential applications and data a secure, high-speed, and perfectly scalable environment on the internet. Our integrated approach ensures you receive a complete solution, a high-performing online platform that is secure, reliable, and perfectly positioned to drive your continuous growth.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
