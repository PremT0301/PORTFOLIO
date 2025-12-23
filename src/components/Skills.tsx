import { Code, Database, Wrench, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillsData.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden group"
              >
                {/* Neon Gradient Border Effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-blue-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(6,182,212,0.5)" }}
                      className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-cyan-300 rounded-lg text-sm font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:text-white transition-all duration-200 cursor-default border border-transparent dark:hover:border-cyan-400/50"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
