import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectsContent } from "../constants";
import { cn } from "../lib/utils";

interface Tag {
  name: string;
  color: string;
}

interface ProjectCardProps {
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
  live_demo_link: string;
  index: number;
}

const ProjectCard = ({ name, description, tags, image, source_code_link, live_demo_link, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="glass-card p-6 flex flex-col h-full group"
    >
      {/* ── Image Container ── */}
      <div className="relative w-full h-[240px] overflow-hidden rounded-xl mb-6">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay with Links */}
        <div className="absolute inset-0 bg-obsidian/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-wine/80 flex items-center justify-center text-smoke-bright hover:bg-wine transition-colors"
            title="Source Code"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={live_demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-gold-mist/80 flex items-center justify-center text-obsidian hover:bg-gold-mist transition-colors"
            title="Live Demo"
          >
            <FaExternalLinkAlt size={20} />
          </a>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex-1 space-y-4">
        <div>
          <h3 className="font-display text-2xl text-smoke-bright mb-2 group-hover:text-gold-mist transition-colors">
            {name}
          </h3>
          <p className="font-body text-sm text-smoke/70 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {tags.map((tag: Tag) => (
            <span 
              key={tag.name} 
              className={cn("font-mono text-[10px] tracking-widest uppercase", tag.color)}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="portfolio-section bg-obsidian relative overflow-hidden">
      {/* ── Background Decoration ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-wine/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="portfolio-container relative z-10">
        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gold-mist/40" />
            <p className="font-heading text-[10px] sm:text-xs uppercase tracking-[0.5em] text-gold-mist">
              04 — Curated Works
            </p>
            <div className="w-12 h-[1px] bg-gold-mist/40" />
          </div>
          
          <h2 className="font-display text-section text-smoke-bright mb-6">
            Projects.
          </h2>
          <p className="font-body text-smoke max-w-2xl mx-auto leading-relaxed">
            A selection of my most significant works in AI research and software engineering, demonstrating my commitment to technical excellence and user-centric design.
          </p>
        </div>

        {/* ── Project Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {projectsContent.map((project, index) => (
            <ProjectCard key={project.name} index={index} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
