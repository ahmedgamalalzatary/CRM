import { useState } from 'react'

function Sales() {
    const [showModal, setShowModal] = useState(false)
    const [salesData, setSalesData] = useState([
        { id: 1, customer: 'John Doe', product: 'Product A', amount: 1200, date: '2023-01-15' },
        { id: 2, customer: 'Jane Smith', product: 'Product B', amount: 850, date: '2023-01-16' },
        { id: 3, customer: 'Bob Johnson', product: 'Product C', amount: 2300, date: '2023-01-17' },
    ])

    const [newSale, setNewSale] = useState({
        customer: '',
        product: '',
        amount: '',
        date: new Date().toISOString().split('T')[0]
    })

    const salesMetrics = {
        recentOrders: [
            { id: 1, customer: 'John Doe', status: 'Processing', time: '2 min ago' },
            { id: 2, customer: 'Jane Smith', status: 'Completed', time: '5 min ago' },
            { id: 3, customer: 'Bob Johnson', status: 'Pending', time: '10 min ago' },
        ],
        topCustomers: [
            { name: 'John Doe', orders: 25, spent: '$2,500' },
            { name: 'Jane Smith', orders: 18, spent: '$1,800' },
            { name: 'Bob Johnson', orders: 15, spent: '$1,500' },
        ]
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewSale(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newId = salesData.length > 0 ? Math.max(...salesData.map(sale => sale.id)) + 1 : 1
        const saleToAdd = {
            id: newId,
            ...newSale,
            amount: parseFloat(newSale.amount)
        }
        setSalesData(prev => [...prev, saleToAdd])
        setShowModal(false)
        setNewSale({
            customer: '',
            product: '',
            amount: '',
            date: new Date().toISOString().split('T')[0]
        })
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800">Sales</h2>
                <button 
                    onClick={() => setShowModal(true)}
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                    New Sale
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md">
                        <h3 className="text-xl font-semibold mb-4">Add New Sale</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
                                <input
                                    type="text"
                                    name="customer"
                                    value={newSale.customer}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-gray-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Product</label>
                                <input
                                    type="text"
                                    name="product"
                                    value={newSale.product}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-gray-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                                <input
                                    type="number"
                                    name="amount"
                                    value={newSale.amount}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-gray-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={newSale.date}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-gray-500"
                                />
                            </div>
                            <div className="flex justify-end space-x-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
                                >
                                    Add Sale
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* New Sales Overview Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="font-semibold text-gray-800 mb-4">Recent Orders</h3>
                    <div className="space-y-4">
                        {salesMetrics.recentOrders.map((order) => (
                            <div key={order.id} 
                                 className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                                <div>
                                    <p className="font-medium text-gray-800">{order.customer}</p>
                                    <p className="text-sm text-gray-500">{order.time}</p>
                                </div>
                                <span className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
                                    {order.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="font-semibold text-gray-800 mb-4">Top Customers</h3>
                    <div className="space-y-4">
                        {salesMetrics.topCustomers.map((customer) => (
                            <div key={customer.name} 
                                 className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                                <div>
                                    <p className="font-medium text-gray-800">{customer.name}</p>
                                    <p className="text-sm text-gray-500">{customer.orders} orders</p>
                                </div>
                                <span className="font-medium text-gray-700">{customer.spent}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                    <select className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500">
                        <option>Filter by Date</option>
                        <option>Today</option>
                        <option>This Week</option>
                        <option>This Month</option>
                    </select>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                    <input 
                        type="text" 
                        placeholder="Search sales..." 
                        className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                    />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                    <select className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500">
                        <option>All Products</option>
                        <option>Product A</option>
                        <option>Product B</option>
                        <option>Product C</option>
                    </select>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            {['ID', 'Customer', 'Product', 'Amount', 'Date'].map((header) => (
                                <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {salesData.map((sale) => (
                            <tr key={sale.id} className="hover:bg-gray-50 transition-colors duration-200">
                                <td className="px-6 py-4 whitespace-nowrap text-gray-900">{sale.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{sale.customer}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{sale.product}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">${sale.amount}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{sale.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* New Sales Analytics Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Methods</h3>
                    <div className="space-y-3">
                        {[
                            { method: 'Credit Card', percentage: '45%' },
                            { method: 'Bank Transfer', percentage: '30%' },
                            { method: 'Cash', percentage: '25%' }
                        ].map(item => (
                            <div key={item.method} className="flex items-center justify-between p-2">
                                <span className="text-gray-600">{item.method}</span>
                                <span className="text-gray-900 font-medium">{item.percentage}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Sales Channels</h3>
                    <div className="space-y-3">
                        {[
                            { channel: 'Online Store', value: '65%' },
                            { channel: 'Physical Store', value: '25%' },
                            { channel: 'Marketplace', value: '10%' }
                        ].map(item => (
                            <div key={item.channel} className="space-y-1">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">{item.channel}</span>
                                    <span className="text-gray-900">{item.value}</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full">
                                    <div 
                                        className="h-full bg-gray-700 rounded-full" 
                                        style={{ width: item.value }}>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Stats</h3>
                    <div className="space-y-4">
                        {[
                            { label: 'Average Order Value', value: '$245' },
                            { label: 'Conversion Rate', value: '3.2%' },
                            { label: 'Return Rate', value: '2.1%' }
                        ].map(stat => (
                            <div key={stat.label} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                                <span className="text-gray-600">{stat.label}</span>
                                <span className="font-semibold text-gray-900">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sales
