// src/components/about/About.tsx
import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.jpg"; 

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 px-4 pt-28 pb-20 flex flex-col justify-center items-center relative overflow-hidden">

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

      {/* About Us Section */}
      <motion.div
        className="max-w-4xl text-center relative z-10 mb-20"
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

      {/* ======================= Meet Our Team ======================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10 w-full">
        <motion.h2
          className="text-center text-4xl md:text-5xl font-bold text-blue-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Team
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          The visionary team driving Aariyana Tech’s digital innovation.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Team Card 1 */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={logo}
              alt="Team Member"
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              CEO
            </span>
            <h3 className="text-2xl font-bold mt-3 text-gray-900">Sanjog</h3>
            <p className="text-blue-700 font-medium">Co-founder | IT Specialist</p>
            <p className="text-gray-600 mt-2 text-sm">
              A tech visionary who transforms ideas into powerful digital experiences.
            </p>
          </motion.div>

          {/* Team Card 2 */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src={logo}
              alt="Team Member"
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
               Human Resources
            </span>
            <h3 className="text-2xl font-bold mt-3 text-gray-900">Suryata</h3>
            <p className="text-blue-700 font-medium">HR</p>
            <p className="text-gray-600 mt-2 text-sm">
              manages the company
            </p>
          </motion.div>

          {/* Team Card 3 */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={logo}
              alt="Team Member"
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
              Co-founder
            </span>
            <h3 className="text-2xl font-bold mt-3 text-gray-900">Sahil</h3>
            <p className="text-blue-700 font-medium">Co-founder</p>
            <p className="text-gray-600 mt-2 text-sm">
              cofounder
            </p>
          </motion.div>

          {/* Team Card 4 */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src={logo}
              alt="Team Member"
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              Project Manager
            </span>
            <h3 className="text-2xl font-bold mt-3 text-gray-900">Khagendra Prasad Joshi</h3>
            <p className="text-blue-700 font-medium">Project Lead</p>
            <p className="text-gray-600 mt-2 text-sm">
              Specialist in project workflows.
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default About;
