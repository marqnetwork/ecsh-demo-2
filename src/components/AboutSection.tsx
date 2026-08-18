import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Zap, BarChart3 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[100px] -translate-x-1/2 z-[1]" />
      
      <div className="asymmetric-grid gap-16 items-center relative z-10">
        {/* Visual Element - Spans 5 columns */}
        <div className="col-span-12 lg:col-span-5 relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden group border border-white/5 shadow-2xl">
            {/* Background Image - Public Sector Infrastructure feel */}
            <div className="absolute inset-0 bg-deep-space" />
            <img 
               src="https://marqnetworks.co/wp-content/uploads/2026/05/ECHS-Pic-1.png"
               className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 z-10" 
               alt="Strategic support infrastructure"
               referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-deep-space/10 to-transparent z-20" />
            
            <div className="absolute inset-0 flex items-center justify-center p-12 z-30">

              <div className="space-y-6">
                <FeatureMiniCard 
                  icon={<ShieldCheck className="w-5 h-5 text-brand-primary" />}
                  title="Operational Discipline"
                  desc="Structured oversight for complex environments."
                />
                <FeatureMiniCard 
                  icon={<Zap className="w-5 h-5 text-brand-secondary" />}
                  title="Rapid Scaling"
                  desc="Administrative infrastructure that grows with you."
                  delay={0.2}
                />
                <FeatureMiniCard 
                  icon={<BarChart3 className="w-5 h-5 text-white" />}
                  title="Tech-Enabled"
                  desc="Real-time visibility into performance data."
                  delay={0.4}
                />
              </div>
            </div>

            {/* Floating glass elements */}
            <div className="absolute top-10 right-10 w-24 h-24 border border-white/20 rounded-full animate-spin-slow" />
          </div>
        </div>

        {/* Content Element - Spans 7 columns */}
        <div className="col-span-12 lg:col-span-7 space-y-10 order-1 lg:order-2">
          <div>
            <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block">
              Strategic Support Partner
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black leading-none mb-8">
              Infrastructure <br />
              Behind the Care.    
            </h2>
            <div className="space-y-6 text-white/60 font-medium text-lg leading-relaxed max-w-2xl">
              <p>
                Excelous Correctional Health Services was established to provide 
                <span className="text-white"> specialized support services </span> 
                to correctional healthcare providers and institutional partners.
              </p>
              <p>
                Our model is intentionally different. Rather than positioning ourselves as a full prime contractor, 
                ECHS serves as a <span className="text-brand-primary">support-services platform</span> that addresses operational 
                gaps and strengthens overall contract performance.
              </p>
            </div>
          </div>

          <div id="why-echs" className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-white/10">
            {[
              "Healthcare program management experience",
              "Technology-enabled reporting tools",
              "Partner-based service expansion",
              "Correctional healthcare market understanding"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <span className="text-sm font-bold text-white/80">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div id="who-we-serve" className="mt-40 text-center max-w-4xl mx-auto">
         <h3 className="text-3xl md:text-5xl font-display font-black mb-12">Who We Support</h3>
         <div className="flex flex-wrap justify-center gap-4">
            {[
              "Correctional Prime Contractors",
              "County Jail Operators",
              "Behavioral Health Contractors",
              "Healthcare Staffing Firms",
              "Public-sector Programs"
            ].map((target) => (
              <span key={target} className="px-6 py-3 rounded-2xl glass-panel border-white/5 hover:border-brand-primary/50 transition-colors text-sm font-bold tracking-tight">
                {target}
              </span>
            ))}
         </div>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";

function FeatureMiniCard({ icon, title, desc, delay = 0 }: { icon: ReactNode, title: string, desc: string, delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-4 rounded-xl glass-panel border-white/10 shadow-2xl relative z-10 w-full max-w-[280px]"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
          {icon}
        </div>
        <h4 className="text-sm font-display font-bold">{title}</h4>
      </div>
      <p className="text-[11px] text-white/40 leading-relaxed font-semibold">{desc}</p>
    </motion.div>
  );
}
