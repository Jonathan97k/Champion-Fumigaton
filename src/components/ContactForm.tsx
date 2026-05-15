'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowRight } from 'lucide-react';

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
    console.log(formData);
    alert('Thank you for your request! We will contact you shortly.');
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
      className="glass rounded-3xl p-10 shadow-2xl space-y-8 relative overflow-hidden"
    >
      {/* Decorative Gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#D62828]/20 to-[#F4B400]/20 rounded-full blur-3xl opacity-50"></div>

      <div className="relative">
        <h3 className="text-3xl font-bold text-gray-900 mb-2 font-serif">
          Request Consultation
        </h3>
        <p className="text-gray-600">
          Fill out the form below and our team will get back to you within 24 hours.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 relative">
        <div className="space-y-3">
          <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="John Banda"
            className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:border-[#D62828] focus:ring-2 focus:ring-[#D62828]/20 focus:outline-none transition-all duration-300"
          />
        </div>

        <div className="space-y-3">
          <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            placeholder="+265 xxx xxx xxx"
            className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:border-[#D62828] focus:ring-2 focus:ring-[#D62828]/20 focus:outline-none transition-all duration-300"
          />
        </div>
      </div>

      <div className="space-y-3 relative">
        <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
          Location
        </label>
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:border-[#D62828] focus:ring-2 focus:ring-[#D62828]/20 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
        >
          <option value="">Select your city...</option>
          <option value="Lilongwe">Lilongwe</option>
          <option value="Mzuzu">Mzuzu</option>
          <option value="Blantyre">Blantyre</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="space-y-3 relative">
        <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
          Service Needed
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:border-[#D62828] focus:ring-2 focus:ring-[#D62828]/20 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
        >
          <option value="">Select a service...</option>
          <option value="Termite Proofing">Termite Proofing</option>
          <option value="Rodent Control">Rodent Control</option>
          <option value="Agricultural Fumigation">Agricultural Fumigation</option>
          <option value="Indoor Residual Spraying">Indoor Residual Spraying</option>
          <option value="Herbicide Spraying">Herbicide Spraying</option>
          <option value="Industrial Spraying">Industrial Spraying</option>
          <option value="Hygiene Solutions">Hygiene Solutions</option>
          <option value="Bee Removal Services">Bee Removal Services</option>
        </select>
      </div>

      <div className="space-y-3 relative">
        <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Describe your pest problem or any additional details..."
          rows={4}
          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:border-[#D62828] focus:ring-2 focus:ring-[#D62828]/20 focus:outline-none transition-all duration-300 resize-none"
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative w-full bg-gradient-to-r from-[#D62828] to-[#a31e1e] text-white py-5 rounded-xl font-semibold hover:shadow-2xl hover:shadow-[#D62828]/30 transition-all duration-300 flex items-center justify-center gap-3"
      >
        <span>Send Request</span>
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.form>
  );
}
