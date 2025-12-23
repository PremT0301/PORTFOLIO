import { Download, Mail, Sparkles } from 'lucide-react';

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <Sparkles size={16} className="mr-2" />
            Welcome to my portfolio
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            <span className="block mb-2">Prem Trivedi</span>
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent text-3xl sm:text-4xl lg:text-5xl">
              Computer Science Engineer
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-medium">
            Data Science & AI Developer
          </p>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Passionate data scientist and AI developer with hands-on experience in machine learning,
            data analysis, and building intelligent solutions. I transform complex data into actionable
            insights and develop AI-powered applications that solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-2"
            >
              <span>View Projects</span>
            </button>

            <a
              href="/resume.pdf"
              download="Prem_Trivedi_Resume.pdf"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-cyan-600 hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-cyan-600 hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
