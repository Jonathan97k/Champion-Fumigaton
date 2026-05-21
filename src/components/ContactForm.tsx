'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    location: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Champion Fumigation!\n\nName: ${formData.fullName}\nPhone: ${formData.phoneNumber}\nCity: ${formData.location}\nService: ${formData.service}\n\nDetails: ${formData.message}`
    );
    window.open(`https://wa.me/265991380581?text=${text}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      onSubmit={handleSubmit}
      className="bg-[#161b22] rounded-xl p-6 md:p-10 shadow-2xl space-y-6 relative overflow-hidden border-t-[3px] border-[#c9a84c]"
    >
      <div className="relative">
        <h3 className="text-2xl font-bold text-white mb-1 font-serif">
          Request Consultation
        </h3>
        <p className="text-gray-400 text-sm">
          Fill out the form below and our team will get back to you within 24 hours.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-[11px] font-semibold text-[#c9a84c] uppercase tracking-[0.15em]">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="John Banda"
            className="w-full px-4 py-3.5 bg-[#1e2530] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]/30 focus:outline-none transition-all duration-300 text-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[11px] font-semibold text-[#c9a84c] uppercase tracking-[0.15em]">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            placeholder="+265 xxx xxx xxx"
            className="w-full px-4 py-3.5 bg-[#1e2530] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]/30 focus:outline-none transition-all duration-300 text-sm"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[11px] font-semibold text-[#c9a84c] uppercase tracking-[0.15em]">
          Location
        </label>
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full px-4 py-3.5 bg-[#1e2530] border border-white/10 rounded-lg text-white focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]/30 focus:outline-none transition-all duration-300 appearance-none cursor-pointer text-sm"
        >
          <option value="" className="bg-[#1e2530]">Select your city...</option>
          <option value="Lilongwe" className="bg-[#1e2530]">Lilongwe</option>
          <option value="Kanengo" className="bg-[#1e2530]">Kanengo</option>
          <option value="Other" className="bg-[#1e2530]">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-[11px] font-semibold text-[#c9a84c] uppercase tracking-[0.15em]">
          Service Needed
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-3.5 bg-[#1e2530] border border-white/10 rounded-lg text-white focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]/30 focus:outline-none transition-all duration-300 appearance-none cursor-pointer text-sm"
        >
          <option value="" className="bg-[#1e2530]">Select a service...</option>
          <option value="Termite Proofing" className="bg-[#1e2530]">Termite Proofing</option>
          <option value="Rodent Control" className="bg-[#1e2530]">Rodent Control</option>
          <option value="Agricultural Fumigation" className="bg-[#1e2530]">Agricultural Fumigation</option>
          <option value="Indoor Residual Spraying" className="bg-[#1e2530]">Indoor Residual Spraying</option>
          <option value="Herbicide Spraying" className="bg-[#1e2530]">Herbicide Spraying</option>
          <option value="Industrial Spraying" className="bg-[#1e2530]">Industrial Spraying</option>
          <option value="Hygiene Solutions" className="bg-[#1e2530]">Hygiene Solutions</option>
          <option value="Bee Removal Services" className="bg-[#1e2530]">Bee Removal Services</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-[11px] font-semibold text-[#c9a84c] uppercase tracking-[0.15em]">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Describe your pest problem or any additional details..."
          rows={4}
          className="w-full px-4 py-3.5 bg-[#1e2530] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]/30 focus:outline-none transition-all duration-300 resize-none text-sm"
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="group relative w-full bg-[#c9a84c] text-black font-bold py-4 rounded-lg hover:bg-[#b8973f] hover:shadow-lg hover:shadow-[#c9a84c]/20 transition-all duration-300 flex items-center justify-center gap-3 text-sm uppercase tracking-wider"
      >
        <span>Send Request</span>
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.form>
  );
}