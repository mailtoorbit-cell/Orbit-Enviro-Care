import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-brand-secondary uppercase tracking-[0.2em] mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-accent mb-8">
              Let's Discuss Your Environmental Needs
            </h3>
            <p className="text-lg text-brand-accent/60 mb-10 leading-relaxed">
              Have a project in mind or need help with regulatory compliance? 
              Our experts are ready to provide technical guidance and customized solutions.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-neutral rounded-xl flex items-center justify-center text-brand-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-accent mb-1">Call Us</h4>
                  <p className="text-brand-accent/60">+91 78787 99733</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-neutral rounded-xl flex items-center justify-center text-brand-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-accent mb-1">Email Us</h4>
                  <p className="text-brand-accent/60">info@orbitenvirocare.in</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-neutral rounded-xl flex items-center justify-center text-brand-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-accent mb-1">Our Office</h4>
                  <p className="text-brand-accent/60 leading-relaxed">
                    401, 402, Dreamland, Sarthana Jakatnaka,<br />
                    Varachha, Surat - 395006
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-neutral rounded-xl flex items-center justify-center text-brand-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-accent mb-1">Business Hours</h4>
                  <p className="text-brand-accent/60">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-brand-accent/60">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-neutral/50 p-10 rounded-3xl border border-gray-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-accent/70 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-accent/70 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all bg-white"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-accent/70 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-accent/70 ml-1">Service Required</label>
                  <select className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all bg-white">
                    <option>Environmental Consultancy</option>
                    <option>Water Treatment</option>
                    <option>Compliance Support</option>
                    <option>Laboratory Testing</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-accent/70 ml-1">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your requirements..."
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all bg-white resize-none"
                ></textarea>
              </div>

              <button className="btn-primary w-full flex items-center justify-center gap-2 py-4">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
