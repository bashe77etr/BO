import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, BookText, FlaskConical, ArrowLeft, CheckCircle2, XCircle, Timer } from 'lucide-react';

type Section = 'quantitative' | 'verbal' | 'scientific';

const sectionsMeta: { key: Section; icon: typeof Brain; title: string; titleAr: string; description: string; color: string; gradient: string }[] = [
  {
    key: 'quantitative',
    icon: Brain,
    title: 'كمي',
    titleAr: 'القسم الكمي',
    description: 'أسئلة رياضية وتحليلية تقيس قدراتك في الأرقام والمنطق',
    color: 'text-primary-600 bg-primary-50 dark:bg-primary-900/20',
    gradient: 'from-primary-500 to-primary-600',
  },
  {
    key: 'verbal',
    icon: BookText,
    title: 'لفظي',
    titleAr: 'القسم اللفظي',
    description: 'أسئلة لغوية تقيس فهمك واستيعابك للنصوص والمفردات',
    color: 'text-accent-600 bg-accent-50 dark:bg-accent-900/20',
    gradient: 'from-accent-500 to-accent-600',
  },
  {
    key: 'scientific',
    icon: FlaskConical,
    title: 'علمي',
    titleAr: 'القسم العلمي',
    description: 'أسئلة في العلوم الطبيعية والرياضيات للتحصيلي',
    color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20',
    gradient: 'from-emerald-500 to-emerald-600',
  },
];

interface Question {
  text: string;
  options: string[];
  correct: number;
}

const sampleQuestions: Record<Section, Question[]> = {
  quantitative: [
    { text: 'إذا كان ٣س + ٥ = ٢٠، فما قيمة س؟', options: ['٣', '٤', '٥', '٦'], correct: 2 },
    { text: 'ما هو ٢٥٪ من ٢٠٠؟', options: ['٤٠', '٥٠', '٦٠', '٧٥'], correct: 1 },
    { text: 'إذا كان محيط مربع ٣٦ سم، ما مساحته؟', options: ['٦٤', '٧٢', '٨١', '١٠٠'], correct: 2 },
  ],
  verbal: [
    { text: 'ما مرادف كلمة "سرمدي"؟', options: ['مؤقت', 'أبدي', 'سريع', 'بطيء'], correct: 1 },
    { text: 'ما ضد كلمة "الوفرة"؟', options: ['الكثرة', 'الندرة', 'الزيادة', 'الوفاء'], correct: 1 },
    { text: 'أكمل: العلم نور و...', options: ['الجهل ظلام', 'المال كنز', 'الصبر جميل', 'العمل عبادة'], correct: 0 },
  ],
  scientific: [
    { text: 'ما الوحدة الأساسية لقياس القوة في النظام الدولي؟', options: ['جول', 'نيوتن', 'واط', 'باسكال'], correct: 1 },
    { text: 'ما العنصر الأكثر وفرة في القشرة الأرضية؟', options: ['الحديد', 'الألومنيوم', 'السيليكون', 'الأكسجين'], correct: 3 },
    { text: 'ما الغاز الذي تحتاجه النباتات في عملية البناء الضوئي؟', options: ['الأكسجين', 'النيتروجين', 'ثاني أكسيد الكربون', 'الهيدروجين'], correct: 2 },
  ],
};

export default function CapabilitiesPage() {
  const [activeSection, setActiveSection] = useState<Section>('quantitative');
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const questions = sampleQuestions[activeSection];
  const question = questions[currentQ];

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setCurrentQ((prev) => (prev + 1) % questions.length);
  };

  const switchSection = (section: Section) => {
    setActiveSection(section);
    setCurrentQ(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            القدرات <span className="gradient-text">والتحصيلي</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            استعد لاختبارات القدرات والتحصيلي بتدريبات ذكية وأسئلة تجريبية
          </p>
        </motion.div>

        {/* Section Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {sectionsMeta.map((section) => (
            <button
              key={section.key}
              onClick={() => switchSection(section.key)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeSection === section.key
                  ? 'gradient-primary text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300'
              }`}
            >
              <section.icon className="w-5 h-5" />
              <span>{section.titleAr}</span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Section Info */}
          <motion.div
            key={`info-${activeSection}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {sectionsMeta.map((section) => (
              <div
                key={section.key}
                className={`p-6 rounded-2xl bg-white dark:bg-gray-800 border transition-all ${
                  activeSection === section.key
                    ? 'border-primary-300 dark:border-primary-700 shadow-lg'
                    : 'border-gray-100 dark:border-gray-700'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center flex-shrink-0`}>
                    <section.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{section.titleAr}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{section.description}</p>
                  </div>
                </div>
              </div>
            ))}

            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white gradient-primary rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary-500/25 w-full justify-center"
            >
              ابدأ التدريب الكامل
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Interactive Quiz */}
          <motion.div
            key={`quiz-${activeSection}-${currentQ}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg overflow-hidden">
              <div className="gradient-primary p-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-white">
                  <Timer className="w-5 h-5" />
                  <span className="font-medium">سؤال تجريبي</span>
                </div>
                <span className="text-white/80 text-sm">
                  {currentQ + 1} / {questions.length}
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                  {question.text}
                </p>

                <div className="space-y-3 mb-6">
                  {question.options.map((option, index) => {
                    let buttonClass = 'bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600 text-gray-700 dark:text-gray-300';
                    if (showResult) {
                      if (index === question.correct) {
                        buttonClass = 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300';
                      } else if (index === selectedAnswer && index !== question.correct) {
                        buttonClass = 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700 text-red-700 dark:text-red-300';
                      }
                    } else if (selectedAnswer === index) {
                      buttonClass = 'bg-primary-50 dark:bg-primary-900/20 border-primary-300 dark:border-primary-700 text-primary-700 dark:text-primary-300';
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-right ${buttonClass}`}
                      >
                        <span className="w-8 h-8 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {String.fromCharCode(1571 + index)}
                        </span>
                        <span className="font-medium flex-1">{option}</span>
                        {showResult && index === question.correct && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        )}
                        {showResult && index === selectedAnswer && index !== question.correct && (
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {showResult && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <div className={`p-4 rounded-xl mb-4 ${
                      selectedAnswer === question.correct
                        ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300'
                        : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                    }`}>
                      <p className="font-medium">
                        {selectedAnswer === question.correct ? 'إجابة صحيحة! أحسنت' : `إجابة خاطئة. الإجابة الصحيحة: ${question.options[question.correct]}`}
                      </p>
                    </div>
                    <button
                      onClick={nextQuestion}
                      className="w-full py-3 rounded-xl font-semibold gradient-primary text-white hover:opacity-90 transition-all"
                    >
                      السؤال التالي
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
