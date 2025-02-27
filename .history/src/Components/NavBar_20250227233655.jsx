import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  MdSearch,
  MdNotifications,
  MdSettings,
  MdPerson,
  MdLanguage,
  MdMenu,
  MdChevronLeft,
  MdChevronRight
} from 'react-icons/md';
import PropTypes from 'prop-types';
import NotificationsPopup from './NotificationsPopup';
import Button from './UI/Button';

function NavBar({
  setActivePage,
  isSidebarCollapsed = false,
  isMobile = false
}) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  const notifications = [
    { message: 'New order received', time: '2 minutes ago' },
    { message: 'Meeting reminder', time: '1 hour ago' },
    { message: 'Stock update required', time: '3 hours ago' },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('i18nextLng', newLang);
  };

  return (
    <nav className="bg-white shadow-sm py-3 px-3 sticky top-0 z-10 font-body">
      <div className="flex items-center justify-between h-10">
        {/* Left section with toggle and title */}
        <div className="flex items-center">
          {/* Sidebar toggle button */}
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-md hover:bg-gray-100 text-gray-500 transition-all"
            aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isRTL ? 
              (isSidebarCollapsed ? <MdChevronRight className="text-xl transform rotate-180" /> : <MdChevronLeft className="text-xl transform rotate-180" />) : 
              (isSidebarCollapsed ? <MdChevronRight className="text-xl" /> : <MdChevronLeft className="text-xl" />)
            }
          </button>
          
          {/* Mobile menu button - only visible on mobile */}
          {isMobile && (
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="ml-2 p-1.5 rounded-md hover:bg-gray-100 text-gray-500 md:hidden"
              aria-label="Toggle mobile menu"
            >
              <MdMenu className="text-xl" />
            </button>
          )}
          
          {/* Mobile title - only visible on mobile */}
          <h1 className="text-lg font-medium ml-3 sm:hidden">CRM</h1>
        </div>
        
        {/* Center section with search bar */}
        <div className="hidden sm:flex flex-1 max-w-xl mx-4 lg:mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder={t('search')}
              className={`
                font-body w-full h-10 py-2 rounded-lg border border-gray-300
                focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500
                ${isRTL ? 'pr-10 pl-4 text-right' : 'pl-10 pr-4'}
              `}
              aria-label="Search"
              dir={isRTL ? 'rtl' : 'ltr'}
            />
            <MdSearch className={`
              absolute top-2.5 text-gray-400 text-xl
              ${isRTL ? 'right-3' : 'left-3'}
            `} />
          </div>
        </div>
        
        {/* Right section with user actions - added spacing */}
        <div className="flex items-center space-x-4">
          {/* Search button for mobile */}
          <button className="sm:hidden p-1.5 rounded-md hover:bg-gray-100 text-gray-500">
            <MdSearch className="text-xl" />
          </button>
          
          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500 hidden md:flex items-center"
            aria-label="Change language"
          >
            <MdLanguage className="text-xl" />
            <span className="ml-1 text-sm hidden lg:inline">
              {i18n.language === 'en' ? 'العربية' : 'English'}
            </span>
          </button>
          
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500 relative"
              aria-label="Notifications"
            >
              <MdNotifications className="text-xl" />
              <span className={`
                absolute -top-1 ${isRTL ? '-left-1' : '-right-1'} 
                h-4 w-4 bg-gray-900 rounded-full text-xs text-white 
                flex items-center justify-center
              `}>
                {notifications.length}
              </span>
            </button>
            
            {showNotifications && (
              <NotificationsPopup
                notifications={notifications}
                onClose={() => setShowNotifications(false)}
              />
            )}
          </div>
          
          {/* Settings */}
          <button
            onClick={() => setActivePage('settings')}
            className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500"
            aria-label="Settings"
          >
            <MdSettings className="text-xl" />
          </button>
          
          {/* User profile */}
          <div className={`
            flex items-center ml-4 pl-4
            ${isRTL ? 'border-r' : 'border-l'}
            border-gray-300
          `}>
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 
                  flex items-center justify-center text-white">
              <MdPerson className="text-sm" />
            </div>
            <div className="hidden lg:flex flex-col ml-2">
              <span className="text-xs font-medium text-gray-700">Admin User</span>
              <span className="text-[10px] text-gray-400">admin@example.com</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile search - only visible on small screens when menu is open */}
      <div className={`pt-3 sm:hidden ${showMobileMenu ? 'block' : 'hidden'}`}>
        <div className="relative">
          <input
            type="text"
            placeholder={t('search')}
            className={`
              w-full h-10 py-2 rounded-lg border border-gray-300
              focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500
              ${isRTL ? 'pr-10 pl-4 text-right' : 'pl-10 pr-4'}
            `}
            aria-label="Search"
            dir={isRTL ? 'rtl' : 'ltr'}
          />
          <MdSearch className={`
            absolute top-2.5 text-gray-400 text-xl
            ${isRTL ? 'right-3' : 'left-3'}
          `} />
        </div>
        
        {/* Mobile menu items */}
        <div className="mt-3 py-2 border-t border-gray-200">
          <button
            onClick={toggleLanguage}
            className="flex items-center px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100"
          >
            <MdLanguage className="mr-2 text-gray-500" />
            {i18n.language === 'en' ? 'العربية' : 'English'}
          </button>
          
          <button
            onClick={() => setActivePage('settings')}
            className="flex items-center px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100"
          >
            <MdSettings className="mr-2 text-gray-500" />
            Settings
          </button>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  setActivePage: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func,
  isSidebarOpen: PropTypes.bool,
  isSidebarCollapsed: PropTypes.bool,
  isMobile: PropTypes.bool
};

export default NavBar;
