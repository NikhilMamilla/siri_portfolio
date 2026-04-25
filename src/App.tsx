import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  // Initialize Lenis Smooth Scrolling
  useSmoothScroll();

  return (
    <main className="bg-obsidian min-h-screen selection:bg-wine/40 selection:text-smoke-bright">
      
      {/* ── Global Navigation ── */}
      <Navbar />

      {/* ── Hero Section (Phase 1) ── */}
      <Hero />

      {/* ── About Section (Phase 2) ── */}
      <About />

      {/* ── Profile Section (Phase 3) ── */}
      <Profile />

      {/* ── Skills Section (Phase 4) ── */}
      <Skills />

      {/* ── Projects Section (Phase 5) ── */}
      <Projects />

      {/* ── Contact Section (Phase 6) ── */}
      <Contact />

      {/* ── Global Footer ── */}
      <Footer />

    </main>
  );
}

export default App;