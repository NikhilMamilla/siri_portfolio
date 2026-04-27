import { motion } from "framer-motion";
import { skillsContent } from "../constants";
import { Cpu, Globe, Database, Terminal } from "lucide-react";
import {
  SiPython, SiJavascript, SiC, SiCplusplus, SiPostgresql,
  SiTensorflow, SiOpencv, SiNumpy, SiPandas, SiScikitlearn,
  SiExpress, SiMongodb, SiTailwindcss, SiFirebase, SiVercel,
  SiPostman
} from "react-icons/si";
import {
  FaJava, FaReact, FaNodeJs, FaHtml5,
  FaGitAlt, FaGithub, FaDocker
} from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

// ── Icon Mapper ──
const skillIcons: Record<string, React.ReactNode> = {
  "Python": <SiPython />,
  "Java": <FaJava />,
  "JavaScript": <SiJavascript />,
  "C": <SiC />,
  "SQL": <SiPostgresql />,
  "C++": <SiCplusplus />,
  "TensorFlow": <SiTensorflow />,
  "OpenCV": <SiOpencv />,
  "NumPy": <SiNumpy />,
  "Pandas": <SiPandas />,
  "Matplotlib": <Database />, // fallback
  "NLP": <Cpu />,
  "Scikit-Learn": <SiScikitlearn />,
  "React.js": <FaReact />,
  "Node.js": <FaNodeJs />,
  "Express.js": <SiExpress />,
  "MongoDB": <SiMongodb />,
  "Tailwind CSS": <SiTailwindcss />,
  "HTML5/CSS3": <FaHtml5 />,
  "Git": <FaGitAlt />,
  "GitHub": <FaGithub />,
  "Docker": <FaDocker />,
  "Firebase": <SiFirebase />,
  "Vercel": <SiVercel />,
  "VS Code": <VscCode />,
  "Postman": <SiPostman />,
};

const categoryIcons = {
  "Languages": <Terminal size={32} />,
  "AI & Data Science": <Cpu size={32} />,
  "Web Technologies": <Globe size={32} />,
  "Tools & Platforms": <Database size={32} />,
};

const Skills = () => {
  return (
    <section id="skills" className="relative bg-obsidian pt-8">
      <div className="portfolio-container px-8 md:px-20">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-32">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gold-mist/40" />
            <p className="font-heading text-[10px] sm:text-xs uppercase tracking-[0.5em] text-gold-mist">
              03 — Technical Arsenal
            </p>
            <div className="w-12 h-[1px] bg-gold-mist/40" />
          </div>

          <h2 className="font-display text-section text-smoke-bright">
            Skills.
          </h2>
        </div>

        {/* ── Stacking Cards Container ── */}
        <div className="relative">
          {skillsContent.map((category, idx) => (
            <SkillCard
              key={category.category}
              category={category}
              index={idx}
            />
          ))}
          {/* Spacer to allow the last card to scroll up fully */}
          <div className="h-[40vh]" />
        </div>
      </div>
    </section>
  );
};

interface SkillCategory {
  category: string;
  skills: string[];
}

const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  // Use sticky positioning to create the stacking effect
  // Reduced offsets to bring the cards higher up on the screen
  const topOffset = 80 + index * 25;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        top: `${topOffset}px`,
      }}
      className="sticky w-full mb-[15vh] last:mb-0"
    >
      <div className="glass-card min-h-[450px] p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center bg-obsidian/95 backdrop-blur-3xl border-wine-muted/30 shadow-[0_-20px_50px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden group">

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-wine/5 via-transparent to-gold-mist/[0.02] -z-10" />

        {/* Left Side: Category Info */}
        <div className="flex-1 space-y-8 text-center lg:text-left w-full">
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-wine-deep/40 flex items-center justify-center text-wine-light shadow-[inset_0_0_20px_rgba(138,58,90,0.2)] group-hover:text-gold-mist transition-colors duration-500">
              {categoryIcons[category.category as keyof typeof categoryIcons]}
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-wine-light mb-2">
                Expertise Layer 0{index + 1}
              </p>
              <h3 className="font-display text-4xl md:text-6xl text-smoke-bright italic leading-tight">
                {category.category}
              </h3>
            </div>
          </div>

          <div className="w-20 h-[1px] bg-wine-light/50 mx-auto lg:mx-0" />

          <p className="font-body text-smoke/70 max-w-md leading-relaxed text-lg mx-auto lg:mx-0">
            Advanced proficiency in {category.category.toLowerCase()}, leveraging industry-standard frameworks and tools to engineer high-impact technical solutions.
          </p>
        </div>

        {/* Right Side: Logos Grid */}
        <div className="flex-[1.2] w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {category.skills.map((skill: string) => (
              <motion.div
                key={skill}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group/skill relative p-6 rounded-2xl border border-wine-muted/20 bg-wine-deep/5 flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:bg-wine-deep/20 hover:border-wine-light/30 shadow-sm"
              >
                <div className="text-3xl md:text-4xl text-smoke/40 group-hover/skill:text-gold-mist transition-all duration-500 group-hover/skill:scale-110 group-hover/skill:drop-shadow-[0_0_10px_rgba(201,169,110,0.3)]">
                  {skillIcons[skill] || <Terminal />}
                </div>
                <span className="font-heading text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-smoke/60 group-hover/skill:text-smoke-bright transition-colors text-center">
                  {skill}
                </span>

                {/* Subtle Hover Decoration */}
                <div className="absolute inset-0 border border-wine-light/0 group-hover/skill:border-wine-light/20 rounded-2xl -z-10" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Massive Decorative Number */}
        <div className="absolute -bottom-10 -right-4 font-display text-[15rem] text-white/[0.02] italic pointer-events-none select-none font-bold">
          0{index + 1}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
