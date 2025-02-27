import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      dashboard: 'Dashboard',
      sales: 'Sales',
      products: 'Products',
      inventory: 'Inventory',
      orders: 'Orders',
      reservation: 'Reservation',
      clients: 'Clients',
      employees: 'Employees',
      events: 'Events',
      reports: 'Reports',
      settings: 'Settings',
      support: 'Support',
      faq: 'FAQ',
      
      // Common
      search: 'Search anything...',
      viewAll: 'View All',
      cancel: 'Cancel',
      add: 'Add',
      edit: 'Edit',
      delete: 'Delete',
      save: 'Save',
      close: 'Close',
      
      // Dashboard
      totalSales: 'Total Sales',
      totalOrders: 'Total Orders',
      newClients: 'New Clients',
      growth: 'Growth',
      salesOverview: 'Sales Overview',
      ordersTrend: 'Orders Trend',
      recentTransactions: 'Recent Transactions',
      quickActions: 'Quick Actions',
      goalsProgress: 'Goals Progress',
      upcomingTasks: 'Upcoming Tasks',
      recentActivity: 'Recent Activity',
      
      // Sales
      newSale: 'New Sale',
      addNewSale: 'Add New Sale',
      customerName: 'Customer Name',
      amount: 'Amount',
      date: 'Date',
      status: 'Status',
      paymentMethods: 'Payment Methods',
      salesChannels: 'Sales Channels',
      quickStats: 'Quick Stats',
      
      // Products
      addProduct: 'Add Product',
      productName: 'Product Name',
      category: 'Category',
      price: 'Price',
      stock: 'Stock',
      topSelling: 'Top Selling',
      lowStockAlert: 'Low Stock Alert',
      categoryDistribution: 'Category Distribution',
      
      // Notifications
      newOrder: 'New order received',
      meetingReminder: 'Meeting reminder',
      stockUpdate: 'Stock update required',

      // Additional Translations
      crmDashboard: 'CRM Dashboard',
      mainStats: {
        totalSales: 'Total Sales',
        totalOrders: 'Total Orders',
        newCustomers: 'New Customers',
        growth: 'Growth'
      },
      crmSystem: 'CRM System',
      productsManagement: 'Products Management',
      addSale: 'Add Sale',
      addClient: 'Add Client',
      addNewProduct: 'Add Product',

      // New Translations
      months: {
        jan: 'January',
        feb: 'February',
        // ...other months
      },
      customers: {
        johnDoe: 'John Doe',
        janeSmith: 'Jane Smith'
      },
      status: {
        completed: 'Completed',
        processing: 'Processing',
        pending: 'Pending'
      },
      timeAgo: {
        '2min': '2 minutes ago',
        '5min': '5 minutes ago'
      },
      categories: {
        all: 'All Products',
        electronics: 'Electronics',
        furniture: 'Furniture',
        clothing: 'Clothing'
      },
      currency: '{{value, currency}}',
      notificationMessages: {
        title: 'Notifications',
        new: 'New',
        viewAll: 'View All',
        messages: {
          newOrder: 'New order received',
          stockUpdate: 'Stock update required',
          meetingReminder: 'Meeting reminder',
        },
        timeAgo: {
          justNow: 'Just now',
          minutesAgo: '{{count}} minutes ago',
          hoursAgo: '{{count}} hours ago',
          daysAgo: '{{count}} days ago',
        }
      }
      // ...add other needed translations
    }
  },
  ar: {
    translation: {
      // Navigation
      dashboard: 'لوحة التحكم',
      sales: 'المبيعات',
      products: 'المنتجات',
      inventory: 'المخزون',
      orders: 'الطلبات',
      reservation: 'الحجوزات',
      clients: 'العملاء',
      employees: 'الموظفون',
      events: 'الفعاليات',
      reports: 'التقارير',
      settings: 'الإعدادات',
      support: 'الدعم',
      faq: 'الأسئلة الشائعة',
      
      // Common
      search: 'ابحث عن أي شيء...',
      viewAll: 'عرض الكل',
      cancel: 'إلغاء',
      add: 'إضافة',
      edit: 'تعديل',
      delete: 'حذف',
      save: 'حفظ',
      close: 'إغلاق',
      
      // Dashboard
      totalSales: 'إجمالي المبيعات',
      totalOrders: 'إجمالي الطلبات',
      newClients: 'العملاء الجدد',
      growth: 'النمو',
      salesOverview: 'نظرة عامة على المبيعات',
      ordersTrend: 'اتجاه الطلبات',
      recentTransactions: 'المعاملات الأخيرة',
      quickActions: 'إجراءات سريعة',
      goalsProgress: 'تقدم الأهداف',
      upcomingTasks: 'المهام القادمة',
      recentActivity: 'النشاط الأخير',
      
      // Sales
      newSale: 'بيع جديد',
      addNewSale: 'إضافة بيع جديد',
      customerName: 'اسم العميل',
      amount: 'المبلغ',
      date: 'التاريخ',
      status: 'الحالة',
      paymentMethods: 'طرق الدفع',
      salesChannels: 'قنوات البيع',
      quickStats: 'إحصائيات سريعة',
      
      // Products
      addProduct: 'إضافة منتج',
      productName: 'اسم المنتج',
      category: 'الفئة',
      price: 'السعر',
      stock: 'المخزون',
      topSelling: 'الأكثر مبيعاً',
      lowStockAlert: 'تنبيه المخزون المنخفض',
      categoryDistribution: 'توزيع الفئات',
      
      // Notifications
      newOrder: 'تم استلام طلب جديد',
      meetingReminder: 'تذكير بالاجتماع',
      stockUpdate: 'تحديث المخزون مطلوب',

      // Additional Translations
      crmDashboard: 'نظام إدارة العملاء',
      mainStats: {
        totalSales: 'إجمالي المبيعات',
        totalOrders: 'إجمالي الطلبات',
        newCustomers: 'العملاء الجدد',
        growth: 'النمو'
      },
      crmSystem: 'نظام إدارة العملاء',
      productsManagement: 'إدارة المنتجات',
      addSale: 'إضافة بيع',
      addClient: 'إضافة عميل',
      addNewProduct: 'إضافة منتج',

      // New Translations
      months: {
        jan: 'يناير',
        feb: 'فبراير',
        // ...other months
      },
      customers: {
        johnDoe: 'جون دو',
        janeSmith: 'جين سميث'
      },
      status: {
        completed: 'مكتمل',
        processing: 'قيد المعالجة',
        pending: 'معلق'
      },
      timeAgo: {
        '2min': 'منذ دقيقتين',
        '5min': 'منذ 5 دقائق'
      },
      categories: {
        all: 'جميع المنتجات',
        electronics: 'إلكترونيات',
        furniture: 'أثاث',
        clothing: 'ملابس'
      },
      currency: '{{value}} ريال',
      notificationMessages: {
        title: 'الإشعارات',
        new: 'جديد',
        viewAll: 'عرض الكل',
        messages: {
          newOrder: 'تم استلام طلب جديد',
          stockUpdate: 'تحديث المخزون مطلوب',
          meetingReminder: 'تذكير بالاجتماع',
        },
        timeAgo: {
          justNow: 'الآن',
          minutesAgo: 'منذ {{count}} دقائق',
          hoursAgo: 'منذ {{count}} ساعات',
          daysAgo: 'منذ {{count}} أيام',
        }
      }
      // ...add other needed translations
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    supportedLngs: ['en', 'ar'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    },
    react: {
      useSuspense: false // This is important for immediate language switching
    }
  });

// Initialize direction based on current language
document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

export default i18n;

export default i18n;