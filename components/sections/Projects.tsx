'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Banking App',
    description: 'A comprehensive banking application with modern financial features including account management, transactions, and secure payment processing.',
    image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js 14', 'Plaid', 'Dwolla', 'Appwrite', 'Sentry'],
    category: 'Full-Stack'
  },
  {
    title: 'Go E-commerce Backend',
    description: 'High-performance e-commerce backend API built with Go, featuring robust architecture and efficient database operations.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Go', 'MongoDB', 'REST API', 'Microservices'],
    category: 'Backend'
  },
  {
    title: 'Enterprise LMS',
    description: 'Scalable Learning Management System for enterprise clients with advanced features and cloud infrastructure.',
    image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'AWS', 'Docker', 'Lambda', 'Clerk', 'DynamoDB', 'ECR', 'S3', 'Shadcn', 'Node'],
    category: 'Enterprise'
  },
  {
    title: 'Inventory Management System',
    description: 'Real-time inventory tracking and management system with advanced analytics and reporting capabilities.',
    image: 'https://images.pexels.com/photos/7689942/pexels-photo-7689942.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Redux', 'Node.js', 'AWS'],
    category: 'Full-Stack'
  },
  {
    title: 'AI Shorts Generator SaaS',
    description: 'SaaS platform for generating AI-powered short video content with automated editing and customization features.',
    image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Redis', 'AWS', 'Stripe', 'AI/ML'],
    category: 'AI/SaaS'
  },
  {
    title: 'AI Code Review Agent',
    description: 'Intelligent code review system using AI to analyze code quality, suggest improvements, and detect potential issues.',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Node.js', 'AI/ML', 'Convex'],
    category: 'AI'
  },
  {
    title: 'Zomato Clone with Reels',
    description: 'Food delivery platform with innovative reels-style feed for restaurant discovery and social food experiences.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['MERN Stack', 'Video Processing', 'Real-time Chat'],
    category: 'Full-Stack'
  },
  {
    title: 'MERN E-commerce with Admin',
    description: 'Complete e-commerce solution with customer portal and comprehensive admin dashboard for business management.',
    image: 'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Admin Panel'],
    category: 'E-commerce'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work spanning web development, AI automation, and enterprise solutions. 
            Each project represents a unique challenge and innovative solution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white border-0">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-slate-100 text-slate-700 border-0"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-slate-100 text-slate-700 border-0"
                      >
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium text-sm transition-colors duration-200"
                    >
                      <Github size={16} />
                      Source Code
                    </motion.button>
                  </div>
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
            Want to see more of my work or discuss a custom project?
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
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}