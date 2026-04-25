import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { profileContent } from "../constants";
import { cn } from "../lib/utils";

type TabType = "education" | "certifications" | "accomplishments";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<TabType>("education");

  const tabs = [
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "accomplishments", label: "Accomplishments" },
  ];

  const getCurrentData = () => {
    return profileContent[activeTab];
  };

  return (
    <section id="profile" className="portfolio-section min-h-screen bg-obsidian relative overflow-hidden flex flex-col justify-center">
      {/* ── Background Decoration ── */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-wine/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-wine/5 blur-[120px] rounded-full" />
      </div>

      <div className="portfolio-container relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gold-mist/40" />
            <p className="font-heading text-[10px] sm:text-xs uppercase tracking-[0.5em] text-gold-mist">
              02 — My Journey
            </p>
            <div className="w-12 h-[1px] bg-gold-mist/40" />
          </div>
          
          <h2 className="font-display text-section text-smoke-bright mb-4">
            Profile.
          </h2>
          <p className="font-body text-smoke max-w-2xl mx-auto leading-relaxed">
            A comprehensive look at my academic foundations, professional certifications, and key accomplishments in the field of technology and leadership.
          </p>
        </div>

        <div className="flex justify-center mb-12 sm:mb-20">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={cn(
                  "relative px-4 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-heading font-bold tracking-widest uppercase transition-all duration-300 border",
                  activeTab === tab.id
                    ? "bg-wine-light text-smoke-bright border-wine-light shadow-[0_0_20px_rgba(109,46,70,0.4)]"
                    : "bg-transparent text-smoke/40 border-wine-muted/30 hover:border-wine-light/50 hover:text-smoke/70"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Content: Cards (Mobile) & Timeline (Desktop) ── */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Mobile View */}
              <div className="lg:hidden space-y-6">
                {getCurrentData().map((item, index) => (
                  <CardItem key={index} item={item} />
                ))}
              </div>

              {/* Desktop View */}
              <div className="hidden lg:block relative py-10">
                {/* Vertical Center Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-wine-muted/30 to-transparent -translate-x-1/2" />
                
                <div className="space-y-24">
                  {getCurrentData().map((item, index) => (
                    <TimelineItem key={index} item={item} index={index} />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const CardItem = ({ item }: { item: any }) => {
  const isInProgress = item.status === "In Progress";

  return (
    <div className="glass-card p-5 sm:p-6 relative overflow-hidden group">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="font-display text-lg sm:text-xl text-smoke-bright mb-1 group-hover:text-gold-mist transition-colors">
            {item.title}
          </h3>
          <p className="font-heading text-[9px] sm:text-[10px] uppercase tracking-widest text-wine-light/60">
            {item.type}
          </p>
        </div>

        {item.status && (
          <div className={cn(
            "self-start px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest border",
            isInProgress 
              ? "border-gold-mist/40 text-gold-mist bg-gold-mist/5" 
              : "border-wine-light/40 text-wine-light bg-wine-light/5"
          )}>
            {item.status}
          </div>
        )}
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-smoke/70">
            <FaMapMarkerAlt className="text-wine-light" size={12} />
            <span className="text-xs">{item.institution}</span>
          </div>
          <div className="flex items-center gap-3 text-wine-light">
            <FaCalendarAlt size={12} />
            <span className="text-xs font-heading font-bold">{item.dates}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ item, index }: { item: any; index: number }) => {
  const isLeft = index % 2 === 0;
  const isInProgress = item.status === "In Progress";

  return (
    <div className="relative flex items-center justify-center w-full">
      {/* Timeline Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-obsidian border-2 border-wine-light z-20 shadow-[0_0_10px_rgba(138,58,90,0.5)]" />
      
      {/* Content Container */}
      <div className={cn(
        "w-full flex items-center",
        isLeft ? "flex-row" : "flex-row-reverse"
      )}>
        <motion.div 
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className={cn(
            "w-1/2 relative",
            isLeft ? "pr-16 text-right" : "pl-16 text-left"
          )}
        >
          <div className="glass-card p-8 group hover:border-wine-light/30 transition-all duration-500">
            {item.status && (
              <div className={cn(
                "mb-4 inline-block px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-[0.2em] border",
                isInProgress 
                  ? "border-gold-mist/40 text-gold-mist bg-gold-mist/5" 
                  : "border-wine-light/40 text-wine-light bg-wine-light/5"
              )}>
                {item.status}
              </div>
            )}
            
            <h3 className="font-display text-2xl text-smoke-bright mb-2 group-hover:text-gold-mist transition-colors">
              {item.title}
            </h3>
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-wine-light mb-4">
              {item.institution}
            </p>
            
            <div className={cn(
              "flex items-center gap-2 font-body text-sm text-smoke/60",
              isLeft ? "justify-end" : "justify-start"
            )}>
              <FaCalendarAlt className="text-wine-light" size={12} />
              <span>{item.dates}</span>
            </div>

            {/* Decorative Brackets on Hover */}
            <div className="absolute -inset-[1px] rounded-card border border-wine-light/0 group-hover:border-wine-light/20 -z-10 transition-all duration-500" />
          </div>
        </motion.div>
        
        {/* Empty Half */}
        <div className="w-1/2" />
      </div>
    </div>
  );
};

export default Profile;
