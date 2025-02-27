import { useState, useEffect } from 'react';
import { MdEvent, MdPerson, MdAccessTime, MdEdit, MdDelete, MdCheckCircle, MdInfoOutline, MdAdd, MdFilterList, MdToday, MdDateRange, MdGroup, MdRestaurantMenu, MdCalendarToday } from 'react-icons/md';
import Card from '../Components/UI/Card';
import Button from '../Components/UI/Button';
import Modal from '../Components/UI/Modal';

function Reservation() {
    const [animateItems, setAnimateItems] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [filterStatus, setFilterStatus] = useState('all');
    const [expandedReservation, setExpandedReservation] = useState(null);
    const [newReservation, setNewReservation] = useState({
        clientName: '',
        date: new Date().toISOString().split('T')[0],
        time: '18:00',
        people: 2,
        specialRequests: '',
        contactPhone: '',
        contactEmail: ''
    });
    const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'table'
    
    // Animation trigger when component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateItems(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    // Generate reservation slots for today
    const timeSlots = ['12:00', '12:30', '13:00', '13:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'];
    
    const reservations = [
        { id: 1, clientName: 'John Doe', date: '2024-01-25', time: '14:00', people: 4, status: 'confirmed', contactPhone: '555-123-4567', contactEmail: 'john@example.com', specialRequests: 'Window table preferred', createdAt: '2024-01-20' },
        { id: 2, clientName: 'Jane Smith', date: '2024-01-25', time: '18:30', people: 2, status: 'pending', contactPhone: '555-987-6543', contactEmail: 'jane@example.com', specialRequests: 'Anniversary celebration', createdAt: '2024-01-22' },
        { id: 3, clientName: 'Mike Johnson', date: '2024-01-26', time: '19:00', people: 6, status: 'confirmed', contactPhone: '555-456-7890', contactEmail: 'mike@example.com', specialRequests: 'Allergic to nuts', createdAt: '2024-01-21' },
        { id: 4, clientName: 'Sarah Williams', date: '2024-01-25', time: '20:00', people: 3, status: 'cancelled', contactPhone: '555-333-2222', contactEmail: 'sarah@example.com', specialRequests: '', createdAt: '2024-01-19' },
        { id: 5, clientName: 'Robert Brown', date: '2024-01-26', time: '13:00', people: 5, status: 'confirmed', contactPhone: '555-444-5555', contactEmail: 'robert@example.com', specialRequests: 'Birthday celebration', createdAt: '2024-01-20' },
    ];

    // Filter reservations
    const filteredReservations = reservations.filter(res => {
        const matchesDate = res.date === selectedDate;
        const matchesStatus = filterStatus === 'all' || res.status === filterStatus;
        return matchesDate && matchesStatus;
    });

    // Calculate reservation stats
    const todayReservations = reservations.filter(res => res.date === selectedDate).length;
    const confirmedReservations = reservations.filter(res => res.status === 'confirmed').length;
    const pendingReservations = reservations.filter(res => res.status === 'pending').length;
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReservation(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleSubmitReservation = (e) => {
        e.preventDefault();
        // Here you would submit the reservation
        setShowModal(false);
        // Reset form
        setNewReservation({
            clientName: '',
            date: new Date().toISOString().split('T')[0],
            time: '18:00',
            people: 2,
            specialRequests: '',
            contactPhone: '',
            contactEmail: ''
        });
    };

    const getStatusColor = (status) => {
        switch(status) {
            case 'confirmed': return 'bg-green-100 text-green-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'cancelled': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="space-y-6">
            {/* Header with animation */}
            <div className={`
                flex justify-between items-center
                transform transition-all duration-500
                ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
            `}>
                <h2 className="text-2xl font-semibold text-gray-800">Reservation Management</h2>
                <Button
                    variant="primary"
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 group transition-all duration-300"
                    icon={<MdAdd className="text-xl transition-transform group-hover:rotate-90 duration-300" />}
                >
                    New Reservation
                </Button>
            </div>
            
            {/* Reservation Stats with animations */}
            <div className={`
                grid grid-cols-1 md:grid-cols-3 gap-4
                transform transition-all duration-500
                ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '100ms' }}
            >
                {[
                    { title: "Today's Reservations", value: todayReservations, icon: MdToday, color: 'bg-blue-100 text-blue-800' },
                    { title: 'Confirmed', value: confirmedReservations, icon: MdCheckCircle, color: 'bg-green-100 text-green-800' },
                    { title: 'Pending', value: pendingReservations, icon: MdInfoOutline, color: 'bg-yellow-100 text-yellow-800' }
                ].map((stat, index) => (
                    <Card 
                        key={index} 
                        hover
                        className={`
                            flex items-center p-4 transform transition-all duration-300
                            hover:-translate-y-1 hover:shadow-md
                        `}
                        style={{ transitionDelay: `${index * 100 + 200}ms` }}
                    >
                        <div className={`p-3 rounded-full ${stat.color}`}>
                            <stat.icon className="text-2xl" />
                        </div>
                        <div className="ml-4">
                            <p className="text-lg font-semibold">{stat.value}</p>
                            <p className="text-sm text-gray-500">{stat.title}</p>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Date and Filter Section */}
            <div className={`
                bg-white p-4 rounded-lg shadow-sm
                transform transition-all duration-500
                ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '300ms' }}
            >
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                        <MdCalendarToday className="text-gray-500 text-xl" />
                        <label className="text-gray-700 font-medium">Date:</label>
                        <input 
                            type="date" 
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    
                    <div className="flex items-center space-x-3">
                        <MdFilterList className="text-gray-500 text-xl" />
                        <label className="text-gray-700 font-medium">Status:</label>
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="all">All Reservations</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="pending">Pending</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                    </div>
                    
                    <div className="flex space-x-2">
                        <Button
                            variant={viewMode === 'cards' ? 'primary' : 'secondary'}
                            size="sm"
                            onClick={() => setViewMode('cards')}
                        >
                            Cards
                        </Button>
                        <Button
                            variant={viewMode === 'table' ? 'primary' : 'secondary'}
                            size="sm"
                            onClick={() => setViewMode('table')}
                        >
                            Table
                        </Button>
                    </div>
                </div>
            </div>
            
            {/* Reservation Display - Card View or Table View */}
            {viewMode === 'cards' ? (
                <div className={`
                    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4
                    transform transition-all duration-500
                    ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
                style={{ transitionDelay: '400ms' }}
                >
                    {filteredReservations.length > 0 ? filteredReservations.map((res, idx) => (
                        <Card 
                            key={res.id} 
                            hover
                            className={`
                                p-4 transform transition-all duration-300
                                hover:-translate-y-1 hover:shadow-md
                                ${expandedReservation === res.id ? 'ring-2 ring-blue-500' : ''}
                            `}
                            style={{ transitionDelay: `${idx * 100 + 500}ms` }}
                            onClick={() => setExpandedReservation(expandedReservation === res.id ? null : res.id)}
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                        <MdPerson className="text-blue-600 text-xl" />
                                    </div>