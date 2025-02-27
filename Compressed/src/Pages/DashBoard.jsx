import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts'
import { MdTrendingUp, MdPeople, MdShoppingCart, MdAttachMoney, MdArrowUpward, MdArrowDownward } from 'react-icons/md'

function DashBoard({ setActivePage }) {
    const data = [
        { name: 'Jan', sales: 4000, orders: 2400 },
        { name: 'Feb', sales: 3000, orders: 1398 },
        { name: 'Mar', sales: 2000, orders: 9800 },
        { name: 'Apr', sales: 2780, orders: 3908 },
        { name: 'May', sales: 1890, orders: 4800 },
        { name: 'Jun', sales: 2390, orders: 3800 },
    ]

    const stats = [
        { title: 'Total Sales', value: '$54,239', icon: MdAttachMoney, color: 'bg-green-100 text-green-800' },
        { title: 'Total Orders', value: '1,253', icon: MdShoppingCart, color: 'bg-blue-100 text-blue-800' },
        { title: 'New Clients', value: '342', icon: MdPeople, color: 'bg-purple-100 text-purple-800' },
        { title: 'Growth', value: '+12.5%', icon: MdTrendingUp, color: 'bg-yellow-100 text-yellow-800' },
    ]

    const recentTransactions = [
        { id: 1, customer: 'John Doe', amount: 1200, status: 'completed', trend: 'up' },
        { id: 2, customer: 'Jane Smith', amount: 850, status: 'pending', trend: 'down' },
        { id: 3, customer: 'Bob Johnson', amount: 2300, status: 'completed', trend: 'up' },
    ]

    const quickActions = [
        { label: 'Add Sale', page: 'sales' },
        { label: 'New Product', page: 'products' },
        { label: 'Add Client', page: 'clients' },
        { label: 'Reports', page: 'reports' }
    ]

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => {
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
                            <BarChart width={500} height={300} data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="sales" fill="#4F46E5" />
                            </BarChart>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold mb-4">Orders Trend</h3>
                            <LineChart width={500} height={300} data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="orders" stroke="#2563EB" />
                            </LineChart>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
                    <div className="space-y-4">
                        {recentTransactions.map((tx) => (
                            <div key={tx.id} 
                                 className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                                <div className="flex items-center space-x-3">
                                    <div className={`p-2 rounded-full ${
                                        tx.trend === 'up' ? 'bg-gray-100' : 'bg-gray-100'
                                    }`}>
                                        {tx.trend === 'up' ? 
                                            <MdArrowUpward className="text-gray-700" /> : 
                                            <MdArrowDownward className="text-gray-700" />
                                        }
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">{tx.customer}</p>
                                        <p className="text-sm text-gray-500">{tx.status}</p>
                                    </div>
                                </div>
                                <span className="font-semibold">${tx.amount}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {['Daily Sales', 'Weekly Revenue', 'Monthly Growth', 'Yearly Target'].map((metric) => (
                    <div key={metric} 
                         className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 
                                  group cursor-pointer">
                        <h4 className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-200">
                            {metric}
                        </h4>
                        <div className="mt-2 flex items-end justify-between">
                            <p className="text-2xl font-bold text-gray-800">84%</p>
                            <div className="text-xs text-gray-500">+14.5%</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* New KPI Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Goals Progress</h3>
                    <div className="space-y-3">
                        {['Revenue', 'Customers', 'Sales'].map(goal => (
                            <div key={goal} className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">{goal}</span>
                                    <span className="text-gray-900">75%</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full">
                                    <div className="h-full bg-gray-700 rounded-full" style={{ width: '75%' }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Tasks</h3>
                    <div className="space-y-3">
                        {['Review sales report', 'Client meeting', 'Team sync'].map(task => (
                            <div key={task} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                                <input type="checkbox" className="rounded border-gray-300" />
                                <span className="text-gray-700">{task}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {quickActions.map(action => (
                            <button 
                                key={action.label}
                                onClick={() => setActivePage(action.page)}
                                className="p-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg border border-gray-200
                                         transition-all duration-200 hover:shadow-sm"
                            >
                                {action.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* New Timeline Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                    {[
                        { time: '2 hours ago', event: 'New order received', type: 'order' },
                        { time: '3 hours ago', event: 'Client meeting scheduled', type: 'meeting' },
                        { time: '5 hours ago', event: 'Product stock updated', type: 'inventory' }
                    ].map((activity, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                            <div>
                                <p className="text-gray-800">{activity.event}</p>
                                <p className="text-sm text-gray-500">{activity.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DashBoard

