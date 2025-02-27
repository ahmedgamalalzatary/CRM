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

function MainContent({ activePage, setActivePage }) {
  const renderPage = () => {
    const components = {
      dashboard: () => <DashBoard setActivePage={setActivePage} />,
      sales: () => <Sales setActivePage={setActivePage} />,
      products: () => <Products setActivePage={setActivePage} />,
      inventory: () => <Inventory setActivePage={setActivePage} />,
      orders: () => <Orders setActivePage={setActivePage} />,
      reservation: () => <Reservation setActivePage={setActivePage} />,
      clients: () => <Clients setActivePage={setActivePage} />,
      employees: () => <Employees setActivePage={setActivePage} />,
      events: () => <Events setActivePage={setActivePage} />,
      reports: () => <Reports setActivePage={setActivePage} />,
      settings: () => <Settings setActivePage={setActivePage} />,
      support: () => <Support setActivePage={setActivePage} />,
      faq: () => <FAQ setActivePage={setActivePage} />
    };

    const Component = components[activePage] || (() => <DashBoard setActivePage={setActivePage} />);
    return <Component />;
  };

  return (
    <Layout activePage={activePage} setActivePage={setActivePage}>
      {renderPage()}
    </Layout>
  );
}

MainContent.propTypes = {
  activePage: PropTypes.string.isRequired,
  setActivePage: PropTypes.func.isRequired
};

export default MainContent;

