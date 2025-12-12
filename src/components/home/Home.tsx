// src/components/home/Home.tsx
import React from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-gray-50 pt-28 relative overflow-hidden">

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

            {/* Hero / Quote Section */}
            <section className="py-12 text-center px-4 relative z-10">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Innovation | <span className="text-blue-900">Transform</span> | Creation
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl max-w-2xl mx-auto text-gray-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                >
                    We help businesses create meaningful digital experiences by combining
                    creativity, technology, and strategy.
                </motion.p>
            </section>

            {/* Services Section */}
            <section id="services" className="py-12 px-4 max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-3 gap-6 text-center">

                    <div className="bg-white shadow-lg rounded-lg p-8 hover:scale-105 transition-transform">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-900">Design</h2>
                        <p>
                            We craft visually stunning and user-friendly designs that
                            communicate your brand effectively and delight your users.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-8 hover:scale-105 transition-transform">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-900">Launch</h2>
                        <p>
                            From planning to deployment, we ensure a smooth and successful
                            launch of your digital products.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-8 hover:scale-105 transition-transform">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-900">Develop</h2>
                        <p>
                            Our expert developers turn ideas into robust, scalable, and
                            high-performing solutions.
                        </p>
                    </div>

                </div>
            </section>

            {/* ======================= Mission & Vision (Gecko Style) ======================= */}
            <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start relative z-10">

                {/* Mission (slide from right) */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h3 className="text-blue-900 md:text-xl font-bold mb-2">Our Mission</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Who We Are
                    </h2>

                    <p className="text-gray-600 leading-relaxed text-lg">
                        We’re a passionate team dedicated to helping brands and individuals
                        stand out. From elegant portfolios to full-scale digital platforms,
                        we create meaningful, purposeful digital experiences that leave a
                        lasting impact.
                    </p>
                </motion.div>

                {/* Vision (slide from left) */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h3 className="text-blue-900 md:text-xl font-bold mb-2">Our Vision</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Where We're Going
                    </h2>

                    <p className="text-gray-600 leading-relaxed text-lg">
                        Our goal is to simplify digital growth by delivering accessible,
                        high-quality web development services. We help startups, freelancers,
                        and businesses build a strong online presence and a memorable visual identity.
                    </p>
                </motion.div>

            </section>
            {/* ======================================================================= */}

            {/* About Section */}
            <section id="about" className="py-20 px-4 flex justify-center items-start relative z-10">
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
                        className="bg-white rounded-xl shadow-md p-8 md:p-12"
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
