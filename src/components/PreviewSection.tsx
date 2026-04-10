import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, Clock, Award, TrendingUp } from 'lucide-react';

export default function PreviewSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            نظرة على <span className="gradient-text">داخل المنصة</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            لوحة تحكم ذكية تعطيك صورة كاملة عن تقدمك
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Dashboard Preview */}
          <div className="rounded-3xl bg-white dark:bg-gray-800 shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            {/* Top bar */}
            <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 flex items-center gap-3 border-b border-gray-100 dark:border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 text-center text-sm text-gray-500 dark:text-gray-400">لوحة التحكم - منصة تعلّم</div>
            </div>

            <div className="p-6 sm:p-8">
              {/* Welcome */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">مرحبًا، أحمد!</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">الصف الثالث المتوسط - الفصل الدراسي الثاني</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { label: 'الدروس المكتملة', value: '٤٥', icon: BookOpen, color: 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' },
                  { label: 'الاختبارات', value: '١٢', icon: CheckCircle2, color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20' },
                  { label: 'ساعات الدراسة', value: '٣٨', icon: Clock, color: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20' },
                  { label: 'المعدل', value: '٩٢٪', icon: Award, color: 'text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/20' },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                    <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Progress bars */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    تقدم المواد
                  </h4>
                </div>
                {[
                  { name: 'الرياضيات', progress: 78, color: 'bg-primary-500' },
                  { name: 'العلوم', progress: 65, color: 'bg-emerald-500' },
                  { name: 'لغتي الخالدة', progress: 90, color: 'bg-amber-500' },
                  { name: 'الدراسات الاجتماعية', progress: 55, color: 'bg-accent-500' },
                ].map((subject) => (
                  <div key={subject.name} className="flex items-center gap-4">
                    <span className="w-36 text-sm font-medium text-gray-700 dark:text-gray-300">{subject.name}</span>
                    <div className="flex-1 h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${subject.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full ${subject.color} rounded-full`}
                      />
                    </div>
                    <span className="w-12 text-sm font-medium text-gray-600 dark:text-gray-400 text-left">{subject.progress}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
