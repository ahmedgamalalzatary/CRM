import './App.css'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import NavBar from './Components/NavBar'
import SideBar from './Components/SideBar'
import MainContent from './Components/MainContent'

function App() {
    const [activePage, setActivePage] = useState('dashboard')
    const { i18n } = useTranslation()
    const [isRTL, setIsRTL] = useState(i18n.language === 'ar')
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

    useEffect(() => {
        setIsRTL(i18n.language === 'ar')
    }, [i18n.language])

    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed)
    }

    return (
        <div className="flex min-h-screen"
             dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Changed to use absolute positioning based on RTL/LTR */}
            <div 
                className={`fixed inset-y-0 z-20 ${isRTL ? 'right-0' : 'left-0'}`}
                style={{ direction: isRTL ? 'rtl' : 'ltr' }}
            >
                <SideBar 
                    activePage={activePage} 
                    setActivePage={setActivePage}
                    collapsed={sidebarCollapsed}
                />
            </div>
            {/* Adjusted margins for RTL/LTR */}
            <div 
                className="flex-1 transition-all duration-300"
                style={{
                    marginLeft: isRTL ? 0 : (sidebarCollapsed ? '3.5rem' : '15rem'),
                        isSidebarCollapsed={sidebarCollapsed}
                        isMobile={false}
                    />
                </div>
                <MainContent 
                    activePage={activePage} 
                    setActivePage={setActivePage} 
                />
            </div>
        </div>
    )
}

export default App
