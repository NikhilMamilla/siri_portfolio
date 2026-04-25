import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { navLinks, heroContent } from "../constants";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }
};

const Footer = () => {
  return (
    <footer className="relative z-10 w-full bg-obsidian border-t border-wine-muted/10">
      <div className="max-w-6xl mx-auto px-6">

        {/* Created By (TOP) */}
        <div className="pt-8 pb-4 flex justify-center">
          <p className="font-heading text-[10px] tracking-[0.3em] uppercase text-wine-light font-bold text-center">
            Created by Sahithi Siri
          </p>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-wine-muted/20" />

        {/* Footer Content */}
        <div className="py-8 flex flex-col gap-6">

          {/* Footer Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-heading text-[11px] tracking-widest uppercase text-smoke/40 hover:text-gold-mist transition-colors duration-300"
              >
                {link.title}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex justify-center gap-8 text-xl">
            {heroContent.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-300 hover:scale-125 text-smoke/30 hover:text-wine-light"
                aria-label={social.name}
              >
                {social.name === "LinkedIn" && <FaLinkedin />}
                {social.name === "GitHub" && <FaGithub />}
                {social.name === "Instagram" && <FaInstagram />}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex justify-center pb-8">
            <p className="font-mono text-[9px] tracking-widest uppercase text-smoke/20 text-center">
              © {new Date().getFullYear()} Sahithi Siri. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
