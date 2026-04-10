import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Calculator, FlaskConical, Globe, Pen, Code, ArrowLeft, Lock, Play } from 'lucide-react';

type Stage = 'elementary' | 'middle' | 'high';

const stages: { key: Stage; label: string; grades: string }[] = [
  { key: 'elementary', label: 'ابتدائي', grades: 'الصف ١ - ٦' },
  { key: 'middle', label: 'متوسط', grades: 'الصف ١ - ٣' },
  { key: 'high', label: 'ثانوي', grades: 'الصف ١ - ٣' },
];

const subjectsByStage: Record<Stage, { name: string; icon: typeof BookOpen; color: string; lessonsCount: number; previewAvailable: boolean }[]> = {
  elementary: [
    { name: 'الرياضيات', icon: Calculator, color: 'text-primary-600 bg-primary-50 dark:bg-primary-900/20', lessonsCount: 48, previewAvailable: true },
    { name: 'العلوم', icon: FlaskConical, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20', lessonsCount: 36, previewAvailable: true },
    { name: 'لغتي', icon: Pen, color: 'text-amber-600 bg-amber-50 dark:bg-amber-900/20', lessonsCount: 52, previewAvailable: true },
    { name: 'الدراسات الاجتماعية', icon: Globe, color: 'text-accent-600 bg-accent-50 dark:bg-accent-900/20', lessonsCount: 30, previewAvailable: false },
  ],
  middle: [
    { name: 'الرياضيات', icon: Calculator, color: 'text-primary-600 bg-primary-50 dark:bg-primary-900/20', lessonsCount: 60, previewAvailable: true },
    { name: 'العلوم', icon: FlaskConical, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20', lessonsCount: 45, previewAvailable: true },
    { name: 'لغتي الخالدة', icon: Pen, color: 'text-amber-600 bg-amber-50 dark:bg-amber-900/20', lessonsCount: 55, previewAvailable: true },
    { name: 'الدراسات الاجتماعية', icon: Globe, color: 'text-accent-600 bg-accent-50 dark:bg-accent-900/20', lessonsCount: 35, previewAvailable: false },
    { name: 'الحاسب وتقنية المعلومات', icon: Code, color: 'text-cyan-600 bg-cyan-50 dark:bg-cyan-900/20', lessonsCount: 28, previewAvailable: true },
  ],
  high: [
    { name: 'الرياضيات', icon: Calculator, color: 'text-primary-600 bg-primary-50 dark:bg-primary-900/20', lessonsCount: 72, previewAvailable: true },
    { name: 'الفيزياء', icon: FlaskConical, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20', lessonsCount: 50, previewAvailable: true },
    { name: 'الكيمياء', icon: FlaskConical, color: 'text-rose-600 bg-rose-50 dark:bg-rose-900/20', lessonsCount: 48, previewAvailable: true },
    { name: 'الأحياء', icon: BookOpen, color: 'text-green-600 bg-green-50 dark:bg-green-900/20', lessonsCount: 42, previewAvailable: false },
    { name: 'اللغة العربية', icon: Pen, color: 'text-amber-600 bg-amber-50 dark:bg-amber-900/20', lessonsCount: 58, previewAvailable: true },
    { name: 'الحاسب الآلي', icon: Code, color: 'text-cyan-600 bg-cyan-50 dark:bg-cyan-900/20', lessonsCount: 32, previewAvailable: true },
  ],
};

export default function SubjectsPage() {
  const [activeStage, setActiveStage] = useState<Stage>('middle');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            المواد <span className="gradient-text">الدراسية</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            استعرض جميع المواد المتاحة واختر ما تريد دراسته
          </p>
        </motion.div>

        {/* Stage Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {stages.map((stage) => (
            <button
              key={stage.key}
              onClick={() => setActiveStage(stage.key)}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeStage === stage.key
                  ? 'gradient-primary text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300'
              }`}
            >
              <span className="block text-lg">{stage.label}</span>
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
            {subjectsByStage[activeStage].map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl ${subject.color} flex items-center justify-center`}>
                      <subject.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{subject.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{subject.lessonsCount} درس</p>
                    </div>
                  </div>

                  {/* Sample lessons */}
                  <div className="space-y-2 mb-4">
                    {['الدرس الأول', 'الدرس الثاني', 'الدرس الثالث'].map((lesson, i) => (
                      <div key={lesson} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                        <div className="flex items-center gap-2">
                          {subject.previewAvailable && i === 0 ? (
                            <Play className="w-4 h-4 text-primary-500" />
                          ) : (
                            <Lock className="w-4 h-4 text-gray-400" />
                          )}
                          <span className="text-sm text-gray-700 dark:text-gray-300">{lesson}</span>
                        </div>
                        {subject.previewAvailable && i === 0 && (
                          <span className="text-xs text-primary-600 dark:text-primary-400 font-medium">مجاني</span>
                        )}
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/signup"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-semibold hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                  >
                    عرض الدروس
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
