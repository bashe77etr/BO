import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator, Atom, FlaskConical, Globe, PenTool,
  Laptop, ChevronLeft, ChevronDown, Sparkles, Brain, FileText, Play,
  CheckCircle2, BookOpen, Book
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import { useAuth } from '../../context/AuthContext';
import { getSubjectsForStudent, getStageLabel, getGradeLabel } from '../../data/saudiCurriculum';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calculator, Atom, FlaskConical, Globe, PenTool, Laptop, BookOpen, Book,
};

export default function SubjectsInterface() {
  const { user } = useAuth();
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const [aiAction, setAiAction] = useState<string | null>(null);

  const stage = user?.stage || 'ثانوي';
  const grade = user?.grade || 'الثالث';
  const subjects = getSubjectsForStudent(stage, grade);
  const stageLabel = getStageLabel(stage);
  const gradeLabel = getGradeLabel(stage, grade);

  const selected = subjects.find(s => s.id === selectedSubjectId);

  const getIcon = (iconName: string) => iconMap[iconName] || BookOpen;

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">المواد الدراسية</h2>
          <p className="text-gray-500 text-sm">{stageLabel} - {gradeLabel}</p>
        </motion.div>

        {/* Subject Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subject, i) => {
            const IconComp = getIcon(subject.icon);
            const totalLessons = subject.chapters.reduce((sum, ch) => sum + ch.lessons.length, 0);
            return (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                onClick={() => {
                  setSelectedSubjectId(subject.id);
                  setExpandedChapter(null);
                  setAiAction(null);
                }}
                className={`cursor-pointer rounded-2xl p-5 border transition-all ${
                  selectedSubjectId === subject.id
                    ? 'border-primary-400 dark:border-primary-600 shadow-lg shadow-primary-500/10'
                    : 'border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700'
                } bg-white dark:bg-gray-900`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${subject.color} flex items-center justify-center text-white`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium text-gray-500">{subject.chapters.length} فصول</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{subject.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{totalLessons} درس - {subject.chapters.length} فصول</p>
                <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '0%' }}
                    className={`h-full rounded-full bg-gradient-to-l ${subject.color}`}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-gray-400">ابدأ الدراسة</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Subject Detail with Chapters and Lessons */}
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
                      {(() => { const IC = getIcon(selected.icon); return <IC className="w-8 h-8" />; })()}
                      <div>
                        <h3 className="text-xl font-bold">{selected.name}</h3>
                        <p className="text-sm opacity-80">{selected.chapters.length} فصول - {selected.chapters.reduce((s, c) => s + c.lessons.length, 0)} درس</p>
                      </div>
                    </div>
                    <button onClick={() => setSelectedSubjectId(null)} className="text-white/80 hover:text-white">
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
                        هذه المادة تحتوي على {selected.chapters.length} فصول. كل فصل يتضمن دروس متنوعة تغطي المنهج السعودي بالكامل. اختر فصلاً للبدء بالتعلم، وسأساعدك في شرح كل درس بطريقة مبسطة ومناسبة لمستواك.
                      </p>
                    )}
                    {aiAction === 'summary' && (
                      <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        <p className="font-semibold">ملخص مادة {selected.name}:</p>
                        <ul className="list-disc list-inside space-y-1 mr-2">
                          {selected.chapters.map(ch => (
                            <li key={ch.id}>{ch.title} ({ch.lessons.length} دروس)</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {aiAction === 'questions' && (
                      <div className="text-sm text-gray-700 dark:text-gray-300 space-y-3">
                        <p className="font-semibold">أسئلة مولّدة بالذكاء الاصطناعي من مادة {selected.name}:</p>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                            <p>س١: ما هي أهم المفاهيم في فصل &quot;{selected.chapters[0]?.title}&quot;؟</p>
                          </div>
                          {selected.chapters[1] && (
                            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                              <p>س٢: قارن بين المفاهيم في &quot;{selected.chapters[0]?.title}&quot; و&quot;{selected.chapters[1]?.title}&quot;</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Chapters List */}
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">الفصول والدروس</h4>
                  <div className="space-y-3">
                    {selected.chapters.map((chapter, ci) => (
                      <div key={chapter.id} className="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden">
                        {/* Chapter Header */}
                        <button
                          onClick={() => setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)}
                          className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${selected.color} flex items-center justify-center text-white text-sm font-bold`}>
                              {ci + 1}
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-sm text-gray-900 dark:text-white">{chapter.title}</p>
                              <p className="text-xs text-gray-500">{chapter.lessons.length} دروس</p>
                            </div>
                          </div>
                          <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedChapter === chapter.id ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Lessons */}
                        <AnimatePresence>
                          {expandedChapter === chapter.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="border-t border-gray-100 dark:border-gray-800 px-4 py-2 space-y-1">
                                {chapter.lessons.map((lesson) => (
                                  <Link
                                    key={lesson.id}
                                    to="/dashboard/lesson"
                                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                  >
                                    <div className="flex items-center gap-3">
                                      {lesson.type === 'lesson' ? (
                                        <Play className="w-4 h-4 text-primary-600" />
                                      ) : lesson.type === 'activity' ? (
                                        <Sparkles className="w-4 h-4 text-amber-500" />
                                      ) : (
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                      )}
                                      <span className="text-sm text-gray-800 dark:text-gray-200">{lesson.title}</span>
                                    </div>
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                                      lesson.type === 'lesson' ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400' :
                                      lesson.type === 'activity' ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400' :
                                      'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400'
                                    }`}>
                                      {lesson.type === 'lesson' ? 'درس' : lesson.type === 'activity' ? 'نشاط' : 'مراجعة'}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
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
