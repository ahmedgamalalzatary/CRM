import { MdWarehouse, MdLocalShipping, MdWarning } from 'react-icons/md'

function Inventory() {
    const inventoryStats = [
        { title: 'Total Stock', value: '2,547', icon: MdWarehouse, color: 'bg-blue-100 text-blue-800' },
        { title: 'In Transit', value: '150', icon: MdLocalShipping, color: 'bg-yellow-100 text-yellow-800' },
        { title: 'Low Stock', value: '15', icon: MdWarning, color: 'bg-red-100 text-red-800' },
    ]

    const lowStockItems = [
        { id: 1, name: 'Product X', current: 5, minimum: 10 },
        { id: 2, name: 'Product Y', current: 3, minimum: 15 },
        { id: 3, name: 'Product Z', current: 8, minimum: 20 },
    ]

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Inventory Management</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {inventoryStats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500">{stat.title}</p>
                                    <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                                </div>
                                <div className={`p-3 rounded-full ${stat.color}`}>
                                    <Icon className="text-2xl" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Low Stock Alerts</h3>
                    <div className="space-y-4">
                        {lowStockItems.map((item) => (
                            <div key={item.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-gray-500">Current: {item.current} | Minimum: {item.minimum}</p>
                                </div>
                                <button className="px-3 py-1 bg-red-600 text-white rounded-lg text-sm">
                                    Reorder
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="p-4 border rounded-lg hover:bg-gray-50">
                            Stock Adjustment
                        </button>
                        <button className="p-4 border rounded-lg hover:bg-gray-50">
                            New Purchase Order
                        </button>
                        <button className="p-4 border rounded-lg hover:bg-gray-50">
                            Stock Transfer
                        </button>
                        <button className="p-4 border rounded-lg hover:bg-gray-50">
                            Generate Report
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inventory
