import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'L&T Energy Hydrocarbon Engineering Limited',
    period: 'DECEMBER 2025 – Present',
    location: 'Vadodara, Gujarat, INDIA',
    responsibilities: [
      // 'Built customer churn prediction models achieving F1-scores up to 0.78 using advanced machine learning techniques',
      // 'Conducted extensive exploratory data analysis and feature analysis to identify key churn indicators',
      // 'Implemented end-to-end data science pipeline including data preprocessing, model training, and performance evaluation',
      // 'Delivered actionable insights through comprehensive reporting and model interpretation',
    ],
  },
  {
    title: 'Machine Learning Intern',
    company: 'Brainybeam Info-Tech Pvt. Ltd.',
    period: 'May 2025 – June 2025',
    location: 'Ahemdabad, Gujarat, INDIA',
    responsibilities: [
      'Executed comprehensive machine learning and data science workflows from data collection to model deployment',
      'Performed advanced data preprocessing, feature engineering, and statistical analysis to extract meaningful insights',
      'Developed predictive models and visualization dashboards to support data-driven decision making',
      'Demonstrated strong analytical capabilities and maintained professional excellence throughout project deliverables',
    ],
  },
  {
    title: 'Data Science Intern',
    company: 'Tech Elecon Pvt. Ltd.',
    period: 'May 2024 – June 2024',
    location: 'Anand, Gujarat, INDIA',
    responsibilities: [
      'Built customer churn prediction models achieving F1-scores up to 0.78 using advanced machine learning techniques',
      'Conducted extensive exploratory data analysis and feature analysis to identify key churn indicators',
      'Implemented end-to-end data science pipeline including data preprocessing, model training, and performance evaluation',
      'Delivered actionable insights through comprehensive reporting and model interpretation',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Professional Experience
        </motion.h2>

        <div className="relative space-y-8 pl-8 md:pl-0">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-cyan-500 to-blue-600 rounded-full hidden md:block opacity-30"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row md:flex-row-reverse items-center mb-12`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-8 h-8 -ml-4 md:-ml-4 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-600 dark:border-cyan-500 z-10 shadow-[0_0_15px_rgba(6,182,212,0.6)]">
                <div className="w-full h-full rounded-full bg-blue-600 dark:bg-cyan-500 opacity-50 animate-ping"></div>
              </div>

              {/* Spacer for one side - Now acts as Date container for Desktop */}
              <div className="hidden md:flex w-1/2 pl-12 items-center justify-start">
                <div className="flex items-center text-gray-600 dark:text-gray-400 text-lg font-semibold bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-gray-700">
                  <Calendar size={18} className="mr-2 text-blue-600 dark:text-cyan-400" />
                  {exp.period}
                </div>
              </div>

              {/* Content Card */}
              <div className="w-full md:w-1/2 pl-12 md:pl-12 md:pr-0">
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(59,130,246,0.15)" }}
                  className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden group md:mr-12`}
                >
                  {/* Card Neon Border Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                  <div className="flex flex-col mb-4 relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-blue-600 dark:text-cyan-400 font-semibold mb-2">
                      <Briefcase size={18} className="mr-2" />
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 mb-6 relative z-10">
                    <div className="flex md:hidden items-center text-gray-600 dark:text-gray-400 text-sm">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-3 relative z-10">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li
                        key={respIndex}
                        className="flex items-start text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                      >
                        <span className="inline-block w-1.5 h-1.5 bg-blue-600 dark:bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
