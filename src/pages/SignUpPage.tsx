import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, AlertCircle, CheckCircle2, Loader2, Check, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const stages = ['ابتدائي', 'متوسط', 'ثانوي'];
const gradesByStage: Record<string, string[]> = {
  'ابتدائي': ['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس'],
  'متوسط': ['الأول', 'الثاني', 'الثالث'],
  'ثانوي': ['الأول', 'الثاني', 'الثالث'],
};

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  stage?: string;
  grade?: string;
}

const validateName = (name: string): string | undefined => {
  if (!name.trim()) return 'الاسم الكامل مطلوب';
  if (name.trim().length < 3) return 'الاسم يجب أن يكون ٣ أحرف على الأقل';
  if (!/^[\u0600-\u06FFa-zA-Z\s]+$/.test(name.trim())) return 'الاسم يجب أن يحتوي على أحرف فقط';
  return undefined;
};

const validateEmail = (email: string): string | undefined => {
  if (!email.trim()) return 'البريد الإلكتروني مطلوب';
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) return 'صيغة البريد الإلكتروني غير صحيحة';
  return undefined;
};

const getPasswordStrength = (password: string): { score: number; checks: { label: string; passed: boolean }[] } => {
  const checks = [
    { label: '٨ أحرف على الأقل', passed: password.length >= 8 },
    { label: 'حرف كبير (A-Z)', passed: /[A-Z]/.test(password) },
    { label: 'حرف صغير (a-z)', passed: /[a-z]/.test(password) },
    { label: 'رقم (0-9)', passed: /[0-9]/.test(password) },
    { label: 'رمز خاص (!@#$)', passed: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password) },
  ];
  const score = checks.filter(c => c.passed).length;
  return { score, checks };
};

const validatePassword = (password: string): string | undefined => {
  if (!password) return 'كلمة المرور مطلوبة';
  if (password.length < 8) return 'كلمة المرور يجب أن تكون ٨ أحرف على الأقل';
  if (!/[A-Z]/.test(password)) return 'يجب أن تحتوي على حرف كبير';
  if (!/[a-z]/.test(password)) return 'يجب أن تحتوي على حرف صغير';
  if (!/[0-9]/.test(password)) return 'يجب أن تحتوي على رقم';
  return undefined;
};

const validateConfirmPassword = (password: string, confirmPassword: string): string | undefined => {
  if (!confirmPassword) return 'تأكيد كلمة المرور مطلوب';
  if (password !== confirmPassword) return 'كلمة المرور غير متطابقة';
  return undefined;
};

export default function SignUpPage() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedStage, setSelectedStage] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const passwordStrength = getPasswordStrength(password);
  const strengthLabel = passwordStrength.score <= 1 ? 'ضعيفة' : passwordStrength.score <= 3 ? 'متوسطة' : passwordStrength.score <= 4 ? 'جيدة' : 'قوية';
  const strengthColor = passwordStrength.score <= 1 ? 'bg-rose-500' : passwordStrength.score <= 3 ? 'bg-amber-500' : passwordStrength.score <= 4 ? 'bg-blue-500' : 'bg-emerald-500';
  const strengthTextColor = passwordStrength.score <= 1 ? 'text-rose-600' : passwordStrength.score <= 3 ? 'text-amber-600' : passwordStrength.score <= 4 ? 'text-blue-600' : 'text-emerald-600';

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const newErrors = { ...errors };
    if (field === 'name') newErrors.name = validateName(name);
    if (field === 'email') newErrors.email = validateEmail(email);
    if (field === 'password') newErrors.password = validatePassword(password);
    if (field === 'confirmPassword') newErrors.confirmPassword = validateConfirmPassword(password, confirmPassword);
    if (field === 'stage' && !selectedStage) newErrors.stage = 'اختر المرحلة الدراسية';
    if (field === 'grade' && !selectedGrade) newErrors.grade = 'اختر الصف';
    setErrors(newErrors);
  };

  const handleFieldChange = (field: string, value: string) => {
    if (field === 'name') {
      setName(value);
      if (touched.name) setErrors(prev => ({ ...prev, name: validateName(value) }));
    }
    if (field === 'email') {
      setEmail(value);
      if (touched.email) setErrors(prev => ({ ...prev, email: validateEmail(value) }));
    }
    if (field === 'password') {
      setPassword(value);
      if (touched.password) setErrors(prev => ({ ...prev, password: validatePassword(value) }));
      if (touched.confirmPassword && confirmPassword) setErrors(prev => ({ ...prev, confirmPassword: validateConfirmPassword(value, confirmPassword) }));
    }
    if (field === 'confirmPassword') {
      setConfirmPassword(value);
      if (touched.confirmPassword) setErrors(prev => ({ ...prev, confirmPassword: validateConfirmPassword(password, value) }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(password, confirmPassword);
    const stageError = !selectedStage ? 'اختر المرحلة الدراسية' : undefined;
    const gradeError = !selectedGrade ? 'اختر الصف' : undefined;

    setTouched({ name: true, email: true, password: true, confirmPassword: true, stage: true, grade: true });
    setErrors({
      name: nameError,
      email: emailError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
      stage: stageError,
      grade: gradeError,
    });

    if (nameError || emailError || passwordError || confirmPasswordError || stageError || gradeError) return;

    setIsSubmitting(true);
    setErrors({});

    // Real account creation with localStorage
    setTimeout(() => {
      const result = signup({
        name,
        email,
        password,
        stage: selectedStage,
        grade: selectedGrade,
      });
      setIsSubmitting(false);
      if (result.success) {
        setSignupSuccess(true);
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      } else {
        setErrors({ email: result.error });
      }
    }, 500);
  };

  const inputClass = (field: string) =>
    `w-full pr-10 pl-4 py-3 rounded-xl border ${
      errors[field as keyof FormErrors] && touched[field]
        ? 'border-rose-400 dark:border-rose-500 bg-rose-50 dark:bg-rose-900/10 focus:ring-rose-500'
        : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-primary-500'
    } text-gray-900 dark:text-white focus:ring-2 focus:border-transparent outline-none transition-all`;

  const selectClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border ${
      errors[field as keyof FormErrors] && touched[field]
        ? 'border-rose-400 dark:border-rose-500 bg-rose-50 dark:bg-rose-900/10 focus:ring-rose-500'
        : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-primary-500'
    } text-gray-900 dark:text-white focus:ring-2 focus:border-transparent outline-none transition-all`;

  const ErrorMessage = ({ field }: { field: string }) => (
    <AnimatePresence>
      {errors[field as keyof FormErrors] && touched[field] && (
        <motion.p
          initial={{ opacity: 0, y: -5, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: -5, height: 0 }}
          className="flex items-center gap-1 mt-1.5 text-xs text-rose-600 dark:text-rose-400"
        >
          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
          {errors[field as keyof FormErrors]}
        </motion.p>
      )}
    </AnimatePresence>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-20 pb-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <img src="/logo.png" alt="تعلّم" className="w-12 h-12 rounded-xl object-cover" />
            <span className="text-2xl font-bold text-primary-800 dark:text-primary-400">منصة تعلّم</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">إنشاء حساب جديد</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">ابدأ رحلتك التعليمية اليوم</p>
        </div>

        {/* Success Message */}
        <AnimatePresence>
          {signupSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              className="mb-4 p-4 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-xl flex items-center gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-emerald-800 dark:text-emerald-300">تم إنشاء الحساب بنجاح!</p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-0.5">جاري التحويل إلى لوحة التحكم...</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300 font-medium">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              التسجيل بحساب Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300 font-medium">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.4 24H1.6C.7 24 0 23.3 0 22.4V1.6C0 .7.7 0 1.6 0h20.8c.9 0 1.6.7 1.6 1.6v20.8c0 .9-.7 1.6-1.6 1.6H16v-9.3h3.1l.5-3.6H16V9c0-1 .3-1.7 1.8-1.7h1.9V4.1c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8v2.7H9v3.6h3.2V24z"/></svg>
              التسجيل بحساب Microsoft
            </button>
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300 font-medium">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              التسجيل بحساب Apple
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-gray-800 text-gray-500">أو</span>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">الاسم الكامل</label>
              <div className="relative">
                <User className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.name && touched.name ? 'text-rose-400' : 'text-gray-400'}`} />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => handleFieldChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  placeholder="أدخل اسمك الكامل"
                  className={inputClass('name')}
                  disabled={isSubmitting || signupSuccess}
                />
              </div>
              <ErrorMessage field="name" />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">البريد الإلكتروني</label>
              <div className="relative">
                <Mail className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.email && touched.email ? 'text-rose-400' : 'text-gray-400'}`} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => handleFieldChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  placeholder="example@email.com"
                  className={inputClass('email')}
                  disabled={isSubmitting || signupSuccess}
                />
              </div>
              <ErrorMessage field="email" />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">كلمة المرور</label>
              <div className="relative">
                <Lock className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.password && touched.password ? 'text-rose-400' : 'text-gray-400'}`} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => handleFieldChange('password', e.target.value)}
                  onBlur={() => handleBlur('password')}
                  placeholder="أدخل كلمة المرور"
                  className={`w-full pr-10 pl-10 py-3 rounded-xl border ${
                    errors.password && touched.password
                      ? 'border-rose-400 dark:border-rose-500 bg-rose-50 dark:bg-rose-900/10 focus:ring-rose-500'
                      : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-primary-500'
                  } text-gray-900 dark:text-white focus:ring-2 focus:border-transparent outline-none transition-all`}
                  disabled={isSubmitting || signupSuccess}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <ErrorMessage field="password" />

              {/* Password Strength Indicator */}
              {password && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-2 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-full transition-all duration-300 ${
                            i <= passwordStrength.score ? strengthColor : 'bg-gray-200 dark:bg-gray-700'
                          }`}
                        />
                      ))}
                    </div>
                    <span className={`text-xs font-medium ${strengthTextColor}`}>{strengthLabel}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {passwordStrength.checks.map((check, i) => (
                      <div key={i} className="flex items-center gap-1">
                        {check.passed ? (
                          <Check className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                        ) : (
                          <X className="w-3 h-3 text-gray-300 dark:text-gray-600 flex-shrink-0" />
                        )}
                        <span className={`text-xs ${check.passed ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-400 dark:text-gray-500'}`}>
                          {check.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">تأكيد كلمة المرور</label>
              <div className="relative">
                <Lock className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.confirmPassword && touched.confirmPassword ? 'text-rose-400' : 'text-gray-400'}`} />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => handleFieldChange('confirmPassword', e.target.value)}
                  onBlur={() => handleBlur('confirmPassword')}
                  placeholder="أعد إدخال كلمة المرور"
                  className={`w-full pr-10 pl-10 py-3 rounded-xl border ${
                    errors.confirmPassword && touched.confirmPassword
                      ? 'border-rose-400 dark:border-rose-500 bg-rose-50 dark:bg-rose-900/10 focus:ring-rose-500'
                      : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-primary-500'
                  } text-gray-900 dark:text-white focus:ring-2 focus:border-transparent outline-none transition-all`}
                  disabled={isSubmitting || signupSuccess}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <ErrorMessage field="confirmPassword" />
              {confirmPassword && !errors.confirmPassword && touched.confirmPassword && password === confirmPassword && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-1 mt-1.5 text-xs text-emerald-600 dark:text-emerald-400"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  كلمة المرور متطابقة
                </motion.p>
              )}
            </div>

            {/* Stage & Grade */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">المرحلة</label>
                <select
                  value={selectedStage}
                  onChange={(e) => {
                    setSelectedStage(e.target.value);
                    setSelectedGrade('');
                    if (touched.stage) setErrors(prev => ({ ...prev, stage: e.target.value ? undefined : 'اختر المرحلة الدراسية' }));
                  }}
                  onBlur={() => handleBlur('stage')}
                  className={selectClass('stage')}
                  disabled={isSubmitting || signupSuccess}
                >
                  <option value="">اختر المرحلة</option>
                  {stages.map((stage) => (
                    <option key={stage} value={stage}>{stage}</option>
                  ))}
                </select>
                <ErrorMessage field="stage" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">الصف</label>
                <select
                  value={selectedGrade}
                  onChange={(e) => {
                    setSelectedGrade(e.target.value);
                    if (touched.grade) setErrors(prev => ({ ...prev, grade: e.target.value ? undefined : 'اختر الصف' }));
                  }}
                  onBlur={() => handleBlur('grade')}
                  className={selectClass('grade')}
                  disabled={!selectedStage || isSubmitting || signupSuccess}
                >
                  <option value="">اختر الصف</option>
                  {selectedStage && gradesByStage[selectedStage]?.map((grade) => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
                <ErrorMessage field="grade" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || signupSuccess}
              className="w-full py-3 text-white font-semibold gradient-primary rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary-500/25 mt-2 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  جاري إنشاء الحساب...
                </>
              ) : signupSuccess ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  تم إنشاء الحساب
                </>
              ) : (
                'إنشاء الحساب'
              )}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
            لديك حساب بالفعل؟{' '}
            <Link to="/login" className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
              تسجيل الدخول
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
