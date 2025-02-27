import { useState, useEffect } from 'react';
import { MdPeople, MdWork, MdAssignment, MdPerson, MdAdd, MdSearch, MdFilterList } from 'react-icons/md';
import Card from '../Components/UI/Card';
import Button from '../Components/UI/Button';

function Employees() {
    const [animateItems, setAnimateItems] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [departmentFilter, setDepartmentFilter] = useState('all');

    // Animation trigger when component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateItems(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const employees = [
        { id: 1, name: 'John Doe', position: 'Sales Manager', department: 'Sales', status: 'Active' },
        { id: 2, name: 'Jane Smith', position: 'Support Specialist', department: 'Customer Support', status: 'Active' },
        { id: 3, name: 'Mike Wilson', position: 'Developer', department: 'IT', status: 'On Leave' },
        { id: 4, name: 'Sarah Johnson', position: 'Marketing Manager', department: 'Marketing', status: 'Active' },
        { id: 5, name: 'Robert Davis', position: 'Product Manager', department: 'Product', status: 'On Leave' },
    ];

    const filteredEmployees = employees.filter(employee => {
        const matchesSearch = searchTerm === '' || 
            employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.department.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesDepartment = departmentFilter === 'all' || employee.department === departmentFilter;
        return matchesSearch && matchesDepartment;
    });

    const departments = ['Sales', 'Customer Support', 'IT', 'Marketing', 'Product'];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800 transition-all duration-300 ease-in-out">
                    Employee Management
                </h2>
                <Button 
                    variant="primary"
                    className="flex items-center gap-2.5 px-5 py-2.5 group transition-all duration-300 ease-in-out hover:scale-105 shadow-sm font-medium"
                >
                    <MdAdd className="text-xl transition-transform duration-300 group-hover:rotate-90" />
                    Add Employee
                </Button>
            </div>

            {/* Stats Overview */}
            <div className={`
                grid grid-cols-1 md:grid-cols-3 gap-4
                transition-all duration-500 ease-in-out
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '100ms' }}
            >
                {[
                    { title: 'Total Employees', value: '156', icon: MdPeople, color: 'bg-blue-100 text-blue-600' },
                    { title: 'Active', value: '142', icon: MdWork, color: 'bg-green-100 text-green-600' },
                    { title: 'On Leave', value: '14', icon: MdAssignment, color: 'bg-yellow-100 text-yellow-600' }
                ].map((stat, index) => (
                    <Card 
                        key={index} 
                        hover
                        className="transition-all duration-300 hover:-translate-y-1 transform"
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div className="flex items-center space-x-3">
                            <div className={`p-3 rounded-lg ${stat.color}`}>
                                <stat.icon className="text-2xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">{stat.title}</p>
                                <p className="text-2xl font-semibold">{stat.value}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Filters */}
            <div className={`
                grid grid-cols-1 md:grid-cols-2 gap-4
                transition-all duration-500 ease-in-out
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '200ms' }}
            >
                <Card hover className="p-4 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-center gap-2">
                        <MdSearch className="text-gray-500" />
                        <input 
                            type="text" 
                            placeholder="Search employees..." 
                            className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </Card>

                <Card hover className="p-4 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-center gap-2">
                        <MdFilterList className="text-gray-500" />
                        <select 
                    </div>
                </Card>

                <Card hover className="p-4 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-center gap-2">
                        <MdFilterList className="text-gray-500" />
                        <select 
                            className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                            value={departmentFilter}
                            onChange={(e) => setDepartmentFilter(e.target.value)}
                        >
                            <option value="all">All Departments</option>
                            {departments.map(dept => (
                                <option key={dept} value={dept}>{dept}</option>
                            ))}
                        </select>
                    </div>
                </Card>
            </div>

            {/* Employees List */}
            <Card className={`
                transition-all duration-500 ease-in-out
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '300ms' }}
            >
                <div className="p-4 border-b">
                    <h3 className="text-lg font-semibold text-gray-800">Employee Directory</h3>
                    <p className="text-sm text-gray-500 mt-1">
                        Showing {filteredEmployees.length} of {employees.length} employees
                    </p>
                </div>
                <div className="divide-y divide-gray-100">
                    {filteredEmployees.length > 0 ? (
                        filteredEmployees.map((employee, idx) => (
                            <div 
                                key={employee.id} 
                                className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200"
                                style={{ 
                                    transitionDelay: `${idx * 50}ms`,
                                    animationFillMode: 'both'
                                }}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white transition-transform duration-300 hover:scale-110">
                                        <MdPerson className="text-lg" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">{employee.name}</p>
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="text-gray-500">{employee.position}</span>
                                            <span className="text-xs text-gray-400">•</span>
                                            <span className="text-gray-500">{employee.department}</span>
                                        </div>
                                    </div>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs ${
                                    employee.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                    {employee.status}
                                </span>
                            </div>
                        ))
                    ) : (
                        <div className="p-8 text-center text-gray-500">
                            No employees matching your criteria
                        </div>
                    )}
                </div>
                {filteredEmployees.length > 0 && (
                    <div className="p-4 border-t flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                            Showing {filteredEmployees.length} of {employees.length} employees
                        </div>
                        <div className="flex space-x-2">
                            <Button variant="secondary" className="px-3 py-1 text-sm transition-transform duration-200 active:scale-95">Previous</Button>
                            <Button variant="secondary" className="px-3 py-1 text-sm transition-transform duration-200 active:scale-95">Next</Button>
                        </div>
                    </div>
                )}
            </Card>

            {/* Department Overview */}
            <div className={`
                grid grid-cols-1 md:grid-cols-3 gap-6
                transition-all duration-500 ease-in-out
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '400ms' }}
            >
                {departments.slice(0, 3).map((dept, idx) => (
                    <Card 
                        key={dept} 
                        hover 
                        className="transition-all duration-300 hover:-translate-y-1"
                        style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                        <h3 className="font-semibold text-gray-800 mb-4">{dept} Department</h3>
                        <div className="space-y-3">
                            {employees.filter(emp => emp.department === dept).map(emp => (
                                <div key={emp.id} className="flex items-center justify-between hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                                    <span className="text-gray-700">{emp.name}</span>
                                    <span className="text-gray-500 text-sm">{emp.position}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Employees;
=======
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
>>>>>>> 85cc2c8f87b6224711140033850a91c38901943b
