import { useState, useEffect } from 'react';
import { MdDownload, MdOutlineFileDownload, MdFilterList, MdBarChart, MdPieChart, MdTrendingUp } from 'react-icons/md';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line } from 'recharts';
import Card from '../Components/UI/Card';
import Button from '../Components/UI/Button';

function Report() {
    const [animateItems, setAnimateItems] = useState(false);
    const [reportType, setReportType] = useState('sales');
    const [reportPeriod, setReportPeriod] = useState('monthly');

    // Animation trigger when component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateItems(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const salesData = [
        { month: 'Jan', sales: 4000, target: 3000 },
        { month: 'Feb', sales: 3000, target: 3000 },
        { month: 'Mar', sales: 5000, target: 3000 },
function Reports() {

    const salesData = [
        { month: 'Jan', sales: 4000, profit: 2400 },
        { month: 'Feb', sales: 3000, profit: 1398 },
        { month: 'Mar', sales: 2000, profit: 9800 },
        { month: 'Apr', sales: 2780, profit: 3908 },

        { month: 'May', sales: 3890, profit: 4800 },
        { month: 'Jun', sales: 2390, profit: 3800 },
    ];

    const pieData = [
        { name: 'Electronics', value: 400, color: '#4F46E5' },
        { name: 'Clothing', value: 300, color: '#34D399' },
        { name: 'Food', value: 300, color: '#F59E0B' },
        { name: 'Others', value: 200, color: '#6B7280' },
    ];

    const trendData = [
        { month: 'Jan', customers: 1400, orders: 240 },
        { month: 'Feb', customers: 1600, orders: 320 },
        { month: 'Mar', customers: 1700, orders: 380 },
        { month: 'Apr', customers: 1800, orders: 410 },
        { month: 'May', customers: 2000, orders: 490 },
        { month: 'Jun', customers: 2200, orders: 520 },
    ];

    const reportTypes = [
        { id: 'sales', name: 'Sales Report', icon: MdBarChart, color: 'bg-blue-100 text-blue-600' },
        { id: 'product', name: 'Product Report', icon: MdPieChart, color: 'bg-green-100 text-green-600' },
        { id: 'customer', name: 'Customer Report', icon: MdTrendingUp, color: 'bg-purple-100 text-purple-600' }
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800 transition-all duration-300 ease-in-out">
                    Reports & Analytics
                </h2>
                <Button 
                    variant="primary"
                    className="flex items-center gap-2.5 px-5 py-2.5 group transition-all duration-300 ease-in-out hover:scale-105 shadow-sm font-medium"
                >
                    <MdDownload className="text-xl transition-all duration-300" />
                    Export Reports
                </Button>
            </div>

            {/* Report Type Selection */}
            <div className={`
                grid grid-cols-1 sm:grid-cols-3 gap-4
                transition-all duration-500 ease-in-out
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '100ms' }}
            >
                {reportTypes.map((type, index) => {
                    const Icon = type.icon;
                    const isActive = reportType === type.id;
                    return (
                        <Card 
                            key={type.id} 
                            hover
                            className={`
                                transition-all duration-300 hover:-translate-y-1 transform cursor-pointer
                                ${isActive ? 'ring-2 ring-blue-500 shadow-md' : ''}
                            `}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onClick={() => setReportType(type.id)}
                        >
                            <div className="flex items-center space-x-3">
                                <div className={`p-3 rounded-lg ${type.color}`}>
                                    <Icon className="text-2xl" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-800">{type.name}</h3>
                                    <p className="text-sm text-gray-500">View detailed analytics</p>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>

            {/* Report Filters */}
            <Card className={`
                p-4 transition-all duration-500 ease-in-out
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '200ms' }}
            >
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center">
                        <MdFilterList className="text-gray-500 mr-2" />
                        <span className="text-gray-700 font-medium">Filter:</span>
                    </div>
                    <div className="flex space-x-2">
                        {['weekly', 'monthly', 'quarterly', 'yearly'].map(period => (
                            <button
                                key={period}
                                className={`px-3 py-1.5 text-sm rounded-full transition-colors duration-300 ${
                                    reportPeriod === period 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                                onClick={() => setReportPeriod(period)}
                            >
                                {period.charAt(0).toUpperCase() + period.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </Card>

            {/* Report Charts - Displayed based on selected type */}
            <div className={`
                grid grid-cols-1 lg:grid-cols-2 gap-6
                transition-all duration-500 ease-in-out
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '300ms' }}
            >
                {reportType === 'sales' && (
                    <>
                        <Card hover className="transition-all duration-300 hover:-translate-y-1">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800">Sales Overview</h3>
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={salesData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                        <XAxis dataKey="month" axisLine={false} tickLine={false} />
                                        <YAxis axisLine={false} tickLine={false} />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="sales" fill="#4F46E5" radius={[4, 4, 0, 0]} />
                                        <Bar dataKey="profit" fill="#34D399" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </Card>

                        <Card hover className="transition-all duration-300 hover:-translate-y-1">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800">Monthly Performance</h3>
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={salesData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                        <XAxis dataKey="month" axisLine={false} tickLine={false} />
                                        <YAxis axisLine={false} tickLine={false} />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="profit" stroke="#4F46E5" activeDot={{ r: 8 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </Card>
                    </>
                )}

                {reportType === 'product' && (
                    <>
                        <Card hover className="transition-all duration-300 hover:-translate-y-1">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800">Product Distribution</h3>
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={pieData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={90}
                                            fill="#8884d8"
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
                        </Card>

                        <Card hover className="transition-all duration-300 hover:-translate-y-1">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800">Top Products</h3>
                            <div className="space-y-4">
                                {['Product A', 'Product B', 'Product C', 'Product D'].map((product, idx) => (
                                    <div key={product} className="flex flex-col">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm font-medium">{product}</span>
                                            <span className="text-xs text-gray-500">{Math.round(Math.random() * 1000) + 500} sales</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full ${
                                                    idx === 0 ? 'bg-blue-500' :
                                                    idx === 1 ? 'bg-green-500' :
                                                    idx === 2 ? 'bg-yellow-500' : 'bg-purple-500'
                                                }`}
                                                style={{ width: `${Math.round(Math.random() * 50) + 50}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </>
                )}

                {reportType === 'customer' && (
                    <>
                        <Card hover className="transition-all duration-300 hover:-translate-y-1">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800">Customer Growth</h3>
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={trendData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                        <XAxis dataKey="month" axisLine={false} tickLine={false} />
                                        <YAxis axisLine={false} tickLine={false} />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="customers" stroke="#4F46E5" activeDot={{ r: 8 }} />
                                        <Line type="monotone" dataKey="orders" stroke="#34D399" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </Card>

                        <Card hover className="transition-all duration-300 hover:-translate-y-1">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800">Customer Demographics</h3>
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={[
                                                { name: 'Male', value: 540, color: '#4F46E5' },
                                                { name: 'Female', value: 460, color: '#EC4899' },
                                                { name: 'Other', value: 100, color: '#6B7280' }
                                            ]}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={90}
                                            fill="#8884d8"
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
                        </Card>
                    </>
                )}
            </div>

            {/* Download Reports Section */}
            <Card className={`
                transition-all duration-500 ease-in-out p-6
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '400ms' }}
            >
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Download Reports</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { title: 'Sales Report', description: 'Includes all sales transactions' },
                        { title: 'Inventory Report', description: 'Current stock and product status' },
                        { title: 'Financial Report', description: 'Revenue, expenses and profit' }
                    ].map((report) => (
                        <Button 
                            key={report.title} 
                            variant="secondary"
                            className="flex items-center justify-between p-4 transition-all duration-300"
                        >
                            <div className="text-left">
                                <p className="font-medium">{report.title}</p>
                                <p className="text-xs text-gray-500 mt-1">{report.description}</p>
                            </div>
                            <MdDownload className="text-xl text-gray-600" />
                        </Button>
                    ))}
                </div>
            </Card>
        </div>
    );
}




    const pieData = [
        { name: 'Electronics', value: 400 },
        { name: 'Clothing', value: 300 },
        { name: 'Food', value: 300 },
        { name: 'Others', value: 200 },
    ]

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800">Reports & Analytics</h2>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
                    <MdDownload className="text-xl" />
                    Export Reports
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
                    <BarChart width={500} height={300} data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sales" fill="#4F46E5" />
                        <Bar dataKey="profit" fill="#34D399" />
                    </BarChart>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Category Distribution</h3>
                    <PieChart width={500} height={300}>
                        <Pie
                            data={pieData}
                            cx={250}
                            cy={150}
                            innerRadius={60}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                        />
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Download Reports</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['Sales Report', 'Inventory Report', 'Financial Report'].map((report) => (
                        <button key={report} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                            <span>{report}</span>
                            <MdDownload className="text-xl text-gray-600" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}



export default Reports;