import { motion } from "motion/react";
import { SERVICE_BUCKETS } from "../constants";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-28 md:pt-36 pb-24 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 md:mb-20">
          <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block">
            Comprehensive Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-display font-black leading-tight mb-6 md:mb-8">
            Our Support <br className="hidden lg:block"/> 
            Service Offerings.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl leading-relaxed">
            ECHS delivers specialized support services that help correctional healthcare 
            organizations enhance performance, manage growth, improve quality oversight, 
            and strengthen critical healthcare operations.
          </p>
        </header>

        <div className="space-y-24 md:space-y-40">
           {SERVICE_BUCKETS.map((bucket, idx) => (
             <section key={bucket.id} className="relative">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                   <div className="lg:w-1/3">
                      <div className="text-brand-primary opacity-20 font-mono text-4xl font-black mb-4">0{idx + 1}</div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black mb-4 md:mb-6 text-slate-900">{bucket.title}</h2>
                      <p className="text-slate-500 font-medium mb-8 md:mb-10 leading-relaxed">
                        Our {bucket.title.toLowerCase()} model combines direct capabilities, partner-enabled solutions, and structural administrative support.
                      </p>
                   </div>
                   
                   <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                      {bucket.services.map((service) => (
                        <div key={service.id} className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white border border-slate-200 hover:border-brand-primary/40 hover:shadow-xl transition-all flex flex-col items-start shadow-sm">
                           <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 md:mb-8 border border-slate-100 group-hover:border-brand-primary transition-colors">
                              <ArrowUpRight className="w-6 h-6 text-slate-300"/>
                           </div>
                           <h3 className="text-xl md:text-2xl font-display font-bold mb-3 md:mb-4 text-slate-900">{service.title}</h3>
                           <p className="text-slate-500 text-sm mb-6 md:mb-8 leading-relaxed font-semibold">
                              {service.description}
                           </p>
                           <div className="space-y-3 mt-auto w-full">
                              <div className="text-[10px] uppercase tracking-widest font-black text-slate-300">Key Support Areas</div>
                              {service.keyAreas.map((area) => (
                                <div key={area} className="flex items-center gap-2">
                                   <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                                   <span className="text-xs font-bold text-slate-600">{area}</span>
                                </div>
                              ))}
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </section>
           ))}
        </div>

        {/* Global CTA Section */}
        <section className="mt-20 md:mt-40 text-center py-12 px-6 sm:py-16 md:py-24 sm:px-12 bg-white rounded-3xl sm:rounded-[3rem] md:rounded-[4rem] border border-slate-200 relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-brand-primary/5 blur-[100px] -z-10" />
           <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-black mb-6 px-2 text-slate-900 leading-tight">
             Ready to Explore <br className="hidden md:block"/> Tailored Solutions?
           </h2>
           <Link to="/contact">
              <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="px-6 py-4 sm:px-10 sm:py-5 rounded-2xl bg-brand-primary text-white font-black uppercase tracking-widest text-xs sm:text-sm shadow-xl shadow-brand-primary/20 transition-all max-w-full"
              >
                 Schedule a Conversation
              </motion.button>
           </Link>
        </section>
      </div>
    </motion.div>
  );
}
