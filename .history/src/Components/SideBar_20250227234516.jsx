import { useTranslation } from 'react-i18next';
import { sidebarItems } from '../config/sidebarConfig';
import PropTypes from 'prop-types';

function SideBar({ activePage, setActivePage, collapsed = false }) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  
  // Add console.log to help debug
  console.log('SideBar rendering, RTL:', isRTL, 'Language:', i18n.language);
  
  return (
    <aside className={`
      h-screen bg-gradient-to-b from-[#1a1c2e] to-[#2d2f45] text-white
      transition-all duration-300 sidebar-transition overflow-hidden
      ${collapsed ? 'w-14' : 'w-60'}
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
                ${collapsed ? 'justify-center p-3' : isRTL ? 'flex-row-reverse justify-between px-5 py-3 text-right' : 'px-5 py-3'}
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
              {!collapsed && (
                <span className={`text-sm font-medium transition-transform duration-300 ${isRTL ? 'ml-1' : 'mr-1'}`}>
                  {t(item.id)}
                </span>
              )}
              
              <div className="flex-shrink-0">
                <Icon className={`
                  text-xl transition-all duration-300
                  ${isRTL ? 'transform scale-x-[-1]' : ''}
                `} aria-hidden="true" />
              </div>
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
