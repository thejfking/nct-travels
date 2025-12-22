import { motion } from 'framer-motion';
import { ArrowDown, Plane, CheckCircle } from 'lucide-react';

export const Hero = () => {
  const scrollToPackages = () => {
    const element = document.getElementById('packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] -ml-24 -mb-24" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* LEFT SIDE: TEXT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/30 px-4 py-2 rounded-full mb-6">
            <Plane size={16} className="text-blue-400" />
            <span className="text-xs font-bold text-blue-100 uppercase tracking-widest">Your Global Entry starts here</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
            Your Journey <br />
            Starts With <span className="text-blue-500 italic">Expertise.</span>
          </h1>

          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
Your gateway to the world. Fast, reliable, and seamless visa processing at your fingertips.          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button 
              onClick={scrollToPackages}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 group"
            >
              Get Started
              <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </button>
            
            <div className="flex items-center gap-3 px-4">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] font-bold text-white">
                    {i === 3 ? '10k+' : ''}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 font-medium">Trusted by <br/> <span className="text-white font-bold">10,000+ Travelers</span></p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: THE PLANE PICTURE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Floating Plane Image */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <img 
              src="/public/pic/c462ae4cd8f22bf1af672bf5ea39ab26.jpg" 
              alt="Airplane Flying" 
              className="rounded-[3rem] shadow-2xl border-4 border-white/10 w-full object-cover h-[400px] md:h-[550px]"
            />
          </motion.div>

          {/* Floating Trust Card */}
          <motion.div 
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 md:left-10 bg-white p-6 rounded-3xl shadow-2xl z-20 hidden sm:block"
          >
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-2xl">
                <CheckCircle className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-slate-900 font-black text-lg leading-none">99% Success</p>
                <p className="text-slate-500 text-xs font-bold uppercase mt-1">Visa Approval Rate</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};