import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Droplets, 
  Wind, 
  FlaskConical, 
  ClipboardList, 
  Construction, 
  FileCheck, 
  Activity 
} from "lucide-react";

const services = [
  {
    title: "Environmental Consultancy",
    desc: "Expert guidance on environmental management, sustainability strategies, and regulatory frameworks for industrial growth.",
    icon: ShieldCheck,
  },
  {
    title: "Water & Wastewater Treatment",
    desc: "Design and implementation of STP, ETP, RO, and DM plants tailored to specific industrial effluent characteristics.",
    icon: Droplets,
  },
  {
    title: "Air & Noise Monitoring",
    desc: "Comprehensive assessment of ambient air quality, stack emissions, and noise levels to ensure legal compliance.",
    icon: Wind,
  },
  {
    title: "Laboratory Support",
    desc: "State-of-the-art analytical testing for water, soil, and hazardous waste with precise reporting and documentation.",
    icon: FlaskConical,
  },
  {
    title: "Environmental Audits",
    desc: "Thorough auditing of industrial processes to identify efficiency gaps and ensure adherence to environmental standards.",
    icon: ClipboardList,
  },
  {
    title: "Turnkey Projects",
    desc: "End-to-end execution of environmental engineering projects from site study to final commissioning and maintenance.",
    icon: Construction,
  },
  {
    title: "Compliance & Approvals",
    desc: "Assistance with SPCB/CPCB documentation, Consent to Establish (CTE), and Consent to Operate (CTO) submissions.",
    icon: FileCheck,
  },
  {
    title: "Safety & Fire Compliance",
    desc: "Integrated safety audits and fire protection consultancy to ensure a secure working environment for your workforce.",
    icon: Activity,
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-secondary uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-accent mb-6">
            Comprehensive Environmental Solutions for Modern Industry
          </h3>
          <p className="text-lg text-brand-accent/60">
            We provide a one-stop platform for all your environmental, safety, and engineering needs, 
            ensuring your business stays compliant and sustainable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl border border-gray-100 bg-brand-neutral/30 hover:bg-white hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <service.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-brand-accent mb-3 group-hover:text-brand-primary transition-colors">
                {service.title}
              </h4>
              <p className="text-brand-accent/60 leading-relaxed text-sm">
                {service.desc}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-brand-primary font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <span className="text-lg">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
