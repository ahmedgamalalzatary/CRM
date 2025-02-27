import { useTranslation } from 'react-i18next';
import { sidebarItems } from '../config/sidebarConfig';
import PropTypes from 'prop-types';

function SideBar({ activePage, setActivePage, collapsed = false }) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  
  return (
    <aside className={`
      h-screen bg-gradient-to-b from-[#1a1c2e] to-[#2d2f45] text-white
      transition-all duration-300 sidebar-transition overflow-hidden
      ${collapsed ? 'w-14' : 'w-60'}
    `}>
      <div className={`
        border-b border-gray-700/50 pb-4
        transition-all duration-300 ease-in-out
        ${collapsed ? 'py-3' : 'p-4'}
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
        overflow-y-auto h-[calc(100vh-4rem)] scrollbar-thin
        transition-all duration-300 ease-in-out
        ${collapsed ? 'px-1 py-2 space-y-2' : 'p-3 space-y-1.5'}
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
                ${collapsed ? 'justify-center p-2.5' : ''}
                ${!collapsed && isRTL ? 'flex-row-reverse pr-3 pl-3 text-right' : 'pl-3 pr-3'}
                ${!collapsed ? 'py-2.5' : ''}
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
              <div className={`flex-shrink-0 ${!collapsed && (isRTL ? 'ml-2' : 'mr-2')}`}>
                {/* No scale transformation for icons - keep them as is */}
                <Icon className="text-lg" aria-hidden="true" />
              </div>
              
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
