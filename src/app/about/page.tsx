'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
import { Award, Shield, Users, Clock, CheckCircle, Target, Search, SprayCan, ShieldCheck, Sparkles } from 'lucide-react';

export default function About() {
  const processSteps = [
    {
      icon: Search,
      title: 'Inspection',
      description: 'Thorough assessment of your property to identify pest problems and risk areas.',
    },
    {
      icon: Target,
      title: 'Assessment',
      description: 'Customized treatment plan based on inspection findings and your specific needs.',
    },
    {
      icon: SprayCan,
      title: 'Treatment',
      description: 'Safe and effective application of approved fumigation methods by certified technicians.',
    },
    {
      icon: ShieldCheck,
      title: 'Protection Guarantee',
      description: 'Follow-up visits and ongoing support to ensure lasting protection.',
    },
  ];

  const stats = [
    { value: '8+', label: 'Services Offered' },
    { value: '2', label: 'Cities Covered' },
    { value: '100%', label: 'Safe Methods' },
    { value: '24/7', label: 'Available' },
  ];

  const values = [
    { icon: Shield, title: 'Safety First', description: 'EPA-approved chemicals and certified technicians' },
    { icon: Award, title: 'Excellence', description: 'Industry-leading standards and quality assurance' },
    { icon: Users, title: 'Customer Focus', description: 'Personalized solutions for every client' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-[#0a0a0a] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/IMG-20260520-WA0018.jpg"
            alt="About Champion Fumigation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/90 via-[#1a1a1a]/85 to-[#0a0a0a]/90"></div>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D62828] rounded-full blur-[200px] opacity-10"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F4B400] rounded-full blur-[200px] opacity-10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
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
                About Us
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-8 mb-6 font-serif">
              Our <span className="gradient-text">Story</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Industry-leading fumigation services built on trust, expertise, and unwavering commitment to excellence.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-[#D62828]/20 border border-[#D62828]/30 px-5 py-2 rounded-full mt-6"
            >
              <span className="text-[#F4B400] text-sm font-bold">Est. 2011</span>
              <span className="text-white/70 text-sm">· Serving Malawi for 15+ Years</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(214, 40, 40, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(214, 40, 40, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="text-center glass rounded-3xl p-8 hover:shadow-2xl transition-all duration-500"
              >
                <div className="text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#D62828]/10 to-[#F4B400]/10 rounded-full blur-3xl opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <span className="text-gray-900 text-sm font-semibold tracking-wide uppercase">
                  Our Story
                </span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-8 mb-6 font-serif">
                Built on <span className="gradient-text">Excellence</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 font-light leading-relaxed">
                Champion Fumigation Services was founded with a simple mission: to provide Malawi with world-class pest control solutions that are safe, effective, and affordable.
              </p>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                Over the years, we've grown from a small local operation to a trusted industry leader serving clients across Lilongwe and Kanengo. Our commitment to quality, safety, and customer satisfaction has earned us the trust of homeowners, businesses, and agricultural enterprises throughout the country.
              </p>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                We believe that every client deserves personalized attention and tailored solutions. That's why we invest in ongoing training for our technicians, stay updated with the latest industry advancements, and maintain the highest standards of service excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <div className="glass rounded-3xl p-6 md:p-10 relative overflow-hidden">
                <img 
                  src="/images/IMG-20260520-WA0019.jpg"
                  alt="Professional pest control team"
                  className="w-full aspect-square object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl flex items-end p-8">
                  <div>
                    <h3 className="text-white font-bold text-3xl mb-2 font-serif">Industry Leaders</h3>
                    <p className="text-gray-300">Since 2011</p>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:block absolute -bottom-8 -right-8 glass bg-gradient-to-br from-[#D62828] to-[#a31e1e] px-6 md:px-10 py-4 md:py-6 rounded-2xl shadow-2xl shadow-[#D62828]/30"
              >
                <div className="text-white font-bold text-xl md:text-2xl">15+ Years</div>
                <div className="text-white/80 text-xs font-semibold uppercase tracking-wider mt-1">Of Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D62828] rounded-full blur-[200px] opacity-10"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F4B400] rounded-full blur-[200px] opacity-10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full"
            >
              <Sparkles className="text-[#F4B400]" size={16} />
              <span className="text-white/90 text-sm font-semibold tracking-wide uppercase">
                Our Process
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-8 mb-6 font-serif">
              How We <span className="gradient-text">Work</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group relative"
              >
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#D62828] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#D62828] to-[#a31e1e] rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-2xl group-hover:shadow-[#D62828]/30 transition-all"
                >
                  <step.icon className="text-white" size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3 font-serif">{step.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(214, 40, 40, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(214, 40, 40, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Our Values
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-8 mb-6 font-serif">
              What Drives <span className="gradient-text">Us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-20 h-20 bg-gradient-to-br from-[#D62828] to-[#a31e1e] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#D62828]/30"
                >
                  <value.icon className="text-white" size={40} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">{value.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
