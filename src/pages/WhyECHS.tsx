import { motion } from "motion/react";
import { CheckCircle2, TrendingUp, Shield, BarChart2, Briefcase, Zap } from "lucide-react";

export default function WhyECHS() {
  const advantages = [
    { icon: <Shield />, title: "Operational Discipline", desc: "Rigorous attention to documentation and procedural compliance." },
    { icon: <Briefcase />, title: "Program Management", desc: "Deep experience in coordinating complex healthcare contracts." },
    { icon: <TrendingUp />, title: "Market Understanding", desc: "Specialized knowledge of the correctional healthcare ecosystem." },
    { icon: <Zap />, title: "Administrative Support", desc: "Capability to scale administrative functions as your needs grow." },
    { icon: <BarChart2 />, title: "Reporting Tools", desc: "Technology-enabled visibility into performance and compliance." },
    { icon: <Zap />, title: "Partner-Based Expansion", desc: "Access to a growing platform of specialized service solutions." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block">
            The ECHS Advantage
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-black leading-tight mb-8 text-slate-900">
            Why Correctional Healthcare Providers Partner With ECHS.
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl leading-relaxed">
           Correctional healthcare organizations operate in demanding, highly accountable environments where administrative complexity, reporting obligations, staffing pressure, quality oversight, and cross-functional coordination all affect contract performance. ECHS helps providers strengthen the infrastructure behind
           service delivery.<br/>
           <br/>We bring a practical support-services model designed to help clients increase operational visibility, improve coordination across service lines, strengthen reporting and quality oversight, streamline administrative functions, support staffing-related workflows, add specialized partner-enabled capabilities, and improve continuity and responsiveness across correctional healthcare environments.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
           {advantages.map((adv, i) => (
             <div key={i} className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:border-brand-primary/30 hover:shadow-xl transition-all shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-8 border border-brand-primary/20">
                   {adv.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-slate-900">{adv.title}</h3>
                <p className="text-slate-500 leading-relaxed font-semibold text-sm">
                   {adv.desc}
                </p>
             </div>
           ))}
        </section>

        <section className="py-16 md:py-20 px-8 md:px-12 rounded-[3.5rem] bg-brand-primary relative overflow-hidden text-white shadow-2xl shadow-brand-primary/30">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                 <h2 className="text-4xl md:text-6xl font-display font-black leading-[1.2] tracking-tight mb-8 drop-shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
                  Helping Providers Perform Better and Scale Smarter.
                 </h2>
                 <p className="text-lg font-bold opacity-90 mb-10 max-w-xl">
                    ECHS helps correctional healthcare providers perform better, scale smarter, and strengthen the infrastructure behind care delivery.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {[
                      "Operational Discipline",
                      "Administrative Support Capability",
                      "Healthcare Program Management Experience",
                      "Technology-Enabled Reporting Tools ",
                      "Partner-based Service Expansion",
                      "Correctional Healthcare Market Understanding"
                    ].map((item) => (
                      <div key={item} className="flex font-black uppercase tracking-tighter items-start gap-3 text-[10px]">
                         <div className="w-2 h-2 rounded-full bg-white flex-shrink-0 mt-[0.15rem]" />
                         <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-2 bg-white/10 border border-white/20 rounded-[2.5rem] backdrop-blur-sm overflow-hidden">
                 <img 
                    src="/WhyECSBannerpagepic.png "
                    className="w-full h-full object-cover rounded-[2rem] opacity-90"
                    alt="Corporate meeting"
                 />
              </div>
           </div>
        </section>
      </div>
    </motion.div>
  );
}
