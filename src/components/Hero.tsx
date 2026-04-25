import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineDownload, HiOutlineArrowRight } from "react-icons/hi";
import { heroContent } from "../constants";
import { cn } from "../lib/utils";

const Hero = () => {
  // States for name typing
  const [nameText, setNameText] = useState("");
  const [nameFinished, setNameFinished] = useState(false);

  // States for title typing loop
  const [titleIndex, setTitleIndex] = useState(0);
  const [titleText, setTitleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // ── Typing Logic: Name (Once) ──
  useEffect(() => {
    if (nameText.length < heroContent.name.length) {
      const timeout = setTimeout(() => {
        setNameText(heroContent.name.substring(0, nameText.length + 1));
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setNameFinished(true), 500);
    }
  }, [nameText]);

  // ── Typing Logic: Titles (Loop) ──
  useEffect(() => {
    if (!nameFinished) return;

    const currentTitle = heroContent.titles[titleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTitleText(currentTitle.substring(0, titleText.length + 1));
        if (titleText.length === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTitleText(currentTitle.substring(0, titleText.length - 1));
        if (titleText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % heroContent.titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [titleText, isDeleting, titleIndex, nameFinished]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-obsidian bg-grain overflow-hidden"
    >
      {/* ── Background Effects ── */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-wine/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-wine/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
      </div>

      <div className="portfolio-container px-8 md:px-20 relative z-10">

        {/* ── Main Content ── */}
        <div className="pt-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-hero text-smoke-bright leading-tight mb-2">
              Hi, I'm <span className="text-gradient-wine italic font-medium">{nameText}</span>
              {!nameFinished && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-[4px] h-[0.9em] bg-wine-light ml-2 align-middle"
                />
              )}
            </h2>

            <div className="h-12 md:h-16 flex items-center">
              {nameFinished && (
                <p className="font-heading text-2xl md:text-4xl text-smoke-light tracking-tight">
                  I am a <span className="text-smoke-bright font-bold">{titleText}</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-[3px] h-[1em] bg-wine-light ml-2 align-middle"
                  />
                </p>
              )}
            </div>

            {/* ── Social Icons ── */}
            <div className="flex gap-4 mt-10">
              {[
                { icon: <FaLinkedin size={20} />, color: "hover:text-[#0077b5]", glow: "group-hover:shadow-[0_0_20px_rgba(0,119,181,0.3)]" },
                { icon: <FaGithub size={20} />, color: "hover:text-white", glow: "group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]" },
                { icon: <FaInstagram size={20} />, color: "hover:text-[#e4405f]", glow: "group-hover:shadow-[0_0_20px_rgba(228,64,95,0.3)]" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href="#"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + (i * 0.1) }}
                  className={cn(
                    "group w-12 h-12 rounded-full glass-card flex items-center justify-center text-smoke transition-all duration-300",
                    item.color, item.glow
                  )}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>

            {/* ── CTA Button ── */}
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-wine-light/50 text-smoke-bright font-heading text-sm tracking-widest uppercase overflow-hidden flex items-center justify-center sm:min-w-[240px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-wine/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(138,58,90,0.2)]" />
                <span className="relative flex items-center gap-3">
                  <HiOutlineDownload size={18} className="text-wine-light" />
                  Download my Resume
                </span>
                <div className="absolute inset-0 rounded-full border border-wine-light/0 group-hover:border-wine-light/50 group-hover:shadow-[0_0_30px_rgba(138,58,90,0.3)] transition-all duration-500" />
              </motion.button>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="group relative w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-wine-light/50 text-smoke-bright font-heading text-sm tracking-widest uppercase overflow-hidden flex items-center justify-center sm:min-w-[240px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-wine/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(138,58,90,0.2)]" />
                <span className="relative flex items-center gap-3">
                  <HiOutlineArrowRight size={18} className="text-wine-light" />
                  View Projects
                </span>
                <div className="absolute inset-0 rounded-full border border-wine-light/0 group-hover:border-wine-light/50 group-hover:shadow-[0_0_30px_rgba(138,58,90,0.3)] transition-all duration-500" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
