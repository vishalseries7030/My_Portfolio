import Navbar from '../components/Navbar';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop from '../components/BackToTop';
import ThemeToggle from '../components/ThemeToggle';
import ParticleBackground from '../components/ParticleBackground';
import CustomCursor from '../components/CustomCursor';
import Hero from "../components/Hero"
import About from "../components/About"
import SkillsProgress from "../components/SkillsProgress"
import Projects from "../components/Projects"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="relative cursor-none">
      <CustomCursor />
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />
      <ThemeToggle />
      <BackToTop />
      
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="skills">
        <SkillsProgress />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="contact">
        <ContactForm />
      </section>
      
      <Footer />
    </div>
  );
}
