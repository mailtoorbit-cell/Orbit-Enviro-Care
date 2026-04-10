/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Compliance from "./components/Compliance";
import Industries from "./components/Industries";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "motion/react";

function TrustStrip() {
  const items = [
    "Environmental Compliance",
    "Industrial Expertise",
    "Monitoring & Testing",
    "Turnkey Solutions",
    "Technical Guidance"
  ];

  return (
    <div className="bg-brand-accent py-8 overflow-hidden border-y border-white/10">
      <div className="container-max px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {items.map((item) => (
            <div key={item} className="text-white font-display font-bold text-sm md:text-base tracking-widest uppercase">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Compliance />
        <Industries />
        <WhyChooseUs />
        <Process />
        
        {/* CTA Banner */}
        <section className="section-padding bg-brand-primary text-white text-center">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Need expert help with environmental compliance and project execution?
              </h2>
              <div className="flex flex-col sm:row justify-center gap-4">
                <a href="#contact" className="bg-white text-brand-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-neutral transition-all shadow-xl">
                  Request Proposal
                </a>
                <a href="tel:+917878799733" className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                  Talk to an Expert
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
