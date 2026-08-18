import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      {/* Partnership Banner */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
         <div className="flex overflow-hidden group">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="flex whitespace-nowrap gap-12 text-[10px] uppercase font-black tracking-[0.5em] text-white/20 items-center py-4"
            >
              {[...Array(6)].map((_, i) => (
                <span key={i} className="flex items-center gap-12">
                  Operational Infrastructure 
                  <div className="w-2 h-2 rounded-full bg-brand-primary/30" />
                  Strategic Support Partner
                  <div className="w-2 h-2 rounded-full bg-brand-primary/30" />
                  Corrective Health Evolution
                  <div className="w-2 h-2 rounded-full bg-brand-primary/30" />
                </span>
              ))}
            </motion.div>
         </div>
      </section>

      <AboutSection />
      
      <ServicesSection />

      {/* Global CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
         <img 
           src="https://marqnetworks.co/wp-content/uploads/2026/05/team.jpg"
           className="section-bg-image opacity-30"
           alt="Team meeting"
           referrerPolicy="no-referrer"
         />
         <div className="absolute inset-0 bg-deep-space/60 backdrop-blur-[2px] z-[1]" />
         <div className="absolute inset-0 bg-brand-primary/5 blur-[120px] z-[1]" />
         <div className="relative w-full max-w-5xl mx-auto glass-panel p-6 sm:p-12 md:p-24 rounded-2xl sm:rounded-[3rem] text-center border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] z-10">

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-display font-black mb-6 sm:mb-8 break-words px-2">
              Ready to Strengthen <br className="hidden sm:block" /> Your Care Infrastructure?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/60 mb-8 sm:mb-12 max-w-xl mx-auto font-medium leading-relaxed break-words px-2">
              Connect with Excelous Correctional Healthcare Service to explore partnership opportunities and 
              tailored support solutions for correctional healthcare operations.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 px-2">
               <Link to="/contact" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-brand-primary text-deep-space font-black uppercase tracking-widest text-xs sm:text-sm shadow-[0_0_30px_rgba(18,144,203,0.3)] hover:shadow-[0_0_50px_rgba(18,144,203,0.5)] transition-all whitespace-nowrap"
                  >
                     PARTNER WITH ECHS
                  </motion.button>
               </Link>
               {/* <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 rounded-2xl border border-white/10 backdrop-blur-sm font-black uppercase tracking-widest text-sm transition-all text-white"
                  >
                     Discuss a Partnership
                  </motion.button>
               </Link> */}
            </div>
         </div>
      </section>
    </motion.div>
  );
}
