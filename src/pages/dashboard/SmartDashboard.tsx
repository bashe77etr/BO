import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen, TrendingUp, Clock, Sparkles, Brain, Target,
  ChevronLeft, Zap, Award, Calendar, CheckCircle2, AlertCircle, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import { useAuth } from '../../context/AuthContext';
import { getStageLabel, getGradeLabel } from '../../data/saudiCurriculum';

const dailyPlan = [
  { id: 1, subject: 'الرياضيات', lesson: 'المعادلات التربيعية', duration: '30 دقيقة', done: true },
  { id: 2, subject: 'الفيزياء', lesson: 'قوانين نيوتن', duration: '25 دقيقة', done: true },
  { id: 3, subject: 'اللغة العربية', lesson: 'البلاغة - التشبيه', duration: '20 دقيقة', done: false },
  { id: 4, subject: 'الكيمياء', lesson: 'التفاعلات الكيميائية', duration: '25 دقيقة', done: false },
];

const weakPoints = [
  { subject: 'الرياضيات', topic: 'التكامل', level: 35 },
  { subject: 'الفيزياء', topic: 'الكهرومغناطيسية', level: 42 },
  { subject: 'الكيمياء', topic: 'المول والحسابات', level: 55 },
];

const recentActivity = [
  { type: 'exam', text: 'أكملت اختبار الرياضيات - الباب الثالث', score: '٨٥٪', time: 'منذ ساعة' },
  { type: 'lesson', text: 'شاهدت درس قوانين نيوتن', time: 'منذ ٣ ساعات' },
  { type: 'ai', text: 'استخدمت المساعد الذكي لشرح التكامل', time: 'منذ ٥ ساعات' },
];

const aiSuggestions = [
  { icon: Brain, text: 'راجع التكامل - أداؤك يحتاج تحسين في هذا الموضوع', color: 'text-rose-500 bg-rose-50 dark:bg-rose-900/20' },
  { icon: Target, text: 'جرب اختبار قدرات كمي - مستواك جاهز للتقدم', color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20' },
  { icon: Award, text: 'أكمل ٣ دروس اليوم واحصل على شارة الإنجاز', color: 'text-amber-500 bg-amber-50 dark:bg-amber-900/20' },
];

export default function SmartDashboard() {
  const { user } = useAuth();
  const [showAIPlan, setShowAIPlan] = useState(false);
  const userName = user?.name || 'الطالب';
  const stageLabel = getStageLabel(user?.stage || '');
  const gradeLabel = getGradeLabel(user?.stage || '', user?.grade || '');

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-l from-primary-700 via-primary-800 to-brand-dark rounded-2xl p-6 md:p-8 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent-500/10 rounded-full translate-x-1/4 translate-y-1/4" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">مرحبًا، {userName}! 👋</h2>
                <p className="text-primary-200 text-sm md:text-base">{stageLabel} - {gradeLabel}</p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-1.5">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">المعدل العام: ٨٧٪</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-1.5">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span className="text-sm">سلسلة ١٢ يوم</span>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAIPlan(!showAIPlan)}
                className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 self-start"
              >
                <Sparkles className="w-5 h-5" />
                وش أذاكر اليوم؟
              </motion.button>
            </div>
          </div>

          {/* Overall Progress Bar */}
          <div className="mt-6 relative z-10">
            <div className="flex justify-between text-sm text-primary-200 mb-2">
              <span>التقدم العام</span>
              <span>٦٥٪</span>
            </div>
            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '65%' }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full bg-gradient-to-l from-accent-400 to-accent-500 rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* AI Plan Popup */}
        {showAIPlan && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-l from-accent-50 to-amber-50 dark:from-accent-900/20 dark:to-amber-900/20 rounded-2xl p-6 border border-accent-200 dark:border-accent-800"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-accent-600" />
              <h3 className="font-bold text-accent-800 dark:text-accent-400">خطة الذكاء الاصطناعي لليوم</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 text-sm font-bold">١</div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">مراجعة التكامل - الرياضيات</p>
                    <p className="text-xs text-gray-500">نقطة ضعف محددة - ٣٠ دقيقة</p>
                  </div>
                </div>
                <span className="text-xs bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 px-2 py-1 rounded-lg">أولوية عالية</span>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 text-sm font-bold">٢</div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">اختبار قصير - الفيزياء</p>
                    <p className="text-xs text-gray-500">تثبيت المعلومات - ١٥ دقيقة</p>
                  </div>
                </div>
                <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-lg">متوسط</span>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 text-sm font-bold">٣</div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">درس جديد - البلاغة</p>
                    <p className="text-xs text-gray-500">تقدم في المنهج - ٢٠ دقيقة</p>
                  </div>
                </div>
                <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-lg">جديد</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Daily Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary-600" />
                <h3 className="font-bold text-gray-900 dark:text-white">الخطة اليومية</h3>
              </div>
              <span className="text-xs bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 px-3 py-1 rounded-full">٢ من ٤ مكتمل</span>
            </div>
            <div className="space-y-3">
              {dailyPlan.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                    item.done
                      ? 'bg-primary-50/50 dark:bg-primary-900/10 border-primary-100 dark:border-primary-800/30'
                      : 'bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.done ? (
                      <CheckCircle2 className="w-5 h-5 text-primary-600" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600" />
                    )}
                    <div>
                      <p className={`font-semibold text-sm ${item.done ? 'text-gray-500 line-through' : 'text-gray-900 dark:text-white'}`}>{item.lesson}</p>
                      <p className="text-xs text-gray-500">{item.subject}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-500">{item.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI Suggestions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
          >
            <div className="flex items-center gap-2 mb-5">
              <Sparkles className="w-5 h-5 text-accent-500" />
              <h3 className="font-bold text-gray-900 dark:text-white">اقتراحات ذكية</h3>
            </div>
            <div className="space-y-3">
              {aiSuggestions.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: -4 }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weak Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-rose-500" />
                <h3 className="font-bold text-gray-900 dark:text-white">نقاط تحتاج تحسين</h3>
              </div>
              <span className="text-xs text-gray-500">تحليل AI</span>
            </div>
            <div className="space-y-4">
              {weakPoints.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-900 dark:text-white font-medium">{item.topic}</span>
                    <span className="text-gray-500">{item.subject} - {item.level}٪</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.level}%` }}
                      transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                      className={`h-full rounded-full ${
                        item.level < 40 ? 'bg-rose-500' : item.level < 60 ? 'bg-amber-500' : 'bg-primary-500'
                      }`}
                    />
                  </div>
                </div>
              ))}
              <Link
                to="/dashboard/analytics"
                className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 mt-3"
              >
                عرض التحليل الكامل
                <ChevronLeft className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
          >
            <div className="flex items-center gap-2 mb-5">
              <Clock className="w-5 h-5 text-blue-500" />
              <h3 className="font-bold text-gray-900 dark:text-white">آخر نشاط</h3>
            </div>
            <div className="space-y-4">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    item.type === 'exam' ? 'bg-rose-500' : item.type === 'lesson' ? 'bg-blue-500' : 'bg-purple-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-800 dark:text-gray-200">{item.text}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500">{item.time}</span>
                      {item.score && (
                        <span className="text-xs bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {item.score}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'المواد الدراسية', icon: BookOpen, path: '/dashboard/subjects', bg: 'from-blue-500 to-blue-600' },
            { label: 'الاختبارات', icon: Target, path: '/dashboard/exams', bg: 'from-rose-500 to-rose-600' },
            { label: 'القدرات', icon: Brain, path: '/dashboard/capabilities', bg: 'from-purple-500 to-purple-600' },
            { label: 'التقدم', icon: TrendingUp, path: '/dashboard/analytics', bg: 'from-amber-500 to-amber-600' },
          ].map((card, i) => (
            <Link key={i} to={card.path}>
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`bg-gradient-to-br ${card.bg} rounded-2xl p-5 text-white text-center cursor-pointer`}
              >
                <card.icon className="w-8 h-8 mx-auto mb-2 opacity-90" />
                <p className="text-sm font-bold">{card.label}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
