import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../constants";
import { cn } from "../lib/utils";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80; // Adjust for navbar height
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showNavbarRef = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (mobileMenuOpen) return setShowNavbar(true);

      // Hide navbar when scrolling down, show when scrolling up
      if (current > lastScrollY && current > 100) {
        setShowNavbar(false);
        showNavbarRef.current = false;
      } else {
        setShowNavbar(true);
        showNavbarRef.current = true;
      }
      setLastScrollY(current);
    };

    const handleMouseMove = () => {
      // Always show navbar on mouse move
      setShowNavbar(true);
      showNavbarRef.current = true;

      // Clear existing timeout
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }

      // Set new timeout to hide navbar after 2.5s of inactivity
      // only if we are scrolled down (scrollY > 100)
      hideTimeoutRef.current = setTimeout(() => {
        if (window.scrollY > 100 && !mobileMenuOpen) {
          setShowNavbar(false);
          showNavbarRef.current = false;
        }
      }, 2500);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [lastScrollY, mobileMenuOpen]);

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <div
        className={cn(
          "fixed top-5 left-1/2 -translate-x-1/2 z-[70] hidden lg:block transition-all duration-500 ease-luxury",
          showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        )}
      >
        <SlideTabs />
      </div>

      {/* ── Mobile Hamburger ── */}
      <div className="fixed top-5 left-5 z-[70] lg:hidden">
        <HamburgerButton
          open={mobileMenuOpen}
          setOpen={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-obsidian/95 backdrop-blur-xl flex items-center justify-center lg:hidden"
          >
            <ul className="space-y-8 text-center">
              {navLinks.map((nav, i) => (
                <motion.li
                  key={nav.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer transition-all uppercase tracking-[0.3em] font-heading font-bold text-2xl text-smoke-light hover:text-gold-mist"
                  onClick={() => {
                    scrollToSection(nav.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  <span className="text-[10px] block opacity-50 mb-1 text-wine">0{i+1}</span>
                  {nav.title}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SlideTabs = () => {
  const tabRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [active, setActive] = useState("Home");
  const [cursor, setCursor] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const navItem = navLinks.find((link) => link.id === entry.target.id);
          if (navItem) {
            setActive(navItem.title);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const titles = navLinks.map(n => n.title);
    const index = titles.indexOf(active);
    const el = tabRefs.current[index];
    if (el) {
      setCursor({
        left: el.offsetLeft,
        width: el.offsetWidth,
        opacity: 1,
      });
    }
  }, [active]);

  return (
    <div className="flex items-center">
      <ul className="relative flex items-center px-1.5 py-1.5 rounded-full border border-wine-muted/30 bg-wine-deep/40 backdrop-blur-md transition-all duration-500">
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            ref={(el) => { tabRefs.current[i] = el; }}
            onClick={() => {
              setActive(nav.title);
              scrollToSection(nav.id);
            }}
            className={cn(
              "relative px-6 h-10 flex items-center uppercase cursor-pointer z-10 transition-colors duration-500 font-heading font-bold text-[10px] tracking-widest",
              active === nav.title ? "text-smoke-bright" : "text-smoke/60 hover:text-smoke-light"
            )}
          >
            {nav.title}
          </li>
        ))}
        <motion.li
          animate={cursor}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="absolute h-10 rounded-full z-0 bg-wine/30 border border-wine-light/20 shadow-[0_0_15px_rgba(109,46,70,0.2)]"
        />
      </ul>
    </div>
  );
};

const HamburgerButton = ({ open, setOpen }: { open: boolean; setOpen: () => void }) => (
  <button
    onClick={setOpen}
    className="p-3 rounded-full border border-wine-muted/50 bg-wine-deep/70 text-smoke-bright backdrop-blur-md hover:bg-wine-deep/80 transition-all"
  >
    {open ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
  </button>
);

export default Navbar;