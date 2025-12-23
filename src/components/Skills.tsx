import { Code, Database, Wrench, Layers } from 'lucide-react';

const skillsData = [
  {
    icon: Code,
    title: 'Programming Languages',
    skills: ['Python', 'SQL', 'Java', 'C/C++', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    icon: Layers,
    title: 'Libraries & Frameworks',
    skills: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Matplotlib', 'Seaborn', 'Streamlit'],
  },
  {
    icon: Database,
    title: 'Databases & Cloud',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Google Colab', 'VS Code', 'Jupyter', 'Power BI'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 mr-4">
                    <Icon size={28} className="text-blue-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-cyan-300 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
