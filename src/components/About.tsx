import { motion } from "framer-motion";
import { aboutContent } from "../constants";

const About = () => {
  return (
    <section id="about" className="portfolio-section min-h-screen flex items-center bg-obsidian relative overflow-hidden">
      {/* ── Background Decoration ── */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-wine/5 blur-[120px] rounded-full -translate-y-1/2" />
      
      <div className="portfolio-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* ── Left Side: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="section-label">01 — About Me</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-section text-smoke-bright mb-4 leading-tight">
              A Glimpse Into My Journey
            </h2>
            <p className="font-heading text-base sm:text-lg text-wine-light mb-10 uppercase tracking-[0.2em] leading-relaxed">
              Blending Technical Precision with Creative Intelligence
            </p>
            
            <div className="space-y-6 text-smoke font-body text-body-lg">
              {aboutContent.bio.map((paragraph, i) => (
                <p key={i} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {aboutContent.highlights.map((item, i) => (
                <div key={i} className="space-y-1">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-wine-light/60">
                    {item.label}
                  </p>
                  <p className="font-heading text-sm text-smoke-bright tracking-wide">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right Side: Image Placeholder ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center mt-12 lg:mt-0"
          >
            {/* Circular Image Frame */}
            <div className="relative z-10 w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full border border-wine/20 p-2 bg-obsidian group">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                {/* Placeholder Gradient/Pattern */}
                <div className="w-full h-full bg-gradient-to-br from-wine-deep via-obsidian to-wine-muted/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-10" />
                  <div className="absolute inset-0 bg-dots opacity-20" />
                  
                  {/* Visual Placeholder Icon/Text */}
                  <div className="text-center relative z-20">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full border border-wine/30 flex items-center justify-center bg-wine/5 backdrop-blur-sm">
                      <span className="font-display text-2xl text-gold-mist italic">S</span>
                    </div>
                    <p className="font-heading text-[8px] tracking-[0.4em] uppercase text-smoke/40">
                      Identity
                    </p>
                  </div>

                  {/* Animated Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-wine/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>

              {/* Rotating Border Glow (Pro Touch) */}
              <div className="absolute inset-0 rounded-full border border-wine-light/0 group-hover:border-wine-light/40 group-hover:shadow-[0_0_40px_rgba(138,58,90,0.2)] transition-all duration-700 -z-10" />
            </div>

            {/* Decorative Elements around Circle */}
            <div className="absolute top-0 left-0 w-full h-full animate-spin-slow opacity-20 pointer-events-none">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-mist rounded-full" />
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-wine-light rounded-full" />
            </div>

            {/* Floating Glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-wine/5 blur-[80px] -z-10 rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
