'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

const experiences = [
  {
    company: 'Remotely',
    position: 'Full Stack Developer',
    duration: 'Aug 2024 - Aug 2025',
    location: 'Remote',
    type: 'Full-time',
    description: 'Leading full-stack development projects with focus on modern web technologies and scalable architecture.',
    achievements: [
      'Developed multiple client projects using MERN and Next.js stack',
      'Implemented AI automation workflows for business optimization',
      'Collaborated with cross-functional teams on enterprise solutions',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    company: 'Feedzai',
    position: 'Frontend Developer Intern',
    duration: 'Sep 2023 - Jan 2024',
    location: 'Remote',
    type: 'Internship',
    description: 'Contributed to fraud detection and risk management platform development with focus on user interface optimization.',
    achievements: [
      'Built responsive UI components for financial dashboard',
      'Optimized application performance reducing load times by 30%',
      'Collaborated with design team on user experience improvements',
      'Participated in agile development processes and sprint planning'
    ]
  },
  {
    company: 'HacktOberFest',
    position: 'Open Source Contributor',
    duration: 'Oct 2024',
    location: 'Global',
    type: 'Contribution',
    description: 'Active contributor to open-source projects during Hacktoberfest, focusing on web development and developer tools.',
    achievements: [
      'Successfully completed Hacktoberfest challenge',
      'Contributed to multiple repositories with meaningful PRs',
      'Improved documentation and added new features',
      'Engaged with global developer community'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My journey through various roles and projects that have shaped my expertise 
            in full-stack development and AI automation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.duration}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8 last:mb-0"
            >
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Company Logo/Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white">
                      {exp.type === 'Contribution' ? <Award size={24} /> : <Building2 size={24} />}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {exp.position}
                      </h3>
                      <h4 className="text-xl font-semibold text-blue-600 mb-3">
                        {exp.company}
                      </h4>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          {exp.type}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-600">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Add Value to Your Team?
            </h3>
            <p className="text-gray-600 mb-6">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how my experience can contribute to your success.
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
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}