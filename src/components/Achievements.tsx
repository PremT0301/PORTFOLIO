import { Award, Users, Trophy } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Odoo Hackathon 2025 - Finalist',
    description:
      'Selected among top teams from 14,000+ participants in prestigious international hackathon, demonstrating exceptional problem-solving skills and technical innovation.',
    year: '2025',
  },
  {
    icon: Users,
    title: 'Student Coordinator - Tech Talks',
    organization: 'CHARUSAT University',
    description:
      'Led technical seminar series, coordinating industry expert sessions and facilitating knowledge transfer between academia and industry professionals.',
    year: '2024',
  },
];

export default function Achievements() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Achievements & Leadership
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 mr-4">
                    <Icon size={28} className="text-blue-600 dark:text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {achievement.title}
                      </h3>
                      <span className="text-sm font-semibold text-blue-600 dark:text-cyan-400 ml-2">
                        {achievement.year}
                      </span>
                    </div>
                    {achievement.organization && (
                      <p className="text-sm font-medium text-blue-600 dark:text-cyan-400 mb-2">
                        {achievement.organization}
                      </p>
                    )}
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
