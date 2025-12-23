import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Let's Connect
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
          Ready to collaborate on innovative data science projects and AI solutions that make a real impact.
          Whether you're looking for a dedicated team member or exploring partnership opportunities, I'd love to
          discuss how we can work together.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Contact Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="mailto:premtrivedi030105@gmail.com"
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white dark:hover:bg-gray-900 transition-colors duration-200 group"
              >
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:scale-110 transition-transform duration-200">
                  <Mail size={20} className="text-blue-600 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-gray-900 dark:text-white font-medium break-all">premtrivedi030105@gmail.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/prem-trivedi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white dark:hover:bg-gray-900 transition-colors duration-200 group"
              >
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:scale-110 transition-transform duration-200">
                  <Linkedin size={20} className="text-blue-600 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                  <p className="text-gray-900 dark:text-white font-medium">PREM TRIVEDI</p>
                </div>
              </a>

              <a
                href="https://github.com/PREMT0301"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white dark:hover:bg-gray-900 transition-colors duration-200 group"
              >
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:scale-110 transition-transform duration-200">
                  <Github size={20} className="text-blue-600 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                  <p className="text-gray-900 dark:text-white font-medium">PREMT0301</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 rounded-lg">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <MapPin size={20} className="text-blue-600 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-gray-900 dark:text-white font-medium">India</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-900/30 text-center">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="font-semibold text-blue-600 dark:text-cyan-400">Open to opportunities:</span> Full-time
                positions, internships, and collaborative projects in data science, machine learning, and AI development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
