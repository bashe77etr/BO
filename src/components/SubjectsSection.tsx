import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Calculator, FlaskConical, Globe, Pen, Code, ArrowLeft } from 'lucide-react';

type Stage = 'elementary' | 'middle' | 'high';

const stages: { key: Stage; label: string; grades: string }[] = [
  { key: 'elementary', label: 'ابتدائي', grades: 'الصف ١ - ٦' },
  { key: 'middle', label: 'متوسط', grades: 'الصف ١ - ٣' },
  { key: 'high', label: 'ثانوي', grades: 'الصف ١ - ٣' },
];

const subjectsByStage: Record<Stage, { name: string; icon: typeof BookOpen; color: string }[]> = {
  elementary: [
    { name: 'الرياضيات', icon: Calculator, color: 'text-primary-600 bg-primary-50 dark:bg-primary-900/20' },
    { name: 'العلوم', icon: FlaskConical, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20' },
    { name: 'لغتي', icon: Pen, color: 'text-amber-600 bg-amber-50 dark:bg-amber-900/20' },
    { name: 'الدراسات الاجتماعية', icon: Globe, color: 'text-accent-600 bg-accent-50 dark:bg-accent-900/20' },
  ],
  middle: [
    { name: 'الرياضيات', icon: Calculator, color: 'text-primary-600 bg-primary-50 dark:bg-primary-900/20' },
    { name: 'العلوم', icon: FlaskConical, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20' },
    { name: 'لغتي الخالدة', icon: Pen, color: 'text-amber-600 bg-amber-50 dark:bg-amber-900/20' },
    { name: 'الدراسات الاجتماعية', icon: Globe, color: 'text-accent-600 bg-accent-50 dark:bg-accent-900/20' },
    { name: 'الحاسب وتقنية المعلومات', icon: Code, color: 'text-cyan-600 bg-cyan-50 dark:bg-cyan-900/20' },
  ],
  high: [
    { name: 'الرياضيات', icon: Calculator, color: 'text-primary-600 bg-primary-50 dark:bg-primary-900/20' },
    { name: 'الفيزياء', icon: FlaskConical, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20' },
    { name: 'الكيمياء', icon: FlaskConical, color: 'text-rose-600 bg-rose-50 dark:bg-rose-900/20' },
    { name: 'الأحياء', icon: BookOpen, color: 'text-green-600 bg-green-50 dark:bg-green-900/20' },
    { name: 'اللغة العربية', icon: Pen, color: 'text-amber-600 bg-amber-50 dark:bg-amber-900/20' },
    { name: 'الحاسب الآلي', icon: Code, color: 'text-cyan-600 bg-cyan-50 dark:bg-cyan-900/20' },
  ],
};

export default function SubjectsSection() {
  const [activeStage, setActiveStage] = useState<Stage>('middle');

  return (
    <section id="subjects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            المواد <span className="gradient-text">الدراسية</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            اختر مرحلتك واستعرض المواد المتاحة
          </p>
        </motion.div>

        {/* Stage Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {stages.map((stage) => (
            <button
              key={stage.key}
              onClick={() => setActiveStage(stage.key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeStage === stage.key
                  ? 'gradient-primary text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600'
              }`}
            >
              <span className="block">{stage.label}</span>
              <span className="block text-xs opacity-75 mt-1">{stage.grades}</span>
            </button>
          ))}
        </div>

        {/* Subjects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {subjectsByStage[activeStage].map((subject) => (
              <motion.div
                key={subject.name}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${subject.color} flex items-center justify-center`}>
                    <subject.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white">{subject.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">عرض الدروس</p>
                  </div>
                  <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-10">
          <Link
            to="/subjects"
            className="inline-flex items-center gap-2 px-6 py-3 text-primary-600 dark:text-primary-400 font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-xl transition-colors"
          >
            عرض جميع المواد
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
