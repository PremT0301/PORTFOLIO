import { Download, Mail, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import NeonButton from './ui/NeonButton';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Animated Background Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-72 h-72 bg-blue-400/30 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, 60, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-40 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4 backdrop-blur-sm border border-blue-200/50 dark:border-blue-500/30"
          >
            <Sparkles size={16} className="mr-2 text-yellow-500 animate-pulse" />
            Welcome to my portfolio
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block mb-2 drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              Prem Trivedi
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent text-3xl sm:text-4xl lg:text-5xl drop-shadow-sm dark:drop-shadow-[0_0_20px_rgba(6,182,212,0.5)] py-2"
            >
              Computer Science Engineer
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-medium"
          >
            Data Science & AI Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Passionate data scientist and AI developer with hands-on experience in machine learning,
            data analysis, and building intelligent solutions. I transform complex data into actionable
            insights and develop AI-powered applications that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <NeonButton
              onClick={() => scrollToSection('#projects')}
              variant="primary"
            >
              View Projects
            </NeonButton>

            <a
              href="/resume.pdf"
              download="Prem_Trivedi_Resume.pdf"
            >
              <NeonButton variant="secondary" icon={<Download size={20} />}>
                Download Resume
              </NeonButton>
            </a>

            <NeonButton
              onClick={() => scrollToSection('#contact')}
              variant="secondary"
              icon={<Mail size={20} />}
            >
              Contact Me
            </NeonButton>
          </motion.div>
        </div>
      </div>


    </section>
  );
}
