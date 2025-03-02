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
      salesDistribution: 'Sales Distribution',
      viewCalendar: 'View Calendar',
      
      // Sales
      newSale: 'New Sale',
      addNewSale: 'Add New Sale',
      customerName: 'Customer Name',
      amount: 'Amount',
      date: 'Date',
      orderStatus: 'Status',
      paymentMethods: 'Payment Methods',
      quickStats: 'Quick Stats',
      'sales.recentOrders': 'Recent Orders',
      'sales.topCustomers': 'Top Customers',
      'sales.orders': 'orders',
      'sales.filterByDate': 'Filter by Date',
      'sales.filterByProduct': 'Filter by Product',
      'sales.searchSales': 'Search sales...',
      'sales.salesRecords': 'Sales Records',
      'sales.export': 'Export',
      'sales.noSalesData': 'No sales data matching your filters',
      'sales.showing': 'Showing',
      'sales.of': 'of',
      'sales.entries': 'entries',
      'sales.previous': 'Previous',
      'sales.next': 'Next',
      'sales.creditCard': 'Credit Card',
      'sales.bankTransfer': 'Bank Transfer',
      'sales.cash': 'Cash',
      'sales.averageSale': 'Average Sale',
      'sales.salesCount': 'Sales Count',
      'sales.topProduct': 'Top Product',
      'sales.today': 'Today',
      'sales.thisWeek': 'This Week',
      'sales.thisMonth': 'This Month',
      
      // Products
      addProduct: 'Add Product',
      productName: 'Product Name',
      category: 'Category',
      price: 'Price',
      stock: 'Stock',
      topSelling: 'Top Selling',
      lowStockAlert: 'Low Stock Alert',
      categoryDistribution: 'Category Distribution',
      'products.productA': 'Product A',
      'products.productB': 'Product B',
      'products.productC': 'Product C',
      
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
        jul: 'July'
      },
      customers: {
        johnDoe: 'John Doe',
        janeSmith: 'Jane Smith',
        bobJohnson: 'Bob Johnson',
        aliceWilliams: 'Alice Williams',
        tomBrown: 'Tom Brown',
        davidWilson: 'David Wilson'
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
        '2hours': '2 hours ago',
        '3hours': '3 hours ago',
        '5hours': '5 hours ago',
        '1day': '1 day ago'
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
          meetingReminder: 'Meeting reminder'
        },
        timeAgo: {
          justNow: 'Just now',
          minutesAgo: '{{count}} minutes ago',
          hoursAgo: '{{count}} hours ago',
          daysAgo: '{{count}} days ago'
        }
      },

      // Additional Dashboard Translations
      timeframes: {
        weekly: 'Weekly',
        monthly: 'Monthly',
        yearly: 'Yearly'
      },
      metrics: {
        performanceMetrics: 'Performance Metrics',
        conversionRate: 'Conversion Rate',
        averageOrder: 'Average Order',
        customerRetention: 'Customer Retention',
        returnRate: 'Return Rate'
      },
      tasks: {
        reviewSales: 'Review sales report',
        clientMeeting: 'Client meeting with John Smith',
        teamSync: 'Team sync for Q3 planning',
        updateInventory: 'Update inventory stock levels',
        today: 'Today',
        tomorrow: 'Tomorrow',
        wednesday: 'Wednesday',
        friday: 'Friday'
      },
      goals: {
        revenue: 'Revenue',
        customers: 'Customers',
        sales: 'Sales'
      },
      activities: {
        newOrder: 'New order received',
        clientMeeting: 'Client meeting scheduled',
        stockUpdate: 'Product stock updated',
        newClient: 'New client account created'
      },
      'support.needAssistance': 'Need immediate assistance?',
      'support.availableMessage': 'Our support team is available 24/7 to help you',
      'support.chatSupport': 'Chat with Support',
      'support.callSupport': 'Call Support',
      
      salesChannels: 'Sales Channels',
      'salesChannels.online': 'Online',
      'salesChannels.inStore': 'In-Store',
      'salesChannels.phone': 'Phone',
      'salesChannels.marketplace': 'Marketplace',
      
      // Additional Sales Page Translations
      id: 'ID',
      actions: 'Actions',
      product: 'Product',

      // Products Page Translations
      'products.title': 'Products Management',
      'products.addNew': 'Add New Product',
      'products.search': 'Search products...',
      'products.filter': 'Filter by Category',
      'products.inStock': 'In Stock',
      'products.lowStock': 'Low Stock',
      'products.outOfStock': 'Out of Stock',
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
      salesDistribution: 'توزيع المبيعات',
      viewCalendar: 'عرض التقويم',
      
      // Sales
      newSale: 'بيع جديد',
      addNewSale: 'إضافة بيع جديد',
      customerName: 'اسم العميل',
      amount: 'المبلغ',
      date: 'التاريخ',
      orderStatus: 'الحالة',
      paymentMethods: 'طرق الدفع',
      quickStats: 'إحصائيات سريعة',
      'sales.recentOrders': 'الطلبات الأخيرة',
      'sales.topCustomers': 'أفضل العملاء',
      'sales.orders': 'طلبات',
      'sales.filterByDate': 'تصفية حسب التاريخ',
      'sales.filterByProduct': 'تصفية حسب المنتج',
      'sales.searchSales': 'البحث في المبيعات...',
      'sales.salesRecords': 'سجلات المبيعات',
      'sales.export': 'تصدير',
      'sales.noSalesData': 'لا توجد بيانات مبيعات تطابق المرشحات',
      'sales.showing': 'عرض',
      'sales.of': 'من',
      'sales.entries': 'إدخالات',
      'sales.previous': 'السابق',
      'sales.next': 'التالي',
      'sales.creditCard': 'بطاقة ائتمان',
      'sales.bankTransfer': 'تحويل بنكي',
      'sales.cash': 'نقدا',
      'sales.averageSale': 'متوسط البيع',
      'sales.salesCount': 'عدد المبيعات',
      'sales.topProduct': 'أفضل منتج',
      'sales.today': 'اليوم',
      'sales.thisWeek': 'هذا الأسبوع',
      'sales.thisMonth': 'هذا الشهر',
      
      // Products
      addProduct: 'إضافة منتج',
      productName: 'اسم المنتج',
      category: 'الفئة',
      price: 'السعر',
      stock: 'المخزون',
      topSelling: 'الأكثر مبيعاً',
      lowStockAlert: 'تنبيه المخزون المنخفض',
      categoryDistribution: 'توزيع الفئات',
      'products.productA': 'المنتج أ',
      'products.productB': 'المنتج ب',
      'products.productC': 'المنتج ج',
      
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
        jun: 'يونيو'
      },
      customers: {
        johnDoe: 'جون دو',
        janeSmith: 'جين سميث',
        bobJohnson: 'بوب جونسون',
        aliceWilliams: 'أليس ويليامز',
        tomBrown: 'توم براون',
        davidWilson: 'ديفيد ويلسون'
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
        '2hours': 'منذ ساعتين',
        '3hours': 'منذ ثلاث ساعات',
        '5hours': 'منذ خمس ساعات',
        '1day': 'منذ يوم'
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
          meetingReminder: 'تذكير بالاجتماع'
        },
        timeAgo: {
          justNow: 'الآن',
          minutesAgo: 'منذ {{count}} دقائق',
          hoursAgo: 'منذ {{count}} ساعات',
          daysAgo: 'منذ {{count}} أيام'
        }
      },

      // Additional Dashboard Translations
      timeframes: {
        weekly: 'أسبوعي',
        monthly: 'شهري',
        yearly: 'سنوي'
      },
      metrics: {
        performanceMetrics: 'مؤشرات الأداء',
        conversionRate: 'معدل التحويل',
        averageOrder: 'متوسط الطلب',
        customerRetention: 'الاحتفاظ بالعملاء',
        returnRate: 'معدل المرتجعات'
      },
      tasks: {
        reviewSales: 'مراجعة تقرير المبيعات',
        clientMeeting: 'اجتماع مع العميل جون سميث',
        teamSync: 'اجتماع الفريق للربع الثالث',
        updateInventory: 'تحديث مستويات المخزون',
        today: 'اليوم',
        tomorrow: 'غداً',
        wednesday: 'الأربعاء',
        friday: 'الجمعة'
      },
      goals: {
        revenue: 'الإيرادات',
        customers: 'العملاء',
        sales: 'المبيعات'
      },
      activities: {
        newOrder: 'تم استلام طلب جديد',
        clientMeeting: 'تم جدولة اجتماع مع العميل',
        stockUpdate: 'تم تحديث مخزون المنتجات',
        newClient: 'تم إنشاء حساب عميل جديد'
      },
      'support.needAssistance': 'هل تحتاج إلى مساعدة فورية؟',
      'support.availableMessage': 'فريق الدعم متاح على مدار الساعة لمساعدتك',
      'support.chatSupport': 'الدردشة مع الدعم',
      'support.callSupport': 'اتصل بالدعم',
      
      salesChannels: 'قنوات البيع',
      'salesChannels.online': 'عبر الإنترنت',
      'salesChannels.inStore': 'في المتجر',
      'salesChannels.phone': 'عبر الهاتف',
      'salesChannels.marketplace': 'السوق',
      
      // Additional Sales Page Translations
      id: 'الرقم التعريفي',
      actions: 'إجراءات',
      product: 'المنتج'
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