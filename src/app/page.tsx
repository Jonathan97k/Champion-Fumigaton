'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Clock, MapPin, Award, Users, Heart, Star, Sparkles } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Shield,
      title: 'Termite Proofing',
      description: 'Protect buildings and structures from termite damage with our advanced treatment methods.',
    },
    {
      icon: Users,
      title: 'Rodent Control',
      description: 'Safe elimination and prevention solutions for mice, rats, and other rodents.',
    },
    {
      icon: Heart,
      title: 'Agricultural Product Fumigation',
      description: 'Protect stored crops from infestation and spoilage with specialized treatments.',
    },
    {
      icon: Shield,
      title: 'Indoor Residual Spraying (IRS)',
      description: 'Long-lasting indoor pest prevention for mosquitoes and other flying insects.',
    },
    {
      icon: CheckCircle,
      title: 'Herbicide Spraying',
      description: 'Effective weed control solutions for agricultural and residential properties.',
    },
    {
      icon: Award,
      title: 'Industrial Spraying',
      description: 'Large-scale industrial pest treatment for warehouses and factories.',
    },
    {
      icon: Star,
      title: 'Hygiene Solutions',
      description: 'Commercial sanitation treatments to maintain clean and pest-free environments.',
    },
    {
      icon: Heart,
      title: 'Bee Removal Services',
      description: 'Safe bee relocation and treatment to keep your premises sting-free.',
    },
  ];

  const whyChooseUs = [
    { icon: Award, title: 'Professional Experts', description: 'Certified and trained technicians' },
    { icon: Shield, title: 'Safe Approved Chemicals', description: 'EPA-approved products' },
    { icon: Clock, title: 'Fast Response', description: '24/7 emergency service' },
    { icon: CheckCircle, title: 'Affordable Prices', description: 'Competitive rates' },
    { icon: MapPin, title: 'Reliable Results', description: '100% satisfaction guaranteed' },
    { icon: Users, title: 'Nationwide Service', description: 'Serving all major cities' },
  ];

  const testimonials = [
    {
      name: 'John Banda',
      location: 'Lilongwe',
      text: 'Excellent fumigation service. Professional and fast response. Highly recommend!',
    },
    {
      name: 'Mary Phiri',
      location: 'Blantyre',
      text: 'Champion Fumigation saved our warehouse from termite damage. Amazing work!',
    },
    {
      name: 'Peter Mwale',
      location: 'Mzuzu',
      text: 'Very reliable team for agricultural fumigation. Our crops are now protected.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* Services Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100"
            >
              <Sparkles className="text-[#F4B400]" size={16} />
              <span className="text-gray-900 text-sm font-semibold tracking-wide uppercase">
                Our Services
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-8 mb-6 font-serif">
              Premium <span className="gradient-text">Fumigation</span> Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Comprehensive pest control services tailored for homes, businesses, and industrial facilities across Malawi.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D62828] rounded-full blur-[200px] opacity-10"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F4B400] rounded-full blur-[200px] opacity-10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
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
                  Why Champion
                </span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mt-8 mb-6 font-serif">
                The <span className="gradient-text">Trusted</span> Choice
              </h2>
              <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed">
                We don't just spray — we solve. Our expert technicians use proven, safe methods to deliver uncompromising protection that lasts.
              </p>

              <div className="grid grid-cols-2 gap-8">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-[#D62828] to-[#a31e1e] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-lg">{item.title}</h4>
                      <p className="text-gray-400 text-sm font-light">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <div className="glass rounded-3xl p-10 relative">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { src: 'https://loremflickr.com/400/400/termite', alt: 'Termite control' },
                    { src: 'https://loremflickr.com/400/400/bee,beehive', alt: 'Bee removal' },
                    { src: 'https://loremflickr.com/400/400/rat,rodent', alt: 'Rodent control' },
                    { src: 'https://loremflickr.com/400/400/mosquito', alt: 'Mosquito control' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-2xl aspect-square overflow-hidden border border-gray-800"
                    >
                      <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 glass bg-gradient-to-br from-[#F4B400] to-[#d4a000] px-10 py-6 rounded-2xl shadow-2xl shadow-[#F4B400]/30"
              >
                <div className="text-5xl font-bold text-[#0a0a0a]">100%</div>
                <div className="text-[#0a0a0a]/80 text-xs font-semibold uppercase tracking-wider mt-1">Satisfaction Guaranteed</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100"
            >
              <Sparkles className="text-[#F4B400]" size={16} />
              <span className="text-gray-900 text-sm font-semibold tracking-wide uppercase">
                Testimonials
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-8 mb-6 font-serif">
              What Our <span className="gradient-text">Clients</span> Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="glass rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#F4B400] text-[#F4B400]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 text-lg font-light italic leading-relaxed">"{testimonial.text}"</p>
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 text-xl mb-1 font-serif">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#D62828]/10 to-[#F4B400]/10 rounded-full blur-3xl opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
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
                <span className="text-gray-900 text-sm font-semibold tracking-wide uppercase">
                  Get In Touch
                </span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-8 mb-6 font-serif">
                Request a <span className="gradient-text">Free</span> Quote
              </h2>
              <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed">
                Contact us today and our team will assess your pest problem and provide an affordable solution fast.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D62828] to-[#a31e1e] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#D62828]/30">
                    <Shield className="text-white" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-1">Call Us</h4>
                    <a href="tel:+265991380581" className="text-gray-600 hover:text-[#D62828] transition-colors text-lg">
                      +265 991 380 581
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D62828] to-[#a31e1e] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#D62828]/30">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-1">Locations</h4>
                    <p className="text-gray-600 text-lg">Lilongwe · Mzuzu · Blantyre</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D62828] to-[#a31e1e] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#D62828]/30">
                    <Clock className="text-white" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-1">Hours</h4>
                    <p className="text-gray-600 text-lg">Mon – Sat: 7am – 6pm</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
