import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: 'المنصة',
    links: [
      { name: 'عن المنصة', href: '/#features' },
      { name: 'كيف تعمل', href: '/#how-it-works' },
      { name: 'المميزات', href: '/#features' },
    ],
  },
  {
    title: 'التعليم',
    links: [
      { name: 'المواد الدراسية', href: '/subjects' },
      { name: 'القدرات والتحصيلي', href: '/capabilities' },
      { name: 'الاختبارات', href: '/capabilities' },
    ],
  },
  {
    title: 'الدعم',
    links: [
      { name: 'تواصل معنا', href: '/contact' },
      { name: 'الأسئلة الشائعة', href: '/#how-it-works' },
      { name: 'المساعدة', href: '/contact' },
    ],
  },
  {
    title: 'قانوني',
    links: [
      { name: 'الشروط والأحكام', href: '#' },
      { name: 'سياسة الخصوصية', href: '#' },
      { name: 'حقوق النشر', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="تعلّم" className="w-10 h-10 rounded-xl object-cover" />
              <span className="text-xl font-bold text-white">منصة تعلّم</span>
            </Link>
            <p className="text-sm leading-relaxed">
              منصة تعليمية ذكية للمناهج السعودية تساعدك على التعلم والتطور بطريقة حديثة وفعالة.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-white font-bold mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} منصة تعلّم. صُنع بـ في المملكة العربية السعودية.
          </p>
        </div>
      </div>
    </footer>
  );
}
