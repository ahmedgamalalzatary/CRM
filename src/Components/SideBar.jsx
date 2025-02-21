import { sidebarItems } from '../config/sidebarConfig'

function SideBar({ activePage, setActivePage }) {
    return (
        <div className="w-64 bg-gradient-to-b from-[#1a1c2e] to-[#2d2f45] min-h-screen p-4 text-white">
            <div className="mb-8 border-b border-gray-700/50 pb-6">
                <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                    CRM System
                </h1>
            </div>
            <nav className="space-y-1">
                {sidebarItems.map((item) => {
                    const Icon = item.icon
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActivePage(item.id)}
                            className={`
                                flex items-center w-full px-4 py-3 rounded-lg
                                transition-all duration-200 ease-in-out
                                ${activePage === item.id 
                                    ? 'bg-white/10 text-white shadow-lg backdrop-blur-sm border border-white/10' 
                                    : 'hover:bg-white/5 text-gray-400 hover:text-white hover:translate-x-1'}
                            `}
                        >
                            <Icon className="mr-3 text-xl" />
                            <span className="text-sm font-medium">{item.label}</span>
                        </button>
                    )
                })}
            </nav>
        </div>
    )
}

export default SideBar
