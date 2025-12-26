import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16 text-lg"
        >
          Ready to collaborate on innovative data science projects and AI solutions that make a real impact.
          Whether you're looking for a dedicated team member or exploring partnership opportunities, I'd love to
          discuss how we can work together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-2xl relative overflow-hidden">
            {/* Neon Border Top */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center gap-2">
              <Send size={20} className="text-blue-600 dark:text-cyan-400" />
              Contact Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.a
                whileHover={{ scale: 1.02, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                whileTap={{ scale: 0.98 }}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=premtrivedi030105@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 group border border-transparent hover:border-blue-100 dark:hover:border-blue-900/50"
              >
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:scale-110 transition-transform duration-200 shadow-sm group-hover:shadow-blue-200 dark:group-hover:shadow-blue-900/50">
                  <Mail size={24} className="text-blue-600 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Email</p>
                  <p className="text-gray-900 dark:text-white font-semibold break-all text-sm sm:text-base">premtrivedi030105@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, backgroundColor: "rgba(6, 182, 212, 0.05)" }}
                whileTap={{ scale: 0.98 }}
                href="https://linkedin.com/in/prem-trivedi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 group border border-transparent hover:border-cyan-100 dark:hover:border-cyan-900/50"
              >
                <div className="p-3 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 group-hover:scale-110 transition-transform duration-200 shadow-sm group-hover:shadow-cyan-200 dark:group-hover:shadow-cyan-900/50">
                  <Linkedin size={24} className="text-blue-600 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">LinkedIn</p>
                  <p className="text-gray-900 dark:text-white font-semibold">PREM TRIVEDI</p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/PREMT0301"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 group border border-transparent hover:border-blue-100 dark:hover:border-blue-900/50"
              >
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:scale-110 transition-transform duration-200 shadow-sm group-hover:shadow-blue-200 dark:group-hover:shadow-blue-900/50">
                  <Github size={24} className="text-blue-600 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">GitHub</p>
                  <p className="text-gray-900 dark:text-white font-semibold">PREMT0301</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-4 p-4 rounded-xl group"
              >
                <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:scale-110 transition-transform duration-200">
                  <MapPin size={24} className="text-blue-600 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Location</p>
                  <p className="text-gray-900 dark:text-white font-semibold">India</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-900/30 text-center shadow-inner"
            >
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                <span className="text-blue-600 dark:text-cyan-400 font-bold block mb-2">Open to opportunities</span>
                Full-time positions, internships, and collaborative projects in data science, machine learning, and AI development.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
