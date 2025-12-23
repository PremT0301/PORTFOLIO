import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
            <span>Built with</span>
            <Heart size={14} className="mx-1 text-red-500 fill-current" />
            <span>by Prem Trivedi</span>
          </p>

          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Prem Trivedi. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <button className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200 text-sm">
              Privacy Policy
            </button>
            <button className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200 text-sm">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
