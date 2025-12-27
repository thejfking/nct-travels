import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, MessageCircle } from 'lucide-react';
import ReactPixel from 'react-facebook-pixel';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const businessNumber = "2347018424893";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.trim() && formData.email.trim() && formData.message.trim()) {
      // FIRE PIXEL TRACKING
      ReactPixel.track('Contact', { 
        content_name: 'Contact Form WhatsApp Redirect',
        status: 'Validated_Lead' 
      });

      // CONSTRUCT WHATSAPP URL
      const whatsappMsg = `Hello NCT Travels, my name is ${formData.name}. I'm interested in: ${formData.message} (Email: ${formData.email})`;
      const waUrl = `https://wa.me/${businessNumber}?text=${encodeURIComponent(whatsappMsg)}`;
      
      window.open(waUrl, '_blank');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert("Please fill in all fields before starting the chat.");
    }
  };

  const handleWhatsAppChat = () => {
    ReactPixel.track('Contact', {
      content_name: 'General WhatsApp Inquiry',
      method: 'WhatsApp Link Clicked'
    });
    const message = encodeURIComponent("Hello NCT Travels, I'm interested in your visa services. Can I get more details?");
    window.open(`https://wa.me/${businessNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
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
              <span className="text-xs font-black uppercase tracking-widest">Connect with us</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Start Your <br/> <span className="text-blue-600 italic">WhatsApp Chat.</span>
            </h2>
            
            <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-md">
              Fill out the form and we'll instantly transfer you to a live consultant on WhatsApp.
            </p>

            <div className="space-y-6">
              <div 
                onClick={handleWhatsAppChat}
                className="flex items-center gap-5 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-blue-50 shadow-lg rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300">
                  <MessageCircle size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Instant Response</p>
                  <p className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">+234 701 842 4893</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Email Support</p>
                  <p className="text-lg font-black text-slate-900">nctcorporate@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-white relative"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase ml-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe" 
                  className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase ml-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com" 
                  className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase ml-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your visa needs..." 
                  rows="4" 
                  className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#25D366] text-white py-5 rounded-[2rem] font-black text-lg shadow-xl shadow-green-100 hover:bg-[#128C7E] transition-all flex items-center justify-center gap-3 group"
              >
                Start WhatsApp Chat
                <MessageCircle size={22} fill="currentColor" className="group-hover:scale-110 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};