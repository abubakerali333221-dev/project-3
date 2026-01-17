
import { MarketingEvent, Merchant } from './types';

export const MOCK_EVENTS: MarketingEvent[] = [
  // يناير
  { id: 'jan-1', title: { ar: 'رأس السنة الميلادية', en: 'New Year' }, date: '2026-01-01', type: 'global', priority: 'high', description: { ar: 'بداية العام الجديد، موسم قوي للتصفيات وبداية أهداف جديدة.', en: 'Start of the year, great for clearances and new beginnings.' } },
  { id: 'jan-2', title: { ar: 'يوم الشاي العالمي', en: 'World Tea Day' }, date: '2026-01-12', type: 'global', priority: 'low', description: { ar: 'مناسبة لطيفة لقطاع الكافيهات والأغذية.', en: 'Nice event for cafes and F&B.' } },
  
  // فبراير
  { id: 'feb-1', title: { ar: 'بداية حملات فبراير', en: 'February Campaigns Start' }, date: '2026-02-01', type: 'commercial', priority: 'low', description: { ar: 'بداية التخطيط التسويقي لشهر فبراير المليء بالمناسبات.', en: 'Start of marketing planning for a busy February.' } },
  { id: 'feb-2', title: { ar: 'يوم البيتزا العالمي', en: 'World Pizza Day' }, date: '2026-02-09', type: 'global', priority: 'low', description: { ar: 'فرصة رائعة للمطاعم لتقديم خصومات خاصة.', en: 'Great opportunity for restaurants to offer special discounts.' } },
  { id: 'feb-3', title: { ar: 'تجهيزات ما قبل رمضان', en: 'Pre-Ramadan Prep' }, date: '2026-02-12', type: 'commercial', priority: 'medium', description: { ar: 'بدء التسوق للمستلزمات الرمضانية والتمور.', en: 'Starting shopping for Ramadan supplies and dates.' } },
  { id: 'feb-4', title: { ar: 'يوم الحب العالمي', en: 'Valentine\'s Day' }, date: '2026-02-14', type: 'global', priority: 'medium', description: { ar: 'موسم ضخم للهدايا، العطور، والزهور.', en: 'Huge season for gifts, perfumes, and flowers.' } },
  { id: '2', title: { ar: 'موسم رمضان المبارك', en: 'Ramadan Season' }, date: '2026-02-18', type: 'religious', priority: 'high', description: { ar: 'أكبر موسم استهلاكي وتفاعلي في السنة، يتطلب حملات مكثفة وعروض رمضانية.', en: 'The biggest consumer and engagement season of the year.' } },
  { id: '1', title: { ar: 'يوم التأسيس السعودي', en: 'Saudi Founding Day' }, date: '2026-02-22', type: 'national', priority: 'high', description: { ar: 'ذكرى تأسيس الدولة السعودية الأولى - ذروة تسويقية كبرى تبرز الهوية الوطنية.', en: 'Founding of the first Saudi state - Major marketing peak highlighting national identity.' } },
  
  // مارس
  { id: '4', title: { ar: 'عيد الفطر المبارك', en: 'Eid Al-Fitr' }, date: '2026-03-20', type: 'religious', priority: 'high', description: { ar: 'موسم الاحتفالات، الملابس الجديدة، والحلويات والهدايا.', en: 'Season for celebrations, new clothes, sweets and gifts.' } },
  { id: '3', title: { ar: 'يوم الأم العالمي', en: 'Mother\'s Day' }, date: '2026-03-21', type: 'global', priority: 'high', description: { ar: 'موسم الهدايا والتقدير، مثالي لقطاعات العطور، الذهب، والزهور.', en: 'Season of gifts and appreciation, ideal for perfumes, gold, and flowers.' } },
  
  // أبريل
  { id: 'apr-1', title: { ar: 'بداية موسم الربيع', en: 'Spring Season Start' }, date: '2026-04-01', type: 'commercial', priority: 'medium', description: { ar: 'موسم الموضة والرحلات الخارجية.', en: 'Fashion and outdoor trips season.' } },
  { id: 'apr-2', title: { ar: 'يوم الصحة العالمي', en: 'World Health Day' }, date: '2026-04-07', type: 'global', priority: 'low', description: { ar: 'مناسبة مثالية للنوادي الصحية والمكملات الغذائية.', en: 'Perfect for gyms and health supplements.' } },
  
  // مايو
  { id: 'may-1', title: { ar: 'يوم العمال العالمي', en: 'Labor Day' }, date: '2026-05-01', type: 'global', priority: 'medium', description: { ar: 'يوم إجازة وتركيز على العروض السريعة.', en: 'Holiday focusing on flash sales.' } },
  { id: '7', title: { ar: 'يوم الأضحى المبارك', en: 'Eid Al-Adha Day' }, date: '2026-05-27', type: 'religious', priority: 'high', description: { ar: 'موسم السفر، الضيافة، والولائم الكبرى.', en: 'Travel, hospitality, and major banquets season.' } },
  
  // يونيو
  { id: 'jun-1', title: { ar: 'بداية الصيف الفعلي', en: 'Official Summer Start' }, date: '2026-06-21', type: 'commercial', priority: 'high', description: { ar: 'انطلاق حملات الصيف والملابس الخفيفة.', en: 'Summer campaigns launch.' } },
  { id: 'jun-2', title: { ar: 'يوم الأب العالمي', en: 'Father\'s Day' }, date: '2026-06-16', type: 'global', priority: 'low', description: { ar: 'هدايا الرجالي والساعات والالكترونيات.', en: 'Men\'s gifts, watches, and electronics.' } },
  
  // يوليو
  { id: 'jul-1', title: { ar: 'يوم الشوكولاتة العالمي', en: 'World Chocolate Day' }, date: '2026-07-07', type: 'global', priority: 'low', description: { ar: 'يوم مثالي لقطاع الحلويات.', en: 'Ideal for the confectionery sector.' } },
  { id: 'jul-2', title: { ar: 'تخفيضات الصيف الكبرى', en: 'Big Summer Sales' }, date: '2026-07-15', type: 'commercial', priority: 'high', description: { ar: 'ذروة التصفيات الصيفية قبل العودة للمدارس.', en: 'Peak summer clearance.' } },
  
  // أغسطس
  { id: 'aug-1', title: { ar: 'العودة للمدارس', en: 'Back to School' }, date: '2026-08-20', type: 'commercial', priority: 'high', description: { ar: 'أقوى موسم لقطاع القرطاسية، الالكترونيات، والملابس.', en: 'Strongest season for stationery, electronics, and clothing.' } },
  { id: 'aug-2', title: { ar: 'يوم التصوير العالمي', en: 'World Photography Day' }, date: '2026-08-19', type: 'global', priority: 'low', description: { ar: 'تفاعل مع صناع المحتوى والمصورين.', en: 'Engage with content creators and photographers.' } },
  
  // سبتمبر
  { id: '9', title: { ar: 'اليوم الوطني السعودي', en: 'Saudi National Day' }, date: '2026-09-23', type: 'national', priority: 'high', description: { ar: 'يوم الاحتفاء بالوطن، عروض "96" الشهيرة والفعاليات في كل مكان.', en: 'Celebrating the nation with famous "96" offers.' } },
  { id: 'sep-1', title: { ar: 'يوم القهوة العالمي', en: 'World Coffee Day' }, date: '2026-09-29', type: 'global', priority: 'medium', description: { ar: 'أقوى يوم تفاعلي لقطاع الكافيهات في المنطقة.', en: 'Highest engagement day for the cafes sector in the region.' } },
  
  // أكتوبر
  { id: 'oct-1', title: { ar: 'أكتوبر الوردي', en: 'Pink October' }, date: '2026-10-01', type: 'global', priority: 'medium', description: { ar: 'حملات التوعية بسرطان الثدي، تدعم المسؤولية الاجتماعية للمتاجر.', en: 'Breast cancer awareness campaigns.' } },
  { id: 'oct-2', title: { ar: 'يوم الابتسامة العالمي', en: 'World Smile Day' }, date: '2026-10-02', type: 'global', priority: 'low', description: { ar: 'حملات تفاعلية لنشر الإيجابية.', en: 'Interactive positive vibes campaigns.' } },
  
  // نوفمبر
  { id: '11-11', title: { ar: 'يوم العزاب', en: 'Singles Day' }, date: '2026-11-11', type: 'commercial', priority: 'medium', description: { ar: 'موسم مبيعات عالمي ضخم، يسبق الجمعة البيضاء.', en: 'Massive global sales event before White Friday.' } },
  { id: '12', title: { ar: 'يوم الجمعة البيضاء', en: 'White Friday' }, date: '2026-11-27', type: 'commercial', priority: 'high', description: { ar: 'أقوى موسم مبيعات إلكترونية وتصفيات سنوية.', en: 'The strongest annual e-commerce sales and clearance season.' } },
  
  // ديسمبر
  { id: 'dec-1', title: { ar: 'يوم اللغة العربية', en: 'Arabic Language Day' }, date: '2026-12-18', type: 'national', priority: 'low', description: { ar: 'يوم الفخر بالهوية واللغة.', en: 'Day of pride in identity and language.' } },
  { id: 'dec-2', title: { ar: 'تخفيضات نهاية العام', en: 'Year End Sales' }, date: '2026-12-25', type: 'commercial', priority: 'high', description: { ar: 'آخر فرصة لتصفية المخزون قبل جرد العام الجديد.', en: 'Final chance for inventory clearance.' } }
];

export const BUSINESS_TYPES = [
  'retail', 'fashion', 'food', 'tech', 'beauty', 'services'
];

export const SOCIAL_PLATFORMS = [
  'Instagram', 'X', 'TikTok', 'Snapchat', 'Facebook', 'WhatsApp'
];

export const MOCK_MERCHANTS: Merchant[] = [
  {
    id: 'm1',
    storeName: 'أزياء النخبة',
    businessType: 'fashion',
    country: 'SA',
    phone: '+966501234567',
    email: 'info@elitefashion.com',
    primaryColor: '#8b5cf6',
    secondaryColor1: '#a855f7',
    secondaryColor2: '#f43f5e',
    platforms: ['Instagram', 'Snapchat'],
    createdAt: '2024-01-15',
    status: 'active'
  }
];
