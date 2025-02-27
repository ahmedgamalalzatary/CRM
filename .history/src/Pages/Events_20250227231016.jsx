import { useState, useEffect } from 'react';
import { MdEvent, MdToday, MdUpcoming, MdHistory, MdAdd, MdSearch, MdFilterList, MdCalendarToday } from 'react-icons/md';
import Card from '../Components/UI/Card';
import Button from '../Components/UI/Button';

function Events() {
    const [animateItems, setAnimateItems] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [typeFilter, setTypeFilter] = useState('all');

    // Animation trigger when component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateItems(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const eventStats = [
        { title: 'Total Events', value: '24', icon: MdEvent, color: 'bg-purple-100 text-purple-800' },
        { title: 'Today', value: '3', icon: MdToday, color: 'bg-blue-100 text-blue-800' },
        { title: 'Upcoming', value: '12', icon: MdUpcoming, color: 'bg-green-100 text-green-800' },
        { title: 'Past', value: '9', icon: MdHistory, color: 'bg-gray-100 text-gray-800' },
    ];

    const allEvents = [
        { id: 1, title: 'Product Launch', date: '2024-02-01', time: '10:00 AM', attendees: 50, type: 'Corporate', location: 'Main Conference Room' },
        { id: 2, title: 'Team Meeting', date: '2024-01-25', time: '2:00 PM', attendees: 15, type: 'Internal', location: 'Meeting Room B' },
        { title: 'Past', value: '9', icon: MdHistory, color: 'bg-gray-100 text-gray-800' },
<<<<<<< HEAD
    ];

    const allEvents = [
        { id: 1, title: 'Product Launch', date: '2024-02-01', time: '10:00 AM', attendees: 50, type: 'Corporate', location: 'Main Conference Room' },
        { id: 2, title: 'Team Meeting', date: '2024-01-25', time: '2:00 PM', attendees: 15, type: 'Internal', location: 'Meeting Room B' },
        { id: 3, title: 'Client Workshop', date: '2024-01-30', time: '9:30 AM', attendees: 25, type: 'Training', location: 'Training Center' },
        { id: 4, title: 'Sales Conference', date: '2024-02-15', time: '9:00 AM', attendees: 100, type: 'Corporate', location: 'Convention Center' },
        { id: 5, title: 'Staff Training', date: '2024-01-28', time: '1:00 PM', attendees: 30, type: 'Training', location: 'Meeting Room A' },
    ];

    const filteredEvents = allEvents.filter(event => {
        const matchesSearch = searchTerm === '' || 
            event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.location.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesType = typeFilter === 'all' || event.type === typeFilter;
        return matchesSearch && matchesType;
    });

    // Sort events by date, closest first
    const sortedEvents = [...filteredEvents].sort((a, b) => new Date(a.date) - new Date(b.date));
    const upcomingEvents = sortedEvents.slice(0, 3);

    const eventTypes = ['Corporate', 'Internal', 'Training'];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800 transition-all duration-300 ease-in-out">
                    Events Management
                </h2>
                <Button 
                    variant="primary"
                    className="flex items-center gap-2.5 px-5 py-2.5 group transition-all duration-300 ease-in-out hover:scale-105 shadow-sm font-medium"
                >
                    <MdAdd className="text-xl transition-transform duration-300 group-hover:rotate-90" />
                    Create Event
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
=======
    ]

    const upcomingEvents = [
        { id: 1, title: 'Product Launch', date: '2024-02-01', attendees: 50, type: 'Corporate' },
        { id: 2, title: 'Team Meeting', date: '2024-01-25', attendees: 15, type: 'Internal' },
        { id: 3, title: 'Client Workshop', date: '2024-01-30', attendees: 25, type: 'Training' },
    ]

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800">Events Management</h2>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 cursor-pointer">
                    Create Event
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {eventStats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm cursor-pointer hover:shadow-md">
>>>>>>> 85cc2c8f87b6224711140033850a91c38901943b
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500">{stat.title}</p>
                                    <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                                </div>
                                <div className={`p-3 rounded-full ${stat.color}`}>
                                    <Icon className="text-2xl" />
                                </div>
                            </div>
<<<<<<< HEAD
                        </Card>
                    );
                })}
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
                            placeholder="Search events..." 
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
                            className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                            value={typeFilter}
                            onChange={(e) => setTypeFilter(e.target.value)}
                        >
                            <option value="all">All Event Types</option>
                            {eventTypes.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                </Card>
            </div>

            {/* Upcoming Events Cards */}
            <div className={`
                grid grid-cols-1 md:grid-cols-3 gap-6
                transition-all duration-500 ease-in-out
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '300ms' }}
            >
                {upcomingEvents.map((event, idx) => (
                    <Card 
                        key={event.id} 
                        hover
                        className="transition-all duration-300 hover:-translate-y-1"
                        style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-semibold text-lg text-gray-800">{event.title}</h3>
                                <div className="flex items-center gap-1 mt-2 text-gray-500 text-sm">
                                    <MdCalendarToday className="text-gray-400" />
                                    <span>{event.date} • {event.time}</span>
                                </div>
                                <p className="mt-2 text-sm text-gray-600">
                                    <span className="font-medium">Location: </span>{event.location}
                                </p>
=======
                        </div>
                    )
                })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {upcomingEvents.map(event => (
                    <div key={event.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md cursor-pointer">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-semibold text-lg">{event.title}</h3>
                                <p className="text-gray-500 text-sm mt-1">{event.date}</p>
>>>>>>> 85cc2c8f87b6224711140033850a91c38901943b
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs ${
                                event.type === 'Corporate' ? 'bg-blue-100 text-blue-800' :
                                event.type === 'Internal' ? 'bg-green-100 text-green-800' :
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
<<<<<<< HEAD
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
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Event</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Attendees</th>
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
                            Showing {filteredEvents.length} of {allEvents.length} events
                        </div>
                        <div className="flex space-x-2">
                            <Button variant="secondary" className="px-3 py-1 text-sm transition-transform duration-200 active:scale-95">Previous</Button>
                            <Button variant="secondary" className="px-3 py-1 text-sm transition-transform duration-200 active:scale-95">Next</Button>
                        </div>
                    </div>
                )}
            </Card>
        </div>
    );
}

export default Events;
=======
                            <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50 cursor-pointer">
                                Edit
                            </button>
                            <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50 cursor-pointer">
                                Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Events
>>>>>>> 85cc2c8f87b6224711140033850a91c38901943b
