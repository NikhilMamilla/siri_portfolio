import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { heroContent } from "../constants";

const Contact = () => {
  return (
    <section id="contact" className="portfolio-section bg-obsidian relative overflow-hidden flex items-center">
      {/* ── Background Decoration ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-wine/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="portfolio-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* ── Left Side: Info ── */}
          <div className="flex-1 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-gold-mist/40" />
                <p className="font-heading text-[10px] sm:text-xs uppercase tracking-[0.5em] text-gold-mist">
                  05 — Let's Connect
                </p>
              </div>
              <h2 className="font-display text-5xl md:text-7xl text-smoke-bright italic leading-tight">
                Send a <span className="text-gradient-wine font-medium">Digital</span> Note.
              </h2>
              <p className="font-body text-smoke/70 max-w-md leading-relaxed text-lg">
                Whether you have a question about my research, a project proposal, or just want to say hi, my inbox is always open.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-wine-deep/40 border border-wine-muted/20 flex items-center justify-center text-wine-light group-hover:text-gold-mist transition-colors duration-500">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-wine-light mb-1">Email Me</p>
                  <p className="font-heading text-smoke-bright tracking-wide group-hover:text-gold-mist transition-colors cursor-pointer">
                    24211a05d7@bvrit.ac.in
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-wine-deep/40 border border-wine-muted/20 flex items-center justify-center text-wine-light group-hover:text-gold-mist transition-colors duration-500">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-wine-light mb-1">Location</p>
                  <p className="font-heading text-smoke-bright tracking-wide">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 pt-4">
              {heroContent.socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl bg-wine-deep/40 border border-wine-muted/20 flex items-center justify-center text-smoke/40 hover:text-gold-mist transition-all duration-500"
                >
                  {social.name === "LinkedIn" && <FaLinkedin size={20} />}
                  {social.name === "GitHub" && <FaGithub size={20} />}
                  {social.name === "Instagram" && <FaInstagram size={20} />}
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Right Side: Form ── */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 md:p-10 relative overflow-hidden w-full max-w-xl"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-heading text-[10px] uppercase tracking-widest text-wine-light ml-4">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Sahithi Siri"
                      className="w-full px-6 py-4 rounded-xl bg-wine-deep/20 border border-wine-muted/20 text-smoke-bright placeholder:text-smoke/20 outline-none focus:border-wine-light/50 transition-all duration-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-heading text-[10px] uppercase tracking-widest text-wine-light ml-4">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="hello@example.com"
                      className="w-full px-6 py-4 rounded-xl bg-wine-deep/20 border border-wine-muted/20 text-smoke-bright placeholder:text-smoke/20 outline-none focus:border-wine-light/50 transition-all duration-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-heading text-[10px] uppercase tracking-widest text-wine-light ml-4">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Project Inquiry"
                    className="w-full px-6 py-4 rounded-xl bg-wine-deep/20 border border-wine-muted/20 text-smoke-bright placeholder:text-smoke/20 outline-none focus:border-wine-light/50 transition-all duration-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-heading text-[10px] uppercase tracking-widest text-wine-light ml-4">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell me about your vision..."
                    className="w-full px-6 py-4 rounded-xl bg-wine-deep/20 border border-wine-muted/20 text-smoke-bright placeholder:text-smoke/20 outline-none focus:border-wine-light/50 transition-all duration-500 resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 rounded-xl bg-gradient-to-r from-wine to-wine-light text-smoke-bright font-heading text-xs tracking-[0.3em] uppercase font-bold shadow-[0_10px_30px_rgba(109,46,70,0.3)] hover:shadow-[0_15px_40px_rgba(109,46,70,0.5)] transition-all duration-500 flex items-center justify-center gap-4"
                >
                  Send Message
                  <FaPaperPlane size={14} className="text-gold-mist" />
                </motion.button>
              </form>

              {/* Decorative Corner */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-wine/10 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
