import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, ChevronLeft, Sparkles, Brain, Volume2,
  FileText, HelpCircle, MessageSquare,
  Lightbulb, Send
} from 'lucide-react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const lessonContent = {
  title: 'النهايات والاتصال',
  subject: 'الرياضيات',
  unit: 'الوحدة الرابعة',
  sections: [
    {
      title: 'مفهوم النهاية',
      content: `النهاية هي مفهوم أساسي في التفاضل والتكامل. عندما نقول أن نهاية الدالة f(x) عندما x تقترب من a تساوي L، فإننا نعني أن قيم f(x) تقترب من L كلما اقتربت x من a.

رياضياً نكتب: lim(x→a) f(x) = L

مثال: إذا كانت f(x) = 2x + 1، فإن:
lim(x→3) f(x) = 2(3) + 1 = 7

هذا يعني أنه كلما اقتربت x من 3، فإن قيمة الدالة تقترب من 7.`,
    },
    {
      title: 'خصائص النهايات',
      content: `توجد عدة خصائص مهمة للنهايات:

١. نهاية المجموع = مجموع النهايات
lim[f(x) + g(x)] = lim f(x) + lim g(x)

٢. نهاية الفرق = فرق النهايات
lim[f(x) - g(x)] = lim f(x) - lim g(x)

٣. نهاية الضرب = ضرب النهايات
lim[f(x) · g(x)] = lim f(x) · lim g(x)

٤. نهاية القسمة = قسمة النهايات (بشرط المقام ≠ 0)
lim[f(x)/g(x)] = lim f(x) / lim g(x)`,
    },
    {
      title: 'الاتصال',
      content: `الدالة f(x) تكون متصلة عند النقطة x = a إذا تحققت ثلاثة شروط:

١. الدالة f(a) معرّفة (موجودة)
٢. النهاية lim(x→a) f(x) موجودة
٣. lim(x→a) f(x) = f(a)

أنواع عدم الاتصال:
• عدم اتصال قابل للإزالة: عندما تكون النهاية موجودة لكن لا تساوي قيمة الدالة
• عدم اتصال قفزي: عندما تكون النهاية من اليمين ≠ النهاية من اليسار
• عدم اتصال لا نهائي: عندما تقترب الدالة من ∞ أو -∞`,
    },
  ],
};

const aiResponses: Record<string, string> = {
  explain: 'تخيل أنك تمشي في طريق نحو بيت صديقك. النهاية هي البيت نفسه - حتى لو ما وصلت بالضبط، أنت تعرف وين رايح. نفس الشيء مع الدالة - النهاية هي القيمة اللي الدالة "رايحة لها" حتى لو ما وصلت بالضبط.',
  simplify: 'النهاية = وين رايحة الدالة\nالاتصال = الدالة وصلت فعلاً\n\nلو الدالة ما وصلت = في مشكلة (عدم اتصال)',
  quiz: 'سؤال ١: ما هي نهاية (3x - 2) عندما x → 4؟\n\nأ) 8\nب) 10\nج) 12\nد) 14',
};

export default function LessonView() {
  const [currentSection, setCurrentSection] = useState(0);
  const [aiPanelOpen, setAiPanelOpen] = useState(true);
  const [activeAI, setActiveAI] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<{ role: string; text: string }[]>([
    { role: 'ai', text: 'أهلاً! أنا مساعدك لهذا الدرس. اسألني أي سؤال عن النهايات والاتصال.' },
  ]);
  const [chatInput, setChatInput] = useState('');

  const section = lessonContent.sections[currentSection];

  const handleChatSend = () => {
    if (!chatInput.trim()) return;
    setChatMessages(prev => [...prev, { role: 'user', text: chatInput }]);
    const input = chatInput;
    setChatInput('');
    setTimeout(() => {
      let response = 'سؤال ممتاز! ';
      if (input.includes('نهاية') || input.includes('limit')) {
        response += 'النهاية تعبر عن السلوك التقريبي للدالة. عندما نحسب النهاية، نراقب كيف تتغير قيم الدالة كلما اقتربنا من نقطة معينة.';
      } else if (input.includes('اتصال') || input.includes('متصلة')) {
        response += 'الاتصال يعني أن الدالة "سلسة" بدون قفزات أو ثقوب. تخيل أنك ترسم خط بدون رفع القلم - هذا هو الاتصال!';
      } else {
        response += 'يمكنني مساعدتك في فهم أي جزء من الدرس. حاول أن تسأل عن مفهوم محدد مثل النهاية أو الاتصال.';
      }
      setChatMessages(prev => [...prev, { role: 'ai', text: response }]);
    }, 600);
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <span>المواد</span>
          <ChevronLeft className="w-4 h-4" />
          <span>{lessonContent.subject}</span>
          <ChevronLeft className="w-4 h-4" />
          <span>{lessonContent.unit}</span>
          <ChevronLeft className="w-4 h-4" />
          <span className="text-primary-600 dark:text-primary-400 font-medium">{lessonContent.title}</span>
        </motion.div>

        <div className="flex gap-6 flex-col lg:flex-row">
          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex-1 ${aiPanelOpen ? 'lg:w-2/3' : 'w-full'}`}
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
              {/* Lesson Header */}
              <div className="bg-gradient-to-l from-blue-600 to-blue-700 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-200 text-sm mb-1">{lessonContent.unit} - {lessonContent.subject}</p>
                    <h2 className="text-xl font-bold">{lessonContent.title}</h2>
                  </div>
                  <button
                    onClick={() => setAiPanelOpen(!aiPanelOpen)}
                    className="bg-white/20 hover:bg-white/30 p-2 rounded-xl transition-colors"
                  >
                    <Brain className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Section Tabs */}
              <div className="flex border-b border-gray-100 dark:border-gray-800 overflow-x-auto">
                {lessonContent.sections.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSection(i)}
                    className={`px-5 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
                      currentSection === i
                        ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSection}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="prose prose-sm dark:prose-invert max-w-none"
                  >
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{section.title}</h3>
                    <div className="text-gray-700 dark:text-gray-300 leading-loose whitespace-pre-line text-sm">
                      {section.content}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* AI Action Buttons */}
                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <motion.button whileTap={{ scale: 0.95 }} onClick={() => setActiveAI('explain')}
                    className="flex items-center gap-2 px-4 py-2.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-xl text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    <Lightbulb className="w-4 h-4" /> اشرح لي كأني مبتدئ
                  </motion.button>
                  <motion.button whileTap={{ scale: 0.95 }} onClick={() => setActiveAI('simplify')}
                    className="flex items-center gap-2 px-4 py-2.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-xl text-sm font-medium hover:bg-emerald-100 dark:hover:bg-emerald-900/30">
                    <FileText className="w-4 h-4" /> بسّط النص
                  </motion.button>
                  <motion.button whileTap={{ scale: 0.95 }} onClick={() => setActiveAI('quiz')}
                    className="flex items-center gap-2 px-4 py-2.5 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 rounded-xl text-sm font-medium hover:bg-amber-100 dark:hover:bg-amber-900/30">
                    <HelpCircle className="w-4 h-4" /> اختبرني على هذا الدرس
                  </motion.button>
                  <motion.button whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2.5 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 rounded-xl text-sm font-medium hover:bg-purple-100 dark:hover:bg-purple-900/30">
                    <Volume2 className="w-4 h-4" /> تحويل لصوت
                  </motion.button>
                </div>

                {/* AI Response */}
                {activeAI && aiResponses[activeAI] && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-gradient-to-l from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-100 dark:border-blue-800"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-bold text-blue-700 dark:text-blue-400">المساعد الذكي</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{aiResponses[activeAI]}</p>
                  </motion.div>
                )}
              </div>

              {/* Navigation */}
              <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex justify-between">
                <button
                  onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                  disabled={currentSection === 0}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-40"
                >
                  <ChevronRight className="w-4 h-4" />
                  السابق
                </button>
                <button
                  onClick={() => setCurrentSection(Math.min(lessonContent.sections.length - 1, currentSection + 1))}
                  disabled={currentSection === lessonContent.sections.length - 1}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40"
                >
                  التالي
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* AI Side Panel */}
          <AnimatePresence>
            {aiPanelOpen && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="lg:w-80 flex-shrink-0"
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden sticky top-20">
                  <div className="bg-gradient-to-l from-indigo-600 to-indigo-700 p-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-white" />
                    <span className="text-white font-bold text-sm">مساعد الدرس الذكي</span>
                  </div>

                  {/* Chat */}
                  <div className="h-80 overflow-y-auto p-4 space-y-3">
                    {chatMessages.map((msg, i) => (
                      <div key={i} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                        <div className={`max-w-[90%] px-3 py-2 rounded-xl text-xs leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-indigo-600 text-white rounded-tr-sm'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-tl-sm'
                        }`}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Questions */}
                  <div className="px-3 pb-2 flex flex-wrap gap-1.5">
                    {['ما هي النهاية؟', 'اشرح الاتصال', 'أعطني مثال'].map(q => (
                      <button
                        key={q}
                        onClick={() => { setChatInput(q); }}
                        className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        {q}
                      </button>
                    ))}
                  </div>

                  <div className="p-3 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={chatInput}
                        onChange={e => setChatInput(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleChatSend()}
                        placeholder="اسأل عن الدرس..."
                        className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 text-xs text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                        dir="rtl"
                      />
                      <button onClick={handleChatSend} className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </DashboardLayout>
  );
}
