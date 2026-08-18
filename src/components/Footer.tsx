import { motion } from "motion/react";
import { Shield, Mail, Phone, MapPin, Send, Twitter, Linkedin, Facebook } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="pt-16 sm:pt-24 pb-8 sm:pb-12 bg-deep-space border-t border-white/5 relative max-w-full box-border w-full overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-primary/10 to-transparent -z-10" />
      
      {/* Floating gradient orbs for depth */}
      <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-brand-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-20 sm:bottom-40 right-10 sm:right-20 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-brand-primary/5 rounded-full blur-[150px] -z-10" />
      
      {/* Explicit padding wrapper */}
      <div className="px-4 sm:px-6 md:px-12 w-full">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 mb-16 sm:mb-24 w-full">

          {/* Brand Column - Enhanced with glass effect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-5 w-full flex flex-col min-w-0"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl lg:rounded-3xl p-6 sm:p-8 w-full max-w-full box-border overflow-hidden min-w-0">
              <Link to="/" className="flex items-center gap-3 group mb-4 sm:mb-6">
                <div className="flex flex-col w-full max-w-full min-w-0">
                  <img 
                    src="https://marqnetworks.co/wp-content/uploads/2026/05/Color-Variation-02.png"
                    alt="ECHS Logo" 
                    className="w-32 sm:w-40 md:w-48 lg:w-52 h-auto max-w-full object-contain p-0.5 group-hover:scale-105 transition-transform" 
                  />
                </div>
              </Link>
              <p className="text-sm sm:text-base text-white/40 leading-relaxed font-medium whitespace-normal break-words overflow-wrap-anywhere w-full">
                A strategic support-services partner built to help correctional healthcare organizations 
                expand capacity and strengthen core infrastructure.
              </p>
            </div>
            
            {/* <div className="flex items-center gap-4">
              <SocialLink icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink icon={<Twitter className="w-5 h-5" />} />
              <SocialLink icon={<Facebook className="w-5 h-5" />} />
            </div> */}
          </motion.div>

          {/* Links Grid - Enhanced with animations */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1 md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start w-full min-w-0"
          >
            <div className="w-full min-w-0">
              <h4 className="text-xs sm:text-sm uppercase tracking-widest font-black text-white/80 mb-5 sm:mb-6 flex items-center gap-2">
                <div className="w-6 sm:w-8 h-0.5 bg-brand-primary flex-shrink-0"></div>
                <span className="whitespace-nowrap">Navigation</span>
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                <FooterLink label="Services" to="/services" />
                <FooterLink label="About ECHS" to="/about" />
                <FooterLink label="Why ECHS" to="/why-echs" />
                <FooterLink label="Who We Support" to="/who-we-serve" />
              </ul>
            </div>
            
            {/* <div>
              <h4 className="text-xs uppercase tracking-widest font-black text-white/80 mb-6">Support Services</h4>
              <ul className="space-y-4">
                <FooterLink label="Operational Support" to="/services" />
                <FooterLink label="Quality & Metrics" to="/services" />
                <FooterLink label="Clinical Continuity" to="/services" />
                <FooterLink label="Specialized Solutions" to="/services" />
              </ul>
            </div> */}
            
            <div className="col-span-1 w-full min-w-0">
              <h4 className="text-xs sm:text-sm uppercase tracking-widest font-black text-white/80 mb-5 sm:mb-6 flex items-center gap-2">
                <div className="w-6 sm:w-8 h-0.5 bg-brand-primary flex-shrink-0"></div>
                <span className="whitespace-nowrap">Contact</span>
              </h4>
              <div className="space-y-3 sm:space-y-4 w-full min-w-0">
                <ContactItem icon={<Mail className="w-5 h-5 text-brand-primary flex-shrink-0" />} text="partnerships@echs.systems" />
                {/* <ContactItem icon={<Phone className="w-4 h-4 text-brand-primary" />} text="123 123 1234" />
                <ContactItem icon={<MapPin className="w-4 h-4 text-brand-primary" />} text="Excelous Correctional Health Services, The Battery, 800 Battery Avenue SE Suite 300, Atlanta, Georgia 30339." /> */}
              </div>
            </div>
          </motion.div>
        </div>
        </div>

        {/* Newsletter Section - New Addition
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-24 relative"
        >
          <div className="bg-gradient-to-r from-brand-primary/10 to-brand-primary/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-display font-black mb-4">Stay Updated</h3>
              <p className="text-white/60 mb-6 font-medium text-sm">
                Subscribe to receive updates on healthcare support solutions and industry insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-primary/50 transition-all backdrop-blur-sm font-medium"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl bg-brand-primary text-deep-space font-black uppercase tracking-widest text-xs shadow-[0_0_30px_rgba(18,144,203,0.3)] hover:shadow-[0_0_50px_rgba(18,144,203,0.5)] transition-all flex items-center gap-2 justify-center"
                >
                  Subscribe
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* Bottom Copyright Bar - Enhanced */}
        <div className="pt-8 sm:pt-12 border-t border-white/5 w-full">
          <div className="bg-white/[0.02] backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 w-full overflow-hidden">
            <div className="text-[9px] sm:text-[10px] uppercase font-black tracking-wider sm:tracking-widest text-white/30 text-center md:text-left break-words w-full md:w-auto px-2">
              © {new Date().getFullYear()} Excelous Correctional Health Services. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-8 text-[9px] sm:text-[10px] uppercase font-black tracking-wider sm:tracking-widest text-white/30 w-full md:w-auto">
              <Link to="/" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
              {/* <Link to="/" className="hover:text-brand-primary transition-colors">Terms of Service</Link>
              <Link to="/" className="hover:text-brand-primary transition-colors">Compliance</Link> */}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative large background text */}
      <div className="absolute bottom-0 right-0 translate-y-1/2 pointer-events-none -z-10 overflow-hidden">
         <span className="text-[20vw] font-display font-black text-white/[0.02] select-none leading-none">
            EXCELOUS
         </span>
      </div>
    </footer>
  );
}

function SocialLink({ icon }: { icon: ReactNode }) {
  return (
    <motion.a 
      href="#" 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-brand-primary/50 hover:bg-brand-primary/5 transition-all text-white/60 hover:text-brand-primary"
    >
      {icon}
    </motion.a>
  );
}

function FooterLink({ label, to }: { label: string, to: string }) {
  return (
    <li className="w-full min-w-0">
      <Link to={to} className="text-sm sm:text-base font-bold text-white/40 hover:text-brand-primary transition-all flex items-center gap-2 group hover:translate-x-1 break-words">
        <div className="w-1 h-1 rounded-full bg-brand-primary transform scale-0 group-hover:scale-100 group-hover:w-3 group-hover:h-1 transition-all flex-shrink-0" />
        <span className="break-words">{label}</span>
      </Link>
    </li>
  );
}

function ContactItem({ icon, text }: { icon: ReactNode, text: string }) {
  return (
    <div className="flex items-start gap-3 w-full min-w-0">
      <div className="flex-shrink-0 mt-0.5">
        {icon}
      </div>
      <a href={`mailto:${text}`} className="text-xs sm:text-sm md:text-base font-bold text-white/60 hover:text-brand-primary transition-colors break-all overflow-wrap-anywhere min-w-0">{text}</a>
    </div>
  );
}







// import { motion } from "motion/react";
// import { Shield, Mail, Phone, MapPin, Send, Twitter, Linkedin, Facebook } from "lucide-react";
// import type { ReactNode } from "react";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="pt-24 pb-12 px-6 md:px-12 bg-deep-space border-t border-white/5 overflow-hidden relative">
//       <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-primary/10 to-transparent -z-10" />
//       <div className="asymmetric-grid gap-12 mb-24">

//         {/* Brand Column */}
//         <div className="col-span-12 lg:col-span-4 space-y-8">
//           <Link to="/" className="flex items-center gap-3 group">
//             <div className="flex flex-col">
//               <img 
//               src="https://marqnetworks.co/wp-content/uploads/2026/05/Color-Variation-02.png"
//                alt="ECHS Logo" className="w-50 object-contain p-0.5" />
//             </div>
//           </Link>
//           <p className="text-sm text-white/40 leading-relaxed max-w-xs font-medium">
//             A strategic support-services partner built to help correctional healthcare organizations 
//             expand capacity and strengthen core infrastructure.
//           </p>
//           {/* <div className="flex items-center gap-4">
//             <SocialLink icon={<Linkedin className="w-5 h-5" />} />
//             <SocialLink icon={<Twitter className="w-5 h-5" />} />
//             <SocialLink icon={<Facebook className="w-5 h-5" />} />
//           </div> */}
//         </div>

//         {/* Links Grid */}
//         <div className="col-span-12 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
//           <div>
//             <h4 className="text-xs uppercase tracking-widest font-black text-white/80 mb-6">Navigation</h4>
//             <ul className="space-y-4">
//               <FooterLink label="Services" to="/services" />
//               <FooterLink label="About ECHS" to="/about" />
//               <FooterLink label="Why ECHS" to="/why-echs" />
//               <FooterLink label="Who We Support" to="/who-we-serve" />
//             </ul>
//           </div>
//           {/* <div>
//             <h4 className="text-xs uppercase tracking-widest font-black text-white/80 mb-6">Support Services</h4>
//             <ul className="space-y-4">
//               <FooterLink label="Operational Support" to="/services" />
//               <FooterLink label="Quality & Metrics" to="/services" />
//               <FooterLink label="Clinical Continuity" to="/services" />
//               <FooterLink label="Specialized Solutions" to="/services" />
//             </ul>
//           </div> */}
//           <div className="col-span-2 md:col-span-1">
//             <h4 className="text-xs uppercase tracking-widest font-black text-white/80 mb-6">Contact</h4>
//             <div className="space-y-4">
//               <ContactItem icon={<Mail className="w-4 h-4 text-brand-primary" />} text="partnerships@echs.systems" />
//               {/* <ContactItem icon={<Phone className="w-4 h-4 text-brand-primary" />} text="123 123 1234" />
//               <ContactItem icon={<MapPin className="w-4 h-4 text-brand-primary" />} text="Excelous Correctional Health Services, The Battery, 800 Battery Avenue SE Suite 300, Atlanta, Georgia 30339." /> */}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
//         <div className="text-[10px] uppercase font-black tracking-widest text-white/30">
//           © {new Date().getFullYear()} Excelous Correctional Health Services. All rights reserved.
//         </div>
//         <div className="flex items-center gap-8 text-[10px] uppercase font-black tracking-widest text-white/30">
//           <Link to="/" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
//           {/* <Link to="/" className="hover:text-brand-primary transition-colors">Terms of Service</Link>
//           <Link to="/" className="hover:text-brand-primary transition-colors">Compliance</Link> */}
//         </div>
//       </div>

//       {/* Decorative large background text */}
//       <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/4 pointer-events-none -z-10">
//          <span className="text-[20vw] font-display font-black text-white/[0.02] select-none leading-none">
//             EXCELOUS
//          </span>
//       </div>
//     </footer>
//   );
// }

// function SocialLink({ icon }: { icon: ReactNode }) {
//   return (
//     <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-brand-primary/50 hover:bg-brand-primary/5 transition-all text-white/60 hover:text-brand-primary">
//       {icon}
//     </a>
//   );
// }

// function FooterLink({ label, to }: { label: string, to: string }) {
//   return (
//     <li>
//       <Link to={to} className="text-sm font-bold text-white/40 hover:text-white transition-colors flex items-center gap-2 group">
//         <div className="w-1 h-1 rounded-full bg-brand-primary transform scale-0 group-hover:scale-100 transition-transform" />
//         {label}
//       </Link>
//     </li>
//   );
// }

// function ContactItem({ icon, text }: { icon: ReactNode, text: string }) {
//   return (
//     <div className="flex items-center gap-3">
//       {icon}
//       <span className="text-sm font-bold text-white/60">{text}</span>
//     </div>
//   );
// }
