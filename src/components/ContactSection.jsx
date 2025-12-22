import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, MessageSquare, Instagram, Facebook, Twitter } from 'lucide-react';

export const ContactSection = () => {
  // --- WHATSAPP REDIRECT LOGIC ---
  const handleWhatsAppChat = () => {
    const businessNumber = "2347018424893";
    const message = encodeURIComponent("Hello NCT Travels, I'm interested in your visa services. Can I get more details?");
    window.location.href = `https://wa.me/${businessNumber}?text=${message}`;
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -mr-48 -mt-48" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
              <MessageSquare size={16} />
              <span className="text-xs font-black uppercase tracking-widest">Contact Us</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Let’s Plan Your <br/> <span className="text-blue-600">Next Adventure.</span>
            </h2>
            
            <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-md">
              Whether it's a dream vacation or a business trip, we handle the paperwork while you pack your bags.
            </p>

            <div className="space-y-6 mb-10">
              {/* WhatsApp Clickable Card - Styled Blue */}
              <div 
                onClick={handleWhatsAppChat}
                className="flex items-center gap-5 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-blue-50 shadow-lg rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Official WhatsApp</p>
                  <p className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">+234 701 842 4893</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Email Support</p>
                  <p className="text-lg font-black text-slate-900">ask@newchiptech.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
               {[Instagram, Facebook, Twitter].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                   <Icon size={18} />
                 </a>
               ))}
            </div>
          </motion.div>

          {/* Right Side: Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-white relative"
          >
            <form className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase ml-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase ml-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase ml-2">Message</label>
                <textarea 
                  placeholder="Tell us which country you want to visit..." 
                  rows="4" 
                  className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-blue-600 text-white py-5 rounded-[2rem] font-black text-lg shadow-xl shadow-blue-200 hover:bg-slate-900 hover:shadow-none transition-all flex items-center justify-center gap-3 group">
                Send Inquiry 
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};