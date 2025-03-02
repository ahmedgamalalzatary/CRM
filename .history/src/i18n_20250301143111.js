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
      growth: 'Growth',
      name: 'Name',
      stock: 'Stock',
      price: 'Price',
      left: 'left',
      products: 'products',
      Previous: 'Previous',
      Next: 'Next',
      Showing: 'Showing',
      of: 'of',

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
      SalesOverview: 'Sales Overview',
      SalesDistribution: 'Sales Distribution',
      ViewCalendar: 'View Calendar',
      PerformanceMetrics: 'Performance Metrics',

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
        twohours: '2 hours ago',
        threehours: '3 hours ago',
        Hours5: '5 hours ago',
        oneday: '1 day ago',
        JustNow: 'Just now'
      },

      Timeframes: {
        Weekly: 'Weekly',
        Monthly: 'Monthly',
        Yearly: 'Yearly'
      },

      Activities: {
        NewOrder: 'New order received',
        ClientMeeting: 'Client meeting scheduled',
        StockUpdate: 'Stock update completed',
        NewClient: 'New client registered'
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
      SearchProducts: 'Search products...',
      SelectCategory: 'Select Category',
      AllCategories: 'All Categories',
      AddNewProduct: 'Add New Product', 
      NoProductsFound: 'No products found matching your criteria',
    }
  },
  ar: {
    translation: {
      // Navigation - single words lowercase
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

      // Common - single words lowercase
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
      date: 'التاريخ',
      amount: 'المبلغ',
      growth: 'النمو',
      name: 'الاسم',
      stock: 'المخزون',
      price: 'السعر',
      left: 'متبقي',
      products: 'منتجات',
      Previous: 'السابق',
      Next: 'التالي',
      Showing: 'عرض',
      of: 'من',

      // Multi-word phrases - CamelCase starting with capital
      TotalSales: 'إجمالي المبيعات',
      TotalOrders: 'إجمالي الطلبات',
      NewClients: 'العملاء الجدد',
      OrdersTrend: 'اتجاه الطلبات',
      RecentTransactions: 'المعاملات الأخيرة',
      QuickActions: 'إجراءات سريعة',
      GoalsProgress: 'تقدم الأهداف',
      UpcomingTasks: 'المهام القادمة',
      RecentActivity: 'النشاط الأخير',
      NewSale: 'بيع جديد',
      AddNewSale: 'إضافة بيع جديد',
      CustomerName: 'اسم العميل',
      PaymentMethods: 'طرق الدفع',
      QuickStats: 'إحصائيات سريعة',
      OrderStatus: 'الحالة',
      SalesOverview: 'نظرة عامة على المبيعات',
      SalesDistribution: 'توزيع المبيعات',
      ViewCalendar: 'عرض التقويم',
      PerformanceMetrics: 'مؤشرات الأداء',

      // Namespaces/Objects - Capital first letter
      Sales: {
        RecentOrders: 'الطلبات الأخيرة',
        TopCustomers: 'كبار العملاء',
        Orders: 'الطلبات',
        FilterByDate: 'تصفية حسب التاريخ',
        Today: 'اليوم',
        ThisWeek: 'هذا الأسبوع',
        ThisMonth: 'هذا الشهر',
        SearchSales: 'البحث في المبيعات',
        FilterByProduct: 'تصفية حسب المنتج',
        SalesRecords: 'سجلات المبيعات',
        Export: 'تصدير',
        Showing: 'عرض',
        Of: 'من',
        Entries: 'إدخالات',
        Previous: 'السابق',
        Next: 'التالي',
        CreditCard: 'بطاقة ائتمان',
        BankTransfer: 'تحويل بنكي',
        Cash: 'نقدًا',
        AverageSale: 'متوسط المبيعات',
        SalesCount: 'عدد المبيعات',
        TopProduct: 'المنتج الأفضل',
        NoSalesData: 'لم يتم العثور على بيانات مبيعات تطابق معاييرك'
      },
      
      Products: {
        AddProduct: 'إضافة منتج',
        ProductName: 'اسم المنتج',
        TopSelling: 'الأكثر مبيعاً',
        LowStockAlert: 'تنبيه المخزون المنخفض',
        CategoryDistribution: 'توزيع الفئات',
        ProductA: 'المنتج أ',
        ProductB: 'المنتج ب',
        ProductC: 'المنتج ج'
      },

      Notifications: {
        NewOrder: 'تم استلام طلب جديد',
        MeetingReminder: 'تذكير بالاجتماع',
        StockUpdate: 'تحديث المخزون مطلوب'
      },

      Crm: {
        Dashboard: 'نظام إدارة العملاء',
        System: 'نظام إدارة العملاء',
        MainStats: {
          TotalSales: 'إجمالي المبيعات',
          TotalOrders: 'إجمالي الطلبات',
          NewCustomers: 'العملاء الجدد',
          Growth: 'النمو'
        },
        ProductsManagement: 'إدارة المنتجات',
        AddSale: 'إضافة بيع',
        AddClient: 'إضافة عميل',
        AddNewProduct: 'إضافة منتج'
      },

      Months: {
        Jan: 'يناير',
        Feb: 'فبراير',
        Mar: 'مارس',
        Apr: 'أبريل',
        May: 'مايو',
        Jun: 'يونيو',
        Jul: 'يوليو',
        Aug: 'أغسطس',
        Sep: 'سبتمبر',
        Oct: 'أكتوبر',
        Nov: 'نوفمبر',
        Dec: 'ديسمبر'
      },

      Customers: {
        JohnDoe: 'جون دو',
        JaneSmith: 'جين سميث',
        BobJohnson: 'بوب جونسون',
        AliceWilliams: 'أليس ويليامز',
        TomBrown: 'توم براون',
        DavidWilson: 'ديفيد ويلسون'
      },

      Status: {
        Completed: 'مكتمل',
        Processing: 'قيد المعالجة',
        Pending: 'معلق'
      },

      TimeAgo: {
        Min2: 'منذ دقيقتين',
        Min5: 'منذ 5 دقائق',
        Min10: 'منذ 10 دقائق',
        Min15: 'منذ 15 دقائق',
        Hour1: 'منذ 1 ساعة',
        twohours: 'منذ 2 ساعات',
        threehours: 'منذ 3 ساعات',
        fivehours: 'منذ 5 ساعات',
        oneday: 'منذ يوم',
        JustNow: 'الآن'
      },

      Timeframes: {
        Weekly: 'أسبوعياً',
        Monthly: 'شهري',
        Yearly: 'سنوي'
      },

      Activities: {
        NewOrder: 'تم استلام طلب جديد',
        ClientMeeting: 'تم جدولة اجتماع مع العميل',
        StockUpdate: 'تم تحديث المخزون',
        NewClient: 'تم تسجيل عميل جديد'
      },

      Tasks: {
        ReviewSales: 'مراجعة تقرير المبيعات',
        ClientMeeting: 'اجتماع مع العميل',
        UpdateInventory: 'تحديث المخزون',
        TeamSync: 'مزامنة الفريق',
        Today: 'اليوم',
        Tomorrow: 'غدا',
        ThisWeek: 'هذا الأسبوع',
        Saturday: 'السبت',
        Sunday: 'الأحد',
        Monday: 'الأثنين',
        Tuesday: 'الثلاثاء',
        Wednesday: 'الأربعاء',
        Thursday: 'الخميس',
        Friday: 'الجمعة',
      },

      Goals: {
        Revenue: 'الإيرادات',
        Customers: 'العملاء',
        Sales: 'المبيعات',
      },

      SalesChannels: {
        Online: 'عبر الإنترنت',
        Offline: 'خارج الإنترنت',
        InStore: 'في المتجر',
        Phone: 'الهاتف',
        Marketplace: 'منصات البيع'
      },

      Categories: {
        All: 'جميع المنتجات',
        Electronics: 'إلكترونيات',
        Furniture: 'أثاث',
        Clothing: 'ملابس'
      },

      Metrics: {
        ConversionRate: 'معدل التحويل',
        AverageOrder: 'الطلب المتوسط',
        CustomerRetention: 'الاحتفاظ بالعملاء',
        ReturnRate: 'معدل الإرجاع',
        PerformanceMetrics: 'مقاييس الأداء'
      },

      Support: {
        NeedAssistance: 'هل تحتاج إلى مساعدة؟',
        AvailableMessage: 'نحن هنا لمساعدتك. لا تتردد في الاتصال بنا إذا كان لديك أي استفسارات أو مشاكل.',
        ChatSupport: 'الدعم عبر الدردشة',
        CallSupport: 'الدعم عبر الهاتف',
      },

      NotificationMessages: {
        Title: 'الإشعارات',
        New: 'جديد',
        ViewAll: 'عرض الكل',
        Messages: {
          NewOrder: 'تم استلام طلب جديد',
          StockUpdate: 'تحديث المخزون مطلوب',
          MeetingReminder: 'تذكير بالاجتماع',
        },
        TimeAgo: {
          JustNow: 'الآن',
          MinutesAgo: 'منذ {{count}} دقائق',
          HoursAgo: 'منذ {{count}} ساعات',
          DaysAgo: 'منذ {{count}} أيام',
        }
      },
      
      currency: '{{value}} ريال',
      SearchProducts: 'بحث عن منتجات...',
      SelectCategory: 'اختر الفئة',
      AllCategories: 'جميع الفئات',
      AddNewProduct: 'إضافة منتج جديد',
      NoProductsFound: 'لم يتم العثور على منتجات تطابق معاييرك',
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