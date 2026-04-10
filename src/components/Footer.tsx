import { Leaf, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-accent text-white pt-20 pb-10">
      <div className="container-max px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="bg-brand-primary p-2 rounded-lg">
                <Leaf className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">
                Orbit<span className="text-brand-primary">Enviro Care</span>
              </span>
            </a>
            <p className="text-white/60 leading-relaxed text-sm">
              Providing integrated environmental engineering and compliance solutions 
              to industries across India. Committed to sustainability and technical excellence.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#home" className="hover:text-brand-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-primary transition-colors">Our Services</a></li>
              <li><a href="#industries" className="hover:text-brand-primary transition-colors">Industries Served</a></li>
              <li><a href="#contact" className="hover:text-brand-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Environmental Consultancy</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Water Treatment Solutions</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Compliance Support</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Laboratory Support</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Environmental Audits</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              Subscribe to our newsletter for the latest environmental updates and regulatory news.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your Email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:border-brand-primary w-full"
              />
              <button className="bg-brand-primary px-4 py-2 rounded-lg hover:bg-brand-secondary transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2026 Orbit Enviro Care. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
