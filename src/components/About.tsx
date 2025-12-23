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
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex items-center justify-center border-4 border-blue-200 dark:border-blue-800">
              <User size={120} className="text-blue-600 dark:text-cyan-400" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/10 to-cyan-600/10"></div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a <span className="font-semibold text-blue-600 dark:text-cyan-400">Computer Science Engineer</span> specializing
              in Data Science and Artificial Intelligence, with a proven track record of delivering impactful solutions through
              data-driven approaches. My experience spans from customer churn prediction models achieving 78% F1-scores to
              developing real-time AI applications with 90% accuracy.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Through internships at leading tech companies and collaborative academic projects, I've honed my expertise in
              machine learning, data preprocessing, and end-to-end model deployment. I'm passionate about leveraging AI to
              create meaningful solutions that bridge the gap between complex algorithms and practical business needs.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently seeking opportunities to contribute to innovative data science teams where I can apply my technical
              skills and analytical mindset to drive business growth and technological advancement.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years Experience</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Projects Completed</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400">2</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Publications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
