import { motion } from "motion/react";
import { 
  FlaskRound as Flask, 
  Beaker, 
  Shirt, 
  Utensils, 
  Settings, 
  Factory, 
  Building2, 
  Building, 
  Globe 
} from "lucide-react";

const industries = [
  { name: "Pharmaceuticals", icon: Flask },
  { name: "Chemicals", icon: Beaker },
  { name: "Textiles", icon: Shirt },
  { name: "Food & Beverage", icon: Utensils },
  { name: "Engineering", icon: Settings },
  { name: "Manufacturing", icon: Factory },
  { name: "Infrastructure", icon: Building2 },
  { name: "Commercial Facilities", icon: Building },
  { name: "Government Projects", icon: Globe },
];

export default function Industries() {
  return (
    <section id="industries" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-secondary uppercase tracking-[0.2em] mb-4">Sectors We Serve</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-accent mb-6">
            Tailored Solutions for Diverse Industrial Landscapes
          </h3>
          <p className="text-lg text-brand-accent/60">
            Our expertise spans across multiple sectors, providing specialized environmental 
            consultancy and engineering services to meet unique industry challenges.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group p-8 bg-brand-neutral/30 rounded-2xl border border-transparent hover:border-brand-primary/20 hover:bg-white hover:shadow-lg transition-all text-center"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-all transform group-hover:-translate-y-1">
                <industry.icon className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-brand-accent group-hover:text-brand-primary transition-colors">
                {industry.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
