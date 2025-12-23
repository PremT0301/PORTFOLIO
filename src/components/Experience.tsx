import { Briefcase, Calendar, MapPin } from 'lucide-react';

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
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600 dark:border-cyan-500"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-blue-600 dark:text-cyan-400 font-semibold mb-2">
                    <Briefcase size={18} className="mr-2" />
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li
                    key={respIndex}
                    className="flex items-start text-gray-700 dark:text-gray-300"
                  >
                    <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
