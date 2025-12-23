import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex items-center justify-center border-2 border-white dark:border-gray-800 overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]">
                {/* Profile Image */}
                <img
                  src="images/5.JPG"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/10 to-cyan-600/10 pointer-events-none mix-blend-overlay"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a <span className="font-semibold text-blue-600 dark:text-cyan-400">Computer Science Engineer</span> specializing in Data Science and Artificial Intelligence, with hands-on experience delivering high-impact, data-driven solutions across machine learning, data analytics, and full-stack development. My work includes building customer churn prediction models achieving 78% F1-score and developing real-time AI applications with over 90% accuracy, translating complex models into measurable business outcomes.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Through internships and collaborative academic projects, I have gained strong expertise in data analytics, statistical modeling, feature engineering, and end-to-end ML deployment, along with the ability to extract actionable insights from large datasets and support data-driven decision-making through intuitive visualizations and dashboards.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Alongside AI and analytics, I bring full-stack development experience, enabling me to design and deploy scalable, production-ready applications that integrate intelligent systems with modern web technologies. I am passionate about bridging advanced AI with real-world business needs and am actively seeking opportunities to contribute to innovative data science teams driving technological and business growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
