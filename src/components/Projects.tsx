import { Folder, Github, BookOpen, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

/* ===================== PROJECTS ===================== */

const projects = [
  {
    title: 'Course Management System',
    type: 'Group Project',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    description:
      'Developed a comprehensive educational platform featuring role-based dashboards for administrators, faculty, and students. Implemented secure authentication systems and real-time data synchronization to streamline academic operations.',
    github: 'https://github.com/PremT0301/Learnova-CMS.git',
  },
  {
    title: 'Globe Trotter',
    type: 'Group Project',
    technologies: [
      'React 18',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'React Router',
      'Framer Motion',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Multer',
      'Cloudinary',
      'Nodemailer',
    ],
    description:
      'A full-stack travel planning application enabling users to plan trips, create itineraries, manage budgets, and share travel experiences.',
    github: 'https://github.com/PremT0301/Globe-Trotter-.git',
  },
  {
    title: 'Sign Language Detection Web Application',
    type: 'Group Project',
    technologies: ['React', 'Node.js', 'TensorFlow.js', 'MediaPipe'],
    description:
      'Created an accessible communication tool achieving 85–90% accuracy in real-time sign language recognition through webcam integration.',
    github: 'https://github.com/PremT0301/SIGN-DETECT.git',
  },
  {
    title: 'AI Assistant Application',
    type: 'Group Project',
    technologies: ['Flutter', 'ChatGPT API', 'DALL·E', 'Translation APIs'],
    description:
      'Built a comprehensive mobile AI assistant featuring ChatGPT-powered conversational capabilities, image generation, and real-time translation.',
    github: 'https://github.com/PremT0301/AI-ASSISTANT-APP.git',
  },
  {
    title: 'Recipe Suggestion Website',
    type: 'Group Project',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Recipe APIs'],
    description:
      'Designed and developed an interactive culinary platform providing personalized recipe recommendations through API integration with advanced filtering features.',
    github: 'https://github.com/PremT0301/RECIPE-GENERATOR.git',
  },
  {
    title: 'TSLA Stock Prediction',
    type: 'Solo Project',
    technologies: ['Python', 'pandas', 'NumPy', 'matplotlib', 'scikit-learn'],
    description:
      'Machine learning–based project predicting Tesla (TSLA) stock prices using historical market data and regression models.',
    github: 'https://github.com/PremT0301/TSLA-STOCK-PREDICTION.git',
  },
];

/* ===================== PUBLICATIONS ===================== */

const publications = [
  {
    title:
      'Transforming Plant Disease Classification through AI and Methodological Integration',
    publisher: 'Springer',
    year: '2025',
    description:
      'Comprehensive review examining the integration of machine learning, deep learning, and spectroscopy methodologies for plant disease classification. Analyzed current challenges, limitations, and future research directions in agricultural AI applications.',
    note:
      'NOTE: This is a pre-print version of the paper. The final version will be published in the Springer journal.',
    link: 'https://drive.google.com/file/d/131_kgCLwN74GmMCwTZ_l008V3WQXgk0D/view?usp=drive_link',
  },
  {
    title:
      'From Campus Life to Career Prospects: Analyzing Key Determinants in Student University Selection',
    publisher: 'Springer',
    year: '2024',
    description:
      'Conducted extensive survey analysis of 496 participants to identify critical factors influencing university selection decisions. Provided insights into academic preferences, career considerations, and social factors affecting student choices in higher education.',
    link: 'https://doi.org/10.1007/978-981-96-4145-1_26',
  },
];

/* ===================== COMPONENT ===================== */

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-20 text-white"
        >
          Projects & Publications
        </motion.h2>

        {/* ===================== PROJECTS ===================== */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative rounded-2xl p-8 bg-gradient-to-br from-[#0f172a] to-[#020617]
                         border border-white/5 shadow-xl group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-xl bg-blue-500/10">
                  <Folder className="text-cyan-400" size={26} />
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>

              {/* Project Type */}
              <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold
                               text-cyan-300 bg-cyan-400/10 rounded-full">
                {project.type}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 text-xs font-medium rounded-lg
                               bg-white/5 text-gray-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===================== PUBLICATIONS ===================== */}
        <div className="mt-28 space-y-10">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="relative rounded-2xl p-8 bg-gradient-to-br from-[#0f172a] to-[#020617]
                         border border-white/5 shadow-xl group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <BookOpen className="text-cyan-400" size={26} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {pub.title}
                    </h3>
                    <p className="text-cyan-400 text-sm mt-1">
                      {pub.publisher} • {pub.year}
                    </p>
                  </div>
                </div>

                <a
                  href={pub.link}
                  className="flex items-center gap-1 text-cyan-400 hover:underline"
                >
                  View Publication <ExternalLink size={16} />
                </a>
              </div>

              <p className="text-gray-400 leading-relaxed">
                {pub.description}
              </p>

              {pub.note && (
                <p className="text-gray-500 text-sm mt-3">
                  {pub.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
