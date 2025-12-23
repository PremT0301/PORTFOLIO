import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-gray-50 dark:bg-gray-950 py-8 overflow-hidden">
      {/* Neon Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm font-medium">
            <span>© {new Date().getFullYear()} Prem Trivedi. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="mx-1 text-red-500"
            >
              <Heart size={16} fill="currentColor" />
            </motion.div>
            <span>and React.</span>
          </div>

          <div className="flex items-center space-x-6">
            <motion.a
              whileHover={{ color: '#06b6d4', scale: 1.05 }}
              href="#"
              className="text-gray-600 dark:text-gray-400 text-sm font-medium transition-colors"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              whileHover={{ color: '#06b6d4', scale: 1.05 }}
              href="#"
              className="text-gray-600 dark:text-gray-400 text-sm font-medium transition-colors"
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
