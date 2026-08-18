import { motion } from "motion/react";
import { Shield, ChevronRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Why ECHS", path: "/why-echs" },
    { name: "Who We Support", path: "/who-we-serve" },
  ];

  const isLightTheme = ["/about", "/services", "/why-echs", "/who-we-serve", "/contact"].includes(location.pathname);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md transition-all duration-300 ${
        scrolled 
          ? (isLightTheme ? "bg-white/80 border-b border-slate-200 shadow-sm" : "bg-deep-space/80 border-b border-white/10") 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Link to="/" className="flex items-center gap-2 cursor-pointer group">
        <div className="flex flex-col">
          <img 
            src={isLightTheme 
              ? "https://marqnetworks.co/wp-content/uploads/2026/05/Color-Variation-01.png" 
              : "https://marqnetworks.co/wp-content/uploads/2026/05/Color-Variation-02.png"
            } 
             alt="ECHS Logo" className="w-50 object-contain p-0.5" />
        </div>
      </Link>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-4 xl:gap-8">
        <div className={`hidden xl:flex items-center gap-2 border-r pr-6 mr-2 uppercase ${isLightTheme ? "border-slate-200" : "border-white/10"}`}>
           <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
           <span className={`text-[10px] font-mono tracking-widest ${isLightTheme ? "text-slate-400" : "text-white/40"}`}>Infrastructure Partner</span>
        </div>
        {navLinks.map((item) => (
          <Link 
            key={item.name} 
            to={item.path}
            className={`text-sm font-medium transition-colors relative group ${
              location.pathname === item.path 
                ? "text-brand-primary" 
                : (isLightTheme ? "text-slate-600 hover:text-brand-primary" : "text-white/70 hover:text-brand-primary")
            }`}
          >
            {item.name}
            <span className={`absolute -bottom-1 left-0 h-px bg-brand-primary transition-all ${
              location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
            }`} />
          </Link>
        ))}
        
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-all ml-2 xl:ml-4 ${
              isLightTheme 
                ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20" 
                : "bg-brand-primary text-deep-space hover:shadow-[0_0_20px_rgba(18,144,203,0.4)]"
            }`}
          >
            Connect
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className={`lg:hidden p-2 ${isLightTheme ? "text-slate-900" : "text-white"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`absolute top-full left-0 right-0 border-b p-6 flex flex-col gap-6 lg:hidden z-50 text-center backdrop-blur-xl ${
            isLightTheme ? "bg-white/95 border-slate-200 shadow-xl" : "bg-deep-space/95 border-white/10"
          }`}
        >
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-bold ${isLightTheme ? "text-slate-900" : "text-white/80"}`}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`px-6 py-3 rounded-xl font-bold text-center ${
              isLightTheme ? "bg-brand-primary text-white" : "bg-brand-primary text-deep-space"
            }`}
          >
            Connect
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
