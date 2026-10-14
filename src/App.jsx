import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Journey from "./components/Journey.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <div className="window">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Journey />
        <Skills />
      </main>
      <Contact />
    </div>
  );
}
