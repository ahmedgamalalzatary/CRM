import { useTranslation } from 'react-i18next';
import { sidebarItems } from '../config/sidebarConfig';
import PropTypes from 'prop-types';

function SideBar({ activePage, setActivePage, collapsed = false }) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  
  return (
    <aside className={`
    <aside className={`
      h-full bg-gradient-to-b from-[#1a1c2e] to-[#2d2f45] text-white
      transition-all duration-300 sidebar-transition
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
        overflow-y-auto h-[calc(100%-5rem)]
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
                ${collapsed ? 'justify-center p-3' : isRTL ? 'px-5 py-3 text-right justify-end' : 'px-5 py-3'}
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
              {!isRTL ? (
                <>
                  <Icon className={`
                    transition-all duration-300
                    ${collapsed ? 'text-xl scale-110' : 'mr-4 text-xl'}
                  `} aria-hidden="true" />
                  {!collapsed && (
                    <span className="text-sm font-medium transition-transform duration-300">
                      {t(item.id)}
                    </span>
                  )}
                </>
              ) : (
                <>
                  {!collapsed && (
                    <span className="text-sm font-medium transition-transform duration-300">
                      {t(item.id)}
                    </span>
                  )}
                  <Icon className={`
                    transition-all duration-300
                    ${collapsed ? 'text-xl scale-110' : 'ml-4 text-xl'}
                  `} aria-hidden="true" />
                </>
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
=======
import { useTranslation } from 'react-i18next'
import { sidebarItems } from '../config/sidebarConfig'

function SideBar({ activePage, setActivePage }) {
    const { t } = useTranslation()
    
    return (
        <div className="w-64 bg-gradient-to-b from-[#1a1c2e] to-[#2d2f45] min-h-screen p-4 text-white">
            <div className="mb-8 border-b border-gray-700/50 pb-6">
                <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                    {t('crmSystem')}
                </h1>
            </div>
            <nav className="space-y-1">
                {sidebarItems.map((item) => {
                    const Icon = item.icon
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActivePage(item.id)}
                            className={`
                                flex items-center w-full px-4 py-3 rounded-lg
                                transition-all duration-200 ease-in-out
                                ${activePage === item.id 
                                    ? 'bg-white/10 text-white shadow-lg backdrop-blur-sm border border-white/10' 
                                    : 'hover:bg-white/5 text-gray-400 hover:text-white hover:translate-x-1'}
                            `}
                        >
                            <Icon className="mr-3 text-xl" />
                            <span className="text-sm font-medium">{t(item.id)}</span>
                        </button>
                    )
                })}
            </nav>
        </div>
    )
}

export default SideBar
>>>>>>> 85cc2c8f87b6224711140033850a91c38901943b
