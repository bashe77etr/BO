import { motion } from 'framer-motion';
import { UserPlus, Layers, PlayCircle, CheckSquare, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'أنشئ حسابك',
    description: 'سجّل مجانًا في ثوانٍ وابدأ رحلتك التعليمية',
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: Layers,
    title: 'اختر مرحلتك',
    description: 'حدد مرحلتك الدراسية وصفك لعرض المحتوى المناسب',
    color: 'from-accent-500 to-accent-600',
  },
  {
    icon: PlayCircle,
    title: 'ابدأ التعلم',
    description: 'تابع الدروس التفاعلية والشروحات الذكية',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: CheckSquare,
    title: 'اختبر نفسك',
    description: 'حل التمارين والاختبارات لتعزيز فهمك',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: BarChart3,
    title: 'تابع تقدمك',
    description: 'شاهد إحصائياتك وتطورك بشكل مستمر',
    color: 'from-rose-500 to-rose-600',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            كيف تعمل <span className="gradient-text">المنصة؟</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            خمس خطوات بسيطة تفصلك عن تجربة تعليمية مميزة
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 right-0 left-0 h-0.5 bg-gradient-to-l from-primary-200 via-accent-200 to-primary-300 dark:from-primary-800 dark:via-accent-800 dark:to-primary-700 -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative text-center"
              >
                <div className="relative z-10 mb-4 flex justify-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute -top-2 right-1/2 translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-gray-900 border-2 border-primary-300 dark:border-primary-700 flex items-center justify-center text-sm font-bold text-primary-600 dark:text-primary-400 z-20 lg:hidden">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
