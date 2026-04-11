import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock, ChevronLeft, CheckCircle2, XCircle,
  Sparkles, BookOpen, RotateCcw, Trophy, Brain
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const examQuestions = [
  {
    id: 1,
    question: 'ما هي نهاية (x² - 9) / (x - 3) عندما x تقترب من 3؟',
    options: ['3', '6', '9', '0'],
    correct: 1,
    difficulty: 'سهل',
    explanation: 'بتحليل البسط: (x² - 9) = (x-3)(x+3)، بالتبسيط نحصل على (x+3). عند x=3: 3+3 = 6',
    relatedLesson: 'النهايات والاتصال',
  },
  {
    id: 2,
    question: 'إذا كانت f(x) = 2x³ - 5x + 1، فإن f\'(x) تساوي:',
    options: ['6x² - 5', '6x² + 5', '2x² - 5', '6x - 5'],
    correct: 0,
    difficulty: 'متوسط',
    explanation: 'باستخدام قاعدة الاشتقاق: مشتقة x^n = nx^(n-1). إذن 2(3)x² - 5(1) + 0 = 6x² - 5',
    relatedLesson: 'التفاضل',
  },
  {
    id: 3,
    question: 'مساحة المنطقة المحصورة بين المنحنى y = x² والمحور x من 0 إلى 2 تساوي:',
    options: ['4/3', '8/3', '2', '4'],
    correct: 1,
    difficulty: 'صعب',
    explanation: '∫₀² x² dx = [x³/3]₀² = 8/3 - 0 = 8/3',
    relatedLesson: 'التكامل',
  },
  {
    id: 4,
    question: 'إذا كان sin(θ) = 3/5 وθ في الربع الأول، فإن cos(θ) يساوي:',
    options: ['4/5', '3/4', '5/3', '5/4'],
    correct: 0,
    difficulty: 'متوسط',
    explanation: 'باستخدام المتطابقة: sin²θ + cos²θ = 1، إذن cos²θ = 1 - 9/25 = 16/25، cos θ = 4/5',
    relatedLesson: 'حساب المثلثات',
  },
  {
    id: 5,
    question: 'حل المعادلة: 2x² - 8x + 6 = 0',
    options: ['x = 1, x = 3', 'x = 2, x = 3', 'x = 1, x = 2', 'x = 2, x = 6'],
    correct: 0,
    difficulty: 'سهل',
    explanation: 'بالتحليل: 2(x² - 4x + 3) = 2(x-1)(x-3) = 0، إذن x = 1 أو x = 3',
    relatedLesson: 'المعادلات التربيعية',
  },
];

type ExamState = 'intro' | 'active' | 'review';

export default function ExamInterface() {
  const [examState, setExamState] = useState<ExamState>('intro');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(examQuestions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    if (examState !== 'active') return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          setExamState('review');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [examState]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '٠'.length > 1 ? '0' : '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (optIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = optIndex;
    setAnswers(newAnswers);
  };

  const score = answers.reduce<number>((acc, ans, i) => {
    return acc + (ans === examQuestions[i].correct ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / examQuestions.length) * 100);

  if (examState === 'intro') {
    return (
      <DashboardLayout>
        <div className="max-w-2xl mx-auto mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="bg-gradient-to-l from-rose-500 to-rose-600 p-8 text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-2">اختبار الرياضيات</h2>
              <p className="text-rose-100">الوحدة الرابعة - النهايات والاتصال والتفاضل</p>
            </div>
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{examQuestions.length}</p>
                  <p className="text-xs text-gray-500 mt-1">سؤال</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">١٠</p>
                  <p className="text-xs text-gray-500 mt-1">دقائق</p>
                </div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-bold text-amber-700 dark:text-amber-400">اختبار تكيّفي بالذكاء الاصطناعي</span>
                </div>
                <p className="text-xs text-amber-700/80 dark:text-amber-400/80">الأسئلة تتغير حسب مستواك. إذا أجبت صح، الأسئلة تصعب. وإذا أخطأت، تسهّل عليك.</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setExamState('active')}
                className="w-full py-4 bg-gradient-to-l from-rose-500 to-rose-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-rose-500/25 transition-shadow"
              >
                ابدأ الاختبار
              </motion.button>
            </div>
          </motion.div>
        </div>
      </DashboardLayout>
    );
  }

  if (examState === 'review') {
    return (
      <DashboardLayout>
        <div className="max-w-3xl mx-auto mt-4 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className={`p-8 text-center text-white ${percentage >= 60 ? 'bg-gradient-to-l from-emerald-500 to-emerald-600' : 'bg-gradient-to-l from-rose-500 to-rose-600'}`}>
              <Trophy className="w-12 h-12 mx-auto mb-3 opacity-90" />
              <h2 className="text-3xl font-bold mb-1">{percentage}٪</h2>
              <p className="opacity-80">{score} من {examQuestions.length} إجابة صحيحة</p>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-primary-600" />
                <h3 className="font-bold text-gray-900 dark:text-white">تحليل الذكاء الاصطناعي</h3>
              </div>
              <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-xl border border-primary-100 dark:border-primary-800 mb-6">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {percentage >= 80
                    ? 'أداء ممتاز! أنت متمكن من هذا الموضوع. أنصحك بالانتقال للوحدة التالية والتركيز على التكامل.'
                    : percentage >= 60
                      ? 'أداء جيد! لكن تحتاج مراجعة بعض المفاهيم. ركّز على الأسئلة اللي أخطأت فيها وراجع الشرح.'
                      : 'تحتاج مراجعة أكثر لهذا الموضوع. أنصحك بإعادة مشاهدة الدروس واستخدام المساعد الذكي للشرح.'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Review Answers */}
          {examQuestions.map((q, i) => {
            const isCorrect = answers[i] === q.correct;
            return (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white dark:bg-gray-900 rounded-2xl border p-6 ${
                  isCorrect ? 'border-emerald-200 dark:border-emerald-800' : 'border-rose-200 dark:border-rose-800'
                }`}
              >
                <div className="flex items-start gap-3 mb-4">
                  {isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                  )}
                  <div>
                    <p className="font-medium text-sm text-gray-900 dark:text-white">{q.question}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${
                      q.difficulty === 'سهل' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : q.difficulty === 'متوسط' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                          : 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400'
                    }`}>{q.difficulty}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {q.options.map((opt, j) => (
                    <div key={j} className={`px-3 py-2 rounded-xl text-sm border ${
                      j === q.correct ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300'
                        : answers[i] === j ? 'bg-rose-50 dark:bg-rose-900/20 border-rose-300 dark:border-rose-700 text-rose-800 dark:text-rose-300'
                          : 'border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400'
                    }`}>
                      {opt}
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl">
                  <div className="flex items-center gap-1 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-xs font-bold text-blue-700 dark:text-blue-400">شرح AI</span>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300">{q.explanation}</p>
                </div>
              </motion.div>
            );
          })}

          <div className="flex gap-3 pb-6">
            <motion.button whileTap={{ scale: 0.95 }}
              onClick={() => { setExamState('intro'); setAnswers(new Array(examQuestions.length).fill(null)); setCurrentQ(0); setTimeLeft(600); }}
              className="flex-1 py-3 bg-rose-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-rose-700">
              <RotateCcw className="w-4 h-4" /> إعادة الاختبار
            </motion.button>
            <Link to="/dashboard/subjects" className="flex-1 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-bold text-center flex items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700">
              <BookOpen className="w-4 h-4" /> مراجعة الدروس
            </Link>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  // Active exam
  const q = examQuestions[currentQ];

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto mt-4">
        {/* Timer & Progress */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-lg font-bold ${
              timeLeft < 60 ? 'bg-rose-100 dark:bg-rose-900/30 text-rose-600' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}>
              <Clock className="w-5 h-5" />
              {formatTime(timeLeft)}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {examQuestions.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentQ(i)}
                className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                  i === currentQ
                    ? 'bg-rose-600 text-white'
                    : answers[i] !== null
                      ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="p-6 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">سؤال {currentQ + 1} من {examQuestions.length}</span>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                  q.difficulty === 'سهل' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                    : q.difficulty === 'متوسط' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                      : 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400'
                }`}>{q.difficulty}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-relaxed">{q.question}</h3>
            </div>

            <div className="p-6 space-y-3">
              {q.options.map((opt, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleAnswer(i)}
                  className={`w-full text-right p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                    answers[currentQ] === i
                      ? 'border-rose-500 bg-rose-50 dark:bg-rose-900/20 text-rose-800 dark:text-rose-200'
                      : 'border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                    answers[currentQ] === i
                      ? 'bg-rose-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                  }`}>
                    {['أ', 'ب', 'ج', 'د'][i]}
                  </span>
                  <span className="text-sm font-medium">{opt}</span>
                </motion.button>
              ))}
            </div>

            <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex justify-between">
              <button
                onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
                disabled={currentQ === 0}
                className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-40"
              >
                السابق
              </button>
              {currentQ === examQuestions.length - 1 ? (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setExamState('review')}
                  className="px-6 py-2 bg-rose-600 text-white rounded-xl text-sm font-bold hover:bg-rose-700"
                >
                  إنهاء الاختبار
                </motion.button>
              ) : (
                <button
                  onClick={() => setCurrentQ(currentQ + 1)}
                  className="flex items-center gap-1 px-4 py-2 bg-rose-600 text-white rounded-xl text-sm font-medium hover:bg-rose-700"
                >
                  التالي
                  <ChevronLeft className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </DashboardLayout>
  );
}
