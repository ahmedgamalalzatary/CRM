import { useState, useEffect } from 'react';
import { MdPerson, MdPersonAdd, MdFilterList, MdSearch, MdEdit, MdDelete, MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import Card from '../Components/UI/Card';
import Button from '../Components/UI/Button';
import Modal from '../Components/UI/Modal';

function Clients() {
    const [animateItems, setAnimateItems] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [clientFilter, setClientFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedClient, setSelectedClient] = useState(null);
    const [newClientData, setNewClientData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        type: 'regular'
    });

    // Mock client data
    const [clients, setClients] = useState([
        { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '555-1234', company: 'ABC Corp', type: 'premium', joinDate: '2023-05-15', lastOrder: '2024-01-10', totalSpent: 12450 },
        { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', phone: '555-5678', company: 'XYZ Inc', type: 'regular', joinDate: '2023-08-22', lastOrder: '2023-12-05', totalSpent: 4320 },
        { id: 3, firstName: 'Robert', lastName: 'Johnson', email: 'robert@example.com', phone: '555-9012', company: 'Tech Solutions', type: 'premium', joinDate: '2022-11-07', lastOrder: '2024-01-15', totalSpent: 18750 },
        { id: 4, firstName: 'Emily', lastName: 'Williams', email: 'emily@example.com', phone: '555-3456', company: 'Digital Media', type: 'regular', joinDate: '2023-10-18', lastOrder: '2023-12-28', totalSpent: 2890 },
        { id: 5, firstName: 'Michael', lastName: 'Brown', email: 'michael@example.com', phone: '555-7890', company: 'Global Enterprises', type: 'premium', joinDate: '2022-06-30', lastOrder: '2023-11-20', totalSpent: 21560 },
    ]);

    // Animation trigger when component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateItems(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    // Handle new client input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewClientData(prev => ({ ...prev, [name]: value }));
    };

    // Add new client
    const handleAddClient = () => {
        const newId = Math.max(...clients.map(client => client.id)) + 1;
        const today = new Date().toISOString().split('T')[0];
        const newClient = {
            id: newId,
            ...newClientData,
            joinDate: today,
            lastOrder: 'N/A',
            totalSpent: 0
        };
        
        setClients(prev => [...prev, newClient]);
        setShowModal(false);
        setNewClientData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            type: 'regular'
        });
    };

    // Filter clients
    const filteredClients = clients.filter(client => {
        const matchesSearch = searchTerm === '' || 
            `${client.firstName} ${client.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) || 
            client.email.toLowerCase().includes(searchTerm.toLowerCase()) || 
            client.company.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesType = clientFilter === 'all' || client.type === clientFilter;
        
        return matchesSearch && matchesType;
    });

    // Client detail view
    const renderClientDetail = () => {
        if (!selectedClient) return null;
        
        const client = clients.find(c => c.id === selectedClient);
        if (!client) return null;

        return (
            <Card 
                className={`
                    absolute top-0 right-0 h-full w-full md:w-1/3 z-10 shadow-xl overflow-y-auto
                    ${animateItems ? 'translate-x-0' : 'translate-x-full'}
                    transition-all duration-500 ease-in-out
                `}
            >
                <div className="p-6">
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-xl font-semibold">Client Details</h3>
                        <Button 
                            variant="ghost" 
                            size="sm" 
                            className="hover:bg-gray-100 rounded-full p-1" 
                            onClick={() => setSelectedClient(null)}
                        >
                            <MdDelete className="text-gray-500" />
                        </Button>
                    </div>

                    <div className="h-20 w-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold mb-4 mx-auto">
                        {client.firstName[0]}{client.lastName[0]}
                    </div>
                    <div className="text-center mb-6">
                        <h4 className="text-lg font-bold">{client.firstName} {client.lastName}</h4>
                        <p className="text-gray-600">{client.company}</p>
                        <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs uppercase font-semibold mt-2">
                            {client.type} Client
                        </div>
                    </div>

                    <div className="space-y-4 mb-6">
                        <div className="flex items-start">
                            <MdEmail className="mt-1 mr-3 text-gray-500" />
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium">{client.email}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MdPhone className="mt-1 mr-3 text-gray-500" />
                            <div>
                                <p className="text-sm text-gray-500">Phone</p>
                                <p className="font-medium">{client.phone}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MdLocationOn className="mt-1 mr-3 text-gray-500" />
                            <div>
                                <p className="text-sm text-gray-500">Company</p>
                                <p className="font-medium">{client.company}</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-500">Join Date</p>
                            <p className="font-bold">{client.joinDate}</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-500">Last Order</p>
                            <p className="font-bold">{client.lastOrder}</p>
                        </div>
                        <div className="col-span-2 p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-500">Total Spent</p>
                            <p className="font-bold text-green-600">${client.totalSpent.toLocaleString()}</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Button variant="primary" className="flex-1">Edit Client</Button>
                        <Button variant="secondary" className="flex-1">Contact</Button>
                    </div>
                </div>
            </Card>
        );
    };

    return (
        <div className="space-y-8 relative"></div>
            {/* Header */}
            <div className="flex justify-between items-center">
                <h2 className={`text-2xl font-semibold text-gray-800 transform transition-all duration-500 ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                    Client Management
                </h2>
                <Button 
                    variant="primary"
                    onClick={() => setShowModal(true)}
                    className={`flex items-center gap-2 transform transition-all duration-500 ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    icon={<MdPersonAdd className="text-xl" />}
                ></Button>
                    Add Client
                </Button>
            </div>

            {/* Client Stats */}
            <div className={`
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4
                transform transition-all duration-500
                ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '100ms' }}
            >
                <Card hover className="p-4 transform transition-all duration-300 hover:-translate-y-1">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm text-gray-500">Total Clients</p>
                            <p className="text-2xl font-bold mt-1">{clients.length}</p>
                        </div>
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                            <MdPerson className="text-xl" />
                        </div>
                    </div>
                </Card>
                <Card hover className="p-4 transform transition-all duration-300 hover:-translate-y-1">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm text-gray-500">Premium Clients</p>
                            <p className="text-2xl font-bold mt-1">{clients.filter(c => c.type === 'premium').length}</p>
                        </div>
                        <div className="p-3 bg-purple-100 text-purple-600 rounded-full">
                            <MdPerson className="text-xl" />
                        </div>
                    </div>
                </Card>
                <Card hover className="p-4 transform transition-all duration-300 hover:-translate-y-1">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm text-gray-500">Regular Clients</p>
                            <p className="text-2xl font-bold mt-1">{clients.filter(c => c.type === 'regular').length}</p>
                        </div>
                        <div className="p-3 bg-green-100 text-green-600 rounded-full">
                            <MdPerson className="text-xl" />
                        </div>
                    </div>
                </Card>
                <Card hover className="p-4 transform transition-all duration-300 hover:-translate-y-1">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm text-gray-500">New This Month</p>
                            <p className="text-2xl font-bold mt-1">3</p>
                        </div>
                        <div className="p-3 bg-yellow-100 text-yellow-600 rounded-full">
                            <MdPersonAdd className="text-xl" />
                        </div>
                    </div>
                </Card>
            </div>

            {/* Client Table */}
            <Card className={`
                transform transition-all duration-500
                ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                ${selectedClient ? 'md:pr-[33.33%]' : ''}
            `}
            style={{ transitionDelay: '200ms' }}
            >
                <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                        <MdSearch className="text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Search clients..." 
                            className="w-full p-2 border rounded-lg"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                        <MdFilterList className="text-gray-400" />
                        <select 
                            className="w-full p-2 border rounded-lg"
                            value={clientFilter}
                            onChange={(e) => setClientFilter(e.target.value)}
                        ></select>
                            <option value="all">All Client Types</option>
                            <option value="premium">Premium Only</option>
                            <option value="regular">Regular Only</option>
                        </select>
                    </div>
                    
                    <Button variant="secondary" className="flex items-center justify-center gap-2">
                        <MdPersonAdd />
                        Import Clients
                    </Button>
                </div>

                <div className="overflow-x-auto relative">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredClients.length > 0 ? (
                                filteredClients.map((client, idx) => (
                                    <tr
                                        key={client.id}
                                        className={`hover:bg-gray-50 cursor-pointer transition-colors duration-200 ${selectedClient === client.id ? 'bg-blue-50' : ''}`}
                                        style={{
                                            animationDelay: `${idx * 50}ms`,
                                            animationFillMode: 'both'
                                        }}
                                        onClick={() => setSelectedClient(client.id)}
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold">
                                                    {client.firstName[0]}{client.lastName[0]}
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{client.firstName} {client.lastName}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">{client.email}</div>
                                            <div className="text-sm text-gray-500">{client.phone}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {client.company}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                client.type === 'premium' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'
                                            }`}></span>
                                                {client.type.charAt(0).toUpperCase() + client.type.slice(1)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {client.joinDate}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <div className="flex space-x-2">
                                                <button className="p-1 hover:bg-blue-100 rounded-full text-blue-600">
                                                    <MdEdit />
                                                </button>
                                                <button className="p-1 hover:bg-red-100 rounded-full text-red-600">
                                                    <MdDelete />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr></tr>
                                    <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                                        No clients found matching your criteria
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                
                {filteredClients.length > 0 && (
                    <div className="p-4 border-t flex items-center justify-between"></div>
                        <div className="text-sm text-gray-500">
                            Showing <span className="font-medium">{filteredClients.length}</span> of <span className="font-medium">{clients.length}</span> clients
                        </div>
                        <div className="flex space-x-2">
                            <Button variant="secondary" className="px-3 py-1 text-sm">Previous</Button>
                            <Button variant="secondary" className="px-3 py-1 text-sm">Next</Button>
                        </div>
                    </div>
                )}
                
                {renderClientDetail()}
            </Card>

            {/* Add Client Modal */}
            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title="Add New Client"
                actions={
                    <>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleAddClient}>
                            Add Client
                        </Button>
                    </>
                }
            >
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={newClientData.firstName}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={newClientData.lastName}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={newClientData.email}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={newClientData.phone}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                        <input
                            type="text"
                            name="company"
                            value={newClientData.company}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Client Type</label>
                        <select
                            name="type"
                            value={newClientData.type}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="regular">Regular</option>
                            <option value="premium">Premium</option>
                        </select>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default Clients;
