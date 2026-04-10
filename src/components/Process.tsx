import { motion } from "motion/react";
import { Search, Database, Compass, PenTool, Play, FileCheck } from "lucide-react";

const steps = [
  {
    title: "Site Study",
    desc: "Initial assessment and physical survey of the industrial site.",
    icon: Search,
  },
  {
    title: "Data Collection",
    desc: "Gathering technical data and baseline environmental parameters.",
    icon: Database,
  },
  {
    title: "Compliance Strategy",
    desc: "Developing a roadmap for regulatory approvals and engineering.",
    icon: Compass,
  },
  {
    title: "Design & Recommendation",
    desc: "Custom engineering designs for treatment and monitoring systems.",
    icon: PenTool,
  },
  {
    title: "Execution Support",
    desc: "End-to-end support during project implementation and setup.",
    icon: Play,
  },
  {
    title: "Reporting & Follow-up",
    desc: "Final documentation and ongoing compliance monitoring.",
    icon: FileCheck,
  }
];

export default function Process() {
  return (
    <section className="section-padding bg-brand-neutral/30">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-secondary uppercase tracking-[0.2em] mb-4">Our Methodology</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-accent mb-6">
            A Systematic Approach to Environmental Excellence
          </h3>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-brand-primary/10 hidden lg:block -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border-4 border-brand-neutral group-hover:bg-brand-primary group-hover:text-white transition-all relative">
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-brand-secondary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    0{index + 1}
                  </span>
                  <step.icon className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-brand-accent mb-2 group-hover:text-brand-primary transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs text-brand-accent/60 leading-relaxed px-2">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
