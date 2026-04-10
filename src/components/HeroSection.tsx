import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, ArrowLeft, Sparkles, BookOpen, Brain } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-bl from-primary-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 dark:bg-primary-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 dark:bg-purple-800/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-100/20 dark:bg-primary-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-right"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>منصة تعليمية ذكية للمناهج السعودية</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            >
              <span className="text-gray-900 dark:text-white">تعلم بطريقة </span>
              <span className="gradient-text">أذكى</span>
              <br />
              <span className="text-gray-900 dark:text-white">تناسب مستواك</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
            >
              منصة تعليمية ذكية للمناهج السعودية تساعدك تفهم، تتدرب، وتتطور
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white gradient-primary rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30"
              >
                ابدأ الآن
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-primary-600 dark:text-primary-400 bg-white dark:bg-gray-800 border-2 border-primary-200 dark:border-primary-700 rounded-xl hover:bg-primary-50 dark:hover:bg-gray-700 transition-all"
              >
                <Play className="w-5 h-5" />
                استكشف المنصة
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 mt-12"
            >
              {[
                { number: '+١٠٠٠', label: 'درس تفاعلي' },
                { number: '+٥٠٠٠', label: 'سؤال تدريبي' },
                { number: '+١٠٠٠٠', label: 'طالب مسجل' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{stat.number}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Main card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-96 h-80 rounded-3xl bg-white dark:bg-gray-800 shadow-2xl p-8 relative z-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">الرياضيات</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">الصف الثالث المتوسط</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 gradient-primary rounded-full" />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">تقدمك: ٧٥٪</p>
                  <div className="grid grid-cols-3 gap-3">
                    {['المعادلات', 'الهندسة', 'الإحصاء'].map((topic) => (
                      <div key={topic} className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-xl text-center">
                        <p className="text-xs font-medium text-primary-700 dark:text-primary-300">{topic}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-8 -right-8 w-32 h-32 rounded-2xl bg-purple-500 dark:bg-purple-600 shadow-xl p-4 flex flex-col items-center justify-center text-white z-20"
              >
                <Brain className="w-8 h-8 mb-2" />
                <p className="text-xs font-medium text-center">ذكاء اصطناعي</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute -bottom-6 -left-6 w-40 h-24 rounded-2xl bg-green-500 dark:bg-green-600 shadow-xl p-4 flex items-center gap-3 text-white z-20"
              >
                <div className="text-3xl font-bold">٩٥٪</div>
                <div className="text-xs">نسبة النجاح</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
