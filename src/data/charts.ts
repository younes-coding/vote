/**
 * بيانات الرسوم البيانية التفاعلية للبرنامج الانتخابي 2026
 * حزب جبهة المستقبل - ولاية تلمسان (دائرة بني سنوس)
 * تم فصل البيانات لتسهيل التعديل والتحديث بشكل مستقل
 */

export interface BarChartItem {
  category: string;
  current: number;
  target: number;
  unit?: string;
}

export interface PieChartItem {
  name: string;
  shortName: string;
  value: number;
  color: string;
  amount?: string;
}

export interface LineChartItem {
  year: string | number;
  [key: string]: string | number;
}

// ألوان متناسقة مع الهوية الوطنية والحزبية
export const CHART_COLORS = {
  emeraldPrimary: '#059669', // أخضر زمردي أساسي
  emeraldDark: '#064e3b',
  blueCurrent: '#2563eb', // أزرق الوضع الحالي
  orangeTarget: '#ea580c', // برتقالي مستهدف
  redAccent: '#dc2626', // أحمر وطني
  goldAccent: '#d97706', // ذهبي
  purpleAccent: '#7c3aed', // بنفسجي
  tealAccent: '#0d9488', // تيل
  slateGray: '#64748b',
};

// ==========================================
// المحور الأول: تنمية محلية متوازنة ومتكافئة
// ==========================================

// 1. مخطط رفع ميزانيات التنمية البلدية للمناطق الجبلية (مليار سنتيم)
export const axis1PcdBudgetComparison = {
  title: 'مخطط رفع ميزانيات التنمية البلدية للمناطق الجبلية',
  subtitle: 'الحالي 2026 مقابل مقترح جبهة المستقبل 2027 (مليار سنتيم)',
  yAxisLabel: 'الميزانية (مليار سنتيم)',
  currentLabel: 'التوزيع الحالي (2026)',
  targetLabel: 'مقترح جبهة المستقبل (2027)',
  data: [
    { category: 'تلمسان (العاصمة)', current: 90, target: 75, unit: 'مليار سنتيم' },
    { category: 'مغنية', current: 80, target: 70, unit: 'مليار سنتيم' },
    { category: 'بني سنوس', current: 25, target: 45, unit: 'مليار سنتيم' },
    { category: 'العزايل', current: 18, target: 35, unit: 'مليار سنتيم' },
    { category: 'بني بحدل', current: 15, target: 32, unit: 'مليار سنتيم' },
  ],
};

// 2. الهيكلة العادلة لميزانية التنمية الولائية (من إجمالي 690 مليار سنتيم)
export const axis1ProvincialBudgetDistribution = {
  title: 'الهيكلة العادلة لميزانية التنمية الولائية المقترحة',
  subtitle: 'من إجمالي الغلاف المالي الولائي البالغ 690 مليار سنتيم',
  totalAmount: '690 مليار سنتيم',
  data: [
    {
      name: 'مخططات التنمية البلدية (PCD) للبلديات المحرومة',
      shortName: 'مخططات PCD',
      value: 40,
      color: '#2563eb',
      amount: '276 مليار سنتيم',
    },
    {
      name: 'فك العزلة والطرقات الجبلية والحدودية',
      shortName: 'فك العزلة',
      value: 25,
      color: '#ea580c',
      amount: '172.5 مليار سنتيم',
    },
    {
      name: 'تحديث شبكات الري الفلاحي ومياه الشرب',
      shortName: 'شبكات الري',
      value: 20,
      color: '#7c3aed',
      amount: '138 مليار سنتيم',
    },
    {
      name: 'دعم الهياكل الشبانية والتعليمية بالمداشر',
      shortName: 'دعم الهياكل',
      value: 15,
      color: '#ec4899',
      amount: '103.5 مليار سنتيم',
    },
  ],
};

// ==========================================
// المحور الثاني: تطوير البنية التحتية والخدمات العمومية والاجتماعية
// ==========================================

// 3. خطة عصرنة البنية التحتية الرقمية والمادية ودعم الربط
export const axis2InfrastructureCoverage = {
  title: 'خطة عصرنة البنية التحتية الرقمية والمادية ودعم الربط',
  subtitle: 'النسبة الحالية مقابل هدف 2028 لتغطية الألياف والشبكات (%)',
  yAxisLabel: '(%) نسبة التغطية',
  currentLabel: 'نسبة التغطية المادية الحالية',
  targetLabel: 'الهدف الرقمي والمادي المستهدف 2028',
  data: [
    { category: 'مركز بني سنوس', current: 75, target: 95, unit: '%' },
    { category: 'العزايل', current: 60, target: 85, unit: '%' },
    { category: 'بني بحدل', current: 55, target: 80, unit: '%' },
    { category: 'المداشر والقرى المعزولة', current: 35, target: 70, unit: '%' },
  ],
};

// 4. توقع نمو الإنتاجية الفلاحية المستدامة بني سنوس (مؤشر مئوي)
export const axis2AgriculturalProductivityGrowth = {
  title: 'توقع نمو الإنتاجية الفلاحية المستدامة بني سنوس',
  subtitle: 'مؤشر مئوي لتطور الإنتاج مع استثمارات الري الحديث مقابل النمط التقليدي (2026-2030)',
  yAxisLabel: 'مؤشر الإنتاجية (%)',
  line1Label: 'مع تفعيل شبكات الري الحديثة (برنامجنا)',
  line2Label: 'الوضع التقليدي الحالي بدون ري منظم',
  data: [
    { year: '2026', modernIrrigation: 100, traditional: 100 },
    { year: '2027', modernIrrigation: 130, traditional: 95 },
    { year: '2028', modernIrrigation: 170, traditional: 90 },
    { year: '2029', modernIrrigation: 210, traditional: 85 },
    { year: '2030', modernIrrigation: 250, traditional: 80 },
  ],
};

// ==========================================
// المحور الثالث: دعم وتأهيل الشباب والأنشطة الرياضية
// ==========================================

// 5. توزيع آليات دعم وتأهيل الشباب والمؤسسات الناشئة
export const axis3YouthSupportDistribution = {
  title: 'توزيع آليات دعم وتأهيل الشباب والمؤسسات الناشئة',
  subtitle: 'توجيه آليات الدعم نحو القطاعات الأكثر تأثيراً في الاقتصاد المحلي',
  data: [
    {
      name: 'تمويل المشاريع الفلاحية الجبلية المصغرة',
      shortName: 'مشاريع فلاحية',
      value: 40,
      color: '#2563eb',
    },
    {
      name: 'حاضنات أعمال الحرف والصناعات التقليدية',
      shortName: 'حاضنات حرفية',
      value: 30,
      color: '#ea580c',
    },
    {
      name: 'دعم مراكز التكوين والتأهيل المهني السريع',
      shortName: 'تأهيل مهني',
      value: 30,
      color: '#7c3aed',
    },
  ],
};

// 6. المنشآت الرياضية بين الواقع والمشروع الاستثماري المستهدف
export const axis3SportsFacilities = {
  title: 'المنشآت الرياضية بين الواقع والمشروع الاستثماري المستهدف',
  subtitle: 'مقارنة بين الوضع الحالي بالدائرة والمستهدف الاستثماري الجديد',
  yAxisLabel: 'العدد',
  currentLabel: 'الوضع الحالي بالدائرة',
  targetLabel: 'المستهدف الاستثماري الجديد',
  data: [
    { category: 'ملاعب جوارية معشوشبة', current: 4, target: 12, unit: 'ملعب' },
    { category: 'قاعات رياضية متعددة النشاطات', current: 1, target: 4, unit: 'قاعة' },
    { category: 'مراكز تدريب شبانية متخصصة', current: 0, target: 2, unit: 'مركز' },
  ],
};

// ==========================================
// المحور الرابع: تطوير السياحة والاهتمام بالبيئة والمحيط
// ==========================================

// 7. التوازن الاستراتيجي بين العوائد السياحية وحماية البيئة (2026-2031)
export const axis4TourismVsEcology = {
  title: 'التوازن الاستراتيجي بين العوائد السياحية وحماية البيئة (2026-2031)',
  subtitle: 'نمو عوائد الإقامة لدى الساكن بالتوازي مع انحسار التدهور البيئي بفعل مراكز الردم',
  yAxisLabel: '(%) مستوى المؤشر',
  line1Label: 'العوائد المالية لنمط الإقامة لدى الساكن',
  line2Label: 'مؤشر التدهور والتلوث (مع مراكز الردم الجديدة)',
  data: [
    { year: '2026', financialReturn: 100, degradationIndex: 100 },
    { year: '2027', financialReturn: 140, degradationIndex: 85 },
    { year: '2028', financialReturn: 180, degradationIndex: 70 },
    { year: '2029', financialReturn: 220, degradationIndex: 55 },
    { year: '2030', financialReturn: 250, degradationIndex: 40 },
    { year: '2031', financialReturn: 280, degradationIndex: 25 },
  ],
};

// ==========================================
// المحور الخامس: تطوير التعليم والنهوض بالخدمات والتماسك الاجتماعي
// ==========================================

// 8. خطة التحديث الرقمي والعلمي للمؤسسات التربوية (%)
export const axis5SchoolsModernization = {
  title: 'خطة التحديث الرقمي والعلمي للمؤسسات التربوية (%)',
  subtitle: 'الوضع الحالي للمدارس الريفية مقابل المستهدف بعد تدخل المجلس الولائي',
  yAxisLabel: '(%) النسبة المئوية',
  currentLabel: 'الوضع الحالي للمدارس الريفية',
  targetLabel: 'المستهدف بعد تدخل المجلس الولائي',
  data: [
    { category: 'الربط بشبكة الإنترنت', current: 40, target: 95, unit: '%' },
    { category: 'المخابر العلمية والنوادي', current: 20, target: 75, unit: '%' },
    { category: 'التدفئة المركزية والتهيئة', current: 50, target: 100, unit: '%' },
  ],
};

// 9. توزيع ميزانية صندوق التضامن والتمكين الاجتماعي المستدام
export const axis5SocialFundDistribution = {
  title: 'هيكلة ميزانية صندوق التضامن والتوازن العقاري والاجتماعي المستدام',
  subtitle: 'توزيع الأولويات الاستراتيجية بين الأوعية العقارية، الصحة، والتمكين الاقتصادي',
  data: [
    {
      name: 'تهيئة أوعية سكنية جديدة بالقرى والمداشر لمنع النزوح',
      shortName: 'أوعية عقارية',
      value: 40,
      color: '#2563eb',
    },
    {
      name: 'وحدات الصحة المتنقلة للمناطق الجبلية',
      shortName: 'صحة جوارية',
      value: 35,
      color: '#ea580c',
    },
    {
      name: 'دعم المشاريع الصغرى وقروض المرأة الريفية والحرفيين',
      shortName: 'تمكين حرفي',
      value: 25,
      color: '#7c3aed',
    },
  ],
};

// ==========================================
// الخاتمة: مؤشر الالتزام والمتابعة الدورية
// ==========================================

// 10. مؤشر الالتزام والمتابعة الدورية للشفافية والمحاسبة (2026-2031)
export const conclusionCommitmentIndex = {
  title: 'مخطط الالتزام بالشفافية والمحاسبة الدورية للمواطن (2026-2031)',
  subtitle: 'المخطط الزمني لتقديم تقارير الأداء العلنية كل 6 أشهر طيلة العهدة الانتخابية',
  yAxisLabel: 'عدد اللقاءات والتقارير الدورية للمواطنين',
  line1Label: 'تقارير دورية ولقاءات مجتمع مدني (جبهة المستقبل)',
  line2Label: 'النمط التقليدي السابق (غياب اللقاءات)',
  data: [
    { year: '2026', futureFront: 2, traditional: 0 },
    { year: '2027', futureFront: 2, traditional: 0 },
    { year: '2028', futureFront: 2, traditional: 0 },
    { year: '2029', futureFront: 2, traditional: 0 },
    { year: '2030', futureFront: 2, traditional: 0 },
    { year: '2031', futureFront: 2, traditional: 0 },
  ],
};

