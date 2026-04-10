import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain, Calculator, BookOpen, Atom, Target, TrendingUp,
  Sparkles, Play, Award, Clock
} from 'lucide-react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const sections = [
  { id: 'quantitative', name: 'كمي', icon: Calculator, color: 'from-blue-500 to-blue-600', bgLight: 'bg-blue-50 dark:bg-blue-900/20', textColor: 'text-blue-600 dark:text-blue-400', score: 78, questions: 450, target: 85 },
  { id: 'verbal', name: 'لفظي', icon: BookOpen, color: 'from-purple-500 to-purple-600', bgLight: 'bg-purple-50 dark:bg-purple-900/20', textColor: 'text-purple-600 dark:text-purple-400', score: 65, questions: 380, target: 80 },
  { id: 'scientific', name: 'علمي', icon: Atom, color: 'from-emerald-500 to-emerald-600', bgLight: 'bg-emerald-50 dark:bg-emerald-900/20', textColor: 'text-emerald-600 dark:text-emerald-400', score: 72, questions: 320, target: 80 },
];

const practiceTopics = {
  quantitative: [
    { name: 'الحساب الذهني', level: 85, questions: 120 },
    { name: 'الجبر', level: 72, questions: 95 },
    { name: 'الهندسة', level: 60, questions: 80 },
    { name: 'الإحصاء والاحتمالات', level: 45, questions: 65 },
    { name: 'المقارنة الكمية', level: 78, questions: 90 },
  ],
  verbal: [
    { name: 'استيعاب المقروء', level: 70, questions: 100 },
    { name: 'إكمال الجمل', level: 58, questions: 85 },
    { name: 'التناظر اللفظي', level: 65, questions: 90 },
    { name: 'الخطأ السياقي', level: 62, questions: 55 },
    { name: 'المفردات', level: 75, questions: 50 },
  ],
  scientific: [
    { name: 'الفيزياء', level: 75, questions: 110 },
    { name: 'الكيمياء', level: 68, questions: 95 },
    { name: 'الأحياء', level: 72, questions: 70 },
    { name: 'الرياضيات', level: 80, questions: 45 },
  ],
};

const sampleQuestion = {
  question: 'إذا كان عدد طلاب الفصل ٣٠ طالبًا، ونسبة الناجحين ٨٠٪، فكم عدد الطلاب الراسبين؟',
  options: ['٤', '٦', '٨', '١٠'],
  correct: 1,
};

export default function CapabilitiesInterface() {
  const [activeSection, setActiveSection] = useState('quantitative');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const active = sections.find(s => s.id === activeSection)!;
  const topics = practiceTopics[activeSection as keyof typeof practiceTopics];

  const handleAnswer = (i: number) => {
    setSelectedAnswer(i);
    setShowResult(true);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">القدرات والتحصيلي</h2>
          <p className="text-gray-500 text-sm">تدريب ذكي مخصص لمستواك مع توقع درجتك</p>
        </motion.div>

        {/* AI Prediction Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-l from-purple-600 via-purple-700 to-purple-800 rounded-2xl p-6 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-medium text-purple-200">توقع الذكاء الاصطناعي</span>
              </div>
              <h3 className="text-3xl font-bold mb-1">درجتك المتوقعة: ٧٥ من ١٠٠</h3>
              <p className="text-purple-200 text-sm">بناءً على أدائك في ٨٥٠ سؤال تدريبي</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-center bg-white/10 rounded-xl px-5 py-3">
                <p className="text-2xl font-bold">٨٥</p>
                <p className="text-xs text-purple-200">الهدف</p>
              </div>
              <div className="text-center bg-white/10 rounded-xl px-5 py-3">
                <p className="text-2xl font-bold">٧٥</p>
                <p className="text-xs text-purple-200">الحالي</p>
              </div>
              <div className="text-center bg-amber-500/20 rounded-xl px-5 py-3">
                <p className="text-2xl font-bold text-amber-400">+١٠</p>
                <p className="text-xs text-amber-300">للهدف</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section Tabs */}
        <div className="flex gap-3">
          {sections.map((s) => (
            <motion.button
              key={s.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => { setActiveSection(s.id); setSelectedAnswer(null); setShowResult(false); }}
              className={`flex-1 p-4 rounded-2xl border-2 transition-all ${
                activeSection === s.id
                  ? `border-transparent bg-gradient-to-br ${s.color} text-white shadow-lg`
                  : 'border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-200'
              }`}
            >
              <s.icon className={`w-7 h-7 mx-auto mb-2 ${activeSection === s.id ? 'text-white' : s.textColor}`} />
              <p className={`text-sm font-bold ${activeSection === s.id ? '' : 'text-gray-900 dark:text-white'}`}>{s.name}</p>
              <p className={`text-xs mt-1 ${activeSection === s.id ? 'text-white/80' : 'text-gray-500'}`}>{s.score}٪ مستوى</p>
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Topics & Progress */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-bold text-gray-900 dark:text-white">المواضيع - {active.name}</h3>
                <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 px-3 py-1 rounded-full">{active.questions} سؤال</span>
              </div>
              <div className="space-y-4">
                {topics.map((topic, i) => (
                  <motion.div
                    key={topic.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{topic.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500">{topic.questions} سؤال</span>
                        <span className={`text-xs font-bold ${
                          topic.level >= 75 ? 'text-emerald-600' : topic.level >= 50 ? 'text-amber-600' : 'text-rose-600'
                        }`}>{topic.level}٪</span>
                      </div>
                    </div>
                    <div className="h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${topic.level}%` }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-l ${active.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sample Question */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-purple-600" />
                <h3 className="font-bold text-gray-900 dark:text-white">نموذج سؤال</h3>
              </div>
              <p className="text-sm text-gray-800 dark:text-gray-200 mb-4 leading-relaxed">{sampleQuestion.question}</p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {sampleQuestion.options.map((opt, i) => (
                  <motion.button
                    key={i}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleAnswer(i)}
                    disabled={showResult}
                    className={`p-3 rounded-xl text-sm font-medium border-2 transition-all ${
                      showResult
                        ? i === sampleQuestion.correct
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300'
                          : selectedAnswer === i
                            ? 'border-rose-500 bg-rose-50 dark:bg-rose-900/20 text-rose-800 dark:text-rose-300'
                            : 'border-gray-100 dark:border-gray-800 text-gray-500'
                        : selectedAnswer === i
                          ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300'
                          : 'border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-300'
                    }`}
                  >
                    {opt}
                  </motion.button>
                ))}
              </div>
              {showResult && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl">
                  <div className="flex items-center gap-1 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-xs font-bold text-blue-700 dark:text-blue-400">شرح AI</span>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    عدد الناجحين = ٣٠ × ٠.٨ = ٢٤ طالب. إذن عدد الراسبين = ٣٠ - ٢٤ = ٦ طلاب.
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-4">
            {/* AI Training Plan */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-accent-500" />
                <h3 className="font-bold text-gray-900 dark:text-white text-sm">خطة تدريب AI</h3>
              </div>
              <div className="space-y-3">
                {[
                  { task: 'تدريب الإحصاء والاحتمالات', time: '٢٠ دقيقة', priority: 'عالية' },
                  { task: 'مراجعة الهندسة', time: '١٥ دقيقة', priority: 'متوسطة' },
                  { task: 'اختبار تجريبي كمي', time: '٣٠ دقيقة', priority: 'عالية' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      item.priority === 'عالية' ? 'bg-rose-500' : 'bg-amber-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-xs font-medium text-gray-800 dark:text-gray-200">{item.task}</p>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3" /> {item.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5">
              <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-4">إحصائيات</h3>
              <div className="space-y-4">
                {[
                  { label: 'أسئلة تم حلها', value: '٨٥٠', icon: Target },
                  { label: 'ساعات التدريب', value: '٢٤', icon: Clock },
                  { label: 'اختبارات كاملة', value: '١٢', icon: Award },
                  { label: 'معدل التحسن', value: '+١٥٪', icon: TrendingUp },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <stat.icon className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Start Training Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 bg-gradient-to-l ${active.color} text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg`}
            >
              <Play className="w-5 h-5" />
              ابدأ التدريب الآن
            </motion.button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
