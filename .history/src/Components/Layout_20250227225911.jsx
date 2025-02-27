import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import SideBar from './SideBar';
import NavBar from './NavBar';

const Layout = ({ children, activePage, setActivePage }) => {
  const { i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');

  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);

  return (
    <div className={`flex ${isRTL ? 'direction-rtl' : 'direction-ltr'}`}
         dir={isRTL ? 'rtl' : 'ltr'}>
      <SideBar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1">
        <NavBar setActivePage={setActivePage} />
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  activePage: PropTypes.string.isRequired,
  setActivePage: PropTypes.func.isRequired
};

export default Layout;
