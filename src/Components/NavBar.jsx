import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MdSearch, MdNotifications, MdSettings, MdPerson, MdLanguage } from 'react-icons/md'
import NotificationsPopup from './NotificationsPopup'

function NavBar({ setActivePage }) {
    const [showNotifications, setShowNotifications] = useState(false)
    const { t, i18n } = useTranslation()

    const notifications = [
        { message: 'New order received', time: '2 minutes ago' },
        { message: 'Meeting reminder', time: '1 hour ago' },
        { message: 'Stock update required', time: '3 hours ago' },
    ]

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en'
        i18n.changeLanguage(newLang)
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr'
        // Force a re-render by updating localStorage
        localStorage.setItem('i18nextLng', newLang);
    }

    return (
        <nav className="bg-white shadow-md px-6 py-4">
            <div className="flex justify-between items-center">
                <div className="w-64"></div> {/* Empty div to maintain spacing */}
                <div className="flex flex-1 justify-between items-center pl-6">
                    <div className="w-96">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder={t('search')}
                                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                            <MdSearch className="absolute left-3 top-3 text-gray-400 text-xl" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-6">
                        <button 
                            onClick={toggleLanguage}
                            className="p-2.5 hover:bg-gray-100 rounded-lg flex items-center gap-2"
                        >
                            <MdLanguage className="text-2xl text-gray-600" />
                            <span>{i18n.language === 'en' ? 'العربية' : 'English'}</span>
                        </button>
                        <div className="relative">
                            <button 
                                className="p-2.5 hover:bg-gray-100 rounded-lg relative"
                                onClick={() => setShowNotifications(!showNotifications)}
                            >
                                <MdNotifications className="text-2xl text-gray-600" />
                                <span className="absolute -top-1 -right-1 h-5 w-5 bg-gray-900 rounded-full text-xs text-white flex items-center justify-center">
                                    3
                                </span>
                            </button>
                            {showNotifications && (
                                <NotificationsPopup 
                                    notifications={notifications} 
                                    onClose={() => setShowNotifications(false)} 
                                />
                            )}
                        </div>
                        <button 
                            className="p-2.5 hover:bg-gray-100 rounded-lg"
                            onClick={() => setActivePage('settings')}
                        >
                            <MdSettings className="text-2xl text-gray-600" />
                        </button>
                        <div className="flex items-center space-x-2 border-l pl-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center text-white ring-2 ring-gray-100">
                                <MdPerson className="text-sm" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-medium text-gray-700">Admin User</span>
                                <span className="text-[10px] text-gray-400">admin@example.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
