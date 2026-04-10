import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-neutral">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="container-max grid lg:grid-cols-2 gap-12 items-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            India's Leading Environmental Partner
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-brand-accent">
            Integrated <span className="text-brand-primary">Environmental</span> Consultancy & Engineering
          </h1>
          
          <p className="text-lg md:text-xl text-brand-accent/70 mb-8 max-w-xl leading-relaxed">
            Empowering industries with sustainable solutions, regulatory compliance, 
            and advanced engineering for water, air, and waste management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="#contact" className="btn-primary flex items-center justify-center gap-2">
              Get Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#services" className="btn-outline flex items-center justify-center">
              Explore Services
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "SPCB/CPCB Compliance",
              "Turnkey ETP/STP Projects",
              "Environmental Audits",
              "Lab & Testing Support"
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-medium text-brand-accent/80">
                <CheckCircle2 className="w-4 h-4 text-brand-secondary" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
              alt="Industrial Environmental Engineering"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent"></div>
          </div>
          
          {/* Floating Stats */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
          >
            <div className="text-3xl font-bold text-brand-primary">500+</div>
            <div className="text-xs font-semibold text-brand-accent/60 uppercase tracking-wider">Projects Completed</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
          >
            <div className="text-3xl font-bold text-brand-secondary">15+</div>
            <div className="text-xs font-semibold text-brand-accent/60 uppercase tracking-wider">Years Experience</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
