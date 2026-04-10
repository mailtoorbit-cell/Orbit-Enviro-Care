import { motion } from "motion/react";
import { FileText, Gavel, Search, ShieldAlert, CheckCircle } from "lucide-react";

export default function Compliance() {
  const complianceAreas = [
    "Pollution Control Board Documentation",
    "Consent to Establish (CTE) / Consent to Operate (CTO)",
    "Environmental Clearances (EC)",
    "Compliance Reporting & Monitoring",
    "Environmental Statement (Form V)",
    "Hazardous Waste Authorization",
    "Ground Water Extraction NOC",
    "Liaison with Regulatory Bodies"
  ];

  return (
    <section id="compliance" className="section-padding bg-brand-accent text-white overflow-hidden">
      <div className="container-max relative">
        {/* Decorative background element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-brand-secondary uppercase tracking-[0.2em] mb-4">Statutory Support</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Techno-Legal Expertise for Seamless Compliance
            </h3>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Navigating the regulatory landscape can be challenging. Our consultants provide 
              end-to-end support for all your statutory approvals and documentation needs, 
              ensuring your operations remain legally sound and environmentally responsible.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {complianceAreas.map((item) => (
                <div key={item} className="flex items-start gap-3 group">
                  <div className="mt-1 bg-brand-secondary/20 p-1 rounded group-hover:bg-brand-secondary transition-colors">
                    <CheckCircle className="w-4 h-4 text-brand-secondary group-hover:text-white" />
                  </div>
                  <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: FileText, label: "Documentation", desc: "Precise preparation of all regulatory forms and reports." },
              { icon: Gavel, label: "Legal Support", desc: "Expert guidance on environmental laws and litigation." },
              { icon: Search, label: "Monitoring", desc: "Regular data collection for compliance verification." },
              { icon: ShieldAlert, label: "Audit Support", desc: "Preparing your facility for regulatory inspections." }
            ].map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
              >
                <card.icon className="w-10 h-10 text-brand-secondary mb-4" />
                <h4 className="text-xl font-bold mb-2">{card.label}</h4>
                <p className="text-sm text-white/60 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
