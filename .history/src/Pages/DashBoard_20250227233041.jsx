import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { 
  MdTrendingUp, MdPeople, MdShoppingCart, MdAttachMoney, 
  MdArrowUpward, MdArrowDownward, MdCalendarToday, 
  MdAccessTime, MdMoreVert
} from 'react-icons/md';
import PropTypes from 'prop-types';
import Card from '../Components/UI/Card';
import Button from '../Components/UI/Button';

function DashBoard({ setActivePage }) {
    const data = [
        { name: 'Jan', sales: 4000, orders: 2400, revenue: 2400 },
        { name: 'Feb', sales: 3000, orders: 1398, revenue: 2210 },
        { name: 'Mar', sales: 2000, orders: 9800, revenue: 2290 },
        { name: 'Apr', sales: 2780, orders: 3908, revenue: 2000 },
        { name: 'May', sales: 1890, orders: 4800, revenue: 2181 },
        { name: 'Jun', sales: 2390, orders: 3800, revenue: 2500 },
    ];

    const stats = [
        { title: 'Total Sales', value: '$54,239', icon: MdAttachMoney, color: 'bg-green-100 text-green-800' },
        { title: 'Total Orders', value: '1,253', icon: MdShoppingCart, color: 'bg-blue-100 text-blue-800' },
        { title: 'New Clients', value: '342', icon: MdPeople, color: 'bg-purple-100 text-purple-800' },
        { title: 'Growth', value: '+12.5%', icon: MdTrendingUp, color: 'bg-yellow-100 text-yellow-800' },
    ];

    const recentTransactions = [
        { id: 1, customer: 'John Doe', amount: 1200, status: 'completed', trend: 'up' },
        { id: 2, customer: 'Jane Smith', amount: 850, status: 'pending', trend: 'down' },
        { id: 3, customer: 'Bob Johnson', amount: 2300, status: 'completed', trend: 'up' },
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

    // For PieChart in Goals Progress section
    const pieData = [
        { name: 'Revenue', value: 75, color: '#4F46E5' },
        { name: 'Customers', value: 65, color: '#34D399' },
        { name: 'Sales', value: 85, color: '#F59E0B' },
    ];

    // Remove or use the trendData variable

    return (
        <div className="space-y-6 max-w-full overflow-x-hidden">
            {/* Key Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <Card 
                            key={index}
                            hover
                            className="flex-1"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-gray-500 truncate">{stat.title}</p>
                                    <p className="text-2xl font-semibold mt-1 truncate">{stat.value}</p>
                                </div>
                                <div className={`p-3 rounded-full flex-shrink-0 ${stat.color}`}>
                                    <Icon className="text-2xl" />
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Charts Section */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Sales Overview Chart */}
                    <Card hover>
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
                    </Card>

                    {/* Orders Trend Chart */}
                    <Card hover>
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
                    </Card>

                    {/* Performance Metrics */}
                    <Card hover>
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
                    </Card>
                </div>

                {/* Right column with transactions and other widgets */}
                <div className="space-y-6">
                    {/* Recent Transactions */}
                    <Card hover>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">Recent Transactions</h3>
                            <Button
                                variant="secondary"
                                onClick={() => setActivePage('sales')}
                                className="text-xs"
                            >
                                View All
                            </Button>
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
                    </Card>

                    {/* Quick Actions */}
                    <Card hover>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {quickActions.map(action => (
                                <Button
                                    key={action.label}
                                    variant="secondary"
                                    onClick={() => setActivePage(action.page)}
                                    className="flex items-center justify-center gap-2 text-sm"
                                >
                                    <action.icon className="text-gray-500" />
                                    {action.label}
                                </Button>
                            ))}
                        </div>
                    </Card>

                    {/* Sales Distribution */}
                    <Card hover>
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
                                            className={`h-2 rounded-full ${
                                                item.name === 'Online' ? 'bg-blue-600' :
                                                item.name === 'In-Store' ? 'bg-green-500' : 'bg-yellow-500'
                                            }`}
                                            style={{ width: `${item.value}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Upcoming Tasks */}
                <div className="lg:col-span-2">
                    <Card hover>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">Upcoming Tasks</h3>
                            <Button variant="secondary" className="text-xs">View Calendar</Button>
                        </div>
                        <div className="space-y-2">
                            {upcomingTasks.map((task, idx) => (
                                <div
                                    key={idx}
                                    className={`flex items-start space-x-3 p-3 rounded-lg border-l-4 ${
                                        task.priority === 'high' ? 'border-red-500 bg-red-50' :
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
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Goal Progress Section */}
                <div>
                    <Card hover className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800">Goals Progress</h3>
                        <div className="h-48">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={30}
                                        outerRadius={60}
                                        paddingAngle={5}
                                        dataKey="value"
                                        label
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="space-y-3">
                            {pieData.map(goal => (
                                <div key={goal.name} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">{goal.name}</span>
                                        <span className="text-gray-900">{goal.value}%</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full">
                                        <div 
                                            className="h-full rounded-full" 
                                            style={{ 
                                                width: `${goal.value}%`,
                                                backgroundColor: goal.color 
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>

            {/* Recent Activity Timeline */}
            <Card hover>
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
            </Card>
            
        </div>
    );
}

DashBoard.propTypes = {
    setActivePage: PropTypes.func.isRequired
};

export default DashBoard;

