import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, BookOpen, FileText,
  BarChart3, MessageSquare, Target, Menu, X, Moon, Sun,
  LogOut, ChevronLeft, Sparkles
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import AIFloatingButton from './AIFloatingButton';

const navItems = [
  { path: '/dashboard', label: 'الرئيسية', icon: LayoutDashboard, color: 'text-emerald-500' },
  { path: '/dashboard/subjects', label: 'المواد الدراسية', icon: BookOpen, color: 'text-blue-500' },
  { path: '/dashboard/capabilities', label: 'القدرات والتحصيلي', icon: Target, color: 'text-purple-500' },
  { path: '/dashboard/exams', label: 'الاختبارات', icon: FileText, color: 'text-rose-500' },
  { path: '/dashboard/analytics', label: 'التقدم والتحليل', icon: BarChart3, color: 'text-amber-500' },
  { path: '/dashboard/ai-chat', label: 'اسأل الذكاء الاصطناعي', icon: MessageSquare, color: 'text-cyan-500' },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const userInitial = user?.name?.charAt(0) || 'ط';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex" dir="rtl">
      {/* Desktop Sidebar */}
      <motion.aside
        animate={{ width: sidebarOpen ? 260 : 72 }}
        transition={{ duration: 0.3 }}
        className="hidden lg:flex flex-col fixed right-0 top-0 bottom-0 z-40 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 shadow-lg"
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
          {sidebarOpen && (
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="تعلّم" className="w-9 h-9 rounded-lg object-cover" />
              <span className="text-lg font-bold text-primary-800 dark:text-primary-400">منصة تعلّم</span>
            </Link>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500"
          >
            <ChevronLeft className={`w-5 h-5 transition-transform ${sidebarOpen ? '' : 'rotate-180'}`} />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group ${
                  isActive
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 font-semibold'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-primary-600 dark:text-primary-400' : item.color}`} />
                {sidebarOpen && <span className="text-sm whitespace-nowrap">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-3 border-t border-gray-100 dark:border-gray-800 space-y-1">
          <button onClick={toggleTheme} className="flex items-center gap-3 px-3 py-2.5 rounded-xl w-full text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
            {isDark ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-indigo-500" />}
            {sidebarOpen && <span className="text-sm">{isDark ? 'الوضع النهاري' : 'الوضع الليلي'}</span>}
          </button>
          <button onClick={handleLogout} className="flex items-center gap-3 px-3 py-2.5 rounded-xl w-full text-gray-600 dark:text-gray-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:text-rose-600 dark:hover:text-rose-400 transition-all">
            <LogOut className="w-5 h-5 text-red-500" />
            {sidebarOpen && <span className="text-sm">تسجيل الخروج</span>}
          </button>
        </div>
      </motion.aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileSidebarOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />
            <motion.aside
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed right-0 top-0 bottom-0 w-72 z-50 bg-white dark:bg-gray-900 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
                <Link to="/" className="flex items-center gap-2">
                  <img src="/logo.png" alt="تعلّم" className="w-9 h-9 rounded-lg object-cover" />
                  <span className="text-lg font-bold text-primary-800 dark:text-primary-400">منصة تعلّم</span>
                </Link>
                <button onClick={() => setMobileSidebarOpen(false)} className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              <nav className="py-4 px-3 space-y-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileSidebarOpen(false)}
                      className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                        isActive
                          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 font-semibold'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      <item.icon className={`w-5 h-5 ${isActive ? 'text-primary-600' : item.color}`} />
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
              <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-gray-100 dark:border-gray-800 space-y-1">
                <button onClick={toggleTheme} className="flex items-center gap-3 px-3 py-3 rounded-xl w-full text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800">
                  {isDark ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-indigo-500" />}
                  <span className="text-sm">{isDark ? 'الوضع النهاري' : 'الوضع الليلي'}</span>
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:mr-[260px]' : 'lg:mr-[72px]'}`}>
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <div>
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                  {navItems.find(item => item.path === location.pathname)?.label || 'لوحة التحكم'}
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 px-3 py-1.5 rounded-full">
                <Sparkles className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                <span className="text-xs font-medium text-primary-700 dark:text-primary-400">الذكاء الاصطناعي نشط</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-primary-600 flex items-center justify-center text-white text-sm font-bold">
                {userInitial}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>

      {/* Global AI Floating Button */}
      <AIFloatingButton />
    </div>
  );
}
