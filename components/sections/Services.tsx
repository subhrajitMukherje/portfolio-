'use client';

import { motion } from 'framer-motion';
import { Code, Globe, Layout, Bug, Bot, Workflow } from 'lucide-react';
import { Card } from '@/components/ui/card';

const services = [
  {
    icon: Code,
    title: 'MERN Stack Development',
    description: 'Full-stack web applications using MongoDB, Express.js, React.js, and Node.js with modern best practices.',
    features: ['Scalable Architecture', 'RESTful APIs', 'Real-time Features', 'Database Design']
  },
  {
    icon: Globe,
    title: 'Next.js Websites',
    description: 'High-performance, SEO-optimized websites and web applications built with Next.js and modern frameworks.',
    features: ['Server-Side Rendering', 'SEO Optimization', 'Performance Tuning', 'Modern UI/UX']
  },
  {
    icon: Layout,
    title: 'Landing Pages',
    description: 'Converting landing pages designed to drive engagement and maximize conversions for your business.',
    features: ['Conversion Focused', 'Mobile Responsive', 'Fast Loading', 'A/B Test Ready']
  },
  {
    icon: Bug,
    title: 'Bug Fixes & Feature Improvements',
    description: 'Quick turnaround bug fixes and feature enhancements for existing web applications and systems.',
    features: ['Quick Resolution', 'Code Review', 'Performance Optimization', 'Documentation']
  },
  {
    icon: Bot,
    title: 'AI Agent Development',
    description: 'Intelligent AI agents and chatbots that can automate tasks and improve user engagement.',
    features: ['Custom AI Models', 'Natural Language Processing', 'Integration Ready', 'Continuous Learning']
  },
  {
    icon: Workflow,
    title: 'AI Automation Workflows',
    description: 'End-to-end automation solutions that streamline business processes and increase efficiency.',
    features: ['Process Automation', 'Data Integration', 'Custom Workflows', 'Monitoring & Analytics']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Services I Offer
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive web development and AI automation services to help your business grow 
            and stay ahead in the digital landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="p-8 h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl mb-4">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}