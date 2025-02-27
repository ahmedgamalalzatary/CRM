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
        <div className={`flex min-h-screen ${isRTL ? 'direction-rtl' : 'direction-ltr'}`}
             dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="fixed inset-y-0 left-0 z-20">
                <SideBar 
                    activePage={activePage} 
                    setActivePage={setActivePage}
                    collapsed={sidebarCollapsed}
                />
            </div>
            <div className={`flex-1 ${sidebarCollapsed ? 'md:ml-14' : 'md:ml-60'} transition-all duration-300`}>
                <div className="sticky top-0 z-10">
                    <NavBar 
                        setActivePage={setActivePage}
                        toggleSidebar={toggleSidebar}
                        isSidebarCollapsed={sidebarCollapsed}
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
