<<<<< HEAD
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MainContent from './Components/MainContent';
import './index.css';

function App() {
  const { i18n } = useTranslation();
  const [activePage, setActivePage] = useState('dashboard');
  
  return (
    <div className={`app ${i18n.language === 'ar' ? 'direction-rtl' : 'direction-ltr'}`}>
      <MainContent activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

export default App;

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

    useEffect(() => {
        setIsRTL(i18n.language === 'ar')
    }, [i18n.language])

    return (
        <div className={`flex ${isRTL ? 'direction-rtl' : 'direction-ltr'}`}
             dir={isRTL ? 'rtl' : 'ltr'}>
            <SideBar activePage={activePage} setActivePage={setActivePage} />
            <div className="flex-1">
                <NavBar setActivePage={setActivePage} />
                <MainContent 
                    activePage={activePage} 
                    setActivePage={setActivePage} 
                />
            </div>
        </div>
    )
}

export default App
>>>>>>> 85cc2c8f87b6224711140033850a91c38901943b
