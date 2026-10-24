import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Journey from "./components/Journey.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import { LanguageProvider } from "./contexts/LanguageContext";
function App() {
  return (
    <LanguageProvider>
      <div className="window">
        <Header />

        <main>
          <Hero />
          <Journey />
          <Projects />
          <Skills />
          <Contact />
          
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;