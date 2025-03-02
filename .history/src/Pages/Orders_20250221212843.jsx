import { MdLocalShipping, MdPending, MdDoneAll, MdCancel } from 'react-icons/md'

function Orders() {
    const orderStats = [
        { title: 'Total Orders', value: '1,234', icon: MdLocalShipping, color: 'bg-blue-100 text-blue-800' },
        { title: 'Pending', value: '43', icon: MdPending, color: 'bg-yellow-100 text-yellow-800' },
        { title: 'Completed', value: '1,180', icon: MdDoneAll, color: 'bg-green-100 text-green-800' },
        { title: 'Cancelled', value: '11', icon: MdCancel, color: 'bg-red-100 text-red-800' },
    ]

    const recentOrders = [
        { id: '#ORD-001', customer: 'John Doe', status: 'Pending', amount: 299.99, date: '2024-01-20' },
        { id: '#ORD-002', customer: 'Jane Smith', status: 'Completed', amount: 599.99, date: '2024-01-19' },
        { id: '#ORD-003', customer: 'Bob Wilson', status: 'Processing', amount: 149.99, date: '2024-01-19' },
    ]

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800">Orders Management</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
                    New Order
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {orderStats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm cursor-pointer hover:shadow-md">
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

            <div className="bg-white rounded-lg shadow-sm">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                    <input 
                        type="text" 
                        placeholder="Search orders..." 
                        className="p-2 border rounded-lg cursor-text"
                    />
                    <select className="p-2 border rounded-lg cursor-pointer">
                        <option>All Status</option>
                        <option>Pending</option>
                        <option>Processing</option>
                        <option>Completed</option>
                        <option>Cancelled</option>
                    </select>
                    <input 
                        type="date" 
                        className="p-2 border rounded-lg cursor-pointer"
                    />
                    <button className="p-2 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        Filter
                    </button>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {recentOrders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50 cursor-pointer">
                                <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{order.customer}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 py-1 rounded-full text-xs ${
                                        order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-blue-100 text-blue-800'
                                    }`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">${order.amount}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Orders
