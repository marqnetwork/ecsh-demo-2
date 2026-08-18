import { motion } from "motion/react";
import { ShieldCheck, Zap, BarChart3, Users, Target, Layout } from "lucide-react";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block">
            Our Identity
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-black leading-tight mb-8">
            A Specialized Support <br className="hidden lg:block"/> 
            Partner to Correctional <br className="hidden lg:block"/>
            Healthcare.
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl leading-relaxed">
            Excelous Correctional Health Services was established to provide specialized support services 
            to correctional healthcare providers and institutional healthcare partners serving detention 
            and correctional environments.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
           <div className="space-y-8">
              <h2 className="text-3xl font-display font-bold text-slate-900">Our Model is Intentionally Different</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Rather than positioning ourselves as a full correctional healthcare prime contractor, 
                  ECHS serves as a <span className="text-brand-primary font-bold">support-services platform</span> that partners with existing healthcare 
                  operators, government contractors, and institutional healthcare stakeholders.
                </p>
                <p>
                  We bring an operational mindset to correctional healthcare support. We understand 
                  the importance of compliance, documentation, client responsiveness, program oversight, 
                  vendor coordination, and performance visibility in highly regulated environments.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                 <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <ShieldCheck className="w-8 h-8 text-brand-primary mb-4" />
                    <h4 className="font-bold mb-2 text-slate-900">Compliance Focused</h4>
                    <p className="text-sm text-slate-500">Rigorous adherence to standards and documentation rules.</p>
                 </div>
                 <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <BarChart3 className="w-8 h-8 text-brand-secondary mb-4" />
                    <h4 className="font-bold mb-2 text-slate-900">Performance Visibility</h4>
                    <p className="text-sm text-slate-500">Real-time tracking of operational metrics and service levels.</p>
                 </div>
              </div>
           </div>

           <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden bg-white border border-slate-200 shadow-2xl p-2">
                 <img 
                    src="https://marqnetworks.co/wp-content/uploads/2026/05/about.png"
                    className="w-full h-full object-cover rounded-[2.5rem] opacity-90"
                    alt="Modern healthcare facility"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
              </div>
              
           </div>
        </section>

        <section className="py-24 border-y border-slate-200 bg-white -mx-6 md:-mx-12 px-6 md:px-12">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-display font-black mb-6 text-slate-900">Our Core Focus</h2>
                 <p className="text-slate-500 max-w-2xl mx-auto">
                    ECHS helps correctional healthcare providers strengthen the infrastructure behind care delivery through four core focus areas.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                   { icon: <Users />, title: "Operational Support Services", desc: "Improving the administrative systems, workflows, and operational resources that support efficient healthcare delivery." },
                   { icon: <Target />, title: "Quality, Compliance & Oversight", desc: "Strengthening quality assurance, regulatory compliance, performance monitoring, and organizational accountability." },
                   { icon: <Layout />, title: "Clinical Support & Care Continuity", desc: "Supporting coordinated clinical services, timely access to care, and continuity across facilities and care transitions." },
                   { icon: <Zap />, title: "Specialized Service Solutions", desc: "Delivering customized specialty, diagnostic, and laboratory solutions designed for the unique needs of correctional healthcare environments." },
                 ].map((item, i) => (
                   <div key={i} className="p-10 rounded-3xl bg-slate-50 border border-slate-200 hover:border-brand-primary/30 hover:bg-white transition-all group shadow-sm">
                      <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                         {item.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        <section className="mt-32 text-center py-24 rounded-[3rem] bg-brand-primary text-white relative overflow-hidden shadow-2xl shadow-brand-primary/20">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px] -z-10" />
           <h2 className="text-4xl md:text-5xl font-display font-black mb-8 px-6">
              ECHS helps correctional healthcare providers <br className="hidden lg:block" /> 
              strengthen the infrastructure behind care delivery.
           </h2>
           <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
               className="px-10 py-5 rounded-2xl bg-white text-brand-primary font-black uppercase tracking-widest text-sm shadow-xl transition-all"
            >
               Partner With ECHS
            </motion.button>
        </section>
      </div>
    </motion.div>
  );
}
