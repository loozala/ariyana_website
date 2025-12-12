import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import uiux from "../../assets/uiux.jpg";
import web from "../../assets/web.jpg";
import mobile from "../../assets/mobile.jpg";
import webdesign from "../../assets/webdesign.jpg";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Services: React.FC = () => {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "Web Design",
      description: "We craft visually stunning and user-friendly designs.",
      image: webdesign,
    },
    {
      id: 2,
      title: "Web Development",
      description: "Our developers turn ideas into robust, high-performing solutions.",
      image: web,
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "We focus on user experience for seamless interaction.",
      image: uiux,
    },
    {
      id: 4,
      title: "Mobile Application",
      description: "We build intuitive mobile apps for Android and iOS.",
      image: mobile,
    },
  ];

  return (
    <section id="services" className="relative pt-28 py-20 bg-white overflow-hidden">
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

      <div className="mx-auto px-6 relative z-10 max-w-7xl">
        <motion.h2
          className="text-center md:text-5xl font-bold text-blue-900 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
              onClick={() => setZoomImage(service.image)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔍 Zoom Modal */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomImage(null)}
          >
            <motion.img
              src={zoomImage}
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.4 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
