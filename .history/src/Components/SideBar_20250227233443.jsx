import { useTranslation } from 'react-i18next';
import { sidebarItems } from '../config/sidebarConfig';
import PropTypes from 'prop-types';

function SideBar({ activePage, setActivePage, collapsed = false }) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  
  // Add console.log to help debug
  console.log('SideBar rendering, RTL:', isRTL, 'Language:', i18n.language);
  
  return (
    <aside className="font-body bg-white shadow-md h-screen fixed inset-y-0 left-0 z-20 w-64 transition-all duration-300 ease-in-out">
      <div className="flex flex-col h-full">
        {/* Logo section */}
        <div className="p-4 border-b border-gray-200">
    `}>
      <div className={`
        border-b border-gray-700/50 pb-6
        transition-all duration-300 ease-in-out
        ${collapsed ? 'py-4' : 'mb-10 p-4'}
      `}>
        <h1 className={`
          font-bold text-center bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent
          transition-all duration-300 ease-in-out
          ${collapsed ? 'text-lg' : 'text-xl'}
        `}>
          {collapsed ? 'CRM' : t('crmSystem')}
        </h1>
      </div>
      
      <nav className={`
        overflow-y-auto h-[calc(100vh-5rem)] scrollbar-thin
        transition-all duration-300 ease-in-out
        ${collapsed ? 'px-1 py-3 space-y-3' : 'p-4 space-y-2'}
      `}>
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              title={collapsed ? t(item.id) : ''}
              className={`
                flex items-center w-full rounded-lg 
                transition-all duration-300 ease-in-out
                hover:shadow-md
                ${collapsed ? 'justify-center p-3' : isRTL ? 'flex-row-reverse px-5 py-3 text-right' : 'px-5 py-3'}
                ${isActive 
                  ? 'bg-white/10 text-white shadow-lg backdrop-blur-sm border border-white/10 animate-pulse-subtle' 
                  : 'hover:bg-white/5 text-gray-400 hover:text-white hover:translate-x-1'}
              `}
              style={{
                animationDelay: `${index * 100}ms`,
                transitionDelay: `${index * 50}ms`
              }}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className={`
                transition-all duration-300
                ${collapsed ? 'text-xl scale-110' : isRTL ? 'ml-3 text-xl' : 'mr-3 text-xl'}
              `} aria-hidden="true" />
              
              {!collapsed && (
                <span className="text-sm font-medium transition-transform duration-300">
                  {t(item.id)}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

SideBar.propTypes = {
  activePage: PropTypes.string.isRequired,
  setActivePage: PropTypes.func.isRequired,
  collapsed: PropTypes.bool
};

export default SideBar;
