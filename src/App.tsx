import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WhyECHS from "./pages/WhyECHS";
import WhoWeServe from "./pages/WhoWeServe";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function AppContent() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const isLightTheme = ["/about", "/services", "/why-echs", "/who-we-serve", "/contact"].includes(location.pathname);

  return (
    <div className={`min-h-screen transition-colors duration-500 w-full ${
      isLightTheme 
        ? "bg-slate-50 text-slate-900 selection:bg-brand-primary selection:text-white" 
        : "bg-deep-space text-white selection:bg-brand-primary selection:text-deep-space"
    }`}>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />
      <ScrollToTop />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/why-echs" element={<WhyECHS />} />
              <Route path="/who-we-serve" element={<WhoWeServe />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Decorative Orbs - Persistent across pages for atmosphere */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50 overflow-hidden">
        <div className={`absolute top-[10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] animate-pulse transition-opacity duration-500 ${isLightTheme ? 'bg-brand-primary/5 opacity-50' : 'bg-brand-primary/10'}`} />
        <div className={`absolute bottom-[20%] right-[-5%] w-[800px] h-[800px] rounded-full blur-[150px] animation-delay-2000 animate-pulse transition-opacity duration-500 ${isLightTheme ? 'bg-brand-secondary/5 opacity-30' : 'bg-brand-secondary/5'}`} />
        <div className={`absolute top-[40%] right-[10%] w-[400px] h-[400px] rounded-full blur-[100px] animate-pulse duration-[8s] transition-opacity duration-500 ${isLightTheme ? 'bg-brand-primary/5 opacity-20' : 'bg-brand-primary/5'}`} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

