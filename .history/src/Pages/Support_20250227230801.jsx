
import { useState, useEffect } from 'react';
import { MdChat, MdEmail, MdPhone, MdArticle, MdSend, MdHelp, MdQuestionAnswer, MdArchive } from 'react-icons/md';
import Card from '../Components/UI/Card';
import Button from '../Components/UI/Button';

function Support() {
    const [animateItems, setAnimateItems] = useState(false);
    const [selectedChannel, setSelectedChannel] = useState(null);
    const [ticketDetails, setTicketDetails] = useState({
        subject: '',
        description: '',
        priority: 'medium',
        category: 'general'
    });

    // Animation trigger when component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateItems(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const supportChannels = [
        { id: 'chat', icon: MdChat, title: 'Live Chat', description: 'Chat with our support team', status: 'Online', color: 'bg-blue-100 text-blue-600' },
        { id: 'email', icon: MdEmail, title: 'Email Support', description: 'support@example.com', status: '24/7', color: 'bg-green-100 text-green-600' },
        { id: 'phone', icon: MdPhone, title: 'Phone Support', description: '+1 234 567 890', status: 'Available', color: 'bg-purple-100 text-purple-600' },
    ];

    const commonIssues = [
        { title: 'How to create a new order?', category: 'orders' },
        { title: 'Reset password', category: 'account' },
        { title: 'Update billing information', category: 'billing' },
        { title: 'Connect with API', category: 'technical' },
        { title: 'Export reports', category: 'reporting' },
    ];

    const supportCategories = [
        { id: 'general', name: 'General Inquiry', icon: MdHelp },
        { id: 'technical', name: 'Technical Issue', icon: MdQuestionAnswer },
        { id: 'billing', name: 'Billing Problem', icon: MdArchive },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTicketDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmitTicket = (e) => {
        e.preventDefault();
        // Here you would submit the ticket to your backend
        alert(`Ticket submitted: ${JSON.stringify(ticketDetails)}`);
        // Reset form
        setTicketDetails({
            subject: '',
            description: '',
            priority: 'medium', 
            category: 'general'
        });
    };

    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-gray-800 transition-all duration-300 ease-in-out">
                Support Center
            </h2>

            {/* Support Channels */}
            <div className={`
                grid grid-cols-1 md:grid-cols-3 gap-4
                transition-all duration-500 ease-in-out
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '100ms' }}
            >
                {supportChannels.map((channel, index) => {
                    const Icon = channel.icon;
                    const isActive = selectedChannel === channel.id;
                    return (
                        <Card 
                            key={channel.id} 
                            hover
                            className={`
                                transition-all duration-300 hover:-translate-y-1 cursor-pointer
                                ${isActive ? 'ring-2 ring-blue-500 shadow-md' : ''}
                            `}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onClick={() => setSelectedChannel(channel.id === selectedChannel ? null : channel.id)}
                        >
                            <div className="p-6">
                                <div className={`p-3 rounded-full ${channel.color} w-12 h-12 flex items-center justify-center mb-4`}>
                                    <Icon className="text-2xl" />
                                </div>
                                <h3 className="font-semibold text-gray-800">{channel.title}</h3>
                                <p className="text-sm text-gray-500 mt-1">{channel.description}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                                        {channel.status}
                                    </span>
                                    <Button
                                        variant="secondary"
                                        className="text-sm px-3 py-1"
                                    >
                                        Connect
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>

            {/* Help Content and Create Ticket Form */}
            <div className={`
                grid grid-cols-1 md:grid-cols-2 gap-6
                transition-all duration-500 ease-in-out
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '200ms' }}
            >
                <Card hover className="transition-all duration-300 hover:-translate-y-1">
                    <div className="p-6">
                        <h3 className="font-semibold text-lg text-gray-800 mb-4 flex items-center gap-2">
                            <MdArticle className="text-xl text-blue-600" />
                            Common Issues
                        </h3>
                        <div className="space-y-3">
                            {commonIssues.map((issue, index) => (
                                <div 
                                    key={index} 
                                    className="p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer"
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-700">{issue.title}</p>
                                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                            {issue.category}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <h4 className="font-medium text-gray-800 mb-3">Knowledge Base</h4>
                            <p className="text-sm text-gray-600 mb-3">
                                Browse our comprehensive knowledge base for detailed guides and tutorials.
                            </p>
                            <Button
                                variant="secondary"
                                className="w-full"
                            >
                                Visit Knowledge Base
                            </Button>
                        </div>
                    </div>
                </Card>

                <Card hover className="transition-all duration-300 hover:-translate-y-1">
                    <div className="p-6">
                        <h3 className="font-semibold text-lg text-gray-800 mb-4">Create Support Ticket</h3>
                        <form className="space-y-4" onSubmit={handleSubmitTicket}>
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                                    Category
                                </label>
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                    {supportCategories.map((category) => {
                                        const Icon = category.icon;
                                        const isSelected = ticketDetails.category === category.id;
                                        return (
                                            <div 
                                                key={category.id}
                                                className={`
                                                    p-2 border rounded-lg text-center cursor-pointer transition-all duration-200
                                                    ${isSelected ? 'bg-blue-50 border-blue-500 shadow-sm' : 'hover:bg-gray-50'}
                                                `}
                                                onClick={() => setTicketDetails(prev => ({ ...prev, category: category.id }))}
                                            >
                                                <Icon className={`text-xl mx-auto mb-1 ${isSelected ? 'text-blue-600' : 'text-gray-500'}`} />
                                                <span className={`text-xs ${isSelected ? 'font-medium text-blue-700' : 'text-gray-600'}`}>
                                                    {category.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <input 
                                    type="text" 
                                    id="subject"
                                    name="subject"
                                    value={ticketDetails.subject}
                                    onChange={handleInputChange}
                                    placeholder="Brief description of your issue"
                                    className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                    Description
                                </label>
                                <textarea 
                                    id="description"
                                    name="description"
                                    value={ticketDetails.description}
                                    onChange={handleInputChange}
                                    placeholder="Provide detailed information about your issue..."
                                    className="w-full p-2 border rounded-lg h-32 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
                                    Priority
                                </label>
                                <select 
                                    id="priority"
                                    name="priority"
                                    value={ticketDetails.priority}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                                >
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                    <option value="urgent">Urgent</option>
                                </select>
                            </div>
                            
                            <Button 
                                variant="primary"
                                type="submit"
                                className="w-full flex items-center justify-center gap-2"
                            >
                                <MdSend />
                                Submit Ticket
                            </Button>
                        </form>
                    </div>
                </Card>
            </div>

            {/* Support Status and Recent Tickets */}
            <div className={`
                transition-all duration-500 ease-in-out
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '300ms' }}
            >
                <Card>
                    <div className="p-6">
                        <h3 className="font-semibold text-lg text-gray-800 mb-4">Support Status</h3>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex-1 min-w-[200px] p-4 bg-green-50 rounded-lg border border-green-100">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-green-800">System Status</span>
                                    <span className="flex h-3 w-3">
                                        <span className="animate-ping absolute h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
                                        <span className="rounded-full h-3 w-3 bg-green-500"></span>
                                    </span>
                                </div>
                                <p className="mt-2 text-xl font-semibold text-green-700">Operational</p>
                            </div>
                            
                            <div className="flex-1 min-w-[200px] p-4 bg-blue-50 rounded-lg border border-blue-100">
                                <span className="text-sm font-medium text-blue-800">Average Response Time</span>
                                <p className="mt-2 text-xl font-semibold text-blue-700">2.4 hours</p>
                            </div>
                            
                            <div className="flex-1 min-w-[200px] p-4 bg-purple-50 rounded-lg border border-purple-100">
                                <span className="text-sm font-medium text-purple-800">Support Satisfaction</span>
                                <p className="mt-2 text-xl font-semibold text-purple-700">97%</p>
                            </div>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="font-medium text-gray-800">Recent Tickets</h4>
                                <Button variant="secondary" className="text-sm">View All</Button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {[
                                            { id: 'T-1234', subject: 'Issue with order processing', status: 'In Progress', date: '2023-01-15' },
                                            { id: 'T-1235', subject: 'API connection error', status: 'Resolved', date: '2023-01-12' },
                                            { id: 'T-1236', subject: 'Account access problem', status: 'Closed', date: '2023-01-10' }
                                        ].map((ticket, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{ticket.id}</td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{ticket.subject}</td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm">
                                                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                        ticket.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 
                                                        ticket.status === 'Resolved' ? 'bg-green-100 text-green-800' : 
                                                        'bg-gray-100 text-gray-800'
                                                    }`}>
                                                        {ticket.status}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{ticket.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Contact Banner */}
            <div className={`
                bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-6 text-white
                transition-all duration-500 ease-in-out
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '400ms' }}
            >
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">Need immediate assistance?</h3>
                        <p>Our support team is available 24/7 to help you with any questions</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                            className="whitespace-nowrap bg-white text-blue-600 hover:bg-gray-100"
                        >
                            <MdChat className="mr-2" />
                            Start Live Chat
                        </Button>
                        <Button
                            variant="secondary"
                            className="whitespace-nowrap border-white bg-transparent hover:bg-blue-700"
                        >
                            <MdPhone className="mr-2" />
                            Call Support
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Support;
=======
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
>>>>>>> 85cc2c8f87b6224711140033850a91c38901943b
