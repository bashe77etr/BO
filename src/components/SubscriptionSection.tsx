import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Star, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: 'الأساسي',
    price: 'مجاني',
    period: '',
    description: 'ابدأ رحلتك التعليمية مع الميزات الأساسية',
    icon: Zap,
    color: 'from-primary-500 to-primary-600',
    borderColor: 'border-gray-200 dark:border-gray-700',
    popular: false,
    features: [
      'الوصول لجميع المواد الدراسية',
      'اختبارات تجريبية محدودة',
      'تتبع التقدم الأساسي',
      'محتوى الدروس المجانية',
      'دعم عبر البريد الإلكتروني',
    ],
  },
  {
    name: 'المتميز',
    price: '٤٩',
    period: 'ريال / شهر',
    description: 'للطلاب الجادين في تحقيق التفوق الدراسي',
    icon: Star,
    color: 'from-accent-500 to-accent-600',
    borderColor: 'border-accent-300 dark:border-accent-600',
    popular: true,
    features: [
      'جميع ميزات الباقة الأساسية',
      'اختبارات تجريبية غير محدودة',
      'شرح بالذكاء الاصطناعي',
      'تقارير أداء تفصيلية',
      'تدريب القدرات والتحصيلي',
      'دعم فني على مدار الساعة',
    ],
  },
  {
    name: 'الاحترافي',
    price: '٩٩',
    period: 'ريال / شهر',
    description: 'تجربة تعليمية شاملة ومتكاملة بدون حدود',
    icon: Crown,
    color: 'from-primary-700 to-primary-800',
    borderColor: 'border-gray-200 dark:border-gray-700',
    popular: false,
    features: [
      'جميع ميزات الباقة المتميزة',
      'جلسات خصوصية مع معلمين',
      'خطة دراسية مخصصة بالذكاء الاصطناعي',
      'اختبارات محاكاة كاملة',
      'تحليل نقاط الضعف والقوة',
      'أولوية في الدعم الفني',
      'شهادات إتمام معتمدة',
    ],
  },
];

export default function SubscriptionSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            باقات <span className="gradient-text">الاشتراك</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            اختر الباقة المناسبة لاحتياجاتك التعليمية وابدأ رحلة التفوق
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl bg-white dark:bg-gray-800 border-2 ${plan.borderColor} p-8 transition-all hover:shadow-2xl ${
                plan.popular ? 'shadow-xl ring-2 ring-accent-400/50 dark:ring-accent-500/30' : 'shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-l from-accent-500 to-accent-600 text-white text-sm font-bold shadow-lg">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    الأكثر طلبًا
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-gray-500 dark:text-gray-400">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-accent-500' : 'text-primary-500'}`} />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/signup"
                className={`block w-full py-3 rounded-xl text-center font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-l from-accent-500 to-accent-600 text-white hover:opacity-90 shadow-lg shadow-accent-500/25'
                    : 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/30'
                }`}
              >
                {plan.price === 'مجاني' ? 'ابدأ مجانًا' : 'اشترك الآن'}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
