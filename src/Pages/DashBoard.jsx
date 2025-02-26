<<<<<<< HEAD
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, ResponsiveContainer } from 'recharts';
import { MdTrendingUp, MdPeople, MdShoppingCart, MdAttachMoney, MdArrowUpward, MdArrowDownward, MdCalendarToday, MdAccessTime, MdMoreVert } from 'react-icons/md';
import PropTypes from 'prop-types';

function DashBoard({ setActivePage }) {
    const data = [
        { name: 'Jan', sales: 4000, orders: 2400, revenue: 2400 },
        { name: 'Feb', sales: 3000, orders: 1398, revenue: 2210 },
        { name: 'Mar', sales: 2000, orders: 9800, revenue: 2290 },
        { name: 'Apr', sales: 2780, orders: 3908, revenue: 2000 },
        { name: 'May', sales: 1890, orders: 4800, revenue: 2181 },
        { name: 'Jun', sales: 2390, orders: 3800, revenue: 2500 },
    ];
=======
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
>>>>>>> 85cc2c8f87b6224711140033850a91c38901943b

    const stats = [
        { title: 'Total Sales', value: '$54,239', icon: MdAttachMoney, color: 'bg-green-100 text-green-800' },
        { title: 'Total Orders', value: '1,253', icon: MdShoppingCart, color: 'bg-blue-100 text-blue-800' },
        { title: 'New Clients', value: '342', icon: MdPeople, color: 'bg-purple-100 text-purple-800' },
        { title: 'Growth', value: '+12.5%', icon: MdTrendingUp, color: 'bg-yellow-100 text-yellow-800' },
<<<<<<< HEAD
    ];
=======
    ]
>>>>>>> 85cc2c8f87b6224711140033850a91c38901943b

    const recentTransactions = [
        { id: 1, customer: 'John Doe', amount: 1200, status: 'completed', trend: 'up' },
        { id: 2, customer: 'Jane Smith', amount: 850, status: 'pending', trend: 'down' },
        { id: 3, customer: 'Bob Johnson', amount: 2300, status: 'completed', trend: 'up' },
<<<<<<< HEAD
        { id: 4, customer: 'Alice Williams', amount: 1750, status: 'processing', trend: 'up' },
        { id: 5, customer: 'Tom Brown', amount: 920, status: 'pending', trend: 'down' },
    ];

    const quickActions = [
        { label: 'Add Sale', page: 'sales', icon: MdAttachMoney },
        { label: 'New Product', page: 'products', icon: MdShoppingCart },
        { label: 'Add Client', page: 'clients', icon: MdPeople },
        { label: 'View Reports', page: 'reports', icon: MdTrendingUp }
    ];

    const upcomingTasks = [
        { task: 'Review sales report', due: 'Today, 4:00 PM', priority: 'high' },
        { task: 'Client meeting with John Smith', due: 'Tomorrow, 10:00 AM', priority: 'medium' },
        { task: 'Team sync for Q3 planning', due: 'Wed, 2:30 PM', priority: 'normal' },
        { task: 'Update inventory stock levels', due: 'Fri, 12:00 PM', priority: 'high' }
    ];

    const saleDistribution = [
        { name: 'Online', value: 65 },
        { name: 'In-Store', value: 25 },
        { name: 'Phone', value: 10 }
    ];

    return (
        <div className="space-y-6 max-w-full overflow-x-hidden">
            {/* Key Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div key={index} className="bg-white p-5 rounded-lg shadow-sm flex-1">
                            <div className="flex items-center justify-between">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-gray-500 truncate">{stat.title}</p>
                                    <p className="text-2xl font-semibold mt-1 truncate">{stat.value}</p>
                                </div>
                                <div className={`p-3 rounded-full flex-shrink-0 ${stat.color}`}>
=======
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
>>>>>>> 85cc2c8f87b6224711140033850a91c38901943b
                                    <Icon className="text-2xl" />
                                </div>
                            </div>
                        </div>
<<<<<<< HEAD
                    );
=======
                    )
>>>>>>> 85cc2c8f87b6224711140033850a91c38901943b
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<<<<<<< HEAD
                {/* Charts Section */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Sales Overview Chart */}
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">Sales Overview</h3>
                            <div className="flex space-x-2">
                                <button className="p-1.5 rounded text-xs bg-gray-100 text-gray-700">Weekly</button>
                                <button className="p-1.5 rounded text-xs bg-gray-800 text-white">Monthly</button>
                                <button className="p-1.5 rounded text-xs bg-gray-100 text-gray-700">Yearly</button>
                            </div>
                        </div>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                    <YAxis axisLine={false} tickLine={false} />
                                    <Tooltip cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} />
                                    <Bar dataKey="sales" fill="#4F46E5" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Orders Trend Chart */}
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">Orders Trend</h3>
                            <button className="p-1.5 rounded hover:bg-gray-100">
                                <MdMoreVert className="text-gray-500" />
                            </button>
                        </div>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#2563EB" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#2563EB" stopOpacity={0.1} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                    <YAxis axisLine={false} tickLine={false} />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="revenue" stroke="#2563EB" fillOpacity={1} fill="url(#colorRevenue)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">Performance Metrics</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Conversion Rate', value: '3.2%', change: '+0.4%', positive: true },
                                { label: 'Average Order', value: '$245', change: '+12%', positive: true },
                                { label: 'Customer Retention', value: '87.3%', change: '-1.2%', positive: false },
                                { label: 'Return Rate', value: '2.1%', change: '+0.3%', positive: false }
                            ].map((metric, idx) => (
                                <div key={idx} className="p-4 border rounded-lg bg-gray-50">
                                    <p className="text-sm text-gray-500">{metric.label}</p>
                                    <p className="text-xl font-bold mt-1">{metric.value}</p>
                                    <p className={`text-xs mt-1 ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                                        {metric.change} {metric.positive ? '↑' : '↓'}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right column with transactions and other widgets */}
                <div className="space-y-6">
                    {/* Recent Transactions */}
                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">Recent Transactions</h3>
                            <button
                                onClick={() => setActivePage('sales')}
                                className="text-xs text-blue-600 hover:underline"
                            >
                                View All
                            </button>
                        </div>
                        <div className="space-y-3 overflow-y-auto max-h-[250px]">
                            {recentTransactions.map((tx) => (
                                <div key={tx.id}
                                    className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                                    <div className="flex items-center space-x-3 min-w-0">
                                        <div className={`p-2 rounded-full flex-shrink-0 ${tx.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                            {tx.trend === 'up' ?
                                                <MdArrowUpward /> :
                                                <MdArrowDownward />
                                            }
                                        </div>
                                        <div className="min-w-0">
                                            <p className="font-medium text-gray-800 truncate">{tx.customer}</p>
                                            <p className="text-xs text-gray-500 truncate capitalize">{tx.status}</p>
                                        </div>
                                    </div>
                                    <span className="font-semibold flex-shrink-0">${tx.amount}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {quickActions.map(action => (
                                <button
                                    key={action.label}
                                    onClick={() => setActivePage(action.page)}
                                    className="p-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg border border-gray-200
                                             transition-all duration-200 hover:shadow-sm flex items-center justify-center gap-2"
                                >
                                    <action.icon className="text-gray-500" />
                                    {action.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Sales Distribution */}
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Sales Distribution</h3>
                        <div className="space-y-4">
                            {saleDistribution.map((item) => (
                                <div key={item.name}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium text-gray-700">{item.name}</span>
                                        <span className="text-sm text-gray-500">{item.value}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className={`h-2 rounded-full ${item.name === 'Online' ? 'bg-blue-600' :
                                                    item.name === 'In-Store' ? 'bg-green-500' : 'bg-yellow-500'
                                                }`}
                                            style={{ width: `${item.value}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
=======
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
>>>>>>> 85cc2c8f87b6224711140033850a91c38901943b
                    </div>
                </div>
            </div>

<<<<<<< HEAD
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Upcoming Tasks */}
                <div className="lg:col-span-2 bg-white p-5 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">Upcoming Tasks</h3>
                        <button className="text-xs text-blue-600 hover:underline">View Calendar</button>
                    </div>
                    <div className="space-y-2">
                        {upcomingTasks.map((task, idx) => (
                            <div
                                key={idx}
                                className={`flex items-start space-x-3 p-3 rounded-lg border-l-4 ${task.priority === 'high' ? 'border-red-500 bg-red-50' :
                                        task.priority === 'medium' ? 'border-yellow-500 bg-yellow-50' :
                                            'border-blue-500 bg-blue-50'
                                    }`}
                            >
                                <div className="flex-shrink-0 pt-1">
                                    <input type="checkbox" className="rounded border-gray-300" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-gray-800">{task.task}</p>
                                    <div className="flex items-center mt-1 text-xs">
                                        <MdCalendarToday className="text-gray-500 mr-1" />
                                        <span className="text-gray-600 mr-3">{task.due.split(',')[0]}</span>
                                        <MdAccessTime className="text-gray-500 mr-1" />
                                        <span className="text-gray-600">{task.due.split(',')[1]}</span>
                                    </div>
=======
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
>>>>>>> 85cc2c8f87b6224711140033850a91c38901943b
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

<<<<<<< HEAD
                {/* Recent Activity Timeline */}
                <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute h-full w-px bg-gray-200 left-2.5"></div>

                        <div className="space-y-6 pl-8 relative">
                            {[
                                { time: '2 hours ago', event: 'New order received from John Doe', type: 'order', icon: MdShoppingCart },
                                { time: '3 hours ago', event: 'Client meeting scheduled with Apple Inc.', type: 'meeting', icon: MdPeople },
                                { time: '5 hours ago', event: 'Product stock updated for 6 items', type: 'inventory', icon: MdAttachMoney },
                                { time: '1 day ago', event: 'New client account created', type: 'client', icon: MdPeople }
                            ].map((activity, idx) => (
                                <div key={idx} className="relative">
                                    {/* Timeline dot */}
                                    <div className={`absolute -left-8 p-1 rounded-full 
                                        ${activity.type === 'order' ? 'bg-blue-500' :
                                            activity.type === 'meeting' ? 'bg-green-500' :
                                                activity.type === 'inventory' ? 'bg-yellow-500' : 'bg-purple-500'
                                        } text-white`}
                                    >
                                        <activity.icon className="text-xs" />
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <p className="text-sm text-gray-800 font-medium">{activity.event}</p>
                                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

DashBoard.propTypes = {
    setActivePage: PropTypes.func.isRequired
};

export default DashBoard;
=======
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
>>>>>>> 85cc2c8f87b6224711140033850a91c38901943b

