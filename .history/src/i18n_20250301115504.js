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
      orderStatus: 'Status', // Changed from 'status' to 'orderStatus'
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
      support: {
        needAssistance: 'Need immediate assistance?',
        availableMessage: 'Our support team is available 24/7 to help you',
        chatSupport: 'Chat with Support',
        callSupport: 'Call Support'
      },
      salesChannels: {
        online: 'Online',
        inStore: 'In-Store',
        phone: 'Phone'
      }
    }
  },
  ar: {
    translation: {
      // Navigation
      dashboard: 'لوحة التحكم',
      sales: 'المبيعات',
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