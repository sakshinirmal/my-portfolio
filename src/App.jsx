import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Education } from "./components/sections/Education";
import "./styles/cyberpunk.css";
import { motion, AnimatePresence } from "framer-motion";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`min-h-screen font-cyberpunk ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100 cyberpunk-grid`}
      >
        <div className="fixed inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 pointer-events-none" />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="relative z-20">
          <Home />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </div>
      </motion.div>
    </>
  );
}

export default App;
