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
