import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator, Atom, FlaskConical, Globe, PenTool,
  Laptop, ChevronLeft, Sparkles, Brain, FileText, Play,
  CheckCircle2, Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const subjects = [
  { id: 1, name: 'الرياضيات', icon: Calculator, color: 'from-blue-500 to-blue-600', bgLight: 'bg-blue-50 dark:bg-blue-900/20', textColor: 'text-blue-600 dark:text-blue-400', progress: 72, units: 8, completedUnits: 5, grade: '٨٥٪' },
  { id: 2, name: 'الفيزياء', icon: Atom, color: 'from-purple-500 to-purple-600', bgLight: 'bg-purple-50 dark:bg-purple-900/20', textColor: 'text-purple-600 dark:text-purple-400', progress: 58, units: 7, completedUnits: 4, grade: '٧٨٪' },
  { id: 3, name: 'الكيمياء', icon: FlaskConical, color: 'from-emerald-500 to-emerald-600', bgLight: 'bg-emerald-50 dark:bg-emerald-900/20', textColor: 'text-emerald-600 dark:text-emerald-400', progress: 45, units: 6, completedUnits: 3, grade: '٧٢٪' },
  { id: 4, name: 'اللغة العربية', icon: PenTool, color: 'from-amber-500 to-amber-600', bgLight: 'bg-amber-50 dark:bg-amber-900/20', textColor: 'text-amber-600 dark:text-amber-400', progress: 80, units: 9, completedUnits: 7, grade: '٩٢٪' },
  { id: 5, name: 'اللغة الإنجليزية', icon: Globe, color: 'from-rose-500 to-rose-600', bgLight: 'bg-rose-50 dark:bg-rose-900/20', textColor: 'text-rose-600 dark:text-rose-400', progress: 65, units: 8, completedUnits: 5, grade: '٧٥٪' },
  { id: 6, name: 'الحاسب وتقنية المعلومات', icon: Laptop, color: 'from-cyan-500 to-cyan-600', bgLight: 'bg-cyan-50 dark:bg-cyan-900/20', textColor: 'text-cyan-600 dark:text-cyan-400', progress: 90, units: 5, completedUnits: 4, grade: '٩٥٪' },
];

const mathLessons = [
  { id: 1, title: 'المعادلات الخطية', status: 'completed', duration: '٤٥ دقيقة' },
  { id: 2, title: 'المعادلات التربيعية', status: 'completed', duration: '٥٠ دقيقة' },
  { id: 3, title: 'كثيرات الحدود', status: 'completed', duration: '٤٠ دقيقة' },
  { id: 4, title: 'النهايات والاتصال', status: 'current', duration: '٥٥ دقيقة' },
  { id: 5, title: 'التفاضل', status: 'locked', duration: '٦٠ دقيقة' },
  { id: 6, title: 'التكامل', status: 'locked', duration: '٦٠ دقيقة' },
];

export default function SubjectsInterface() {
  const [selectedSubject, setSelectedSubject] = useState<number | null>(null);
  const [aiAction, setAiAction] = useState<string | null>(null);

  const selected = subjects.find(s => s.id === selectedSubject);

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">المواد الدراسية</h2>
          <p className="text-gray-500 text-sm">الصف الثالث الثانوي - المسار العلمي</p>
        </motion.div>

        {/* Subject Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subject, i) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedSubject(subject.id)}
              className={`cursor-pointer rounded-2xl p-5 border transition-all ${
                selectedSubject === subject.id
                  ? 'border-primary-400 dark:border-primary-600 shadow-lg shadow-primary-500/10'
                  : 'border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700'
              } bg-white dark:bg-gray-900`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${subject.color} flex items-center justify-center text-white`}>
                  <subject.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-gray-500">{subject.grade}</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">{subject.name}</h3>
              <p className="text-xs text-gray-500 mb-3">{subject.completedUnits} من {subject.units} وحدات مكتملة</p>
              <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${subject.progress}%` }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`h-full rounded-full bg-gradient-to-l ${subject.color}`}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-400">{subject.progress}٪ مكتمل</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subject Detail */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                {/* Subject Header */}
                <div className={`bg-gradient-to-l ${selected.color} p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <selected.icon className="w-8 h-8" />
                      <div>
                        <h3 className="text-xl font-bold">{selected.name}</h3>
                        <p className="text-sm opacity-80">{selected.completedUnits} من {selected.units} وحدات مكتملة</p>
                      </div>
                    </div>
                    <button onClick={() => setSelectedSubject(null)} className="text-white/80 hover:text-white">
                      <ChevronLeft className="w-6 h-6 rotate-180" />
                    </button>
                  </div>
                </div>

                {/* AI Action Buttons */}
                <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex flex-wrap gap-2">
                  {[
                    { key: 'explain', label: 'اشرح لي الدرس', icon: Brain },
                    { key: 'summary', label: 'لخص لي', icon: FileText },
                    { key: 'questions', label: 'حول إلى أسئلة', icon: Sparkles },
                  ].map(btn => (
                    <motion.button
                      key={btn.key}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setAiAction(aiAction === btn.key ? null : btn.key)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        aiAction === btn.key
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      <btn.icon className="w-4 h-4" />
                      {btn.label}
                    </motion.button>
                  ))}
                </div>

                {/* AI Response */}
                {aiAction && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mx-4 mt-4 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-100 dark:border-primary-800"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-primary-600" />
                      <span className="text-sm font-bold text-primary-700 dark:text-primary-400">المساعد الذكي</span>
                    </div>
                    {aiAction === 'explain' && (
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        درس النهايات والاتصال هو أساس التفاضل والتكامل. ببساطة، النهاية هي القيمة التي تقترب منها الدالة عندما يقترب المتغير من قيمة معينة. مثال: نهاية (2x + 1) عندما x تقترب من 3 تساوي 7. الاتصال يعني أن الدالة ليس فيها "قفزات" أو "ثقوب" عند نقطة معينة.
                      </p>
                    )}
                    {aiAction === 'summary' && (
                      <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        <p className="font-semibold">ملخص الوحدة الرابعة - النهايات والاتصال:</p>
                        <ul className="list-disc list-inside space-y-1 mr-2">
                          <li>النهاية: القيمة التي تقترب منها الدالة</li>
                          <li>خصائص النهايات: الجمع، الطرح، الضرب، القسمة</li>
                          <li>الاتصال: الدالة متصلة إذا كانت النهاية تساوي قيمة الدالة</li>
                          <li>أنواع عدم الاتصال: قابل للإزالة، قفزي، لا نهائي</li>
                        </ul>
                      </div>
                    )}
                    {aiAction === 'questions' && (
                      <div className="text-sm text-gray-700 dark:text-gray-300 space-y-3">
                        <p className="font-semibold">أسئلة مولّدة بالذكاء الاصطناعي:</p>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                            <p>س١: أوجد نهاية (x² - 4) / (x - 2) عندما x → 2</p>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                            <p>س٢: هل الدالة f(x) = |x| متصلة عند x = 0؟ علل إجابتك.</p>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                            <p>س٣: حدد نوع عدم الاتصال للدالة f(x) = 1/x عند x = 0</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Lessons List */}
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">الدروس</h4>
                  <div className="space-y-2">
                    {mathLessons.map((lesson) => (
                      <Link
                        key={lesson.id}
                        to={lesson.status !== 'locked' ? '/dashboard/lesson' : '#'}
                        className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                          lesson.status === 'current'
                            ? 'border-primary-300 dark:border-primary-700 bg-primary-50/50 dark:bg-primary-900/10'
                            : lesson.status === 'locked'
                              ? 'border-gray-100 dark:border-gray-800 opacity-50'
                              : 'border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {lesson.status === 'completed' ? (
                            <CheckCircle2 className="w-5 h-5 text-primary-600" />
                          ) : lesson.status === 'current' ? (
                            <Play className="w-5 h-5 text-primary-600" />
                          ) : (
                            <Lock className="w-5 h-5 text-gray-400" />
                          )}
                          <span className={`text-sm font-medium ${
                            lesson.status === 'locked' ? 'text-gray-400' : 'text-gray-900 dark:text-white'
                          }`}>{lesson.title}</span>
                        </div>
                        <span className="text-xs text-gray-500">{lesson.duration}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </DashboardLayout>
  );
}
