import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send, Mic, Sparkles, Calculator, Atom, Brain,
  Volume2, Copy, ThumbsUp, ThumbsDown, Clock, Trash2,
  ChevronLeft, PenTool
} from 'lucide-react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

interface Message {
  id: number;
  role: 'user' | 'ai';
  content: string;
  timestamp: string;
  subject?: string;
}

const suggestedQuestions = [
  { text: 'اشرح لي مفهوم النهايات', icon: Calculator, subject: 'رياضيات' },
  { text: 'ما هي قوانين نيوتن الثلاثة؟', icon: Atom, subject: 'فيزياء' },
  { text: 'اشرح التفاعلات الكيميائية', icon: Brain, subject: 'كيمياء' },
  { text: 'ما الفرق بين الحال والتمييز؟', icon: PenTool, subject: 'عربي' },
];

const chatHistory = [
  { id: 1, title: 'شرح النهايات والاتصال', date: 'اليوم', messages: 5 },
  { id: 2, title: 'حل معادلات تربيعية', date: 'أمس', messages: 8 },
  { id: 3, title: 'قوانين نيوتن', date: 'قبل يومين', messages: 4 },
  { id: 4, title: 'التفاعلات العضوية', date: 'الأسبوع الماضي', messages: 12 },
];

const aiResponses: Record<string, string> = {
  'نهايات': `النهايات (Limits) هي مفهوم أساسي في الرياضيات، خصوصاً في التفاضل والتكامل.

📌 ببساطة:
النهاية تصف سلوك الدالة عندما يقترب المتغير من قيمة معينة.

📐 رياضياً:
lim(x→a) f(x) = L
يعني: كلما اقتربت x من a، تقترب f(x) من L

🔍 مثال:
lim(x→2) (3x + 1) = 3(2) + 1 = 7

💡 نقطة مهمة:
النهاية لا تعني أن الدالة تصل فعلاً للقيمة، بل تقترب منها. ممكن الدالة ما تكون معرّفة عند النقطة نفسها!

هل تبي مثال أصعب أو تبي أشرح خصائص النهايات؟`,

  'نيوتن': `قوانين نيوتن الثلاثة للحركة:

🔵 القانون الأول (قانون القصور الذاتي):
الجسم الساكن يبقى ساكناً والمتحرك يبقى متحركاً بسرعة ثابتة ما لم تؤثر عليه قوة خارجية.
مثال: الكتاب على الطاولة يبقى مكانه حتى تدفعه.

🟢 القانون الثاني (F = ma):
القوة = الكتلة × التسارع
كل ما زادت القوة، زاد التسارع. وكل ما زادت الكتلة، قل التسارع.
مثال: دفع سيارة صغيرة أسهل من دفع شاحنة.

🔴 القانون الثالث (الفعل ورد الفعل):
لكل فعل رد فعل مساوٍ في المقدار ومعاكس في الاتجاه.
مثال: عندما تقفز، تدفع الأرض للأسفل والأرض تدفعك للأعلى.

هل تبي أسئلة تدريبية على القوانين؟`,

  'تفاعلات': `التفاعلات الكيميائية هي عملية تحويل مواد (المتفاعلات) إلى مواد جديدة (النواتج).

📌 أنواع التفاعلات الرئيسية:

1️⃣ تفاعلات الاتحاد (التركيب):
A + B → AB
مثال: 2H₂ + O₂ → 2H₂O

2️⃣ تفاعلات التحلل:
AB → A + B
مثال: 2H₂O → 2H₂ + O₂

3️⃣ تفاعلات الإحلال البسيط:
A + BC → AC + B
مثال: Zn + CuSO₄ → ZnSO₄ + Cu

4️⃣ تفاعلات الإحلال المزدوج:
AB + CD → AD + CB
مثال: NaCl + AgNO₃ → AgCl + NaNO₃

5️⃣ تفاعلات الاحتراق:
مادة + أكسجين → أكاسيد + طاقة

هل تبي تفصيل أكثر عن نوع معين؟`,

  'default': `سؤال ممتاز! دعني أساعدك في فهم هذا الموضوع.

المفهوم الأساسي يعتمد على فهم العلاقة بين العناصر المختلفة. أنصحك بالتالي:

1. ابدأ بفهم التعريف الأساسي
2. اربط المفهوم بأمثلة من حياتك اليومية
3. حل تمارين متدرجة في الصعوبة
4. استخدم خرائط ذهنية لتنظيم المعلومات

هل تبي أشرح بتفصيل أكثر أو أعطيك أمثلة؟`,
};

function getAIResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes('نهاي') || lower.includes('limit')) return aiResponses['نهايات'];
  if (lower.includes('نيوتن') || lower.includes('قوانين')) return aiResponses['نيوتن'];
  if (lower.includes('تفاعل') || lower.includes('كيمياء')) return aiResponses['تفاعلات'];
  return aiResponses['default'];
}

export default function AIChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: 'ai',
      content: 'أهلاً! أنا مساعدك الذكي. اسألني أي سؤال دراسي وسأساعدك بالشرح والأمثلة. 🎓\n\nيمكنك السؤال عن أي مادة: رياضيات، فيزياء، كيمياء، عربي، إنجليزي، وغيرها.',
      timestamp: 'الآن',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (text?: string) => {
    const msg = text || input;
    if (!msg.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      role: 'user',
      content: msg,
      timestamp: 'الآن',
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg: Message = {
        id: Date.now() + 1,
        role: 'ai',
        content: getAIResponse(msg),
        timestamp: 'الآن',
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto h-[calc(100vh-120px)] flex gap-4">
        {/* Chat History Sidebar */}
        <AnimatePresence>
          {showHistory && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 280 }}
              exit={{ opacity: 0, width: 0 }}
              className="flex-shrink-0 overflow-hidden"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 h-full p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-sm text-gray-900 dark:text-white">سجل المحادثات</h3>
                  <button onClick={() => setShowHistory(false)} className="text-gray-400 hover:text-gray-600">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-2">
                  {chatHistory.map(chat => (
                    <button
                      key={chat.id}
                      className="w-full text-right p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">{chat.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{chat.date}</span>
                        <span className="text-xs text-gray-400">• {chat.messages} رسائل</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
          {/* Chat Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-gradient-to-l from-cyan-600 to-cyan-700 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-bold">المساعد الذكي</h2>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-xs text-cyan-100">متصل</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                title="سجل المحادثات"
              >
                <Clock className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMessages([messages[0]])}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                title="محادثة جديدة"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-[80%] ${msg.role === 'user' ? 'order-1' : 'order-1'}`}>
                  <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === 'user'
                      ? 'bg-cyan-600 text-white rounded-tr-sm'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-sm'
                  }`}>
                    {msg.content}
                  </div>
                  {msg.role === 'ai' && msg.id !== 0 && (
                    <div className="flex items-center gap-1 mt-1.5 justify-end">
                      <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" title="نسخ">
                        <Copy className="w-3.5 h-3.5 text-gray-400" />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" title="استمع">
                        <Volume2 className="w-3.5 h-3.5 text-gray-400" />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" title="إعجاب">
                        <ThumbsUp className="w-3.5 h-3.5 text-gray-400" />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" title="عدم إعجاب">
                        <ThumbsDown className="w-3.5 h-3.5 text-gray-400" />
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-end">
                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-tl-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length <= 1 && (
            <div className="px-6 pb-2">
              <p className="text-xs text-gray-500 mb-2">اسأل عن:</p>
              <div className="grid grid-cols-2 gap-2">
                {suggestedQuestions.map((q, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSend(q.text)}
                    className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl text-right hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <q.icon className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-gray-800 dark:text-gray-200">{q.text}</p>
                      <p className="text-xs text-gray-400">{q.subject}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <button className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" title="رسالة صوتية">
                <Mic className="w-5 h-5 text-gray-500" />
              </button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSend()}
                  placeholder="اكتب سؤالك هنا..."
                  className="w-full bg-gray-100 dark:bg-gray-800 rounded-xl px-4 py-3 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  dir="rtl"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="p-3 bg-gradient-to-l from-cyan-500 to-cyan-600 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-40 transition-all"
              >
                <Send className="w-5 h-5" />
              </motion.button>
            </div>
            <p className="text-center text-xs text-gray-400 mt-2">المساعد الذكي يساعدك في فهم المواد الدراسية • اسأل بالعربي أو الإنجليزي</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
