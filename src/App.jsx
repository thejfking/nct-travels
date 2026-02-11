import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PackageSection } from './components/PackageSection';
import { ContactSection } from './components/ContactSection'; 
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, ArrowRight, Star } from 'lucide-react';
import ReactPixel from 'react-facebook-pixel';

// Component to fix scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

// --- FLOATING WHATSAPP ---
const FloatingWhatsApp = () => {
  // UPDATED TO NEW BUSINESS NUMBER
  const businessNumber = "2347082324584"; 
  
  return (
    <motion.a
      href={`https://wa.me/${businessNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => ReactPixel.track('Contact', { content_name: 'Floating WhatsApp' })}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-[999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full animate-ping" />
    </motion.a>
  );
};

// --- ABOUT SECTION ---
const About = () => {
  const successImages = [
    { src: "/pic/1.jpg", label: "South Africa", status: "Visa Secured" },
    { src: "/pic/2.jpg", label: "Qatar", status: "Visa Secured" },
    { src: "/pic/3.jpg", label: "Indonesia", status: "Visa Secured" },
  ];

  const testimonials = [
    { name: "Olumide Akibgoyega", country: "South Africa", text: "NCT Travels made my South African visa process incredibly smooth. Their team is professional and very fast!" },
    { name: "Seaun Olofinjana", country: "Qatar", text: "I highly recommend them for Qatar visa processing. I got my approval within a few days without any stress." },
    { name: "Adeyi Gbolagade", country: "China", text: "Exceptional service for my China visa. They guided me through every document required. Truly reliable." }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
          
          {/* IMAGE SIDE WITH FLOATING ANIMATION */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-50 rounded-full z-0" />
              <img 
                src="/pic/48af34ca-e784-4f4f-9ff6-d96ba89e13b7 (1).jpg" 
                alt="Travel Planning" 
                className="relative z-10 rounded-[3rem] shadow-2xl border-[10px] border-white w-full h-auto object-cover max-h-[500px]"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80'; }} 
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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

        {/* Approvals Grid */}
        <div className="space-y-10 mb-24">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Recent Approvals</h3>
            <p className="text-slate-400 text-sm italic">Verified proof of our successful visa applications</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successImages.map((item, index) => (
              <motion.div key={index} className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] bg-slate-100">
                <img src={item.src} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-white text-2xl font-black leading-none mb-1">{item.label}</h4>
                  <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">{item.status}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="pt-16 border-t border-slate-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">What Our Clients Say</h3>
            <p className="text-slate-400 text-sm">Real stories from travelers who trusted NCT Travels</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <div className="flex gap-1 mb-4 text-orange-400">
                  {[...Array(5)].map((_, s) => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                <div>
                  <h4 className="font-black text-slate-900">{t.name}</h4>
                  <p className="text-blue-600 text-xs font-bold uppercase tracking-widest">{t.country}</p>
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
  const { pathname } = useLocation();

  useEffect(() => {
    // Initializing with your specific Pixel ID
    const options = { 
        autoConfig: false, 
        debug: true 
    };
    ReactPixel.init('475990075353935', options); 
    ReactPixel.pageView();
  }, []);

  useEffect(() => {
    ReactPixel.pageView();
  }, [pathname]);

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
          <p>© 2026 NCT Travels. All rights reserved.</p>
        </div>
      </footer>
      <FloatingWhatsApp />
    </div>
  );
}

export default App;