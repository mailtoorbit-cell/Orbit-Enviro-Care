import { motion } from "motion/react";
import { Users, Lightbulb, Target } from "lucide-react";

export default function About() {
  const highlights = [
    {
      title: "Technical Expertise",
      desc: "Our team consists of seasoned environmental engineers, chemists, and scientists with decades of collective experience.",
      icon: Users,
    },
    {
      title: "Regulatory Knowledge",
      desc: "Deep understanding of Indian environmental laws, SPCB/CPCB guidelines, and international sustainability standards.",
      icon: Lightbulb,
    },
    {
      title: "End-to-End Support",
      desc: "From initial site assessment to final compliance reporting, we provide a seamless journey for our clients.",
      icon: Target,
    }
  ];

  return (
    <section id="about" className="section-padding bg-brand-neutral/50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-brand-secondary uppercase tracking-[0.2em] mb-4">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-accent mb-8">
              Your Partner in Sustainable Industrial Growth
            </h3>
            <div className="space-y-6 text-lg text-brand-accent/70 leading-relaxed">
              <p>
                Orbit Enviro Care is a premier environmental engineering and compliance firm based in Surat, India. 
                As a proprietary firm led by Vinayak P Dave, we specialize in helping industries navigate the complex 
                landscape of environmental regulations while implementing practical, cost-effective engineering solutions.
              </p>
              <p>
                Our mission is to bridge the gap between industrial productivity and environmental preservation. 
                By combining technical innovation with legal expertise, we ensure that our clients not only meet 
                statutory requirements but also achieve superior environmental performance.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-brand-primary mb-1">15+</div>
                <div className="text-xs font-semibold text-brand-accent/50 uppercase">Years</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-brand-primary mb-1">500+</div>
                <div className="text-xs font-semibold text-brand-accent/50 uppercase">Clients</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-brand-primary mb-1">25+</div>
                <div className="text-xs font-semibold text-brand-accent/50 uppercase">Experts</div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-6 p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
                  <item.icon className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-accent mb-2">{item.title}</h4>
                  <p className="text-brand-accent/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
