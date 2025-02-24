import { MdChat, MdEmail, MdPhone, MdArticle } from 'react-icons/md'

function Support() {
    const supportChannels = [
        { icon: MdChat, title: 'Live Chat', description: 'Chat with our support team', status: 'Online' },
        { icon: MdEmail, title: 'Email Support', description: 'support@example.com', status: '24/7' },
        { icon: MdPhone, title: 'Phone Support', description: '+1 234 567 890', status: 'Available' },
    ]

    const commonIssues = [
        'How to create a new order?',
        'Reset password',
        'Update billing information',
        'Connect with API',
        'Export reports',
    ]

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Support Center</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {supportChannels.map((channel, index) => {
                    const Icon = channel.icon
                    return (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md cursor-pointer">
                            <Icon className="text-3xl text-blue-600 mb-3" />
                            <h3 className="font-semibold">{channel.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">{channel.description}</p>
                            <span className="inline-block mt-2 px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                                {channel.status}
                            </span>
                        </div>
                    )
                })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <MdArticle className="text-xl text-blue-600" />
                        Common Issues
                    </h3>
                    <div className="space-y-3">
                        {commonIssues.map((issue, index) => (
                            <div key={index} className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                                <p className="text-gray-600">{issue}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-4">Contact Support</h3>
                    <form className="space-y-4">
                        <input type="text" placeholder="Subject" className="w-full p-2 border rounded-lg" />
                        <textarea placeholder="Describe your issue..." className="w-full p-2 border rounded-lg h-32" />
                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
                            Submit Ticket
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Support
