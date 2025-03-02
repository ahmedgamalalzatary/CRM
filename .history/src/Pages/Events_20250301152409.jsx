import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  MdEvent, MdToday, MdUpcoming, MdHistory, MdAdd, MdSearch, 
  MdFilterList, MdCalendarToday, MdPeople, MdLocationOn, 
  MdAccessTime, MdEdit, MdDelete, MdMoreVert, MdOutlineDateRange 
} from 'react-icons/md';
import Card from '../Components/UI/Card';
import Button from '../Components/UI/Button';
import Modal from '../Components/UI/Modal';

function Events() {
    const { t } = useTranslation();
    const [animateItems, setAnimateItems] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [typeFilter, setTypeFilter] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    
    const [newEvent, setNewEvent] = useState({
        title: '',
        date: new Date().toISOString().split('T')[0],
        time: '10:00',
        attendees: 0,
        type: t('Events.Types.Corporate'),
        location: '',
        description: ''
    });

    // Animation trigger when component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateItems(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const [events, setEvents] = useState([
        { id: 1, title: t('Events.Events.ProductLaunch'), date: '2024-02-01', time: '10:00', attendees: 50, type: t('Events.Types.Corporate'), location: t('Events.Locations.MainConference'), description: t('Events.Descriptions.ProductLaunch') },
        { id: 2, title: t('Events.Events.TeamMeeting'), date: '2024-01-25', time: '14:00', attendees: 15, type: t('Events.Types.Internal'), location: t('Events.Locations.MeetingRoomB'), description: t('Events.Descriptions.TeamMeeting') },
        { id: 3, title: t('Events.Events.ClientWorkshop'), date: '2024-01-30', time: '09:30', attendees: 25, type: t('Events.Types.Training'), location: t('Events.Locations.TrainingCenter'), description: t('Events.Descriptions.ClientWorkshop') },
        { id: 4, title: t('Events.Events.SalesConference'), date: '2024-02-15', time: '09:00', attendees: 100, type: t('Events.Types.Corporate'), location: t('Events.Locations.ConventionCenter'), description: t('Events.Descriptions.SalesConference') },
        { id: 5, title: t('Events.Events.StaffTraining'), date: '2024-01-28', time: '13:00', attendees: 30, type: t('Events.Types.Training'), location: t('Events.Locations.MeetingRoomA'), description: t('Events.Descriptions.StaffTraining') },
    ]);

    const eventStats = [
        { title: t('Events.Stats.TotalEvents'), value: events.length.toString(), icon: MdEvent, color: 'bg-purple-100 text-purple-800' },
        { title: t('Events.Stats.Today'), value: events.filter(e => e.date === new Date().toISOString().split('T')[0]).length.toString(), icon: MdToday, color: 'bg-blue-100 text-blue-800' },
        { title: t('Events.Stats.Upcoming'), value: events.filter(e => new Date(e.date) > new Date()).length.toString(), icon: MdUpcoming, color: 'bg-green-100 text-green-800' },
        { title: t('Events.Stats.Past'), value: events.filter(e => new Date(e.date) < new Date()).length.toString(), icon: MdHistory, color: 'bg-gray-100 text-gray-800' },
    ];

    const filteredEvents = events.filter(event => {
        const matchesSearch = searchTerm === '' || 
            event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.location.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesType = typeFilter === 'all' || event.type === typeFilter;
        return matchesSearch && matchesType;
    });

    // Sort events by date, closest first
    const sortedEvents = [...filteredEvents].sort((a, b) => new Date(a.date) - new Date(b.date));
    const upcomingEvents = sortedEvents.filter(e => new Date(e.date) >= new Date()).slice(0, 3);

    const eventTypes = [
        t('Events.Types.Corporate'),
        t('Events.Types.Internal'),
        t('Events.Types.Training')
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEvent(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCreateEvent = () => {
        const newId = Math.max(...events.map(e => e.id)) + 1;
        const eventToAdd = {
            id: newId,
            ...newEvent
        };

        setEvents([...events, eventToAdd]);
        setShowModal(false);
        setNewEvent({
            title: '',
            date: new Date().toISOString().split('T')[0],
            time: '10:00',
            attendees: 0,
            type: t('Events.Types.Corporate'),
            location: '',
            description: ''
        });
    };

    const handleShowDetails = (event) => {
        setSelectedEvent(event);
        setShowDetailModal(true);
    };

    const handleDeleteEvent = (id) => {
        setEvents(events.filter(e => e.id !== id));
        if (selectedEvent && selectedEvent.id === id) {
            setShowDetailModal(false);
        }
    };

    // Format date for displaying
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800 transition-all duration-300 ease-in-out">
                    {t('Events.Title')}
                </h2>
                <Button 
                    variant="primary"
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2.5 px-5 py-2.5 group transition-all duration-300 ease-in-out hover:scale-105 shadow-sm font-medium"
                >
                    <MdAdd className="text-xl transition-transform duration-300 group-hover:rotate-90" />
                    {t('Events.CreateEvent')}
                </Button>
            </div>

            {/* Stats Overview */}
            <div className={`
                grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4
                transition-all duration-500 ease-in-out
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '100ms' }}
            >
                {eventStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <Card 
                            key={index} 
                            hover
                            className="transition-all duration-300 hover:-translate-y-1 transform"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500">{stat.title}</p>
                                    <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                                </div>
                                <div className={`p-3 rounded-full ${stat.color}`}>
                                    <Icon className="text-2xl" />
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>

            {/* Filters */}
            <div className={`
                                'bg-purple-100 text-purple-800'
                            }`}>
                                {event.type}
                            </span>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm text-gray-600">
                                <span className="font-medium">Attendees:</span> {event.attendees}
                            </p>
                        </div>
                        <div className="mt-4 flex space-x-2">
                            <Button
                                variant="secondary"
                                className="px-3 py-1 text-sm transition-transform duration-200 active:scale-95"
                            >
                                Edit
                            </Button>
                            <Button
                                variant="secondary"
                                className="px-3 py-1 text-sm transition-transform duration-200 active:scale-95"
                            >
                                Details
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>

            {/* All Events Table */}
            <Card className={`
                transition-all duration-500 ease-in-out
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '400ms' }}
            >
                <div className="p-4 border-b">
                    <h3 className="text-lg font-semibold text-gray-800">Event Schedule</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{t('Events.Table.Event')}</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{t('Events.Table.Type')}</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{t('Events.Table.Date')}</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{t('Events.Table.Time')}</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{t('Events.Table.Location')}</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{t('Events.Table.Attendees')}</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredEvents.length > 0 ? (
                                filteredEvents.map((event) => (
                                    <tr key={event.id} className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800">{event.title}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 rounded-full text-xs ${
                                                event.type === 'Corporate' ? 'bg-blue-100 text-blue-800' :
                                                event.type === 'Internal' ? 'bg-green-100 text-green-800' :
                                                'bg-purple-100 text-purple-800'
                                            }`}>
                                                {event.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">{event.date}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">{event.time}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">{event.location}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">{event.attendees}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                                        No events found matching your criteria
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {filteredEvents.length > 0 && (
                    <div className="p-4 border-t flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                            {t('Events.Showing', {
                                filtered: filteredEvents.length,
                                total: allEvents.length
                            })}
                        </div>
                        <div className="flex space-x-2">
                            <Button variant="secondary" className="px-3 py-1 text-sm transition-transform duration-200 active:scale-95">{t('Previous')}</Button>
                            <Button variant="secondary" className="px-3 py-1 text-sm transition-transform duration-200 active:scale-95">{t('Next')}</Button>
                        </div>
                    </div>
                )}
            </Card>
        </div>
    );
}

export default Events;
