// بيانات المنهج السعودي الكاملة - جميع المراحل والصفوف والمواد
// Saudi Curriculum Data - All stages, grades, and subjects

export interface Lesson {
  id: string;
  title: string;
  type: 'lesson' | 'activity' | 'review';
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  chapters: Chapter[];
}

export interface GradeData {
  grade: string;
  gradeLabel: string;
  subjects: Subject[];
}

export interface StageData {
  stage: string;
  stageLabel: string;
  grades: GradeData[];
}

// ===================== ابتدائي - Elementary =====================
const elementaryGrade1: Subject[] = [
  {
    id: 'elem1-arabic', name: 'لغتي', icon: 'PenTool', color: 'from-amber-500 to-amber-600',
    chapters: [
      { id: 'ch1', title: 'أسرتي', lessons: [
        { id: 'l1', title: 'حرف (أ)', type: 'lesson' },
        { id: 'l2', title: 'حرف (ب)', type: 'lesson' },
        { id: 'l3', title: 'حرف (ت)', type: 'lesson' },
        { id: 'l4', title: 'حرف (ث)', type: 'lesson' },
        { id: 'l5', title: 'نشاط تطبيقي', type: 'activity' },
      ]},
      { id: 'ch2', title: 'مدرستي', lessons: [
        { id: 'l6', title: 'حرف (ج)', type: 'lesson' },
        { id: 'l7', title: 'حرف (ح)', type: 'lesson' },
        { id: 'l8', title: 'حرف (خ)', type: 'lesson' },
        { id: 'l9', title: 'حرف (د)', type: 'lesson' },
        { id: 'l10', title: 'مراجعة', type: 'review' },
      ]},
      { id: 'ch3', title: 'مدينتي', lessons: [
        { id: 'l11', title: 'حرف (ذ)', type: 'lesson' },
        { id: 'l12', title: 'حرف (ر)', type: 'lesson' },
        { id: 'l13', title: 'حرف (ز)', type: 'lesson' },
        { id: 'l14', title: 'حرف (س)', type: 'lesson' },
        { id: 'l15', title: 'نشاط تطبيقي', type: 'activity' },
      ]},
    ]
  },
  {
    id: 'elem1-math', name: 'الرياضيات', icon: 'Calculator', color: 'from-blue-500 to-blue-600',
    chapters: [
      { id: 'ch1', title: 'المقارنة والتصنيف', lessons: [
        { id: 'l1', title: 'التصنيف وفق خاصية واحدة', type: 'lesson' },
        { id: 'l2', title: 'أحل المسألة', type: 'lesson' },
        { id: 'l3', title: 'التصنيف وفق أكثر من خاصية', type: 'lesson' },
        { id: 'l4', title: 'يساوي', type: 'lesson' },
        { id: 'l5', title: 'أكثر من، أقل من', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الأعداد حتى ٥', lessons: [
        { id: 'l6', title: 'الأعداد ١، ٢، ٣', type: 'lesson' },
        { id: 'l7', title: 'قراءة الأعداد ١، ٢، ٣ وكتابتها', type: 'lesson' },
        { id: 'l8', title: 'العددان ٤، ٥', type: 'lesson' },
        { id: 'l9', title: 'قراءة العددين ٤، ٥ وكتابتهما', type: 'lesson' },
        { id: 'l10', title: 'مراجعة', type: 'review' },
      ]},
      { id: 'ch3', title: 'الأعداد حتى ١٠', lessons: [
        { id: 'l11', title: 'الأعداد ٦، ٧، ٨', type: 'lesson' },
        { id: 'l12', title: 'الأعداد ٩، ١٠', type: 'lesson' },
        { id: 'l13', title: 'مقارنة الأعداد حتى ١٠', type: 'lesson' },
        { id: 'l14', title: 'ترتيب الأعداد حتى ١٠', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem1-science', name: 'العلوم', icon: 'FlaskConical', color: 'from-emerald-500 to-emerald-600',
    chapters: [
      { id: 'ch1', title: 'النباتات والحيوانات', lessons: [
        { id: 'l1', title: 'المخلوقات الحية', type: 'lesson' },
        { id: 'l2', title: 'النباتات', type: 'lesson' },
        { id: 'l3', title: 'الحيوانات', type: 'lesson' },
        { id: 'l4', title: 'نشاط عملي', type: 'activity' },
      ]},
      { id: 'ch2', title: 'الحيوانات ومساكنها', lessons: [
        { id: 'l5', title: 'أماكن العيش', type: 'lesson' },
        { id: 'l6', title: 'الغذاء', type: 'lesson' },
        { id: 'l7', title: 'مراجعة', type: 'review' },
      ]},
    ]
  },
  {
    id: 'elem1-islamic', name: 'الدراسات الإسلامية', icon: 'BookOpen', color: 'from-teal-500 to-teal-600',
    chapters: [
      { id: 'ch1', title: 'التوحيد', lessons: [
        { id: 'l1', title: 'الله ربي', type: 'lesson' },
        { id: 'l2', title: 'الإسلام ديني', type: 'lesson' },
        { id: 'l3', title: 'محمد ﷺ نبيي', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الفقه', lessons: [
        { id: 'l4', title: 'أركان الإسلام', type: 'lesson' },
        { id: 'l5', title: 'الشهادتان', type: 'lesson' },
        { id: 'l6', title: 'الطهارة', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem1-quran', name: 'القرآن الكريم', icon: 'Book', color: 'from-green-600 to-green-700',
    chapters: [
      { id: 'ch1', title: 'الحفظ', lessons: [
        { id: 'l1', title: 'سورة الفاتحة', type: 'lesson' },
        { id: 'l2', title: 'سورة الناس', type: 'lesson' },
        { id: 'l3', title: 'سورة الفلق', type: 'lesson' },
        { id: 'l4', title: 'سورة الإخلاص', type: 'lesson' },
        { id: 'l5', title: 'سورة المسد', type: 'lesson' },
        { id: 'l6', title: 'سورة النصر', type: 'lesson' },
      ]},
    ]
  },
];

const elementaryGrade2: Subject[] = [
  {
    id: 'elem2-arabic', name: 'لغتي', icon: 'PenTool', color: 'from-amber-500 to-amber-600',
    chapters: [
      { id: 'ch1', title: 'أقاربي', lessons: [
        { id: 'l1', title: 'صلة الرحم', type: 'lesson' },
        { id: 'l2', title: 'عذرًا يا جدي', type: 'lesson' },
        { id: 'l3', title: 'نشاط إملاء', type: 'activity' },
      ]},
      { id: 'ch2', title: 'أصدقائي وجيراني', lessons: [
        { id: 'l4', title: 'الجار الصغير', type: 'lesson' },
        { id: 'l5', title: 'أمي مريضة', type: 'lesson' },
        { id: 'l6', title: 'الصديقتان', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'وطني السعودية', lessons: [
        { id: 'l7', title: 'مدينتان مقدستان', type: 'lesson' },
        { id: 'l8', title: 'علم بلادي', type: 'lesson' },
        { id: 'l9', title: 'مراجعة', type: 'review' },
      ]},
    ]
  },
  {
    id: 'elem2-math', name: 'الرياضيات', icon: 'Calculator', color: 'from-blue-500 to-blue-600',
    chapters: [
      { id: 'ch1', title: 'القيمة المنزلية', lessons: [
        { id: 'l1', title: 'الآحاد والعشرات', type: 'lesson' },
        { id: 'l2', title: 'أقرأ الأعداد وأكتبها', type: 'lesson' },
        { id: 'l3', title: 'القيمة المنزلية للأعداد حتى ١٠٠', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الجمع', lessons: [
        { id: 'l4', title: 'جمع العشرات', type: 'lesson' },
        { id: 'l5', title: 'الجمع بدون إعادة تجميع', type: 'lesson' },
        { id: 'l6', title: 'الجمع بإعادة التجميع', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'الطرح', lessons: [
        { id: 'l7', title: 'طرح العشرات', type: 'lesson' },
        { id: 'l8', title: 'الطرح بدون استلاف', type: 'lesson' },
        { id: 'l9', title: 'الطرح باستلاف', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem2-science', name: 'العلوم', icon: 'FlaskConical', color: 'from-emerald-500 to-emerald-600',
    chapters: [
      { id: 'ch1', title: 'النباتات والحيوانات', lessons: [
        { id: 'l1', title: 'حاجات المخلوقات الحية', type: 'lesson' },
        { id: 'l2', title: 'النباتات تنتج نباتات جديدة', type: 'lesson' },
        { id: 'l3', title: 'الحيوانات تنتج حيوانات جديدة', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'المواطن', lessons: [
        { id: 'l4', title: 'أماكن العيش', type: 'lesson' },
        { id: 'l5', title: 'سلاسل الغذاء', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem2-islamic', name: 'الدراسات الإسلامية', icon: 'BookOpen', color: 'from-teal-500 to-teal-600',
    chapters: [
      { id: 'ch1', title: 'التوحيد', lessons: [
        { id: 'l1', title: 'معرفة الله تعالى', type: 'lesson' },
        { id: 'l2', title: 'توحيد الربوبية', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الفقه', lessons: [
        { id: 'l3', title: 'آداب قضاء الحاجة', type: 'lesson' },
        { id: 'l4', title: 'الوضوء', type: 'lesson' },
        { id: 'l5', title: 'الصلاة', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem2-quran', name: 'القرآن الكريم', icon: 'Book', color: 'from-green-600 to-green-700',
    chapters: [
      { id: 'ch1', title: 'الحفظ', lessons: [
        { id: 'l1', title: 'سورة الكافرون', type: 'lesson' },
        { id: 'l2', title: 'سورة الكوثر', type: 'lesson' },
        { id: 'l3', title: 'سورة الماعون', type: 'lesson' },
        { id: 'l4', title: 'سورة قريش', type: 'lesson' },
        { id: 'l5', title: 'سورة الفيل', type: 'lesson' },
      ]},
    ]
  },
];

const elementaryGrade3: Subject[] = [
  {
    id: 'elem3-arabic', name: 'لغتي', icon: 'PenTool', color: 'from-amber-500 to-amber-600',
    chapters: [
      { id: 'ch1', title: 'التعامل مع الآخرين', lessons: [
        { id: 'l1', title: 'آداب الزيارة', type: 'lesson' },
        { id: 'l2', title: 'إماطة الأذى عن الطريق', type: 'lesson' },
        { id: 'l3', title: 'الإيثار', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'أحب العمل', lessons: [
        { id: 'l4', title: 'العمل عبادة', type: 'lesson' },
        { id: 'l5', title: 'أنا أعمل', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'من أعلام المسلمين', lessons: [
        { id: 'l6', title: 'أبو بكر الصديق', type: 'lesson' },
        { id: 'l7', title: 'عمر بن الخطاب', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem3-math', name: 'الرياضيات', icon: 'Calculator', color: 'from-blue-500 to-blue-600',
    chapters: [
      { id: 'ch1', title: 'القيمة المنزلية', lessons: [
        { id: 'l1', title: 'الجبر: الأنماط العددية', type: 'lesson' },
        { id: 'l2', title: 'القيمة المنزلية ضمن الألوف', type: 'lesson' },
        { id: 'l3', title: 'قراءة الأعداد ضمن الألوف', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الجمع', lessons: [
        { id: 'l4', title: 'جمع أعداد من رقمين', type: 'lesson' },
        { id: 'l5', title: 'تقدير نواتج الجمع', type: 'lesson' },
        { id: 'l6', title: 'جمع أعداد من ثلاثة أرقام', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'الطرح', lessons: [
        { id: 'l7', title: 'طرح أعداد من رقمين', type: 'lesson' },
        { id: 'l8', title: 'تقدير نواتج الطرح', type: 'lesson' },
        { id: 'l9', title: 'طرح أعداد من ثلاثة أرقام', type: 'lesson' },
      ]},
      { id: 'ch4', title: 'الضرب', lessons: [
        { id: 'l10', title: 'الضرب في ٢، ٥، ١٠', type: 'lesson' },
        { id: 'l11', title: 'الضرب في ٣، ٤', type: 'lesson' },
        { id: 'l12', title: 'الضرب في ٦، ٧، ٨، ٩', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem3-science', name: 'العلوم', icon: 'FlaskConical', color: 'from-emerald-500 to-emerald-600',
    chapters: [
      { id: 'ch1', title: 'المخلوقات الحية', lessons: [
        { id: 'l1', title: 'المخلوقات الحية وحاجاتها', type: 'lesson' },
        { id: 'l2', title: 'النباتات وأجزاؤها', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'النظام البيئي', lessons: [
        { id: 'l3', title: 'السلاسل والشبكات الغذائية', type: 'lesson' },
        { id: 'l4', title: 'التكيف والبقاء', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'الأرض ومواردها', lessons: [
        { id: 'l5', title: 'التربة', type: 'lesson' },
        { id: 'l6', title: 'الأحافير والوقود الأحفوري', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem3-islamic', name: 'الدراسات الإسلامية', icon: 'BookOpen', color: 'from-teal-500 to-teal-600',
    chapters: [
      { id: 'ch1', title: 'التوحيد', lessons: [
        { id: 'l1', title: 'معنى العبادة', type: 'lesson' },
        { id: 'l2', title: 'الصلاة', type: 'lesson' },
        { id: 'l3', title: 'الدعاء', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الحديث', lessons: [
        { id: 'l4', title: 'فضل بر الوالدين', type: 'lesson' },
        { id: 'l5', title: 'آداب المجلس', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem3-english', name: 'اللغة الإنجليزية', icon: 'Globe', color: 'from-rose-500 to-rose-600',
    chapters: [
      { id: 'ch1', title: 'Hello!', lessons: [
        { id: 'l1', title: 'Greetings', type: 'lesson' },
        { id: 'l2', title: 'Letters A-M', type: 'lesson' },
        { id: 'l3', title: 'Letters N-Z', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'My Family', lessons: [
        { id: 'l4', title: 'Family Members', type: 'lesson' },
        { id: 'l5', title: 'Numbers 1-10', type: 'lesson' },
      ]},
    ]
  },
];

const elementaryGrade4: Subject[] = [
  {
    id: 'elem4-arabic', name: 'لغتي', icon: 'PenTool', color: 'from-amber-500 to-amber-600',
    chapters: [
      { id: 'ch1', title: 'صحتي وبيئتي', lessons: [
        { id: 'l1', title: 'ناقلة الأمراض', type: 'lesson' },
        { id: 'l2', title: 'التصحر وأثره في البيئة', type: 'lesson' },
        { id: 'l3', title: 'الجملة الفعلية', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'آداب وواجبات', lessons: [
        { id: 'l4', title: 'آداب الطريق', type: 'lesson' },
        { id: 'l5', title: 'مدينتي', type: 'lesson' },
        { id: 'l6', title: 'الفعل المضارع', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem4-math', name: 'الرياضيات', icon: 'Calculator', color: 'from-blue-500 to-blue-600',
    chapters: [
      { id: 'ch1', title: 'القيمة المنزلية', lessons: [
        { id: 'l1', title: 'القيمة المنزلية ضمن مئات الألوف', type: 'lesson' },
        { id: 'l2', title: 'المقارنة بين الأعداد', type: 'lesson' },
        { id: 'l3', title: 'تمثيل الأعداد على خط الأعداد', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الجمع والطرح', lessons: [
        { id: 'l4', title: 'تقدير نواتج الجمع والطرح', type: 'lesson' },
        { id: 'l5', title: 'الجمع والطرح ذهنيًا', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'الضرب في عدد من رقم واحد', lessons: [
        { id: 'l6', title: 'الضرب في مضاعفات ١٠، ١٠٠، ١٠٠٠', type: 'lesson' },
        { id: 'l7', title: 'تقدير نواتج الضرب', type: 'lesson' },
        { id: 'l8', title: 'ضرب عدد من رقمين في عدد من رقم واحد', type: 'lesson' },
      ]},
      { id: 'ch4', title: 'القسمة', lessons: [
        { id: 'l9', title: 'القسمة مع باقي', type: 'lesson' },
        { id: 'l10', title: 'قسمة عدد من رقمين على عدد من رقم واحد', type: 'lesson' },
      ]},
      { id: 'ch5', title: 'الكسور', lessons: [
        { id: 'l11', title: 'الكسور كأجزاء من الكل', type: 'lesson' },
        { id: 'l12', title: 'الكسور المتكافئة', type: 'lesson' },
        { id: 'l13', title: 'مقارنة الكسور وترتيبها', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem4-science', name: 'العلوم', icon: 'FlaskConical', color: 'from-emerald-500 to-emerald-600',
    chapters: [
      { id: 'ch1', title: 'الخلايا والممالك', lessons: [
        { id: 'l1', title: 'الخلايا', type: 'lesson' },
        { id: 'l2', title: 'تصنيف المخلوقات الحية', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'المملكة الحيوانية', lessons: [
        { id: 'l3', title: 'الحيوانات اللافقارية', type: 'lesson' },
        { id: 'l4', title: 'الحيوانات الفقارية', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'الأنظمة البيئية', lessons: [
        { id: 'l5', title: 'مقدمة في الأنظمة البيئية', type: 'lesson' },
        { id: 'l6', title: 'العلاقات في الأنظمة البيئية', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem4-islamic', name: 'الدراسات الإسلامية', icon: 'BookOpen', color: 'from-teal-500 to-teal-600',
    chapters: [
      { id: 'ch1', title: 'التوحيد', lessons: [
        { id: 'l1', title: 'توحيد الألوهية', type: 'lesson' },
        { id: 'l2', title: 'شروط لا إله إلا الله', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الفقه', lessons: [
        { id: 'l3', title: 'صفة الصلاة', type: 'lesson' },
        { id: 'l4', title: 'سنن الصلاة', type: 'lesson' },
        { id: 'l5', title: 'مبطلات الصلاة', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem4-english', name: 'اللغة الإنجليزية', icon: 'Globe', color: 'from-rose-500 to-rose-600',
    chapters: [
      { id: 'ch1', title: 'My World', lessons: [
        { id: 'l1', title: 'Countries and Nationalities', type: 'lesson' },
        { id: 'l2', title: 'Where are you from?', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'Daily Routine', lessons: [
        { id: 'l3', title: 'Telling Time', type: 'lesson' },
        { id: 'l4', title: 'My Day', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'Food and Drinks', lessons: [
        { id: 'l5', title: 'Healthy Food', type: 'lesson' },
        { id: 'l6', title: 'At the Restaurant', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem4-social', name: 'الدراسات الاجتماعية', icon: 'Users', color: 'from-indigo-500 to-indigo-600',
    chapters: [
      { id: 'ch1', title: 'المواطنة', lessons: [
        { id: 'l1', title: 'وطني المملكة العربية السعودية', type: 'lesson' },
        { id: 'l2', title: 'رموز وطني', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'التاريخ', lessons: [
        { id: 'l3', title: 'قصة تأسيس المملكة', type: 'lesson' },
        { id: 'l4', title: 'ملوك المملكة', type: 'lesson' },
      ]},
    ]
  },
];

const elementaryGrade5: Subject[] = [
  {
    id: 'elem5-arabic', name: 'لغتي الجميلة', icon: 'PenTool', color: 'from-amber-500 to-amber-600',
    chapters: [
      { id: 'ch1', title: 'أخلاق وفضائل', lessons: [
        { id: 'l1', title: 'الصدق', type: 'lesson' },
        { id: 'l2', title: 'الحياء', type: 'lesson' },
        { id: 'l3', title: 'أسلوب النهي', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'البيئة والصحة', lessons: [
        { id: 'l4', title: 'نظافة البيئة', type: 'lesson' },
        { id: 'l5', title: 'الغذاء الصحي', type: 'lesson' },
        { id: 'l6', title: 'أنواع الجموع', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem5-math', name: 'الرياضيات', icon: 'Calculator', color: 'from-blue-500 to-blue-600',
    chapters: [
      { id: 'ch1', title: 'القيمة المنزلية', lessons: [
        { id: 'l1', title: 'القيمة المنزلية ضمن البلايين', type: 'lesson' },
        { id: 'l2', title: 'المقارنة بين الأعداد', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الجمع والطرح', lessons: [
        { id: 'l3', title: 'خصائص الجمع', type: 'lesson' },
        { id: 'l4', title: 'تقدير نواتج الجمع والطرح', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'الضرب', lessons: [
        { id: 'l5', title: 'الضرب في عدد من رقمين', type: 'lesson' },
        { id: 'l6', title: 'خصائص الضرب', type: 'lesson' },
      ]},
      { id: 'ch4', title: 'القسمة', lessons: [
        { id: 'l7', title: 'القسمة على عدد من رقم واحد', type: 'lesson' },
        { id: 'l8', title: 'القسمة على عدد من رقمين', type: 'lesson' },
      ]},
      { id: 'ch5', title: 'العبارات الجبرية والمعادلات', lessons: [
        { id: 'l9', title: 'المتغيرات والعبارات الجبرية', type: 'lesson' },
        { id: 'l10', title: 'ترتيب العمليات', type: 'lesson' },
      ]},
      { id: 'ch6', title: 'الكسور الاعتيادية', lessons: [
        { id: 'l11', title: 'القاسم المشترك الأكبر', type: 'lesson' },
        { id: 'l12', title: 'الكسور المتكافئة', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem5-science', name: 'العلوم', icon: 'FlaskConical', color: 'from-emerald-500 to-emerald-600',
    chapters: [
      { id: 'ch1', title: 'تنوع الحياة', lessons: [
        { id: 'l1', title: 'الخلايا النباتية والحيوانية', type: 'lesson' },
        { id: 'l2', title: 'الأنسجة والأعضاء', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الأنظمة البيئية', lessons: [
        { id: 'l3', title: 'التفاعلات في الأنظمة البيئية', type: 'lesson' },
        { id: 'l4', title: 'التغيرات في الأنظمة البيئية', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'الأرض ومواردها', lessons: [
        { id: 'l5', title: 'المعادن والصخور', type: 'lesson' },
        { id: 'l6', title: 'التجوية والتعرية', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem5-islamic', name: 'الدراسات الإسلامية', icon: 'BookOpen', color: 'from-teal-500 to-teal-600',
    chapters: [
      { id: 'ch1', title: 'التوحيد', lessons: [
        { id: 'l1', title: 'أنواع التوحيد', type: 'lesson' },
        { id: 'l2', title: 'الشرك وأنواعه', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الحديث', lessons: [
        { id: 'l3', title: 'فضل الذكر', type: 'lesson' },
        { id: 'l4', title: 'آداب المسجد', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'الفقه', lessons: [
        { id: 'l5', title: 'صلاة الجماعة', type: 'lesson' },
        { id: 'l6', title: 'صلاة المسافر', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem5-english', name: 'اللغة الإنجليزية', icon: 'Globe', color: 'from-rose-500 to-rose-600',
    chapters: [
      { id: 'ch1', title: 'Hobbies', lessons: [
        { id: 'l1', title: 'Free Time Activities', type: 'lesson' },
        { id: 'l2', title: 'Sports', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'Places', lessons: [
        { id: 'l3', title: 'My City', type: 'lesson' },
        { id: 'l4', title: 'Asking for Directions', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem5-social', name: 'الدراسات الاجتماعية', icon: 'Users', color: 'from-indigo-500 to-indigo-600',
    chapters: [
      { id: 'ch1', title: 'الجغرافيا', lessons: [
        { id: 'l1', title: 'الموقع والحدود', type: 'lesson' },
        { id: 'l2', title: 'مناخ المملكة', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'التربية الوطنية', lessons: [
        { id: 'l3', title: 'رؤية المملكة ٢٠٣٠', type: 'lesson' },
        { id: 'l4', title: 'الخدمات الحكومية', type: 'lesson' },
      ]},
    ]
  },
];

const elementaryGrade6: Subject[] = [
  {
    id: 'elem6-arabic', name: 'لغتي الجميلة', icon: 'PenTool', color: 'from-amber-500 to-amber-600',
    chapters: [
      { id: 'ch1', title: 'قدوات ومثل عليا', lessons: [
        { id: 'l1', title: 'سيدنا محمد ﷺ قدوتنا', type: 'lesson' },
        { id: 'l2', title: 'عمر بن عبدالعزيز', type: 'lesson' },
        { id: 'l3', title: 'المبتدأ والخبر', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الوعي القرائي', lessons: [
        { id: 'l4', title: 'كتاب يتحدث عن نفسه', type: 'lesson' },
        { id: 'l5', title: 'الهمزة المتوسطة', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem6-math', name: 'الرياضيات', icon: 'Calculator', color: 'from-blue-500 to-blue-600',
    chapters: [
      { id: 'ch1', title: 'الأنماط العددية والدوال', lessons: [
        { id: 'l1', title: 'العبارات والجمل العددية', type: 'lesson' },
        { id: 'l2', title: 'ترتيب العمليات', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الإحصاء والتمثيلات البيانية', lessons: [
        { id: 'l3', title: 'خطة حل المسألة', type: 'lesson' },
        { id: 'l4', title: 'التمثيل بالأعمدة والخطوط', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'الكسور الاعتيادية والعشرية', lessons: [
        { id: 'l5', title: 'تمثيل الكسور العشرية', type: 'lesson' },
        { id: 'l6', title: 'مقارنة الكسور العشرية وترتيبها', type: 'lesson' },
      ]},
      { id: 'ch4', title: 'الهندسة والقياس', lessons: [
        { id: 'l7', title: 'الأشكال الرباعية', type: 'lesson' },
        { id: 'l8', title: 'المحيط', type: 'lesson' },
        { id: 'l9', title: 'المساحة', type: 'lesson' },
        { id: 'l10', title: 'الحجم', type: 'lesson' },
      ]},
      { id: 'ch5', title: 'النسبة والتناسب', lessons: [
        { id: 'l11', title: 'النسبة', type: 'lesson' },
        { id: 'l12', title: 'النسبة المئوية', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem6-science', name: 'العلوم', icon: 'FlaskConical', color: 'from-emerald-500 to-emerald-600',
    chapters: [
      { id: 'ch1', title: 'الخلايا والأنسجة', lessons: [
        { id: 'l1', title: 'نظرية الخلية', type: 'lesson' },
        { id: 'l2', title: 'الخلية النباتية والحيوانية', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الأجهزة في جسم الإنسان', lessons: [
        { id: 'l3', title: 'الجهاز الهضمي', type: 'lesson' },
        { id: 'l4', title: 'الجهاز التنفسي', type: 'lesson' },
        { id: 'l5', title: 'الجهاز الدوري', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'موارد الأرض', lessons: [
        { id: 'l6', title: 'الغلاف الجوي', type: 'lesson' },
        { id: 'l7', title: 'الطقس والمناخ', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem6-islamic', name: 'الدراسات الإسلامية', icon: 'BookOpen', color: 'from-teal-500 to-teal-600',
    chapters: [
      { id: 'ch1', title: 'التوحيد', lessons: [
        { id: 'l1', title: 'الإيمان بالملائكة', type: 'lesson' },
        { id: 'l2', title: 'الإيمان بالكتب السماوية', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الفقه', lessons: [
        { id: 'l3', title: 'الزكاة', type: 'lesson' },
        { id: 'l4', title: 'الصيام', type: 'lesson' },
        { id: 'l5', title: 'الحج والعمرة', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem6-english', name: 'اللغة الإنجليزية', icon: 'Globe', color: 'from-rose-500 to-rose-600',
    chapters: [
      { id: 'ch1', title: 'Travel', lessons: [
        { id: 'l1', title: 'At the Airport', type: 'lesson' },
        { id: 'l2', title: 'Booking a Hotel', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'Technology', lessons: [
        { id: 'l3', title: 'Computers', type: 'lesson' },
        { id: 'l4', title: 'The Internet', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'elem6-social', name: 'الدراسات الاجتماعية', icon: 'Users', color: 'from-indigo-500 to-indigo-600',
    chapters: [
      { id: 'ch1', title: 'المملكة العربية السعودية', lessons: [
        { id: 'l1', title: 'مناطق المملكة', type: 'lesson' },
        { id: 'l2', title: 'السكان والتوزيع الجغرافي', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الحضارة الإسلامية', lessons: [
        { id: 'l3', title: 'الخلفاء الراشدون', type: 'lesson' },
        { id: 'l4', title: 'الدولة الأموية', type: 'lesson' },
      ]},
    ]
  },
];

// ===================== متوسط - Middle School =====================
const middleGrade1: Subject[] = [
  {
    id: 'mid1-arabic', name: 'لغتي الخالدة', icon: 'PenTool', color: 'from-amber-500 to-amber-600',
    chapters: [
      { id: 'ch1', title: 'الحياة الاجتماعية', lessons: [
        { id: 'l1', title: 'رسالة أم', type: 'lesson' },
        { id: 'l2', title: 'البساطة', type: 'lesson' },
        { id: 'l3', title: 'الأفعال الناسخة', type: 'lesson' },
        { id: 'l4', title: 'الحروف الناسخة', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الأعلام', lessons: [
        { id: 'l5', title: 'سيرة خالد بن الوليد', type: 'lesson' },
        { id: 'l6', title: 'الهمزة المتطرفة', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'الوطن', lessons: [
        { id: 'l7', title: 'الوطنية الحقة', type: 'lesson' },
        { id: 'l8', title: 'المملكة والعالم', type: 'lesson' },
        { id: 'l9', title: 'الجملة الاسمية والفعلية', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'mid1-math', name: 'الرياضيات', icon: 'Calculator', color: 'from-blue-500 to-blue-600',
    chapters: [
      { id: 'ch1', title: 'الجبر والدوال', lessons: [
        { id: 'l1', title: 'المتغيرات والعبارات الجبرية', type: 'lesson' },
        { id: 'l2', title: 'ترتيب العمليات', type: 'lesson' },
        { id: 'l3', title: 'المعادلات', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الأعداد الصحيحة', lessons: [
        { id: 'l4', title: 'الأعداد الصحيحة والقيمة المطلقة', type: 'lesson' },
        { id: 'l5', title: 'جمع الأعداد الصحيحة', type: 'lesson' },
        { id: 'l6', title: 'طرح الأعداد الصحيحة', type: 'lesson' },
        { id: 'l7', title: 'ضرب الأعداد الصحيحة وقسمتها', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'الجبر: المعادلات الخطية', lessons: [
        { id: 'l8', title: 'حل المعادلات ذات الخطوة الواحدة', type: 'lesson' },
        { id: 'l9', title: 'حل المعادلات ذات الخطوتين', type: 'lesson' },
      ]},
      { id: 'ch4', title: 'النسبة والتناسب', lessons: [
        { id: 'l10', title: 'النسب والمعدلات', type: 'lesson' },
        { id: 'l11', title: 'التناسب', type: 'lesson' },
        { id: 'l12', title: 'النسبة المئوية', type: 'lesson' },
      ]},
      { id: 'ch5', title: 'الهندسة والاستدلال المكاني', lessons: [
        { id: 'l13', title: 'الزوايا', type: 'lesson' },
        { id: 'l14', title: 'المثلثات', type: 'lesson' },
        { id: 'l15', title: 'المضلعات', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'mid1-science', name: 'العلوم', icon: 'FlaskConical', color: 'from-emerald-500 to-emerald-600',
    chapters: [
      { id: 'ch1', title: 'طبيعة العلم', lessons: [
        { id: 'l1', title: 'أسلوب العلم', type: 'lesson' },
        { id: 'l2', title: 'حل المشكلات بطريقة علمية', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الخلايا', lessons: [
        { id: 'l3', title: 'تركيب الخلية ووظائفها', type: 'lesson' },
        { id: 'l4', title: 'الخلية النباتية والحيوانية', type: 'lesson' },
        { id: 'l5', title: 'انقسام الخلية', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'أجهزة جسم الإنسان', lessons: [
        { id: 'l6', title: 'الجهاز الهيكلي والعضلي', type: 'lesson' },
        { id: 'l7', title: 'الجهاز الهضمي', type: 'lesson' },
        { id: 'l8', title: 'الجهاز التنفسي والدوري', type: 'lesson' },
        { id: 'l9', title: 'الجهاز العصبي', type: 'lesson' },
      ]},
      { id: 'ch4', title: 'المادة', lessons: [
        { id: 'l10', title: 'حالات المادة', type: 'lesson' },
        { id: 'l11', title: 'العناصر والمركبات', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'mid1-islamic', name: 'الدراسات الإسلامية', icon: 'BookOpen', color: 'from-teal-500 to-teal-600',
    chapters: [
      { id: 'ch1', title: 'التوحيد', lessons: [
        { id: 'l1', title: 'معنى الإيمان بالله', type: 'lesson' },
        { id: 'l2', title: 'الإيمان بالرسل', type: 'lesson' },
        { id: 'l3', title: 'الإيمان باليوم الآخر', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الحديث', lessons: [
        { id: 'l4', title: 'حديث الأعمال بالنيات', type: 'lesson' },
        { id: 'l5', title: 'أركان الإسلام', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'الفقه', lessons: [
        { id: 'l6', title: 'أحكام الطهارة', type: 'lesson' },
        { id: 'l7', title: 'أحكام الصلاة', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'mid1-english', name: 'اللغة الإنجليزية', icon: 'Globe', color: 'from-rose-500 to-rose-600',
    chapters: [
      { id: 'ch1', title: 'Nice to Meet You', lessons: [
        { id: 'l1', title: 'Introductions', type: 'lesson' },
        { id: 'l2', title: 'Personal Information', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'School Life', lessons: [
        { id: 'l3', title: 'School Subjects', type: 'lesson' },
        { id: 'l4', title: 'Timetable', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'My Community', lessons: [
        { id: 'l5', title: 'Places in Town', type: 'lesson' },
        { id: 'l6', title: 'Prepositions of Place', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'mid1-social', name: 'الدراسات الاجتماعية', icon: 'Users', color: 'from-indigo-500 to-indigo-600',
    chapters: [
      { id: 'ch1', title: 'الحضارات', lessons: [
        { id: 'l1', title: 'الحضارة الإسلامية', type: 'lesson' },
        { id: 'l2', title: 'المملكة والعالم الإسلامي', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الجغرافيا', lessons: [
        { id: 'l3', title: 'الخرائط والاتجاهات', type: 'lesson' },
        { id: 'l4', title: 'القارات والمحيطات', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'mid1-computer', name: 'المهارات الرقمية', icon: 'Laptop', color: 'from-cyan-500 to-cyan-600',
    chapters: [
      { id: 'ch1', title: 'أساسيات الحاسب', lessons: [
        { id: 'l1', title: 'مكونات الحاسب', type: 'lesson' },
        { id: 'l2', title: 'نظام التشغيل', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'معالجة النصوص', lessons: [
        { id: 'l3', title: 'برنامج معالج النصوص', type: 'lesson' },
        { id: 'l4', title: 'تنسيق المستندات', type: 'lesson' },
      ]},
    ]
  },
];

const middleGrade2: Subject[] = [
  {
    id: 'mid2-arabic', name: 'لغتي الخالدة', icon: 'PenTool', color: 'from-amber-500 to-amber-600',
    chapters: [
      { id: 'ch1', title: 'تقنيات', lessons: [
        { id: 'l1', title: 'رسام القلب', type: 'lesson' },
        { id: 'l2', title: 'المعلب الإلكتروني', type: 'lesson' },
        { id: 'l3', title: 'الجملة الخبرية المنفية', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'نوادر وقيم', lessons: [
        { id: 'l4', title: 'أعرف صاحبك', type: 'lesson' },
        { id: 'l5', title: 'الحال', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'قضايا الشباب', lessons: [
        { id: 'l6', title: 'التخطيط للمستقبل', type: 'lesson' },
        { id: 'l7', title: 'العطف', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'mid2-math', name: 'الرياضيات', icon: 'Calculator', color: 'from-blue-500 to-blue-600',
    chapters: [
      { id: 'ch1', title: 'الأعداد الحقيقية', lessons: [
        { id: 'l1', title: 'الأعداد النسبية', type: 'lesson' },
        { id: 'l2', title: 'مقارنة الأعداد النسبية وترتيبها', type: 'lesson' },
        { id: 'l3', title: 'الأعداد غير النسبية', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الأسس والتدوين العلمي', lessons: [
        { id: 'l4', title: 'الأسس', type: 'lesson' },
        { id: 'l5', title: 'التدوين العلمي', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'المعادلات الخطية', lessons: [
        { id: 'l6', title: 'حل المعادلات المتعددة الخطوات', type: 'lesson' },
        { id: 'l7', title: 'حل المعادلات التي تحتوي متغيرًا في طرفيها', type: 'lesson' },
      ]},
      { id: 'ch4', title: 'الدوال', lessons: [
        { id: 'l8', title: 'تمثيل الدوال الخطية', type: 'lesson' },
        { id: 'l9', title: 'ميل المستقيم', type: 'lesson' },
      ]},
      { id: 'ch5', title: 'الهندسة والاستدلال المكاني', lessons: [
        { id: 'l10', title: 'هندسة التحويلات', type: 'lesson' },
        { id: 'l11', title: 'التماثل', type: 'lesson' },
        { id: 'l12', title: 'نظرية فيثاغورس', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'mid2-science', name: 'العلوم', icon: 'FlaskConical', color: 'from-emerald-500 to-emerald-600',
    chapters: [
      { id: 'ch1', title: 'الحركة والقوى', lessons: [
        { id: 'l1', title: 'الحركة', type: 'lesson' },
        { id: 'l2', title: 'التسارع', type: 'lesson' },
        { id: 'l3', title: 'قوانين نيوتن', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الطاقة', lessons: [
        { id: 'l4', title: 'أشكال الطاقة', type: 'lesson' },
        { id: 'l5', title: 'تحولات الطاقة', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'الكهرباء والمغناطيسية', lessons: [
        { id: 'l6', title: 'الكهرباء الساكنة', type: 'lesson' },
        { id: 'l7', title: 'التيار الكهربائي', type: 'lesson' },
        { id: 'l8', title: 'المغناطيسية', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'mid2-islamic', name: 'الدراسات الإسلامية', icon: 'BookOpen', color: 'from-teal-500 to-teal-600',
    chapters: [
      { id: 'ch1', title: 'التوحيد', lessons: [
        { id: 'l1', title: 'أسماء الله الحسنى', type: 'lesson' },
        { id: 'l2', title: 'الإيمان بالقدر', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الفقه', lessons: [
        { id: 'l3', title: 'الزكاة - أحكامها', type: 'lesson' },
        { id: 'l4', title: 'الصيام - أحكامه', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'mid2-english', name: 'اللغة الإنجليزية', icon: 'Globe', color: 'from-rose-500 to-rose-600',
    chapters: [
      { id: 'ch1', title: 'Life Experiences', lessons: [
        { id: 'l1', title: 'Past Tense', type: 'lesson' },
        { id: 'l2', title: 'Life Events', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'The Future', lessons: [
        { id: 'l3', title: 'Making Plans', type: 'lesson' },
        { id: 'l4', title: 'Predictions', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'mid2-social', name: 'الدراسات الاجتماعية', icon: 'Users', color: 'from-indigo-500 to-indigo-600',
    chapters: [
      { id: 'ch1', title: 'الدولة السعودية', lessons: [
        { id: 'l1', title: 'الدولة السعودية الأولى', type: 'lesson' },
        { id: 'l2', title: 'الدولة السعودية الثانية', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الجغرافيا', lessons: [
        { id: 'l3', title: 'تضاريس المملكة', type: 'lesson' },
        { id: 'l4', title: 'المناخ', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'mid2-computer', name: 'المهارات الرقمية', icon: 'Laptop', color: 'from-cyan-500 to-cyan-600',
    chapters: [
      { id: 'ch1', title: 'البرمجة', lessons: [
        { id: 'l1', title: 'مقدمة في البرمجة', type: 'lesson' },
        { id: 'l2', title: 'سكراتش', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الجداول الحسابية', lessons: [
        { id: 'l3', title: 'إنشاء جدول حسابي', type: 'lesson' },
        { id: 'l4', title: 'الصيغ والدوال', type: 'lesson' },
      ]},
    ]
  },
];

const middleGrade3: Subject[] = [
  {
    id: 'mid3-arabic', name: 'لغتي الخالدة', icon: 'PenTool', color: 'from-amber-500 to-amber-600',
    chapters: [
      { id: 'ch1', title: 'حقوق وواجبات', lessons: [
        { id: 'l1', title: 'حقوق الإنسان', type: 'lesson' },
        { id: 'l2', title: 'التمييز', type: 'lesson' },
        { id: 'l3', title: 'المنادى', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'أمن الوطن', lessons: [
        { id: 'l4', title: 'الأمن في حياتنا', type: 'lesson' },
        { id: 'l5', title: 'البدل', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'mid3-math', name: 'الرياضيات', icon: 'Calculator', color: 'from-blue-500 to-blue-600',
    chapters: [
      { id: 'ch1', title: 'المعادلات الخطية', lessons: [
        { id: 'l1', title: 'المعادلات', type: 'lesson' },
        { id: 'l2', title: 'حل المعادلات بالتمثيل البياني', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الدوال الخطية', lessons: [
        { id: 'l3', title: 'العلاقات', type: 'lesson' },
        { id: 'l4', title: 'الدوال', type: 'lesson' },
        { id: 'l5', title: 'ميل المستقيم', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'أنظمة المعادلات الخطية', lessons: [
        { id: 'l6', title: 'حل أنظمة المعادلات بالتمثيل البياني', type: 'lesson' },
        { id: 'l7', title: 'حل أنظمة المعادلات بالحذف', type: 'lesson' },
        { id: 'l8', title: 'حل أنظمة المعادلات بالتعويض', type: 'lesson' },
      ]},
      { id: 'ch4', title: 'المتباينات الخطية', lessons: [
        { id: 'l9', title: 'حل المتباينات بالجمع والطرح', type: 'lesson' },
        { id: 'l10', title: 'حل المتباينات بالضرب والقسمة', type: 'lesson' },
      ]},
      { id: 'ch5', title: 'كثيرات الحدود', lessons: [
        { id: 'l11', title: 'جمع كثيرات الحدود وطرحها', type: 'lesson' },
        { id: 'l12', title: 'ضرب وحيدات الحد', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'mid3-science', name: 'العلوم', icon: 'FlaskConical', color: 'from-emerald-500 to-emerald-600',
    chapters: [
      { id: 'ch1', title: 'الوراثة', lessons: [
        { id: 'l1', title: 'الصفات الوراثية', type: 'lesson' },
        { id: 'l2', title: 'علم الوراثة', type: 'lesson' },
        { id: 'l3', title: 'الحمض النووي DNA', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'علم البيئة', lessons: [
        { id: 'l4', title: 'الغلاف الحيوي', type: 'lesson' },
        { id: 'l5', title: 'التلوث البيئي', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'الفضاء', lessons: [
        { id: 'l6', title: 'النظام الشمسي', type: 'lesson' },
        { id: 'l7', title: 'النجوم والمجرات', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'mid3-islamic', name: 'الدراسات الإسلامية', icon: 'BookOpen', color: 'from-teal-500 to-teal-600',
    chapters: [
      { id: 'ch1', title: 'التوحيد', lessons: [
        { id: 'l1', title: 'نواقض الإسلام', type: 'lesson' },
        { id: 'l2', title: 'الكبائر', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الفقه', lessons: [
        { id: 'l3', title: 'البيوع', type: 'lesson' },
        { id: 'l4', title: 'الأطعمة والأشربة', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'mid3-english', name: 'اللغة الإنجليزية', icon: 'Globe', color: 'from-rose-500 to-rose-600',
    chapters: [
      { id: 'ch1', title: 'Health', lessons: [
        { id: 'l1', title: 'At the Doctor', type: 'lesson' },
        { id: 'l2', title: 'Healthy Lifestyle', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'Environment', lessons: [
        { id: 'l3', title: 'Pollution', type: 'lesson' },
        { id: 'l4', title: 'Going Green', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'mid3-social', name: 'الدراسات الاجتماعية', icon: 'Users', color: 'from-indigo-500 to-indigo-600',
    chapters: [
      { id: 'ch1', title: 'المملكة المعاصرة', lessons: [
        { id: 'l1', title: 'توحيد المملكة', type: 'lesson' },
        { id: 'l2', title: 'رؤية 2030', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'العالم العربي', lessons: [
        { id: 'l3', title: 'الموقع والمساحة', type: 'lesson' },
        { id: 'l4', title: 'السكان والثقافة', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'mid3-computer', name: 'المهارات الرقمية', icon: 'Laptop', color: 'from-cyan-500 to-cyan-600',
    chapters: [
      { id: 'ch1', title: 'البرمجة بلغة بايثون', lessons: [
        { id: 'l1', title: 'مقدمة في بايثون', type: 'lesson' },
        { id: 'l2', title: 'المتغيرات وأنواع البيانات', type: 'lesson' },
        { id: 'l3', title: 'العبارات الشرطية', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'تصميم المواقع', lessons: [
        { id: 'l4', title: 'HTML أساسيات', type: 'lesson' },
        { id: 'l5', title: 'CSS التنسيق', type: 'lesson' },
      ]},
    ]
  },
];

// ===================== ثانوي - High School =====================
const highGrade1: Subject[] = [
  {
    id: 'high1-arabic', name: 'اللغة العربية', icon: 'PenTool', color: 'from-amber-500 to-amber-600',
    chapters: [
      { id: 'ch1', title: 'الكفايات اللغوية ١', lessons: [
        { id: 'l1', title: 'النحو - المبتدأ والخبر', type: 'lesson' },
        { id: 'l2', title: 'النحو - كان وأخواتها', type: 'lesson' },
        { id: 'l3', title: 'النحو - إن وأخواتها', type: 'lesson' },
        { id: 'l4', title: 'البلاغة - التشبيه', type: 'lesson' },
        { id: 'l5', title: 'البلاغة - الاستعارة', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الكفايات اللغوية ٢', lessons: [
        { id: 'l6', title: 'الفاعل ونائب الفاعل', type: 'lesson' },
        { id: 'l7', title: 'المفعول به', type: 'lesson' },
        { id: 'l8', title: 'الحال', type: 'lesson' },
        { id: 'l9', title: 'التمييز', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'high1-math', name: 'الرياضيات', icon: 'Calculator', color: 'from-blue-500 to-blue-600',
    chapters: [
      { id: 'ch1', title: 'التبرير والبرهان', lessons: [
        { id: 'l1', title: 'التبرير الاستقرائي والتخمين', type: 'lesson' },
        { id: 'l2', title: 'المنطق', type: 'lesson' },
        { id: 'l3', title: 'العبارات الشرطية', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'التوازي والتعامد', lessons: [
        { id: 'l4', title: 'المستقيمات المتوازية', type: 'lesson' },
        { id: 'l5', title: 'زوايا المثلث', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'المثلثات المتطابقة', lessons: [
        { id: 'l6', title: 'تطابق المثلثات SSS', type: 'lesson' },
        { id: 'l7', title: 'تطابق المثلثات SAS', type: 'lesson' },
        { id: 'l8', title: 'تطابق المثلثات ASA و AAS', type: 'lesson' },
      ]},
      { id: 'ch4', title: 'العلاقات في المثلث', lessons: [
        { id: 'l9', title: 'المنصفات في المثلث', type: 'lesson' },
        { id: 'l10', title: 'متباينات في المثلث', type: 'lesson' },
      ]},
      { id: 'ch5', title: 'التشابه', lessons: [
        { id: 'l11', title: 'المضلعات المتشابهة', type: 'lesson' },
        { id: 'l12', title: 'تشابه المثلثات AA', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'high1-physics', name: 'الفيزياء', icon: 'Atom', color: 'from-purple-500 to-purple-600',
    chapters: [
      { id: 'ch1', title: 'مدخل إلى علم الفيزياء', lessons: [
        { id: 'l1', title: 'الرياضيات والفيزياء', type: 'lesson' },
        { id: 'l2', title: 'القياس', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'تمثيل الحركة', lessons: [
        { id: 'l3', title: 'الإزاحة والسرعة المتجهة', type: 'lesson' },
        { id: 'l4', title: 'منحنيات الموقع والزمن', type: 'lesson' },
        { id: 'l5', title: 'السرعة المتوسطة واللحظية', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'الحركة المتسارعة', lessons: [
        { id: 'l6', title: 'التسارع', type: 'lesson' },
        { id: 'l7', title: 'الحركة بتسارع منتظم', type: 'lesson' },
        { id: 'l8', title: 'السقوط الحر', type: 'lesson' },
      ]},
      { id: 'ch4', title: 'القوى في بعد واحد', lessons: [
        { id: 'l9', title: 'القوة والحركة', type: 'lesson' },
        { id: 'l10', title: 'قوانين نيوتن', type: 'lesson' },
        { id: 'l11', title: 'قوى التأثير المتبادل', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'high1-chemistry', name: 'الكيمياء', icon: 'FlaskConical', color: 'from-emerald-500 to-emerald-600',
    chapters: [
      { id: 'ch1', title: 'مقدمة في الكيمياء', lessons: [
        { id: 'l1', title: 'قصة الكيمياء', type: 'lesson' },
        { id: 'l2', title: 'الطرائق العلمية', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'المادة', lessons: [
        { id: 'l3', title: 'خواص المادة', type: 'lesson' },
        { id: 'l4', title: 'تصنيف المادة', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'تركيب الذرة', lessons: [
        { id: 'l5', title: 'نماذج الذرة', type: 'lesson' },
        { id: 'l6', title: 'التوزيع الإلكتروني', type: 'lesson' },
      ]},
      { id: 'ch4', title: 'الجدول الدوري', lessons: [
        { id: 'l7', title: 'تطور الجدول الدوري', type: 'lesson' },
        { id: 'l8', title: 'العناصر الممثلة', type: 'lesson' },
        { id: 'l9', title: 'العناصر الانتقالية', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'high1-biology', name: 'الأحياء', icon: 'Leaf', color: 'from-lime-500 to-lime-600',
    chapters: [
      { id: 'ch1', title: 'دراسة الحياة', lessons: [
        { id: 'l1', title: 'مدخل إلى علم الأحياء', type: 'lesson' },
        { id: 'l2', title: 'طبيعة العلم', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'تركيب الخلية ووظائفها', lessons: [
        { id: 'l3', title: 'تركيب الخلية', type: 'lesson' },
        { id: 'l4', title: 'كيمياء الخلية', type: 'lesson' },
        { id: 'l5', title: 'النقل عبر الأغشية', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'التكاثر الخلوي', lessons: [
        { id: 'l6', title: 'الانقسام المتساوي', type: 'lesson' },
        { id: 'l7', title: 'الانقسام المنصف', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'high1-english', name: 'اللغة الإنجليزية', icon: 'Globe', color: 'from-rose-500 to-rose-600',
    chapters: [
      { id: 'ch1', title: 'Family and Friends', lessons: [
        { id: 'l1', title: 'Describing People', type: 'lesson' },
        { id: 'l2', title: 'Relationships', type: 'lesson' },
        { id: 'l3', title: 'Present Perfect', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'Work and Careers', lessons: [
        { id: 'l4', title: 'Job Skills', type: 'lesson' },
        { id: 'l5', title: 'Writing a CV', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'high1-islamic', name: 'الدراسات الإسلامية', icon: 'BookOpen', color: 'from-teal-500 to-teal-600',
    chapters: [
      { id: 'ch1', title: 'التوحيد', lessons: [
        { id: 'l1', title: 'العقيدة الإسلامية', type: 'lesson' },
        { id: 'l2', title: 'مصادر التلقي', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الفقه', lessons: [
        { id: 'l3', title: 'المعاملات المالية', type: 'lesson' },
        { id: 'l4', title: 'النكاح والطلاق', type: 'lesson' },
      ]},
    ]
  },
];

const highGrade2: Subject[] = [
  {
    id: 'high2-arabic', name: 'اللغة العربية', icon: 'PenTool', color: 'from-amber-500 to-amber-600',
    chapters: [
      { id: 'ch1', title: 'الكفايات اللغوية ٣', lessons: [
        { id: 'l1', title: 'النحو - المنصوبات', type: 'lesson' },
        { id: 'l2', title: 'النحو - المجرورات', type: 'lesson' },
        { id: 'l3', title: 'البلاغة - الكناية', type: 'lesson' },
        { id: 'l4', title: 'البلاغة - المجاز المرسل', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'high2-math', name: 'الرياضيات', icon: 'Calculator', color: 'from-blue-500 to-blue-600',
    chapters: [
      { id: 'ch1', title: 'الدوال والمتباينات', lessons: [
        { id: 'l1', title: 'العلاقات والدوال', type: 'lesson' },
        { id: 'l2', title: 'الدوال الخطية', type: 'lesson' },
        { id: 'l3', title: 'حل أنظمة المتباينات الخطية', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'المصفوفات', lessons: [
        { id: 'l4', title: 'مقدمة في المصفوفات', type: 'lesson' },
        { id: 'l5', title: 'العمليات على المصفوفات', type: 'lesson' },
        { id: 'l6', title: 'المحددات وقاعدة كرامر', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'كثيرات الحدود ودوالها', lessons: [
        { id: 'l7', title: 'العمليات على كثيرات الحدود', type: 'lesson' },
        { id: 'l8', title: 'قسمة كثيرات الحدود', type: 'lesson' },
        { id: 'l9', title: 'نظرية الباقي ونظرية العوامل', type: 'lesson' },
      ]},
      { id: 'ch4', title: 'الدوال التربيعية', lessons: [
        { id: 'l10', title: 'تمثيل الدوال التربيعية بيانيًا', type: 'lesson' },
        { id: 'l11', title: 'حل المعادلات التربيعية', type: 'lesson' },
        { id: 'l12', title: 'صيغة القانون العام', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'high2-physics', name: 'الفيزياء', icon: 'Atom', color: 'from-purple-500 to-purple-600',
    chapters: [
      { id: 'ch1', title: 'الحركة الدورانية', lessons: [
        { id: 'l1', title: 'وصف الحركة الدورانية', type: 'lesson' },
        { id: 'l2', title: 'ديناميكا الحركة الدورانية', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الزخم وحفظه', lessons: [
        { id: 'l3', title: 'الدفع والزخم', type: 'lesson' },
        { id: 'l4', title: 'حفظ الزخم', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'الشغل والطاقة', lessons: [
        { id: 'l5', title: 'الشغل والآلات البسيطة', type: 'lesson' },
        { id: 'l6', title: 'الطاقة وحفظها', type: 'lesson' },
      ]},
      { id: 'ch4', title: 'الطاقة الحرارية', lessons: [
        { id: 'l7', title: 'درجة الحرارة والطاقة الحرارية', type: 'lesson' },
        { id: 'l8', title: 'تغيرات حالة المادة', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'high2-chemistry', name: 'الكيمياء', icon: 'FlaskConical', color: 'from-emerald-500 to-emerald-600',
    chapters: [
      { id: 'ch1', title: 'الإلكترونات في الذرات', lessons: [
        { id: 'l1', title: 'الضوء وطاقة الكم', type: 'lesson' },
        { id: 'l2', title: 'نظرية الكم والذرة', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الروابط الكيميائية', lessons: [
        { id: 'l3', title: 'الرابطة الأيونية', type: 'lesson' },
        { id: 'l4', title: 'الرابطة التساهمية', type: 'lesson' },
        { id: 'l5', title: 'الرابطة الفلزية', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'التفاعلات الكيميائية', lessons: [
        { id: 'l6', title: 'وصف التفاعلات الكيميائية', type: 'lesson' },
        { id: 'l7', title: 'أنواع التفاعلات الكيميائية', type: 'lesson' },
        { id: 'l8', title: 'الحسابات الكيميائية', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'high2-biology', name: 'الأحياء', icon: 'Leaf', color: 'from-lime-500 to-lime-600',
    chapters: [
      { id: 'ch1', title: 'الوراثة المعقدة', lessons: [
        { id: 'l1', title: 'الأنماط الأساسية لوراثة الإنسان', type: 'lesson' },
        { id: 'l2', title: 'الأنماط المعقدة للوراثة', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'التقنيات الحيوية', lessons: [
        { id: 'l3', title: 'تقنية DNA', type: 'lesson' },
        { id: 'l4', title: 'الهندسة الوراثية', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'high2-english', name: 'اللغة الإنجليزية', icon: 'Globe', color: 'from-rose-500 to-rose-600',
    chapters: [
      { id: 'ch1', title: 'Science and Technology', lessons: [
        { id: 'l1', title: 'Modern Inventions', type: 'lesson' },
        { id: 'l2', title: 'Artificial Intelligence', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'Global Issues', lessons: [
        { id: 'l3', title: 'Climate Change', type: 'lesson' },
        { id: 'l4', title: 'Sustainable Development', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'high2-islamic', name: 'الدراسات الإسلامية', icon: 'BookOpen', color: 'from-teal-500 to-teal-600',
    chapters: [
      { id: 'ch1', title: 'التفسير', lessons: [
        { id: 'l1', title: 'سورة البقرة - آيات مختارة', type: 'lesson' },
        { id: 'l2', title: 'سورة آل عمران - آيات مختارة', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الفقه', lessons: [
        { id: 'l3', title: 'الجنايات', type: 'lesson' },
        { id: 'l4', title: 'الحدود', type: 'lesson' },
      ]},
    ]
  },
];

const highGrade3: Subject[] = [
  {
    id: 'high3-arabic', name: 'اللغة العربية', icon: 'PenTool', color: 'from-amber-500 to-amber-600',
    chapters: [
      { id: 'ch1', title: 'الكفايات اللغوية ٥', lessons: [
        { id: 'l1', title: 'النحو - الإعراب والبناء', type: 'lesson' },
        { id: 'l2', title: 'النحو - أسلوب الشرط', type: 'lesson' },
        { id: 'l3', title: 'البلاغة - علم البديع', type: 'lesson' },
        { id: 'l4', title: 'الأدب - الشعر والنثر', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'high3-math', name: 'الرياضيات', icon: 'Calculator', color: 'from-blue-500 to-blue-600',
    chapters: [
      { id: 'ch1', title: 'الدوال المثلثية', lessons: [
        { id: 'l1', title: 'النسب المثلثية', type: 'lesson' },
        { id: 'l2', title: 'الزوايا وقياسها', type: 'lesson' },
        { id: 'l3', title: 'دوال الجيب وجيب التمام', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'المتتابعات والمتسلسلات', lessons: [
        { id: 'l4', title: 'المتتابعات الحسابية', type: 'lesson' },
        { id: 'l5', title: 'المتتابعات الهندسية', type: 'lesson' },
        { id: 'l6', title: 'المتسلسلات اللانهائية', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'النهايات والاتصال', lessons: [
        { id: 'l7', title: 'مقدمة في النهايات', type: 'lesson' },
        { id: 'l8', title: 'خصائص النهايات', type: 'lesson' },
        { id: 'l9', title: 'الاتصال', type: 'lesson' },
      ]},
      { id: 'ch4', title: 'التفاضل', lessons: [
        { id: 'l10', title: 'المشتقة', type: 'lesson' },
        { id: 'l11', title: 'قواعد الاشتقاق', type: 'lesson' },
        { id: 'l12', title: 'تطبيقات على المشتقة', type: 'lesson' },
      ]},
      { id: 'ch5', title: 'التكامل', lessons: [
        { id: 'l13', title: 'التكامل غير المحدود', type: 'lesson' },
        { id: 'l14', title: 'التكامل المحدود', type: 'lesson' },
        { id: 'l15', title: 'تطبيقات التكامل', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'high3-physics', name: 'الفيزياء', icon: 'Atom', color: 'from-purple-500 to-purple-600',
    chapters: [
      { id: 'ch1', title: 'الكهرباء الساكنة', lessons: [
        { id: 'l1', title: 'الشحنة الكهربائية', type: 'lesson' },
        { id: 'l2', title: 'قانون كولوم', type: 'lesson' },
        { id: 'l3', title: 'المجال الكهربائي', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'التيار الكهربائي', lessons: [
        { id: 'l4', title: 'التيار والمقاومة', type: 'lesson' },
        { id: 'l5', title: 'قانون أوم', type: 'lesson' },
        { id: 'l6', title: 'دوائر التوالي والتوازي', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'المغناطيسية', lessons: [
        { id: 'l7', title: 'المجالات المغناطيسية', type: 'lesson' },
        { id: 'l8', title: 'القوة المغناطيسية', type: 'lesson' },
        { id: 'l9', title: 'الحث الكهرومغناطيسي', type: 'lesson' },
      ]},
      { id: 'ch4', title: 'الفيزياء الحديثة', lessons: [
        { id: 'l10', title: 'نظرية الكم', type: 'lesson' },
        { id: 'l11', title: 'الذرة', type: 'lesson' },
        { id: 'l12', title: 'الفيزياء النووية', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'high3-chemistry', name: 'الكيمياء', icon: 'FlaskConical', color: 'from-emerald-500 to-emerald-600',
    chapters: [
      { id: 'ch1', title: 'الأحماض والقواعد', lessons: [
        { id: 'l1', title: 'نظريات الأحماض والقواعد', type: 'lesson' },
        { id: 'l2', title: 'الرقم الهيدروجيني pH', type: 'lesson' },
        { id: 'l3', title: 'التعادل', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الكيمياء العضوية', lessons: [
        { id: 'l4', title: 'الهيدروكربونات', type: 'lesson' },
        { id: 'l5', title: 'المجموعات الوظيفية', type: 'lesson' },
        { id: 'l6', title: 'البوليمرات', type: 'lesson' },
      ]},
      { id: 'ch3', title: 'الكيمياء الكهربائية', lessons: [
        { id: 'l7', title: 'خلايا التحليل الكهربائي', type: 'lesson' },
        { id: 'l8', title: 'الخلايا الجلفانية', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'high3-biology', name: 'الأحياء', icon: 'Leaf', color: 'from-lime-500 to-lime-600',
    chapters: [
      { id: 'ch1', title: 'جسم الإنسان', lessons: [
        { id: 'l1', title: 'الجهاز العصبي', type: 'lesson' },
        { id: 'l2', title: 'الجهاز الهرموني', type: 'lesson' },
        { id: 'l3', title: 'الجهاز المناعي', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'علم البيئة', lessons: [
        { id: 'l4', title: 'المجتمعات والأنظمة البيئية', type: 'lesson' },
        { id: 'l5', title: 'التنوع الحيوي', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'high3-english', name: 'اللغة الإنجليزية', icon: 'Globe', color: 'from-rose-500 to-rose-600',
    chapters: [
      { id: 'ch1', title: 'Academic Writing', lessons: [
        { id: 'l1', title: 'Essay Structure', type: 'lesson' },
        { id: 'l2', title: 'Research Skills', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'Literature', lessons: [
        { id: 'l3', title: 'Short Stories', type: 'lesson' },
        { id: 'l4', title: 'Poetry Analysis', type: 'lesson' },
      ]},
    ]
  },
  {
    id: 'high3-islamic', name: 'الدراسات الإسلامية', icon: 'BookOpen', color: 'from-teal-500 to-teal-600',
    chapters: [
      { id: 'ch1', title: 'التفسير', lessons: [
        { id: 'l1', title: 'سورة النور - آيات مختارة', type: 'lesson' },
        { id: 'l2', title: 'سورة الحجرات', type: 'lesson' },
      ]},
      { id: 'ch2', title: 'الفقه', lessons: [
        { id: 'l3', title: 'القضاء', type: 'lesson' },
        { id: 'l4', title: 'الشهادات', type: 'lesson' },
      ]},
    ]
  },
];

// ===================== تجميع البيانات - Data Assembly =====================
export const saudiCurriculum: StageData[] = [
  {
    stage: 'ابتدائي',
    stageLabel: 'المرحلة الابتدائية',
    grades: [
      { grade: 'الأول', gradeLabel: 'الصف الأول', subjects: elementaryGrade1 },
      { grade: 'الثاني', gradeLabel: 'الصف الثاني', subjects: elementaryGrade2 },
      { grade: 'الثالث', gradeLabel: 'الصف الثالث', subjects: elementaryGrade3 },
      { grade: 'الرابع', gradeLabel: 'الصف الرابع', subjects: elementaryGrade4 },
      { grade: 'الخامس', gradeLabel: 'الصف الخامس', subjects: elementaryGrade5 },
      { grade: 'السادس', gradeLabel: 'الصف السادس', subjects: elementaryGrade6 },
    ]
  },
  {
    stage: 'متوسط',
    stageLabel: 'المرحلة المتوسطة',
    grades: [
      { grade: 'الأول', gradeLabel: 'الصف الأول', subjects: middleGrade1 },
      { grade: 'الثاني', gradeLabel: 'الصف الثاني', subjects: middleGrade2 },
      { grade: 'الثالث', gradeLabel: 'الصف الثالث', subjects: middleGrade3 },
    ]
  },
  {
    stage: 'ثانوي',
    stageLabel: 'المرحلة الثانوية',
    grades: [
      { grade: 'الأول', gradeLabel: 'الصف الأول', subjects: highGrade1 },
      { grade: 'الثاني', gradeLabel: 'الصف الثاني', subjects: highGrade2 },
      { grade: 'الثالث', gradeLabel: 'الصف الثالث', subjects: highGrade3 },
    ]
  }
];

export function getSubjectsForStudent(stage: string, grade: string): Subject[] {
  const stageData = saudiCurriculum.find(s => s.stage === stage);
  if (!stageData) return [];
  const gradeData = stageData.grades.find(g => g.grade === grade);
  if (!gradeData) return [];
  return gradeData.subjects;
}

export function getStageLabel(stage: string): string {
  const stageData = saudiCurriculum.find(s => s.stage === stage);
  return stageData?.stageLabel || stage;
}

export function getGradeLabel(stage: string, grade: string): string {
  const stageData = saudiCurriculum.find(s => s.stage === stage);
  if (!stageData) return grade;
  const gradeData = stageData.grades.find(g => g.grade === grade);
  return gradeData?.gradeLabel || grade;
}
