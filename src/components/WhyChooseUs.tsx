import { motion } from "motion/react";
import { Shield, Zap, Users2, Clock, ThumbsUp, Microscope } from "lucide-react";

const reasons = [
  {
    title: "One-Stop Solution",
    desc: "From consultancy to engineering and compliance, we handle everything under one roof.",
    icon: Shield,
  },
  {
    title: "Technical & Legal Depth",
    desc: "We bridge the gap between engineering requirements and regulatory legal frameworks.",
    icon: Zap,
  },
  {
    title: "Multidisciplinary Team",
    desc: "Access to experts in chemistry, biology, civil engineering, and environmental law.",
    icon: Users2,
  },
  {
    title: "Timely Execution",
    desc: "We understand the importance of deadlines in industrial projects and compliance.",
    icon: Clock,
  },
  {
    title: "Practical Approach",
    desc: "We focus on sustainable solutions that are also economically viable for your business.",
    icon: ThumbsUp,
  },
  {
    title: "Advanced Analytics",
    desc: "Precise data collection and laboratory support for evidence-based decision making.",
    icon: Microscope,
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-bold text-brand-secondary uppercase tracking-[0.2em] mb-4">Why Partner With Us</h2>
            <h3 className="text-4xl font-bold text-brand-accent mb-6 leading-tight">
              The Orbit Advantage
            </h3>
            <p className="text-lg text-brand-accent/60 mb-8 leading-relaxed">
              We don't just provide services; we build long-term partnerships that help your business 
              thrive while respecting the environment.
            </p>
            <div className="p-8 bg-brand-primary rounded-3xl text-white">
              <h4 className="text-2xl font-bold mb-4">Need a Proposal?</h4>
              <p className="text-white/80 mb-6 text-sm">
                Get a customized environmental strategy for your industrial facility today.
              </p>
              <a href="#contact" className="inline-block bg-white text-brand-primary px-6 py-3 rounded-full font-bold hover:bg-brand-neutral transition-colors">
                Request Proposal
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-brand-neutral/30 rounded-2xl border border-transparent hover:border-brand-primary/10 hover:bg-white hover:shadow-md transition-all"
              >
                <reason.icon className="w-10 h-10 text-brand-primary mb-4" />
                <h4 className="text-xl font-bold text-brand-accent mb-2">{reason.title}</h4>
                <p className="text-sm text-brand-accent/60 leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
