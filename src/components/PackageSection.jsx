import React from 'react';
import { motion } from 'framer-motion';
// Removed Send, added CreditCard
import { CheckCircle, AlertCircle, Clock, CreditCard } from 'lucide-react';

// Animation variants - Strictly vertical for mobile stability
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const VisaCard = ({ type, price, details, requirements, footerInfo, image }) => {
  const getFlagCode = (typeName) => {
    const name = typeName.toLowerCase();
    if (name.includes("south africa")) return "za";
    if (name.includes("oman")) return "om";
    if (name.includes("morocco")) return "ma";
    if (name.includes("qatar")) return "qa";
    if (name.includes("indonesia")) return "id";
    if (name.includes("uganda")) return "ug";
    if (name.includes("kenya")) return "ke";
    if (name.includes("tanzania")) return "tz";
    if (name.includes("uae")) return "ae";
    if (name.includes("china")) return "cn";
    return null;
  };

  // --- NEW WHATSAPP PAYMENT REDIRECT ---
  const handleWhatsAppPayment = () => {
    const businessNumber = "+2347018424893";
    const message = `Hello NCT Travels! 👋%0A%0A` +
                    `I am interested in the *${type}* package.%0A` +
                    `*Price:* ₦${price.toLocaleString()}%0A%0A` +
                    `Please send your Account details so I can proceed with the payment for my visa application.`;
    
    window.location.href = `https://wa.me/${businessNumber}?text=${message}`;
  };

  const flagCode = getFlagCode(type);

  return (
    <motion.div 
      variants={cardVariants}
      className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 flex flex-col h-full transition-all duration-300 hover:shadow-2xl group"
    >
      {/* Header Image */}
      <div className="h-44 w-full relative shrink-0 overflow-hidden">
        <img 
          src={image} 
          alt={type} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute bottom-4 left-4 flex items-center gap-2 pr-4">
          {flagCode && (
            <img 
              src={`https://flagcdn.com/w40/${flagCode}.png`} 
              alt="flag" 
              className="w-6 h-auto rounded-sm shadow-sm border border-white/20"
            />
          )}
          <div className="text-white font-bold text-lg leading-tight drop-shadow-md">
             {type}
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        {/* Visa Details */}
        <div className="space-y-2 mb-4">
          {details.map((detail, i) => (
            <p key={i} className="text-[12px] text-slate-700 font-medium flex items-start gap-2 leading-relaxed">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 shrink-0" /> {detail}
            </p>
          ))}
        </div>

        {/* Requirements Box */}
        <div className="bg-slate-50 p-4 rounded-2xl mb-4 border border-slate-100">
          <p className="text-[10px] font-bold text-slate-400 uppercase mb-2 flex items-center gap-1">
            <AlertCircle size={10} /> Requirements
          </p>
          <ul className="space-y-1">
            {requirements.map((req, i) => (
              <li key={i} className="text-[11px] text-slate-600 flex items-start gap-2">
                <CheckCircle size={12} className="text-green-500 mt-0.5 shrink-0" /> {req}
              </li>
            ))}
          </ul>
        </div>

        {/* Timeline Badges */}
        {footerInfo && (
          <div className="mb-6 flex flex-wrap gap-2">
            {footerInfo.map((info, i) => (
              <span key={i} className="text-[9px] bg-blue-50 text-blue-700 px-2 py-1 rounded-md font-black uppercase flex items-center gap-1">
                <Clock size={10} /> {info}
              </span>
            ))}
          </div>
        )}

        {/* Pricing and Action */}
        <div className="mt-auto pt-4 border-t border-slate-50">
          <div className="flex justify-between items-end mb-4">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 font-bold uppercase">Payable</span>
              <span className="text-2xl font-black text-slate-900 leading-none">₦{price.toLocaleString()}</span>
            </div>
          </div>
          
          <button 
            onClick={handleWhatsAppPayment}
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-slate-900 transition-all flex items-center justify-center gap-2 active:scale-[0.98] shadow-lg shadow-blue-100"
          >
            Pay & Apply <CreditCard size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export const PackageSection = () => {
  const visas = [
    { 
      type: "South Africa E.Visa", 
      price: 1500000, 
      image: "pic/south.jpeg",
      details: ["90 Days Visa", "90 Days Validity"],
      requirements: ["Datapage", "Passport photo", "Yellow Fever card (In and out Copy)"],
      footerInfo: ["Approval in 5-7 Days"]
    },
    { 
      type: "Oman 2yrs Freelance", 
      price: 3000000, 
      image: "pic/WhatsApp Image 2025-12-18 at 11.49.23 PM.jpeg",
      details: ["Visa Only", "Male Only", "ID + Medicals (N280k)"],
      requirements: ["Datapage", "Passport photo", "OK to Board (N20k)"],
      footerInfo: ["24hrs-7 Days Processing"]
    },
    { 
      type: "Morocco AFCON Deal", 
      price: 250000, 
      image: "pic/WhatsApp Image 2025-12-18 at 11.49.22 PM (1).jpeg",
      details: ["Morocco E-Visa", "FAN ID included"],
      requirements: ["Passport Photo", "Hard copy Passport to Lagos"],
      footerInfo: ["Approved in 24hrs"]
    },
    { 
      type: "Qatar 30days E-Visa", 
      price: 750000, 
      image: "pic/WhatsApp Image 2025-12-18 at 11.49.24 PM.jpeg",
      details: ["VISA ONLY"],
      requirements: ["Datapage", "Passport photo"],
      footerInfo: ["Standard Package"]
    },
    { 
      type: "Qatar 5-Star (Sharing)", 
      price: 915000, 
      image: "pic/WhatsApp Image 2025-12-18 at 11.49.25 PM.jpeg",
      details: ["3 Nights Accommodation in a 5 Star Hotel", "Daily Buffet Breakfast", "Return Airport Transfers"],
      requirements: ["Datapage", "Passport photo", "2 in a room"],
      footerInfo: ["Full Package"]
    },
    { 
      type: "Qatar 5-Star (Shaza)", 
      price: 1200000, 
      image: "pic/WhatsApp Image 2025-12-18 at 11.49.25 PM.jpeg",
      details: ["3 Nights Shaza Hotel ,Daily Buffet Breakfast", "Return Airport Transfers"],
      requirements: ["Datapage", "Passport photo", "2 in a room"],
      footerInfo: ["Premium Deal"]
    },
    { 
      type: "Qatar 5-Star (Single)", 
      price: 1460000, 
      image: "pic/WhatsApp Image 2025-12-18 at 11.49.25 PM.jpeg",
      details: ["3 Nights 5-Star Hotel, Buffet Breakfast, Transfers"],
      requirements: ["Datapage", "Passport photo", "1 in a room"],
      footerInfo: ["Solo Traveler"]
    },
    { 
      type: "Indonesia E-Visa", 
      price: 1680000, 
      image: "pic/WhatsApp Image 2025-12-18 at 11.49.26 PM.jpeg",
      details: ["60days Visa"],
      requirements: ["Datapage", "Passport photo", "Hotel/Flight Reservation"],
      footerInfo: ["14 - 21 days Approval"]
    },
    { 
      type: "Uganda E-Visa", 
      price: 230000, 
      image: "pic/WhatsApp Image 2025-12-18 at 11.49.26 PM (1).jpeg",
      details: ["90 days Visa"],
      requirements: ["Datapage", "Passport photo"],
      footerInfo: ["5-7 Business days"]
    },
    { 
      type: "Kenya ETA", 
      price: 200000, 
      image: "pic/WhatsApp Image 2025-12-18 at 11.49.28 PM.jpeg",
      details: ["90 days Visa"],
      requirements: ["Datapage", "Passport photo"],
      footerInfo: ["96 hours Approval"]
    },
    { 
      type: "Tanzania Visa Application", 
      price: 330000, 
      image: "pic/WhatsApp Image 2025-12-18 at 11.49.29 PM.jpeg",
      details: ["Standard Processing"],
      requirements: ["Data page", "Passport photo"],
      footerInfo: ["10/14 days processing"]
    },
    { 
      type: "Qatar Residence + QID", 
      price: 5500000, 
      image: "pic/WhatsApp Image 2025-12-18 at 11.49.30 PM.jpeg",
      details: ["2yr Residence/Work Visa", "Includes Medical + QID"],
      requirements: ["Datapage", "Passport photo"],
      footerInfo: ["7-10 days Approval"]
    },
    { 
      type: "Morocco E.VISA (Standard)", 
      price: 300000, 
      image: "pic/WhatsApp Image 2025-12-18 at 11.49.31 PM.jpeg",
      details: ["30 days Visa", "Valid US/UK/Schengen Copy Required"],
      requirements: ["Datapage", "Passport photo"],
      footerInfo: ["7-10 days Approval"]
    },
    { 
      type: "UAE E-Visa", 
      price: 350000, 
      image: "pic/WhatsApp Image 2025-12-18 at 11.49.32 PM.jpeg",
      details: ["30 days Visa", "All Nationalities Except Nigeria"],
      requirements: ["Datapage", "Passport"],
      footerInfo: ["5-7 Business Days"]
    },
    { 
      type: "CHINA Canton Fair 2026", 
      price: 250000, 
      image: "pic/WhatsApp Image 2025-12-18 at 11.49.33 PM.jpeg",
      details: ["April 2026 Submission", "N400k balance on approval"],
      requirements: ["Datapage", "Passport photo", "Non-Refundable Fee: N250k"],
      footerInfo: ["30 Days Business Visa"]
    }
  ];

  return (
    <section id="packages" className="py-16 md:py-24 bg-slate-50 px-4 md:px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Visa Packages</h2>
          <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full mb-6 shadow-lg shadow-blue-100"></div>
          <p className="text-slate-500 font-medium italic text-sm md:text-base px-4 max-w-2xl mx-auto">
            Experience world-class travel services. Visa Approval is at the discretion of the immigration officer.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.01 }} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8"
        >
          {visas.map((visa, index) => (
            <VisaCard key={index} {...visa} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};