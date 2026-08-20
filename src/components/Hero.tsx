import { motion } from "motion/react";
import { ArrowRight, Activity, Database, Users } from "lucide-react";
import type { ReactNode } from "react";

export default function Hero() {
  return (
    <section className="relative pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-16 md:pb-24 px-6 md:px-12 overflow-hidden min-h-screen flex items-center">
      {/* Relatable Background Imagery */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=2670"
          className="w-full h-full object-cover opacity-30"
          alt="Institutional building"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-deep-space via-deep-space/40 to-transparent z-[1]" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/5 rounded-full blur-[150px] z-[1]" />
      
      {/* Subtle Identifier */}
      <div className="absolute top-36 right-12 hidden xl:block opacity-20 rotate-90 origin-right z-10">
        <span className="text-[10px] font-mono tracking-[0.5em] uppercase">Gov-Contract: ECHS-8812-SYS</span>
      </div>

      <div className="asymmetric-grid items-center gap-12 relative z-10">

        {/* Left Content - Spans 7 columns on large screens */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/5 text-brand-primary text-xs font-bold uppercase tracking-widest mb-5">
              STRATEGIC SUPPORT SYSTEMS
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black leading-[1.08] tracking-tight mb-6">
              Transforming Correctional <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-white">
                Healthcare
              </span>{" "}
              Through People, Process & Technology
            </h1>
            <p className="text-base md:text-lg text-white/60 max-w-xl font-medium leading-relaxed mb-6">
              Excelous Correctional Healthcare Service partners with correctional healthcare providers to deliver 
              <span className="text-white"> operational support, specialty services, laboratory Services and administrative infrastructure </span> 
              that strengthen care delivery across correctional environments.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl bg-white text-deep-space font-black flex items-center gap-2 group transition-all"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <div className="flex items-center gap-4 px-6 py-4 rounded-xl border border-white/10 glass-panel">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-deep-space bg-white/10 flex items-center justify-center">
                       <Users className="w-4 h-4 text-brand-primary" />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-bold text-white/80">Built for Industry Partners</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Visual - Spans 5 columns, offset and dynamic */}
        <div className="col-span-12 lg:col-span-5 relative order-1 lg:order-2 h-[400px] lg:h-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full aspect-square max-w-md mx-auto"
          >
            {/* Geometric Futuristic Element */}
            <div className="absolute inset-0 border-2 border-brand-primary/20 rounded-[2rem] rotate-6 animate-pulse" />
            <div className="absolute inset-4 border border-white/10 rounded-[1.5rem] -rotate-3" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4/5 h-4/5 rounded-2xl overflow-hidden glass-panel relative group bg-deep-space/40">
                {/* Real Background Image for the Core */}
                <img 
                  src="https://marqnetworks.co/wp-content/uploads/2026/05/ECHS-Pic-.png"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[2000ms] z-10"
                  alt="System support infrastructure"
                  referrerPolicy="no-referrer"
                />
                
                {/* Simulated Data Grid */}
                <div className="absolute inset-0 opacity-20 pointer-events-none z-20" style={{ backgroundImage: 'radial-gradient(circle, #1290CB 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
                
                <div className="relative z-30 h-full flex flex-col items-center justify-center text-center px-8">
                   <h3 className="text-2xl font-display font-bold mb-2 tracking-tighter">INFRASTRUCTURE CORE</h3>
                   <div className="w-full h-1 bg-brand-primary/30 rounded-full mb-4 overflow-hidden relative">
                      <motion.div 
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="w-1/2 h-full bg-brand-primary shadow-[0_0_15px_#1290CB]" 
                      />
                   </div>
                   <p className="text-[9px] text-white/40 leading-relaxed uppercase tracking-[0.3em] font-mono">System Integrity Index: Optimized</p>
                </div>
              </div>
            </div>

            {/* Overlapping small cards */}
            {/* <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="absolute -top-4 -right-4 p-4 rounded-xl glass-panel border-brand-primary/30"
            >
              {/* <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-primary animate-ping" />
                {/* <span className="text-[10px] font-bold tracking-widest uppercase">Live Oversight</span> */}
              {/* </div>  */}
            {/* </motion.div>  */}
            
            {/* <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
               className="absolute -bottom-6 -left-4 p-4 rounded-xl glass-panel border-brand-secondary/30"
            >
               <span className="text-[10px] font-bold tracking-widest uppercase text-brand-secondary">System Sync: OK</span>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, label, value }: { icon: ReactNode, label: string, value: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-4 rounded-xl glass-panel border-white/5 hover:border-brand-primary/30 transition-all"
    >
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">{label}</span>
      </div>
      <div className="text-xl font-display font-black">{value}</div>
    </motion.div>
  );
}
