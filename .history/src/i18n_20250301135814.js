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
      orderStatus: 'Status', // Changed from 'status' to 'orderStatus'
      paymentMethods: 'Payment Methods',
      salesChannels: 'Sales Channels',
      quickStats: 'Quick Stats',
      recentOrders: 'Recent Orders',
      topCustomers: 'Top Customers',
      orders: 'Orders',
      filterByDate: 'Filter by date',
      today: 'Today',
      thisWeek: 'This Week',
      thisMonth: 'This Month',
      searchSales: 'Search sales',
      filterByProduct: 'Filter by product',
      salesRecords: 'Sales Records',
      export: 'Export',
      showing: 'Showing',
      of: 'of',
      entries: 'entries',
      previous: 'Previous',
      next: 'Next',
      creditCard: 'Credit Card',
      bankTransfer: 'Bank Transfer',
      cash: 'Cash',
      averageSale: 'Average Sale',
      salesCount: 'Sales Count',
      topProduct: 'Top Product',
      noSalesData: 'No sales data found matching your criteria',

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
        mar: 'March',
        apr: 'April',
        may: 'May',
        jun: 'June',
        jul: 'July',
        // ...other months
      },
      customers: {
        johnDoe: 'John Doe',
        janeSmith: 'Jane Smith',
        bobjohnson: 'Bob Johnson',
        aliceWilliams: 'Alice Williams',
        tomBrown: 'Tom Brown'
      },
      status: {
        completed: 'Completed',
        processing: 'Processing',
        pending: 'Pending'
      },
      timeAgo: {
        '2min': '2 minutes ago',
        '5min': '5 minutes ago',
        '10min': '10 minutes ago',
        '15min': '15 minutes ago',
        '1hour': '1 hour ago',
        '2hours': '2 hours ago',
        '3hours': '3 hours ago',
        '5hours': '5 hours ago',
        '1day': '1 day ago',
      },
       ,
      activities: {
        newOrder: 'New order received',
        clientMeeting: 'Client meeting',
        stockUpdate: 'Stock update required',
        newClient: 'New client added'
      },
      tasks: {
        reviewSales: 'Review sales report',
        clientMeeting: 'Meeting with client',
        updateInventory: 'Update inventory',
        teamSync: 'Team sync',
        today: 'Today',
        tomorrow: 'Tomorrow',
        thisWeek: 'This week',
        saturday: 'Saturday',
        sunday: 'Sunday',
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday'
      },
      goals: {
        revenue: 'Revenue',
        sales: 'Sales',
        customers: 'Customers',
      },
      saleschannels: {
        online: 'Online',
        offline: 'Offline',
        inStore: 'In-store',
        phone: 'Phone',
      },
      categories: {
        all: 'All Products',
        electronics: 'Electronics',
        furniture: 'Furniture',
        clothing: 'Clothing'
      },
      metrics: {
        conversionRate: 'Conversion Rate',
        averageOrder: 'Average Order',
        customerRetention: 'Customer Retention',
        returnRate: 'Return Rate'
      },
      Support:{
        needAssistance: 'Need Assistance?',
        contactUs: 'Contact Us',
        callSupport: 'Call Support',
        chatSupport: 'Chat Support',
        availableMessage: 'We are here to help. Feel free to contact us if you have any inquiries or issues.',
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
      },
      id: 'ID',
      product: 'Product',
      actions: 'Actions',
      salesChannels: {
        online: 'Online',
        inStore: 'In Store',
        marketplace: 'Marketplace'
      },
      products: {
        productA: 'Product A',
        productB: 'Product B',
        productC: 'Product C'
      }
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
      orderStatus: 'الحالة', // Changed from 'status' to 'orderStatus'
      paymentMethods: 'طرق الدفع',
      salesChannels: 'قنوات البيع',
      quickStats: 'إحصائيات سريعة',
      recentOrders: 'الطلبات الأخيرة',
      topCustomers: 'كبار العملاء',
      orders: 'الطلبات',
      filterByDate: 'تصفية حسب التاريخ',
      today: 'اليوم',
      thisWeek: 'هذا الأسبوع',
      thisMonth: 'هذا الشهر',
      searchSales: 'البحث في المبيعات',
      filterByProduct: 'تصفية حسب المنتج',
      salesRecords: 'سجلات المبيعات',
      export: 'تصدير',
      showing: 'عرض',
      of: 'من',
      entries: 'إدخالات',
      previous: 'السابق',
      next: 'التالي',
      creditCard: 'بطاقة ائتمان',
      bankTransfer: 'تحويل بنكي',
      cash: 'نقدًا',
      averageSale: 'متوسط المبيعات',
      salesCount: 'عدد المبيعات',
      topProduct: 'المنتج الأفضل',
      noSalesData: 'لم يتم العثور على بيانات مبيعات تطابق معاييرك',

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
        mar: 'مارس',
        apr: 'أبريل',
        may: 'مايو',
        jun: 'يونيو',
        jul: 'يوليو',
        // ...other months
      },
      customers: {
        johnDoe: 'جون دو',
        janeSmith: 'جين سميث',
        bobjohnson: 'بوب جونسون',
        aliceWilliams: 'أليس ويليامز',
        tomBrown: 'توم براون'
      },
      status: {
        completed: 'مكتمل',
        processing: 'قيد المعالجة',
        pending: 'معلق'
      },
      timeAgo: {
        '2min': 'منذ دقيقتين',
        '5min': 'منذ 5 دقائق',
        '10min': 'منذ 10 دقائق',
        '15min': 'منذ 15 دقائق',
        '1hour': 'منذ 1 ساعة',
        '2hours': 'منذ 2 ساعات',
        '3hours': 'منذ 3 ساعات',
        '5hours': 'منذ 5 ساعات',
        '1day': 'منذ يوم',
      },
      activities: {
        newOrder: 'تم استلام طلب جديد',
        clientMeeting: 'اجتماع العميل',
        stockUpdate: 'تحديث المخزون مطلوب',
        newClient: 'تمت إضافة عميل جديد'
      },
      tasks: {
        reviewSales: 'مراجعة تقرير المبيعات',
        clientMeeting: 'اجتماع مع العميل',
        updateInventory: 'تحديث المخزون',
        teamSync: 'مزامنة الفريق',
        today: 'اليوم',
        tomorrow: 'غدا',
        thisWeek: 'هذا الأسبوع',
        saturday: 'السبت',
        sunday: 'الأحد',
        monday: 'الأثنين',
        tuesday: 'الثلاثاء',
        wednesday: 'الأربعاء',
        thursday: 'الخميس',
        friday: 'الجمعة',
      },
      goals: {
        revenue: 'الإيرادات',
        customers: 'العملاء',
        sales: 'المبيعات',
      },
      saleschannels: {
        online: 'الإنترنت',
        offline: 'خارج الإنترنت',
        phone: 'الهاتف',
        inStore: 'في المتجر',
      },
      categories: {
        all: 'جميع المنتجات',
        electronics: 'إلكترونيات',
        furniture: 'أثاث',
        clothing: 'ملابس'
      },
      metrics: {
        conversionRate: 'معدل التحويل',
        averageOrder: 'الطلب المتوسط',
        customerRetention: 'الاحتفاظ بالعملاء',
        returnRate: 'معدل الإرجاع'
      },
      Support:{
        needAssistance: 'هل تحتاج إلى مساعدة؟',
        availableMessage: 'نحن هنا لمساعدتك. لا تتردد في الاتصال بنا إذا كان لديك أي استفسارات أو مشاكل.',
        chatSupport: 'الدعم عبر الدردشة',
        callSupport: 'الدعم عبر الهاتف',
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
      },
      id: 'المعرف',
      product: 'المنتج',
      actions: 'الإجراءات',
      salesChannels: {
        online: 'عبر الإنترنت',
        inStore: 'في المتجر',
        marketplace: 'منصات البيع'
      },
      products: {
        productA: 'المنتج أ',
        productB: 'المنتج ب',
        productC: 'المنتج ج'
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