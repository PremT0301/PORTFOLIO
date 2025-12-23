import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex items-center justify-center border-4 border-blue-200 dark:border-blue-800 overflow-hidden">

              {/* Profile Image */}
              <img
                src="images/5.jpg" // pass your image URL here
                alt="Profile"
                className="w-full h-full object-cover rounded-2xl"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />

              {/* Fallback Icon (shows if image not present)
              {!imageUrl && (
                <User size={120} className="text-blue-600 dark:text-cyan-400" />
              )} */}

              {/* Overlay Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/10 to-cyan-600/10 pointer-events-none"></div>
            </div>
          </div>


          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a <span className="font-semibold text-blue-600 dark:text-cyan-400">Computer Science Engineer</span> specializing in Data Science and Artificial Intelligence, with hands-on experience delivering high-impact, data-driven solutions across machine learning, data analytics, and full-stack development. My work includes building customer churn prediction models achieving 78% F1-score and developing real-time AI applications with over 90% accuracy, translating complex models into measurable business outcomes.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Through internships and collaborative academic projects, I have gained strong expertise in data analytics, statistical modeling, feature engineering, and end-to-end ML deployment, along with the ability to extract actionable insights from large datasets and support data-driven decision-making through intuitive visualizations and dashboards.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Alongside AI and analytics, I bring full-stack development experience, enabling me to design and deploy scalable, production-ready applications that integrate intelligent systems with modern web technologies. I am passionate about bridging advanced AI with real-world business needs and am actively seeking opportunities to contribute to innovative data science teams driving technological and business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
