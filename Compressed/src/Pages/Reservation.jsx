
function Reservation() {
    const reservations = [
        { id: 1, client: 'John Doe', date: '2024-01-25', time: '14:00', people: 4, status: 'Confirmed' },
        { id: 2, client: 'Jane Smith', date: '2024-01-25', time: '18:30', people: 2, status: 'Pending' },
        { id: 3, client: 'Mike Johnson', date: '2024-01-26', time: '19:00', people: 6, status: 'Confirmed' },
    ]

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800">Reservations</h2>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 cursor-pointer">
                    New Reservation
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-4">Add Reservation</h3>
                    <form className="space-y-4">
                        <input type="text" placeholder="Client Name" className="w-full p-2 border rounded-lg cursor-text" />
                        <input type="date" className="w-full p-2 border rounded-lg cursor-pointer" />
                        <input type="time" className="w-full p-2 border rounded-lg cursor-pointer" />
                        <input type="number" placeholder="Number of People" className="w-full p-2 border rounded-lg cursor-text" />
                        <button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 cursor-pointer">
                            Submit Reservation
                        </button>
                    </form>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-4">Todays Reservations</h3>
                    <div className="space-y-3">
                        {reservations.map(res => (
                            <div key={res.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
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
