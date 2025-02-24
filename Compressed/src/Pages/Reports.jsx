import { MdDownload } from 'react-icons/md'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie } from 'recharts'

function Reports() {
    const salesData = [
        { month: 'Jan', sales: 4000, profit: 2400 },
        { month: 'Feb', sales: 3000, profit: 1398 },
        { month: 'Mar', sales: 2000, profit: 9800 },
        { month: 'Apr', sales: 2780, profit: 3908 },
    ]

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

export default Reports
