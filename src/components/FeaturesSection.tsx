import { motion } from 'framer-motion';
import { Brain, ClipboardCheck, TrendingUp, Target, Lightbulb, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'شرح ذكي بالذكاء الاصطناعي',
    description: 'شرح تفاعلي يتكيف مع مستواك ويقدم لك المعلومة بأبسط طريقة',
    color: 'text-primary-600 dark:text-primary-400',
    bg: 'bg-primary-50 dark:bg-primary-900/20',
  },
  {
    icon: ClipboardCheck,
    title: 'اختبارات تفاعلية',
    description: 'اختبر نفسك بأسئلة متنوعة مع تصحيح فوري وتحليل للأداء',
    color: 'text-accent-600 dark:text-accent-400',
    bg: 'bg-accent-50 dark:bg-accent-900/20',
  },
  {
    icon: TrendingUp,
    title: 'تتبع التقدم',
    description: 'تابع مستواك وتقدمك في كل مادة بإحصائيات دقيقة',
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
  },
  {
    icon: Target,
    title: 'تدريب على القدرات والتحصيلي',
    description: 'نماذج محاكاة حقيقية مع تحليل مفصل لأدائك',
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
  },
  {
    icon: Lightbulb,
    title: 'محتوى محدّث باستمرار',
    description: 'محتوى يتوافق مع أحدث المناهج السعودية المعتمدة',
    color: 'text-primary-700 dark:text-primary-400',
    bg: 'bg-primary-100 dark:bg-primary-900/20',
  },
  {
    icon: Users,
    title: 'تعلم تعاوني',
    description: 'شارك وتنافس مع زملائك لتحقيق أفضل النتائج',
    color: 'text-cyan-600 dark:text-cyan-400',
    bg: 'bg-cyan-50 dark:bg-cyan-900/20',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            مميزات تجعل التعلم <span className="gradient-text">أسهل</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            نوفر لك أدوات ذكية تساعدك على فهم المواد وتحقيق أفضل النتائج
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-5`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
