import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, BookText, FlaskConical, ArrowLeft } from 'lucide-react';

const sections = [
  {
    icon: Brain,
    title: 'القسم الكمي',
    description: 'أسئلة رياضية وتحليلية تقيس قدراتك في الأرقام والمنطق',
    color: 'from-primary-500 to-primary-600',
    questions: 'أكثر من ١٠٠٠ سؤال',
  },
  {
    icon: BookText,
    title: 'القسم اللفظي',
    description: 'أسئلة لغوية تقيس فهمك واستيعابك للنصوص والمفردات',
    color: 'from-purple-500 to-purple-600',
    questions: 'أكثر من ٨٠٠ سؤال',
  },
  {
    icon: FlaskConical,
    title: 'القسم العلمي',
    description: 'أسئلة في العلوم الطبيعية والرياضيات للتحصيلي',
    color: 'from-emerald-500 to-emerald-600',
    questions: 'أكثر من ١٢٠٠ سؤال',
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              القدرات <span className="gradient-text">والتحصيلي</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              استعد لاختبارات القدرات والتحصيلي بتدريبات ذكية ونماذج محاكاة حقيقية تساعدك على تحقيق أعلى الدرجات
            </p>

            {/* Sample Question */}
            <div className="p-6 rounded-2xl bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 mb-6">
              <p className="text-sm font-medium text-primary-700 dark:text-primary-300 mb-3">نموذج سؤال:</p>
              <p className="text-gray-800 dark:text-gray-200 font-medium mb-4">
                إذا كان عدد طلاب الفصل ٣٠ طالبًا، ونسبة الناجحين ٨٠٪، فكم عدد الطلاب الراسبين؟
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['٤', '٦', '٨', '١٠'].map((answer, i) => (
                  <button
                    key={answer}
                    className={`p-3 rounded-xl text-center font-medium transition-all ${
                      i === 1
                        ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-2 border-emerald-300 dark:border-emerald-700'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600'
                    }`}
                  >
                    {answer}
                  </button>
                ))}
              </div>
            </div>

            <Link
              to="/capabilities"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white gradient-primary rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary-500/25"
            >
              ابدأ التدريب الآن
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: -5 }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center flex-shrink-0`}>
                    <section.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{section.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{section.description}</p>
                    <p className="text-xs text-primary-600 dark:text-primary-400 font-medium mt-2">{section.questions}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
