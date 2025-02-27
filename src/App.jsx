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
