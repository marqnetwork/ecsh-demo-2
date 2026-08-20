import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, ChevronRight } from "lucide-react";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-40 pb-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
           <div>
              <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 inline-block">
                 Partner With ECHS
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black leading-tight mb-8 text-slate-900">
                 Let's Start a Conversation.
              </h1>
              <p className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed mb-12">
                 Connect with ECHS to explore partnership opportunities and tailored support 
                 solutions for correctional healthcare operations.
              </p>

              <div className="space-y-8">
                 <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-200 text-brand-primary flex-shrink-0">
                       <Mail />
                    </div>
                    <div className="min-w-0 flex-1">
                       {/* <h4 className="font-bold text-slate-400 uppercase text-[10px] tracking-widest mb-1">Email</h4> */}
                       <p className="text-base sm:text-lg md:text-xl font-bold text-slate-900 break-all">partnerships@echs.systems</p>
                    </div>
                 </div>
                 {/* <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-200 text-brand-primary">
                       <Phone />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-400 uppercase text-[10px] tracking-widest mb-1">Infrastructure Support</h4>
                       <p className="text-xl font-bold text-slate-900">Operational Inquiry Center</p>
                    </div>
                 </div> */}
                 {/* <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-200 text-brand-primary">
                       <MapPin />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-400 uppercase text-[10px] tracking-widest mb-1">Headquarters</h4>
                       <p className="text-xl font-bold font-display text-slate-900">Atlanta, GA</p>
                       <span className="text-xs text-slate-400">Serving the Correctional Healthcare Ecosystem</span>
                    </div>
                 </div> */}
              </div>
           </div>

           <div className="bg-white p-10 md:p-16 rounded-[3rem] border border-slate-200 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[80px] -z-10" />
              <form className="space-y-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-1">Full Name</label>
                       <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:border-brand-primary focus:outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300" placeholder="First Last"/>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-1">Organization</label>
                       <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:border-brand-primary focus:outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300" placeholder="Organization name"/>
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-1">Contact Email</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:border-brand-primary focus:outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300" placeholder="email@organization.com"/>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-1">Service Interest</label>
                    <div className="relative">
                       <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:border-brand-primary focus:outline-none transition-all font-bold appearance-none text-slate-900">
                          <option>Operational Support Services</option>
                          <option>Quality, Compliance & Oversight</option>
                          <option>Clinical Support & Care Continuity</option>
                          <option>Specialized Service Solutions</option>
                       </select>
                       <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <ChevronRight className="w-4 h-4 rotate-90" />
                       </div>
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-1">Message</label>
                    <textarea className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:border-brand-primary focus:outline-none transition-all font-bold min-h-[150px] text-slate-900 placeholder:text-slate-300" placeholder="How can ECHS support your operations?"></textarea>
                 </div>
                 <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 rounded-2xl bg-brand-primary text-white font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-lg shadow-brand-primary/20"
                 >
                    Send Message
                    <Send className="w-4 h-4" />
                 </motion.button>
              </form>
           </div>
        </div>
        
        <div className="mt-12 md:mt-16 pt-10 border-t border-slate-200 text-center flex flex-col items-center justify-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 leading-tight text-center mx-auto max-w-4xl">
               Built for the Infrastructure Behind the Care.
            </h3>
         </div>
      </div>
    </motion.div>
  );
}
