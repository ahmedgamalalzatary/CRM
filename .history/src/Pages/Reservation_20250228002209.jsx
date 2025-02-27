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
                        </div>
                    </Card>
                ))}
            </div>
            
            {/* Reservation List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-4">Add Reservation</h3>
                    <form className="space-y-4" onSubmit={handleSubmitReservation}>
                        <input type="text" name="clientName" value={newReservation.clientName} onChange={handleInputChange} placeholder="Client Name" className="w-full p-2 border rounded-lg cursor-text" />
                        <input type="date" name="date" value={newReservation.date} onChange={handleInputChange} className="w-full p-2 border rounded-lg cursor-pointer" />
                        <input type="time" name="time" value={newReservation.time} onChange={handleInputChange} className="w-full p-2 border rounded-lg cursor-pointer" />
                        <input type="number" name="people" value={newReservation.people} onChange={handleInputChange} placeholder="Number of People" className="w-full p-2 border rounded-lg cursor-text" />
                        <input type="text" name="specialRequests" value={newReservation.specialRequests} onChange={handleInputChange} placeholder="Special Requests" className="w-full p-2 border rounded-lg cursor-text" />
                        <input type="text" name="contactPhone" value={newReservation.contactPhone} onChange={handleInputChange} placeholder="Contact Phone" className="w-full p-2 border rounded-lg cursor-text" />
                        <input type="email" name="contactEmail" value={newReservation.contactEmail} onChange={handleInputChange} placeholder="Contact Email" className="w-full p-2 border rounded-lg cursor-text" />
                        <button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 cursor-pointer">
                            Submit Reservation
                        </button>
                    </form>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-4">Today's Reservations</h3>
                    <div className="space-y-3">
                        {filteredReservations.map(res => (
                            <div key={res.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                                <div>
                                    <p className="font-medium">{res.clientName}</p>
                                    <p className="text-sm text-gray-500">{res.time} - {res.people} people</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(res.status)}`}>
                                    {res.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal for new reservation */}
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-4">New Reservation</h3>
                        <form className="space-y-4" onSubmit={handleSubmitReservation}>
                            <input type="text" name="clientName" value={newReservation.clientName} onChange={handleInputChange} placeholder="Client Name" className="w-full p-2 border rounded-lg cursor-text" />
                            <input type="date" name="date" value={newReservation.date} onChange={handleInputChange} className="w-full p-2 border rounded-lg cursor-pointer" />
                            <input type="time" name="time" value={newReservation.time} onChange={handleInputChange} className="w-full p-2 border rounded-lg cursor-pointer" />
                            <input type="number" name="people" value={newReservation.people} onChange={handleInputChange} placeholder="Number of People" className="w-full p-2 border rounded-lg cursor-text" />
                            <input type="text" name="specialRequests" value={newReservation.specialRequests} onChange={handleInputChange} placeholder="Special Requests" className="w-full p-2 border rounded-lg cursor-text" />
                            <input type="text" name="contactPhone" value={newReservation.contactPhone} onChange={handleInputChange} placeholder="Contact Phone" className="w-full p-2 border rounded-lg cursor-text" />
                            <input type="email" name="contactEmail" value={newReservation.contactEmail} onChange={handleInputChange} placeholder="Contact Email" className="w-full p-2 border rounded-lg cursor-text" />
                            <button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 cursor-pointer">
                                Submit Reservation
                            </button>
                        </form>
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default Reservation
