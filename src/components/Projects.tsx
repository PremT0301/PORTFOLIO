import { Folder, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Course Management System',
    type: 'Group Project',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    description:
      'Developed a comprehensive educational platform featuring role-based dashboards for administrators, faculty, and students. Implemented secure authentication systems and real-time data synchronization to streamline academic operations.',
    github: 'https://github.com/PremT0301/Learnova-CMS.git',
  },
  {
    title: 'Globe Trotter',
    type: 'Group Project',
    technologies: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Framer Motion', 'MongoDB', 'Mongoose', 'JWT', 'Multer', 'Cloudinary', 'Nodemailer'],
    description:
      'A full-stack travel planning application built with React, TypeScript, Node.js, and MongoDB that enables users to plan trips, create itineraries, manage budgets, and share travel experiences through a modern, scalable platform.',
    github: 'https://github.com/PremT0301/Globe-Trotter-.git'
  },
  {
    title: 'Sign Language Detection Web Application',
    type: 'Group Project',
    technologies: ['React', 'Node.js', 'TensorFlow.js', 'MediaPipe'],
    description:
      'Created an accessible communication tool achieving 85–90% accuracy in real-time sign language recognition through webcam integration. Optimized model performance and developed a responsive user interface.',
    github: 'https://github.com/PremT0301/SIGN-DETECT.git',
  },
  {
    title: 'AI Assistant Application',
    type: 'Group Project',
    technologies: ['Flutter', 'ChatGPT API', 'DALL·E', 'Translation APIs'],
    description:
      'Built a comprehensive mobile AI assistant featuring ChatGPT-powered conversational capabilities, DALL·E image generation, and real-time language translation.',
    github: 'https://github.com/PremT0301/AI-ASSISTANT-APP.git',
  },
  {
    title: 'Recipe Suggestion Website',
    type: 'Group Project',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Recipe APIs'],
    description:
      'Designed and developed an interactive culinary platform providing personalized recipe recommendations through API integration with advanced filtering features.',
    github: 'https://github.com/PremT0301/RECIPE-GENERATOR.git'
  },
  {
    title: 'TSLA Stock Prediction',
    type: 'Solo Project',
    technologies: ['Python', 'Jupyter Notebook', 'pandas', 'NumPy', 'matplotlib', 'seaborn', 'scikit-learn', 'Yahoo Finance dataset'],
    description: 'A machine learning–based project that predicts Tesla (TSLA) stock closing prices using historical market data with a time-based train–test split, comparing multiple regression models to achieve realistic and reliable financial forecasting.',
    github: 'https://github.com/PremT0301/TSLA-STOCK-PREDICTION.git'
  },

];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px -5px rgba(59, 130, 246, 0.2)",
                borderColor: "rgba(34, 211, 238, 0.6)"
              }}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-800 group relative overflow-hidden"
            >
              {/* Neon Glow Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Header */}
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:scale-110 transition-transform duration-300">
                  <Folder size={28} className="text-blue-600 dark:text-cyan-400" />
                </div>

                <div className="flex gap-2">
                  {/* GitHub Link */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub Repository"
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                    >
                      <Github
                        size={20}
                        className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-200"
                      />
                    </a>
                  )}

                  {/* Live Demo Link */}
                  {/* {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Live Demo"
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                    >
                      <ExternalLink
                        size={20}
                        className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-200"
                      />
                    </a>
                  )} */}
                </div>
              </div>

              {/* Project Type */}
              <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 dark:text-cyan-300 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-3 relative z-10">
                {project.type}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 relative z-10 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed relative z-10">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md border border-transparent hover:border-blue-300 dark:hover:border-cyan-500/50 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
