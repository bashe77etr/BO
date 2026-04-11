import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import SubjectsPage from './pages/SubjectsPage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import AIFloatingButton from './components/dashboard/AIFloatingButton';
import SmartDashboard from './pages/dashboard/SmartDashboard';
import SubjectsInterface from './pages/dashboard/SubjectsInterface';
import LessonView from './pages/dashboard/LessonView';
import ExamInterface from './pages/dashboard/ExamInterface';
import CapabilitiesInterface from './pages/dashboard/CapabilitiesInterface';
import AnalyticsDashboard from './pages/dashboard/AnalyticsDashboard';
import AIChatInterface from './pages/dashboard/AIChatInterface';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-cairo">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
            <Route path="/signup" element={<PublicLayout><SignUpPage /></PublicLayout>} />
            <Route path="/login" element={<PublicLayout><LoginPage /></PublicLayout>} />
            <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />
            <Route path="/subjects" element={<PublicLayout><SubjectsPage /></PublicLayout>} />
            <Route path="/capabilities" element={<PublicLayout><CapabilitiesPage /></PublicLayout>} />

            {/* Protected Dashboard Pages */}
            <Route path="/dashboard" element={<ProtectedRoute><SmartDashboard /></ProtectedRoute>} />
            <Route path="/dashboard/subjects" element={<ProtectedRoute><SubjectsInterface /></ProtectedRoute>} />
            <Route path="/dashboard/lesson" element={<ProtectedRoute><LessonView /></ProtectedRoute>} />
            <Route path="/dashboard/exams" element={<ProtectedRoute><ExamInterface /></ProtectedRoute>} />
            <Route path="/dashboard/capabilities" element={<ProtectedRoute><CapabilitiesInterface /></ProtectedRoute>} />
            <Route path="/dashboard/analytics" element={<ProtectedRoute><AnalyticsDashboard /></ProtectedRoute>} />
            <Route path="/dashboard/ai-chat" element={<ProtectedRoute><AIChatInterface /></ProtectedRoute>} />
          </Routes>
          {/* Global AI Floating Button on dashboard pages */}
          <AIFloatingButton />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App
