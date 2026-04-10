import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'سارة أحمد',
    role: 'طالبة ثانوي',
    text: 'المنصة ساعدتني كثير في فهم الرياضيات! الشرح بالذكاء الاصطناعي مرة واضح وسهل.',
    rating: 5,
  },
  {
    name: 'محمد العتيبي',
    role: 'طالب متوسط',
    text: 'حصلت على درجة عالية في اختبار القدرات بفضل التدريبات الممتازة على المنصة.',
    rating: 5,
  },
  {
    name: 'نورة الشمري',
    role: 'طالبة ثانوي',
    text: 'أحب ميزة تتبع التقدم، تخليني أعرف وين أنا وإيش أحتاج أراجع.',
    rating: 5,
  },
  {
    name: 'عبدالله الدوسري',
    role: 'طالب ابتدائي',
    text: 'الدروس ممتعة وسهلة، وأحب الاختبارات التفاعلية كثير!',
    rating: 4,
  },
  {
    name: 'ريم القحطاني',
    role: 'طالبة متوسط',
    text: 'أفضل منصة تعليمية جربتها! المحتوى شامل ومنظم بشكل ممتاز.',
    rating: 5,
  },
  {
    name: 'فهد المالكي',
    role: 'طالب ثانوي',
    text: 'التدريب على التحصيلي كان ممتاز جدًا والأسئلة قريبة من الاختبار الحقيقي.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
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
            ماذا يقول <span className="gradient-text">طلابنا؟</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            آراء حقيقية من طلاب استفادوا من المنصة
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all relative"
            >
              <Quote className="w-8 h-8 text-primary-200 dark:text-primary-800 absolute top-4 left-4" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
