import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, BookOpen, Loader2, AlertCircle } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import { useAuth } from '../../context/AuthContext';
import { getSubjectsForStudent, getStageLabel, getGradeLabel } from '../../data/saudiCurriculum';

export default function BookViewer() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  const subjectId = searchParams.get('subjectId') || '';
  const stage = user?.stage || 'ثانوي';
  const grade = user?.grade || 'الثالث';

  const subjects = getSubjectsForStudent(stage, grade);
  const subject = subjects.find(s => s.id === subjectId);
  const stageLabel = getStageLabel(stage);
  const gradeLabel = getGradeLabel(stage, grade);

  const bookTitle = subject ? `كتاب ${subject.name}` : 'كتاب المادة';
  const fullTitle = `${bookTitle} - ${gradeLabel} - ${stageLabel}`;

  // Primary URL: use subject's custom bookUrl or عين portal
  const ienUrl = 'https://ien.edu.sa';
  const iframeUrl = subject?.bookUrl || ienUrl;

  // Search query for fallback
  const searchQuery = encodeURIComponent(`${fullTitle} pdf`);

  // Alternative book sources
  const bookSources = [
    { name: 'بوابة عين التعليمية', url: ienUrl, emoji: '\u{1F4DA}', description: 'المصدر الرسمي لكتب المنهج السعودي' },
    { name: 'المناهج السعودية', url: 'https://almanahj.com/sa', emoji: '\u{1F4D6}', description: 'كتب ومراجع المناهج' },
    { name: 'بحث Google', url: `https://www.google.com/search?q=${searchQuery}`, emoji: '\u{1F50D}', description: 'البحث عن الكتاب عبر Google' },
  ];

  // Timeout for iframe loading - show fallback after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        setIframeError(true);
        setLoading(false);
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, [loading]);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  const handleIframeError = () => {
    setIframeError(true);
    setLoading(false);
  };

  if (!subject) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">لم يتم العثور على المادة</h3>
            <button
              onClick={() => navigate('/dashboard/subjects')}
              className="px-6 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors"
            >
              العودة للمواد
            </button>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-4 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between flex-wrap gap-3"
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/dashboard/subjects')}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary-600" />
                {bookTitle}
              </h2>
              <p className="text-sm text-gray-500">{gradeLabel} - {stageLabel}</p>
            </div>
          </div>
          <a
            href={iframeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            فتح في نافذة جديدة
          </a>
        </motion.div>

        {/* Book Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
          style={{ minHeight: '70vh' }}
        >
          {/* Loading Overlay */}
          {loading && !iframeError && (
            <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-10">
              <div className="text-center">
                <Loader2 className="w-12 h-12 text-primary-600 animate-spin mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 font-medium">جارٍ تحميل الكتاب...</p>
                <p className="text-sm text-gray-400 mt-1">{fullTitle}</p>
              </div>
            </div>
          )}

          {/* iframe - always render but hide if error */}
          {!iframeError && (
            <iframe
              src={iframeUrl}
              className="w-full border-0"
              style={{ height: '70vh' }}
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              title={fullTitle}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
          )}

          {/* Fallback View - shown when iframe fails or times out */}
          {iframeError && (
            <div className="flex items-center justify-center p-8" style={{ minHeight: '70vh' }}>
              <div className="max-w-lg w-full text-center">
                <div className="w-20 h-20 bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{bookTitle}</h3>
                <p className="text-gray-500 mb-2">{gradeLabel} - {stageLabel}</p>
                <p className="text-sm text-gray-400 mb-8">
                  لا يمكن عرض الكتاب مباشرة هنا. يمكنك فتحه من أحد المصادر التالية:
                </p>

                <div className="space-y-3">
                  {bookSources.map((source, i) => (
                    <motion.a
                      key={i}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-right w-full"
                    >
                      <span className="text-2xl">{source.emoji}</span>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">{source.name}</p>
                        <p className="text-xs text-gray-500">{source.description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </motion.a>
                  ))}
                </div>

                <button
                  onClick={() => navigate('/dashboard/subjects')}
                  className="mt-6 text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  العودة للمواد الدراسية
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
