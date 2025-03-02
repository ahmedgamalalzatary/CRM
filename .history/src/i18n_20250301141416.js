import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation - single words lowercase
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

      // Common - single words lowercase
      search: 'Search anything...',
      viewAll: 'View All',
      cancel: 'Cancel',
      add: 'Add',
      edit: 'Edit',
      delete: 'Delete',
      save: 'Save',
      close: 'Close',
      id: 'ID',
      product: 'Product',
      actions: 'Actions',
      date: 'Date',
      amount: 'Amount',

      // Multi-word phrases - CamelCase starting with capital
      TotalSales: 'Total Sales',
      TotalOrders: 'Total Orders',
      NewClients: 'New Clients',
      OrdersTrend: 'Orders Trend',
      RecentTransactions: 'Recent Transactions',
      QuickActions: 'Quick Actions',
      GoalsProgress: 'Goals Progress',
      UpcomingTasks: 'Upcoming Tasks',
      RecentActivity: 'Recent Activity',
      NewSale: 'New Sale',
      AddNewSale: 'Add New Sale',
      CustomerName: 'Customer Name',
      PaymentMethods: 'Payment Methods',
      QuickStats: 'Quick Stats',
      OrderStatus: 'Status',

      // Namespaces/Objects - Capital first letter
      Sales: {
        RecentOrders: 'Recent Orders',
        TopCustomers: 'Top Customers',
        Orders: 'Orders',
        FilterByDate: 'Filter by date',
        Today: 'Today',
        ThisWeek: 'This Week',
        ThisMonth: 'This Month',
        SearchSales: 'Search sales',
        FilterByProduct: 'Filter by product',
        SalesRecords: 'Sales Records',
        Export: 'Export',
        Showing: 'Showing',
        Of: 'of',
        Entries: 'entries',
        Previous: 'Previous',
        Next: 'Next',
        CreditCard: 'Credit Card',
        BankTransfer: 'Bank Transfer',
        Cash: 'Cash',
        AverageSale: 'Average Sale',
        SalesCount: 'Sales Count',
        TopProduct: 'Top Product',
        NoSalesData: 'No sales data found matching your criteria'
      },
      
      Products: {
        AddProduct: 'Add Product',
        ProductName: 'Product Name',
        TopSelling: 'Top Selling',
        LowStockAlert: 'Low Stock Alert',
        CategoryDistribution: 'Category Distribution',
        ProductA: 'Product A',
        ProductB: 'Product B',
        ProductC: 'Product C'
      },

      Notifications: {
        NewOrder: 'New order received',
        MeetingReminder: 'Meeting reminder',
        StockUpdate: 'Stock update required'
      },

      Crm: {
        Dashboard: 'CRM Dashboard',
        System: 'CRM System',
        MainStats: {
          TotalSales: 'Total Sales',
          TotalOrders: 'Total Orders',
          NewCustomers: 'New Customers',
          Growth: 'Growth'
        },
        ProductsManagement: 'Products Management',
        AddSale: 'Add Sale',
        AddClient: 'Add Client',
        AddNewProduct: 'Add Product'
      },

      Months: {
        Jan: 'January',
        Feb: 'February',
        Mar: 'March',
        Apr: 'April',
        May: 'May',
        Jun: 'June',
        Jul: 'July',
        Aug: 'August',
        Sep: 'September',
        Oct: 'October',
        Nov: 'November',
        Dec: 'December'
      },

      Customers: {
        JohnDoe: 'John Doe',
        JaneSmith: 'Jane Smith',
        BobJohnson: 'Bob Johnson',
        AliceWilliams: 'Alice Williams',
        TomBrown: 'Tom Brown',
        DavidWilson: 'David Wilson'
      },

      Status: {
        Completed: 'Completed',
        Processing: 'Processing',
        Pending: 'Pending'
      },

      TimeAgo: {
        Min2: '2 minutes ago',
        Min5: '5 minutes ago',
        Min10: '10 minutes ago',
        Min15: '15 minutes ago',
        Hour1: '1 hour ago',
        Hours2: '2 hours ago',
        Hours3: '3 hours ago',
        Hours5: '5 hours ago',
        Day1: '1 day ago',
        JustNow: 'Just now'
      },

      Timeframes: {
        Weekly: 'Weekly',
        Monthly: 'Monthly',
        Yearly: 'Yearly'
      },

      Activities: {
        NewOrder: 'New order received',
        ClientMeeting: 'Client meeting',
        StockUpdate: 'Stock update required',
        NewClient: 'New client added'
      },

      Tasks: {
        ReviewSales: 'Review sales report',
        ClientMeeting: 'Meeting with client',
        UpdateInventory: 'Update inventory',
        TeamSync: 'Team sync',
        Today: 'Today',
        Tomorrow: 'Tomorrow',
        ThisWeek: 'This week',
        Saturday: 'Saturday',
        Sunday: 'Sunday',
        Monday: 'Monday',
        Tuesday: 'Tuesday',
        Wednesday: 'Wednesday',
        Thursday: 'Thursday',
        Friday: 'Friday'
      },

      Goals: {
        Revenue: 'Revenue',
        Sales: 'Sales',
        Customers: 'Customers',
      },

      SalesChannels: {
        Online: 'Online',
        Offline: 'Offline',
        InStore: 'In-store',
        Phone: 'Phone',
        Marketplace: 'Marketplace'
      },

      Categories: {
        All: 'All Products',
        Electronics: 'Electronics',
        Furniture: 'Furniture',
        Clothing: 'Clothing'
      },

      Metrics: {
        ConversionRate: 'Conversion Rate',
        AverageOrder: 'Average Order',
        CustomerRetention: 'Customer Retention',
        ReturnRate: 'Return Rate',
        PerformanceMetrics: 'Performance Metrics'
      },

      Support: {
        NeedAssistance: 'Need Assistance?',
        ContactUs: 'Contact Us',
        CallSupport: 'Call Support',
        ChatSupport: 'Chat Support',
        AvailableMessage: 'We are here to help. Feel free to contact us if you have any inquiries or issues.',
      },

      NotificationMessages: {
        Title: 'Notifications',
        New: 'New',
        ViewAll: 'View All',
        Messages: {
          NewOrder: 'New order received',
          StockUpdate: 'Stock update required',
          MeetingReminder: 'Meeting reminder',
        },
        TimeAgo: {
          JustNow: 'Just now',
          MinutesAgo: '{{count}} minutes ago',
          HoursAgo: '{{count}} hours ago',
          DaysAgo: '{{count}} days ago',
        }
      },
      
      currency: '{{value, currency}}',
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
      id: 'المعرف',
      product: 'المنتج',
      actions: 'الإجراءات',

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

      // Sales module
      newSale: 'بيع جديد',
      addNewSale: 'إضافة بيع جديد',
      customerName: 'اسم العميل',
      amount: 'المبلغ',
      date: 'التاريخ',
      orderStatus: 'الحالة',
      paymentMethods: 'طرق الدفع',
      quickStats: 'إحصائيات سريعة',

      // Sales specific translations
      salesData: {
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
        noSalesData: 'لم يتم العثور على بيانات مبيعات تطابق معاييرك'
      },
      
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
        '15min': 'منذ 15 دقائق',
        '1hour': 'منذ 1 ساعة',
        '2hours': 'منذ 2 ساعات',
        '3hours': 'منذ 3 ساعات',
        '5hours': 'منذ 5 ساعات',
        '1day': 'منذ يوم',
      },
      timeframes: {
        weekly: 'أسبوعياً',
        monthly: 'شهري',
        yearly: 'سنوي'
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
      Support: {
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
      // Channel related
      channelOptions: {
        salesChannels: 'قنوات البيع',
        online: 'عبر الإنترنت',
        inStore: 'في المتجر',
        marketplace: 'منصات البيع'
      },
      // Product related
      productOptions: {
        productA: 'المنتج أ',
        productB: 'المنتج ب',
        productC: 'المنتج ج'
      }
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