import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PackageSection } from './components/PackageSection';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, ArrowRight } from 'lucide-react';

// Component to fix scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

// --- NEW CONTACT SECTION (WHATSAPP FOCUSED) ---
const ContactSection = () => {
  const businessNumber = "23407018424893";
  
  const handleWhatsAppChat = () => {
    const message = "Hello NCT Travels, I'm interested in your visa services. Can I get more details?";
    window.open(`https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -mr-48 -mt-48" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-blue-600"></div>
              <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Direct Message</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Ready to Start Your <br/> <span className="text-blue-600">Global Journey?</span>
            </h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              Chat with our expert visa consultants directly on WhatsApp for instant responses.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-blue-600">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Response Time</p>
                  <p className="text-lg font-bold text-slate-900 italic">Under 5 Minutes</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Email Us</p>
                  <p className="text-lg font-bold text-slate-900">ask@newchiptech.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Large WhatsApp CTA Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 text-center"
          >
            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle size={40} fill="currentColor" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Live Chat Support</h3>
            <p className="text-slate-500 mb-8">Our agents are online and ready to help you with your visa application right now.</p>
            
            <button 
              onClick={handleWhatsAppChat}
              className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-all shadow-xl shadow-green-100"
            >
              Start Chat on WhatsApp <ArrowRight size={20} />
            </button>
            
            <p className="mt-6 text-[11px] text-slate-400 font-bold uppercase tracking-widest">
              Available Monday — Sunday
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- FLOATING WHATSAPP BUTTON ---
const FloatingWhatsApp = () => {
  const businessNumber = "23407018424893";
  return (
    <motion.a
      href={`https://wa.me/${businessNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <div className="absolute -top-12 right-0 bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Questions? Chat with us!
      </div>
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full animate-ping" />
    </motion.a>
  );
};

const About = () => {
  const successImages = [
    { src: "pic/1.jpg", label: "South Africa", status: "Visa Secured" },
    { src: "pic/2.jpg", label: "Qatar", status: "Visa Secured" },
    { src: "pic/3.jpg", label: "Indonesia", status: "Visa Secured" },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-50 rounded-full z-0" />
            <img 
              src="/pic/48af34ca-e784-4f4f-9ff6-d96ba89e13b7 (1).jpg" 
              alt="Travel Planning" 
              className="relative z-10 rounded-[3rem] shadow-2xl border-[10px] border-white w-400px h-[350px]"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-blue-600"></div>
              <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">About Our Company</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 leading-tight">
              Travel the World with <span className="text-blue-600 italic">Ease</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              At NCT Travels, we believe that crossing borders should be the easiest part of your journey. Founded on the principles of transparency and speed.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-4 border-t border-gray-100">
              <div>
                <h4 className="font-black text-slate-900 text-4xl">98%</h4>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Success Rate</p>
              </div>
              <div>
                <h4 className="font-black text-slate-900 text-4xl">10k+</h4>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-10">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Recent Approvals</h3>
            <p className="text-slate-400 text-sm italic">Verified proof of our successful visa applications</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successImages.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] bg-slate-100"
              >
                <img src={item.src} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />
                <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1.5 rounded-full flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Verified</span>
                </div>
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-white text-2xl font-black leading-none mb-1">{item.label}</h4>
                  <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">{item.status}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-600 overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <About />
            <PackageSection />
            <ContactSection />
          </main>
        } />
        
        <Route path="/about" element={<div className="pt-20"><About /></div>} />
        <Route path="/packages" element={<div className="pt-20"><PackageSection /></div>} />
        <Route path="/contact" element={<div className="pt-20"><ContactSection /></div>} />
      </Routes>

      <footer className="bg-slate-900 text-white py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <h3 className="text-3xl font-black mb-4 tracking-tight italic text-blue-500">NCT Travels</h3>
          <p className="text-gray-400 max-w-md mb-10 leading-relaxed">
            Making the world accessible one visa at a time. Your success is our mission.
          </p>
          
          <div className="w-full border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2025 NCT Travels. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;