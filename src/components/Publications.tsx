import { BookOpen, Calendar, ExternalLink } from 'lucide-react';

const publications = [
  {
    title: 'Transforming Plant Disease Classification through AI and Methodological Integration',
    publisher: 'Springer',
    year: '2025',
    description:
      'Comprehensive review examining the integration of machine learning, deep learning, and spectroscopy methodologies for plant disease classification. Analyzed current challenges, limitations, and future research directions in agricultural AI applications.',
    note:
      'NOTE: This is a pre-print version of the paper. The final version will be published in the Springer journal.',
    link: 'https://drive.google.com/file/d/131_kgCLwN74GmMCwTZ_l008V3WQXgk0D/view?usp=drive_link', // add actual link
  },
  {
    title: 'From Campus Life to Career Prospects: Analyzing Key Determinants in Student University Selection',
    publisher: 'Springer',
    year: '2024',
    description:
      'Conducted extensive survey analysis of 496 participants to identify critical factors influencing university selection decisions. Provided insights into academic preferences, career considerations, and social factors affecting student choices in higher education.',
    link: 'https://doi.org/10.1007/978-981-96-4145-1_26', // add actual link
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Publications
        </h2>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="flex items-start mb-4">
                    <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 mr-4">
                      <BookOpen size={24} className="text-blue-600 dark:text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
                        {pub.title}
                      </h3>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3 space-x-4">
                        <span className="font-semibold text-blue-600 dark:text-cyan-400">
                          {pub.publisher}
                        </span>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {pub.year}
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {pub.description}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light tracking-wide">
                        {pub.note}
                      </p>
                    </div>
                  </div>
                </div>

                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 md:mt-0 md:ml-4 p-3 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200 flex items-center space-x-2 text-blue-600 dark:text-cyan-400 font-medium"
                  >
                    <span className="text-sm">View Publication</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
