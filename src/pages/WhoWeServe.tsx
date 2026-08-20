import { motion } from "motion/react";
import { CheckCircle2, Building2, UserCircle, Briefcase, Landmark, Users, Scale, Package } from "lucide-react";

export default function WhoWeServe() {
  const audiences = [
    { title: "Correctional Healthcare prime Contractors", icon: <Building2 />, desc: "Support for large-scale healthcare operators managing multi-facility contracts." },
    { title: "Correctional Healthcare Subcontractors", icon: <Users />, desc: "Support for large-scale healthcare operators managing multi-facility contracts." },
    { title: "County Jail Healthcare Operators", icon: <Landmark />, desc: "Dedicated solutions for local detention environments and medical directors." },
    { title: "Behavioral Health Contractors", icon: <UserCircle />, desc: "Workflow coordination for mental health and substance abuse treatment providers." },
    { title: "Healthcare Staffing Firms", icon: <Briefcase />, desc: "Administrative and coordination support for clinical workforce partners." },
    { title: "Public-sector and Justice-related Healthcare Programs", icon: <Scale />, desc: "State and local agencies focused on reentry, care continuity, and program oversight." },
    { title: "Healthcare Vendors Serving Detention Environments ", icon: <Package />, desc: "Partnerships for lab, pharmacy, and diagnostic services in correctional settings." }
  ];

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
            Strategic Audience
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-black leading-tight mb-8 text-slate-900">
            Who We <br className="hidden lg:block"/> 
            Support.
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl leading-relaxed">
            ECHS is built to support organizations operating in or adjacent to correctional healthcare. Our services are especially relevant to correctional healthcare providers that need stronger operational support, specialty partnerships, reporting discipline, and administrative infrastructure behind care delivery. 
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
           {audiences.map((audience, i) => (
             <div key={i} className={`group p-10 rounded-[2rem] bg-white border border-slate-200 hover:border-brand-primary/30 transition-all shadow-sm ${i === audiences.length - 1 ? 'lg:col-start-2' : ''}`}>
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-brand-primary group-hover:bg-brand-primary/10 transition-colors mb-8 border border-slate-100">
                   {audience.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-4 text-slate-900">{audience.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-semibold">
                   {audience.desc}
                </p>
             </div>
           ))}
        </section>

        <section className="relative py-24 px-6 rounded-[3rem] overflow-hidden bg-slate-900 text-white shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-transparent -z-10" />
           
           <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-display font-black mb-8 px-6 leading-tight">
                Strengthening Performance Across the Correctional Ecosystem.
              </h2>
              <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                Whether you are a prime contractor or a specialized vendor, ECHS provides the administrative and operational tools needed to succeed in complex environments.
              </p>
              <div className="flex flex-wrap lg:flex-nowrap justify-center gap-2 lg:gap-3 px-4">
                 {[
                   "Operational Support Services",
                   "Quality, Compliance & Oversight",
                   "Clinical Support & Care Continuity",
                   "Specialized Service Solutions"
                 ].map((tag) => (
                   <span key={tag} className="px-3 lg:px-4 py-2 rounded-full border border-white/10 text-[8px] lg:text-[9px] font-black uppercase tracking-wide lg:tracking-wider text-white/40 whitespace-nowrap">
                      {tag}
                   </span>
                 ))}
              </div>
           </div>
        </section>
      </div>
    </motion.div>
  );
}
