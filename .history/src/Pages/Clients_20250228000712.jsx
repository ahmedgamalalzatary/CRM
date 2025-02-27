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