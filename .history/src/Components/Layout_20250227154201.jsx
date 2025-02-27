<<<<<<< HEAD
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SideBar from './SideBar';
import NavBar from './NavBar';

function Layout({ children, activePage, setActivePage }) {
    const [isMobile, setIsMobile] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        // Set page loaded after a small delay for animation
        const timer = setTimeout(() => {
            setPageLoaded(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    // Handle responsive sidebar
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);

            if (width < 768) {
                setSidebarOpen(false);
            } else {
                setSidebarOpen(true);
                // Auto-collapse sidebar on medium screens
                setSidebarCollapsed(width < 1024);
            }
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        if (isMobile) {
            setSidebarOpen(!sidebarOpen);
        } else {
            setSidebarCollapsed(!sidebarCollapsed);
        }
    };

    return (
        <div className={`
      flex h-screen w-full overflow-hidden bg-gray-50
      transition-all duration-500 ease-in-out 
      ${pageLoaded ? 'opacity-100' : 'opacity-0'}
    `}>
            {/* Sidebar - adjusted width */}
            <div
                className={`
          fixed md:relative z-20 h-screen 
          transition-all duration-300 ease-in-out sidebar-transition
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} 
          ${sidebarCollapsed ? 'md:w-14' : 'md:w-60'}
        `}
            >
                <SideBar
                    activePage={activePage}
                    setActivePage={setActivePage}
                    collapsed={sidebarCollapsed}
                />
            </div>

            {/* Main content - adjusted margin */}
            <div className={`
        flex-1 flex flex-col min-w-0 overflow-hidden content-transition
        transition-all duration-300 ease-in-out
        ${sidebarCollapsed && !isMobile ? 'md:ml-14' : ''}
      `}>
                <div className="sticky top-0 z-10 bg-white shadow-sm w-full">
                    <NavBar
                        setActivePage={setActivePage}
                        toggleSidebar={toggleSidebar}
                        isSidebarOpen={sidebarOpen}
                        isSidebarCollapsed={sidebarCollapsed}
                        isMobile={isMobile}
                    />
                </div>

                {/* Reduced padding for tighter layout */}
                <main className={`
          flex-1 p-3 md:p-4 lg:p-5 overflow-y-auto 
          scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 
          transition-all duration-500 ease-in-out
          ${pageLoaded ? 'animate-slide-in' : ''}
        `}>
                    <div className="bg-white rounded-lg shadow-sm p-4 transition-all duration-300 hover:shadow-md">
                        {children}
                    </div>
                </main>

                {/* Backdrop for mobile sidebar */}
                {isMobile && sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ease-in-out"
                        onClick={() => setSidebarOpen(false)}
                        aria-hidden="true"
                    />
                )}
            </div>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    activePage: PropTypes.string.isRequired,
    setActivePage: PropTypes.func.isRequired
};

export default Layout;
=======
function Layout({ children }) {
    return (
        <div className="flex h-screen overflow-hidden">
            <div className="sticky top-0 h-screen flex-shrink-0">
                {/* Your existing SideBar component */}
            </div>
            
            <div className="flex-1 flex flex-col overflow-hidden">
                <div className="sticky top-0 z-10">
                    {/* Your existing NavBar component */}
                </div>
                
                <div className="flex-1 overflow-y-auto hover:overflow-y-auto transition-all duration-300">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
>>>>>>> 85cc2c8f87b6224711140033850a91c38901943b
