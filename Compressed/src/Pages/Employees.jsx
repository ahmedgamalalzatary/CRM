import { MdPeople, MdWork, MdAssignment, MdPerson } from 'react-icons/md'

function Employees() {
    const employees = [
        { id: 1, name: 'John Doe', position: 'Sales Manager', department: 'Sales', status: 'Active' },
        { id: 2, name: 'Jane Smith', position: 'Support Specialist', department: 'Customer Support', status: 'Active' },
        { id: 3, name: 'Mike Wilson', position: 'Developer', department: 'IT', status: 'On Leave' },
    ]

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800">Employee Management</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
                    Add Employee
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-sm cursor-pointer hover:shadow-md">
                    <div className="flex items-center space-x-3">
                        <MdPeople className="text-3xl text-blue-600" />
                        <div>
                            <p className="text-sm text-gray-500">Total Employees</p>
                            <p className="text-2xl font-semibold">156</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm cursor-pointer hover:shadow-md">
                    <div className="flex items-center space-x-3">
                        <MdWork className="text-3xl text-green-600" />
                        <div>
                            <p className="text-sm text-gray-500">Active</p>
                            <p className="text-2xl font-semibold">142</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm cursor-pointer hover:shadow-md">
                    <div className="flex items-center space-x-3">
                        <MdAssignment className="text-3xl text-yellow-600" />
                        <div>
                            <p className="text-sm text-gray-500">On Leave</p>
                            <p className="text-2xl font-semibold">14</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm">
                <div className="p-4 border-b">
                    <input 
                        type="text" 
                        placeholder="Search employees..." 
                        className="w-full p-2 border rounded-lg cursor-text"
                    />
                </div>
                <div className="p-4">
                    {employees.map(employee => (
                        <div key={employee.id} className="flex items-center justify-between p-3 border-b last:border-0 hover:bg-gray-50 cursor-pointer">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                    <MdPerson className="text-xl text-gray-600" />
                                </div>
                                <div>
                                    <p className="font-medium">{employee.name}</p>
                                    <p className="text-sm text-gray-500">{employee.position}</p>
                                </div>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs ${
                                employee.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                                {employee.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Employees
