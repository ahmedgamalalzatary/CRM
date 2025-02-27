import PropTypes from 'prop-types';
import DashBoard from '../Pages/DashBoard';
import Sales from '../Pages/Sales';
import Products from '../Pages/Products';
import Inventory from '../Pages/Inventory';
import Orders from '../Pages/Orders';
import Reservation from '../Pages/Reservation';
import Clients from '../Pages/Clients';
import Employees from '../Pages/Employees';
import Events from '../Pages/Events';
import Reports from '../Pages/Reports';
import Settings from '../Pages/Settings';
import Support from '../Pages/Support';
import FAQ from '../Pages/FAQ';
import Layout from './Layout';

const MainContent = ({ activePage, setActivePage }) => {
  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashBoard />;
      case 'sales':
        return <Sales />;
      case 'products':
        return <Products />;
      case 'inventory':
        return <Inventory />;
      case 'orders':
        return <Orders />;
      case 'reservation':
        return <Reservation />;
      case 'clients':
        return <Clients />;
      case 'employees':
        return <Employees />;
      case 'events':
        return <Events />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      case 'support':
        return <Support />;
      case 'faq':
        return <FAQ />;
      default:
        return <DashBoard />;
    }
  };

  return (
    <main className="p-4">
      {renderContent()}
    </main>
  );
};

MainContent.propTypes = {
  activePage: PropTypes.string.isRequired,
  setActivePage: PropTypes.func.isRequired
};

export default MainContent;

