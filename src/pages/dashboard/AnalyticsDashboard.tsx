import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp, Target, Award,
  Sparkles, Brain, BookOpen, Clock, ArrowUpRight, ArrowDownRight,
  Minus
} from 'lucide-react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const subjectProgress = [
  { name: 'الرياضيات', current: 72, previous: 65, color: 'bg-blue-500' },
  { name: 'الفيزياء', current: 58, previous: 55, color: 'bg-purple-500' },
  { name: 'الكيمياء', current: 45, previous: 50, color: 'bg-emerald-500' },
  { name: 'اللغة العربية', current: 80, previous: 75, color: 'bg-amber-500' },
  { name: 'اللغة الإنجليزية', current: 65, previous: 60, color: 'bg-rose-500' },
  { name: 'الحاسب', current: 90, previous: 85, color: 'bg-cyan-500' },
];

const weeklyData = [
  { day: 'السبت', hours: 3.5, questions: 45 },
  { day: 'الأحد', hours: 2.0, questions: 30 },
  { day: 'الاثنين', hours: 4.0, questions: 55 },
  { day: 'الثلاثاء', hours: 1.5, questions: 20 },
  { day: 'الأربعاء', hours: 3.0, questions: 40 },
  { day: 'الخميس', hours: 5.0, questions: 65 },
  { day: 'الجمعة', hours: 2.5, questions: 35 },
];

const maxHours = Math.max(...weeklyData.map(d => d.hours));

const overallStats = [
  { label: 'المعدل العام', value: '٧٨٪', change: '+٥٪', trend: 'up', icon: TrendingUp, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20' },
  { label: 'ساعات الدراسة', value: '٢١.٥', change: '+٣', trend: 'up', icon: Clock, color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' },
  { label: 'أسئلة محلولة', value: '٢٩٠', change: '+٤٥', trend: 'up', icon: Target, color: 'text-purple-600 bg-purple-50 dark:bg-purple-900/20' },
  { label: 'الاختبارات', value: '٨', change: '٠', trend: 'neutral', icon: Award, color: 'text-amber-600 bg-amber-50 dark:bg-amber-900/20' },
];

const weakPoints = [
  { topic: 'التكامل', subject: 'الرياضيات', score: 35, suggestion: 'راجع درس التكامل بالتعويض واحل ١٠ أسئلة إضافية' },
  { topic: 'الديناميكا الحرارية', subject: 'الفيزياء', score: 42, suggestion: 'شاهد فيديو الشرح المبسط واستخدم المساعد الذكي للفهم' },
  { topic: 'التفاعلات العضوية', subject: 'الكيمياء', score: 38, suggestion: 'ارسم خرائط ذهنية للتفاعلات وتدرب على تصنيفها' },
];

const monthlyTrend = [65, 68, 70, 67, 72, 75, 73, 78];

export default function AnalyticsDashboard() {
  const [period, setPeriod] = useState<'week' | 'month'>('week');

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">التقدم والتحليل</h2>
            <p className="text-gray-500 text-sm">تحليل شامل لأدائك مع توصيات ذكية</p>
          </div>
          <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
            <button
              onClick={() => setPeriod('week')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                period === 'week' ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white' : 'text-gray-500'
              }`}
            >
              أسبوعي
            </button>
            <button
              onClick={() => setPeriod('month')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                period === 'month' ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white' : 'text-gray-500'
              }`}
            >
              شهري
            </button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {overallStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className={`flex items-center gap-1 text-xs font-medium ${
                  stat.trend === 'up' ? 'text-emerald-600' : stat.trend === 'down' ? 'text-rose-600' : 'text-gray-500'
                }`}>
                  {stat.trend === 'up' ? <ArrowUpRight className="w-3.5 h-3.5" /> : stat.trend === 'down' ? <ArrowDownRight className="w-3.5 h-3.5" /> : <Minus className="w-3.5 h-3.5" />}
                  {stat.change}
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Weekly Activity Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6"
          >
            <h3 className="font-bold text-gray-900 dark:text-white mb-5">النشاط الأسبوعي</h3>
            <div className="flex items-end justify-between gap-2 h-48">
              {weeklyData.map((d, i) => (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-xs font-bold text-gray-900 dark:text-white">{d.hours}h</span>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(d.hours / maxHours) * 100}%` }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="w-full bg-gradient-to-t from-amber-500 to-amber-400 rounded-t-lg min-h-[8px] relative group"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {d.questions} سؤال
                    </div>
                  </motion.div>
                  <span className="text-xs text-gray-500">{d.day}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Monthly Trend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6"
          >
            <h3 className="font-bold text-gray-900 dark:text-white mb-5">المعدل الشهري</h3>
            <div className="flex items-end justify-between gap-1.5 h-36 mb-4">
              {monthlyTrend.map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${val}%` }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className={`w-full rounded-t-md min-h-[4px] ${
                      i === monthlyTrend.length - 1 ? 'bg-emerald-500' : 'bg-emerald-200 dark:bg-emerald-800'
                    }`}
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>أسبوع ١</span>
              <span>أسبوع ٨</span>
            </div>
            <div className="mt-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-3">
              <div className="flex items-center gap-1.5 mb-1">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">تحسن مستمر</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">معدلك تحسّن ١٣٪ خلال الشهرين الماضيين</p>
            </div>
          </motion.div>
        </div>

        {/* Subject Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6"
        >
          <h3 className="font-bold text-gray-900 dark:text-white mb-5">تقدم المواد</h3>
          <div className="space-y-5">
            {subjectProgress.map((subject, i) => {
              const diff = subject.current - subject.previous;
              return (
                <motion.div key={subject.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{subject.name}</span>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-medium flex items-center gap-0.5 ${diff > 0 ? 'text-emerald-600' : diff < 0 ? 'text-rose-600' : 'text-gray-500'}`}>
                        {diff > 0 ? <ArrowUpRight className="w-3 h-3" /> : diff < 0 ? <ArrowDownRight className="w-3 h-3" /> : null}
                        {diff > 0 ? '+' : ''}{diff}٪
                      </span>
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{subject.current}٪</span>
                    </div>
                  </div>
                  <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${subject.current}%` }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className={`h-full rounded-full ${subject.color}`}
                    />
                    {/* Previous mark */}
                    <div
                      className="absolute top-0 h-full w-0.5 bg-gray-400 dark:bg-gray-500"
                      style={{ left: `${subject.previous}%` }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* AI Analysis & Weak Points */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weak Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <Target className="w-5 h-5 text-rose-500" />
              <h3 className="font-bold text-gray-900 dark:text-white">نقاط الضعف</h3>
            </div>
            <div className="space-y-4">
              {weakPoints.map((point, i) => (
                <div key={i} className="p-4 bg-rose-50/50 dark:bg-rose-900/10 rounded-xl border border-rose-100 dark:border-rose-900/30">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{point.topic}</span>
                      <span className="text-xs text-gray-500 mr-2">- {point.subject}</span>
                    </div>
                    <span className="text-sm font-bold text-rose-600">{point.score}٪</span>
                  </div>
                  <div className="h-1.5 bg-rose-100 dark:bg-rose-900/30 rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-rose-500 rounded-full" style={{ width: `${point.score}%` }} />
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{point.suggestion}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI Deep Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <Brain className="w-5 h-5 text-amber-500" />
              <h3 className="font-bold text-gray-900 dark:text-white">تحليل الذكاء الاصطناعي</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-l from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/10 rounded-xl border border-amber-100 dark:border-amber-800">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-bold text-amber-700 dark:text-amber-400">ملخص الأداء</span>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  أداؤك في تحسن مستمر خلال الأسابيع الماضية. اللغة العربية والحاسب هي أقوى مواد لديك. تحتاج التركيز أكثر على الكيمياء والتكامل في الرياضيات.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-bold text-blue-700 dark:text-blue-400">توصيات ذكية</span>
                </div>
                <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-2 mr-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    خصص ٣٠ دقيقة يومياً لحل مسائل التكامل
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    استخدم خرائط ذهنية لتنظيم التفاعلات الكيميائية
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    حاول حل اختبار تجريبي كامل كل أسبوع
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    راجع أخطاءك السابقة قبل كل اختبار جديد
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400">مقارنة الأداء</span>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  أنت في المرتبة الأعلى ٢٥٪ بين طلاب مستواك في اللغة العربية والحاسب. وفي المرتبة ٥٠٪ في الرياضيات والفيزياء. استمر بالتحسن!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
