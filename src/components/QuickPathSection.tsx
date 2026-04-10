import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Target, Search, Info } from 'lucide-react';

const paths = [
  {
    icon: BookOpen,
    title: 'ابدأ الدراسة',
    description: 'ادخل مباشرة إلى دروسك حسب مرحلتك وصفك الدراسي',
    href: '/subjects',
    color: 'bg-primary-500',
    lightBg: 'bg-primary-50 dark:bg-primary-900/20',
  },
  {
    icon: Target,
    title: 'تدريب القدرات والتحصيلي',
    description: 'استعد للاختبارات بتمارين ذكية ونماذج محاكاة',
    href: '/capabilities',
    color: 'bg-purple-500',
    lightBg: 'bg-purple-50 dark:bg-purple-900/20',
  },
  {
    icon: Search,
    title: 'تصفح المواد',
    description: 'استعرض جميع المواد والدروس المتاحة بحرية',
    href: '/subjects',
    color: 'bg-emerald-500',
    lightBg: 'bg-emerald-50 dark:bg-emerald-900/20',
  },
  {
    icon: Info,
    title: 'تعرف على المنصة',
    description: 'اكتشف كيف تعمل المنصة وما تقدمه لك',
    href: '/#how-it-works',
    color: 'bg-amber-500',
    lightBg: 'bg-amber-50 dark:bg-amber-900/20',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function QuickPathSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            اختر مسارك
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            وجهتك التعليمية تبدأ من هنا
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {paths.map((path) => (
            <motion.div key={path.title} variants={cardVariants}>
              <Link
                to={path.href}
                className="block group p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-700 transition-all duration-300 h-full"
              >
                <div className={`w-14 h-14 rounded-xl ${path.lightBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <path.icon className={`w-7 h-7 ${path.color === 'bg-primary-500' ? 'text-primary-600' : path.color === 'bg-purple-500' ? 'text-purple-600' : path.color === 'bg-emerald-500' ? 'text-emerald-600' : 'text-amber-600'} dark:opacity-90`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {path.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {path.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
