import { useState, useEffect } from 'react';
import { MdEvent, MdPerson, MdAccessTime, MdEdit, MdDelete, MdCheckCircle, MdInfoOutline, MdAdd, MdFilterList, MdToday, MdDateRange, MdGroup, MdRestaurantMenu } from 'react-icons/md';
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
                                <div>
                                    <p className="font-medium">{res.client}</p>
                                    <p className="text-sm text-gray-500">{res.time} - {res.people} people</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs ${
                                    res.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                    {res.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reservation
