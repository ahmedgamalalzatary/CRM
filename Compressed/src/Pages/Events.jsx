import { MdEvent, MdToday, MdUpcoming, MdHistory } from 'react-icons/md'

function Events() {
    const eventStats = [
        { title: 'Total Events', value: '24', icon: MdEvent, color: 'bg-purple-100 text-purple-800' },
        { title: 'Today', value: '3', icon: MdToday, color: 'bg-blue-100 text-blue-800' },
        { title: 'Upcoming', value: '12', icon: MdUpcoming, color: 'bg-green-100 text-green-800' },
        { title: 'Past', value: '9', icon: MdHistory, color: 'bg-gray-100 text-gray-800' },
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
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500">{stat.title}</p>
                                    <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                                </div>
                                <div className={`p-3 rounded-full ${stat.color}`}>
                                    <Icon className="text-2xl" />
                                </div>
                            </div>
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
