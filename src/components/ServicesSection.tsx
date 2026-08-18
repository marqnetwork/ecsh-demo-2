import { motion } from "motion/react";
import { SERVICE_BUCKETS, Service } from "../constants";
import { ChevronRight, ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-deep-space relative overflow-hidden">
      {/* Organic background glow instead of grid */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[150px] -z-10" />
<div className="flex flex-col items-center text-center gap-6 mb-16">

  <div className="max-w-3xl">
    <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block">
      Our Ecosystem
    </span>
    <h2 className="text-4xl md:text-6xl font-display font-black leading-tight">
      Comprehensive Support Service Offerings
    </h2>
  </div>
  <p className="text-white/50 max-w-xl text-sm font-medium leading-relaxed">
    ECHS delivers specialized support services that help correctional healthcare 
    organizations enhance performance and management growth.
  </p>
</div>


      {/* <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">

        <div className="max-w-2xl">
          <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block">
            Our Ecosystem
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black leading-tight">
            Comprehensive <br />
            Support Service Offerings
          </h2>
        </div>
        <p className="text-white/50 max-w-sm text-sm font-medium leading-relaxed">
          ECHS delivers specialized support services that help correctional healthcare 
          organizations enhance performance and management growth.
        </p>
      </div> */}

      <div className="space-y-32">
        {SERVICE_BUCKETS.map((bucket, idx) => (
          <div key={bucket.id} className="relative">
            {/* Bucket Header */}
            <div className="flex flex-col md:flex-row items-start md:items-baseline gap-4 mb-10">
              <h3 className="text-2xl md:text-3xl font-display font-bold flex items-center gap-4">
                <span className="text-brand-primary opacity-50 font-mono text-lg">0{idx + 1}</span>
                {bucket.title}
              </h3>
              <div className="flex-grow h-px bg-white/10 hidden md:block" />
            </div>

            {/* Asymmetric Grid for Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bucket.services.map((service, sIdx) => (
                <ServiceCard key={service.id} service={service} index={sIdx} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import type { FC } from "react";

const ServiceCard: FC<{ service: Service, index: number }> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group p-8 rounded-2xl glass-panel relative overflow-hidden flex flex-col h-full min-h-[260px]"
    >
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-primary/20 transition-colors" />
      
      <div className="relative mb-6">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-primary/50 transition-colors">
          <ArrowUpRight className="w-6 h-6 text-white/40 group-hover:text-brand-primary transition-colors" />
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <h4 className="text-xl font-display font-bold mb-3 group-hover:text-brand-primary transition-colors leading-snug">
          {service.title}
        </h4>
        <p className="text-sm text-white/50 leading-relaxed font-medium line-clamp-3">
          {service.description}
        </p>

        {/* <div className="mt-auto space-y-2">
          <div className="text-[10px] uppercase tracking-widest font-black text-white/30 mb-2">Key Areas</div>
          <div className="flex flex-wrap gap-2">
            {service.keyAreas.slice(0, 3).map((area: string) => (
              <span key={area} className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[9px] font-bold text-white/60">
                {area}
              </span>
            ))}
          </div>
        </div> */}
      </div>

      {/* <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
         <ChevronRight className="w-5 h-5 text-brand-primary" />
      </div> */}
    </motion.div>
  );
}
