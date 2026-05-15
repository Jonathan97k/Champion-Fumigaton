'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -12, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } }}
      className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
    >
      {/* Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D62828]/5 via-transparent to-[#F4B400]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D62828] via-[#F4B400] to-[#D62828] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

      {/* Decorative Circle */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#D62828]/20 to-[#F4B400]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative">
        {/* Icon Container */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-20 h-20 bg-gradient-to-br from-[#D62828] to-[#a31e1e] rounded-2xl flex items-center justify-center mb-8 group-hover:shadow-2xl group-hover:shadow-[#D62828]/30 transition-all duration-500"
        >
          <Icon className="text-white" size={36} />
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#D62828] transition-colors duration-300 font-serif">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed font-light">
          {description}
        </p>

        {/* Learn More Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-6 pt-6 border-t border-gray-100 group-hover:border-[#D62828]/20 transition-colors"
        >
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-[#D62828] font-semibold text-sm group-hover:gap-3 transition-all duration-300"
          >
            Learn More
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
