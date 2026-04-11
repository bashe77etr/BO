import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Mic } from 'lucide-react';

export default function AIFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: 'ai', content: 'مرحبًا! أنا مساعدك الذكي. كيف أقدر أساعدك اليوم؟' },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    setMessages(prev => [...prev, { role: 'user', content: message }]);
    const userMsg = message;
    setMessage('');
    setTimeout(() => {
      let response = 'أنا هنا لمساعدتك! يمكنني شرح الدروس، حل الأسئلة، أو تقديم نصائح دراسية.';
      if (userMsg.includes('رياضيات') || userMsg.includes('حساب')) {
        response = 'الرياضيات من أهم المواد! هل تحتاج مساعدة في موضوع معين؟ يمكنني شرح المعادلات، الهندسة، أو الإحصاء.';
      } else if (userMsg.includes('اختبار') || userMsg.includes('امتحان')) {
        response = 'للاستعداد للاختبار، أنصحك بمراجعة الملخصات أولاً ثم حل اختبارات تجريبية. هل تريدني أجهز لك خطة مراجعة؟';
      } else if (userMsg.includes('قدرات') || userMsg.includes('تحصيلي')) {
        response = 'اختبار القدرات والتحصيلي مهم جدًا. أقترح تبدأ بتحديد مستواك الحالي ثم نضع خطة تدريب مخصصة لك.';
      }
      setMessages(prev => [...prev, { role: 'ai', content: response }]);
    }, 800);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 left-6 z-50 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="bg-gradient-to-l from-primary-600 to-primary-700 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-white" />
                <span className="text-white font-bold text-sm">مساعدة ذكية</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="h-72 overflow-y-auto p-4 space-y-3" dir="rtl">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-primary-600 text-white rounded-tr-sm'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                  <Mic className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSend()}
                  placeholder="اكتب سؤالك هنا..."
                  className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-xl px-4 py-2.5 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                  dir="rtl"
                />
                <button onClick={handleSend} className="p-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full shadow-lg shadow-primary-600/30 flex items-center justify-center"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
      </motion.button>
    </>
  );
}
