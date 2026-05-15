'use client';

import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
import { Shield, Users, Heart, CheckCircle, Award, Star, SprayCan, Bug, Sparkles, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Termite Proofing',
      description: 'Protect buildings and structures from termite damage with our advanced treatment methods. We use specialized chemicals that create a barrier around your property, preventing termites from entering and destroying wooden structures.',
      features: ['Pre-construction treatment', 'Post-construction treatment', 'Soil treatment', 'Wood treatment', 'Annual maintenance plans'],
      image: 'https://loremflickr.com/600/400/termite,wood,damage',
    },
    {
      icon: Users,
      title: 'Rodent Control',
      description: 'Safe elimination and prevention solutions for mice, rats, and other rodents. Our comprehensive approach includes identification, elimination, and prevention to keep your property rodent-free.',
      features: ['Trapping and removal', 'Bait station installation', 'Exclusion services', 'Sanitation recommendations', 'Preventive maintenance'],
      image: 'https://loremflickr.com/600/400/rat,rodent',
    },
    {
      icon: Heart,
      title: 'Agricultural Product Fumigation',
      description: 'Protect stored crops from infestation and spoilage with specialized treatments. We help farmers and storage facilities maintain the quality and safety of their agricultural products.',
      features: ['Grain storage fumigation', 'Warehouse treatment', 'Export certification', 'Quality preservation', 'Compliance with international standards'],
      image: 'https://loremflickr.com/600/400/grain,silo,storage',
    },
    {
      icon: SprayCan,
      title: 'Indoor Residual Spraying (IRS)',
      description: 'Long-lasting indoor pest prevention for mosquitoes and other flying insects. Our IRS treatments create a protective barrier on walls and surfaces that kills insects on contact.',
      features: ['Mosquito control', 'Fly control', 'Long-lasting protection', 'Safe for indoor use', 'Regular treatment schedules'],
      image: 'https://loremflickr.com/600/400/mosquito,spray',
    },
    {
      icon: CheckCircle,
      title: 'Herbicide Spraying',
      description: 'Effective weed control solutions for agricultural and residential properties. We use selective herbicides that target unwanted vegetation while preserving your desired plants.',
      features: ['Selective weed control', 'Pre-emergent treatment', 'Post-emergent treatment', 'Vegetation management', 'Environmentally friendly options'],
      image: 'https://loremflickr.com/600/400/herbicide,farm,spray',
    },
    {
      icon: Award,
      title: 'Industrial Spraying',
      description: 'Large-scale industrial pest treatment for warehouses, factories, and commercial facilities. Our industrial solutions are designed to handle complex pest challenges in large spaces.',
      features: ['Warehouse fumigation', 'Factory treatment', 'Food processing facilities', 'Commercial kitchens', 'Custom treatment plans'],
      image: 'https://loremflickr.com/600/400/warehouse,industrial',
    },
    {
      icon: Star,
      title: 'Hygiene Solutions',
      description: 'Commercial sanitation treatments to maintain clean and pest-free environments. Our hygiene services complement our pest control treatments to ensure comprehensive protection.',
      features: ['Deep cleaning', 'Sanitization', 'Disinfection', 'Odor control', 'Preventive treatments'],
      image: 'https://loremflickr.com/600/400/cleaning,disinfection',
    },
    {
      icon: Bug,
      title: 'Bee Removal Services',
      description: 'Safe bee relocation and treatment to keep your premises sting-free. We prioritize bee conservation while ensuring your safety through humane removal methods.',
      features: ['Humane bee removal', 'Hive relocation', 'Swarm removal', 'Bee-friendly methods', 'Prevention advice'],
      image: 'https://loremflickr.com/600/400/bee,beehive',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-[#0a0a0a] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://loremflickr.com/1920/1080/exterminator,pest,control"
            alt="Professional fumigation services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/90 via-[#1a1a1a]/85 to-[#0a0a0a]/90"></div>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D62828] rounded-full blur-[200px] opacity-10"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F4B400] rounded-full blur-[200px] opacity-10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full"
            >
              <Sparkles className="text-[#F4B400]" size={16} />
              <span className="text-white/90 text-sm font-semibold tracking-wide uppercase">
                Our Services
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-8 mb-6 font-serif">
              Premium <span className="gradient-text">Fumigation</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Comprehensive pest control solutions for homes, businesses, and industrial facilities across Malawi. Our expert team delivers safe, effective, and affordable treatments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(214, 40, 40, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(214, 40, 40, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.05, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="glass rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 group relative"
              >
                {/* Decorative Circle */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#D62828]/20 to-[#F4B400]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="p-10 relative">
                  <div className="aspect-video mb-8 rounded-2xl overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-start gap-6 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-gradient-to-br from-[#D62828] to-[#a31e1e] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#D62828]/30"
                    >
                      <service.icon className="text-white" size={32} />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed font-light">{service.description}</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-sm font-bold text-[#D62828] uppercase tracking-wider mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-gray-600">
                          <CheckCircle className="text-[#2E7D32]" size={18} />
                          <span className="font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#D62828] to-[#a31e1e] p-6 relative">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-3 text-white font-semibold hover:text-[#F4B400] transition-colors group-hover:gap-4"
                  >
                    Get a Quote
                    <ArrowRight size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D62828] rounded-full blur-[200px] opacity-10"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F4B400] rounded-full blur-[200px] opacity-10"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full"
            >
              <Sparkles className="text-[#F4B400]" size={16} />
              <span className="text-white/90 text-sm font-semibold tracking-wide uppercase">
                Get Started
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-8 mb-6 font-serif">
              Need a Custom <span className="gradient-text">Solution</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-12 font-light max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our experts will assess your needs and recommend the best treatment plan for your property.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D62828] to-[#a31e1e] text-white px-10 py-5 rounded-xl font-semibold hover:shadow-2xl hover:shadow-[#D62828]/30 transition-all duration-300 group"
            >
              Get Free Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
