'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  image: string;
  href?: string;
}

export default function ServiceCard({ icon: Icon, title, description, delay = 0, image, href = '/services' }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } }}
      className="group relative bg-[#1e2530] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#c9a84c]/10 transition-all duration-500 border border-transparent hover:border-[#c9a84c]/30"
    >
      {/* Card Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e2530] to-transparent"></div>
      </div>

      <div className="relative p-6">
        {/* Icon Container */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-14 h-14 bg-[#c9a84c]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#c9a84c]/20 transition-all duration-300"
        >
          <Icon className="text-[#c9a84c]" size={28} />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 font-serif">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#8b9098] leading-relaxed font-light text-sm">
          {description}
        </p>

        {/* Learn More Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-5 pt-5 border-t border-white/10 group-hover:border-[#c9a84c]/20 transition-colors"
        >
          <a
            href={href}
            className="inline-flex items-center gap-2 text-[#c9a84c] font-semibold text-sm group-hover:gap-3 transition-all duration-300"
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
