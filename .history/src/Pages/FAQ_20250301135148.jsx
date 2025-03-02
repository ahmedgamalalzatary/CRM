
import { useState, useEffect } from 'react';
import { MdExpandMore, MdExpandLess, MdSearch, MdHelpOutline, MdArticle, MdQuestionAnswer, MdContactSupport } from 'react-icons/md';
import Card from '../Components/UI/Card';
import Button from '../Components/UI/Button';

function FAQ() {
    const [openQuestion, setOpenQuestion] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [animateItems, setAnimateItems] = useState(false);
    const [activeCategory, setActiveCategory] = useState('General Questions');

    // Animation trigger when component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateItems(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const faqCategories = [
        { name: 'General Questions', icon: MdHelpOutline, color: 'bg-blue-100 text-blue-600' },
        { name: 'Account & Billing', icon: MdArticle, color: 'bg-green-100 text-green-600' },
        { name: 'Services', icon: MdQuestionAnswer, color: 'bg-purple-100 text-purple-600' },
        { name: 'Technical Support', icon: MdContactSupport, color: 'bg-yellow-100 text-yellow-600' }
    ];

    const allFaqs = {
        'General Questions': [
            { question: 'How do I create a new order?', answer: 'To create a new order, go to the Orders page and click on "New Order" button. Fill in the required details like customer information, products, quantities, and payment method. Once completed, click "Submit" to create the order.' },
            { question: 'Can I export my data from the system?', answer: 'Yes, most data in the system can be exported. Navigate to the specific page (e.g., Products, Orders) and look for the "Export" button. You can export data in various formats like Excel, CSV, or PDF.' },
        ],
        'Account & Billing': [
            { question: 'How can I reset my password?', answer: 'You can reset your password by clicking on "Forgot Password" on the login page. Enter your registered email address and follow the instructions sent to your inbox.' },
            { question: 'What payment methods do you accept?', answer: 'We accept credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. For recurring subscriptions, we recommend setting up automatic payments.' },
        ],
        'Services': [
            { question: 'Can I customize my dashboard?', answer: 'Yes, you can customize your dashboard by clicking on "Edit Dashboard" in the top-right corner. You can add, remove, or rearrange widgets according to your preferences.' },
            { question: 'How often is data updated?', answer: 'Data in the system is updated in real-time. However, some reports and analytics may have a slight delay of up to 15 minutes to ensure accurate calculations.' },
        ],
        'Technical Support': [
            { question: 'How can I contact customer support?', answer: 'You can reach our customer support through multiple channels: live chat available 24/7, email at support@example.com, or phone at +1-800-123-4567 during business hours (9 AM - 5 PM EST).' },
            { question: 'Is there an API available?', answer: 'Yes, we provide a comprehensive API for integrations. You can find the documentation in the Developer section under Settings. API keys can be generated in your account settings.' },
        ]
    };

    // Filter FAQs based on search and active category
    const filteredFaqs = allFaqs[activeCategory]?.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800 transition-all duration-300 ease-in-out">
                    Frequently Asked Questions
                </h2>
                <Button 
                    variant="primary"
                    className="flex items-center gap-2.5 px-5 py-2.5 group transition-all duration-300 ease-in-out hover:scale-105 shadow-sm font-medium"
                >
                    <MdContactSupport className="text-xl" />
                    Contact Support
                </Button>
            </div>

            {/* Search Box */}
            <Card className={`
                p-4 transition-all duration-500 ease-in-out
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '100ms' }}
            >
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search FAQ..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-3 pl-10 border rounded-lg focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                    />
                    <MdSearch className="absolute left-3 top-3.5 text-gray-400 text-xl" />
                </div>
            </Card>

            {/* FAQ Categories */}
            <div className={`
                grid grid-cols-1 md:grid-cols-4 gap-4
                transition-all duration-500 ease-in-out
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '200ms' }}
            >
                {faqCategories.map((category, index) => {
                    const Icon = category.icon;
                    const isActive = activeCategory === category.name;
                    return (
                        <Card 
                            key={category.name}
                            hover
                            className={`
                                p-4 text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer
                                ${isActive ? 'ring-2 ring-blue-500 shadow-md' : ''}
                            `}
                            style={{ transitionDelay: `${index * 50}ms` }}
                            onClick={() => setActiveCategory(category.name)}
                        >
                            <div className="flex flex-col items-center">
                                <div className={`p-3 rounded-full mb-2 ${category.color}`}>
                                    <Icon className="text-xl" />
                                </div>
                                <span className="font-medium">{category.name}</span>
                            </div>
                        </Card>
                    );
                })}
            </div>

            {/* FAQ Accordion */}
            <Card className={`
                transition-all duration-500 ease-in-out
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '300ms' }}
            >
                <div className="p-4 border-b">
                    <h3 className="text-lg font-semibold text-gray-800">{activeCategory}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                        {searchTerm ? `Search results: ${filteredFaqs.length} found` : `Showing ${filteredFaqs.length} questions`}
                    </p>
                </div>
                
                <div className="divide-y divide-gray-100">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq, index) => (
                            <div 
                                key={index} 
                                className="border-b last:border-0 transition-all duration-300"
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                <button
                                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                                    onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                                >
                                    <span className="font-medium text-gray-800">{faq.question}</span>
                                    <div className="transition-transform duration-300 ease-in-out transform">
                                        {openQuestion === index ? (
                                            <MdExpandLess className="text-2xl text-gray-500" />
                                        ) : (
                                            <MdExpandMore className="text-2xl text-gray-500" />
                                        )}
                                    </div>
                                </button>
                                <div 
                                    className={`
                                        px-6 py-4 bg-gray-50 overflow-hidden transition-all duration-300 ease-in-out
                                        ${openQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                                    `}
                                >
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-8 text-center text-gray-500">
                            {searchTerm ? 'No FAQs match your search criteria' : 'No FAQs available for this category'}
                        </div>
                    )}
                </div>
            </Card>

            {/* Contact Us Banner */}
            <div className={`
                bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white
                transition-all duration-500 ease-in-out
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '400ms' }}
            >
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold">Still have questions?</h3>
                        <p className="mt-1">Our support team is here to help you 24/7</p>
                    </div>
                    <div className="flex space-x-3">
                        <Button
                            variant="secondary"
                            className="whitespace-nowrap bg-white text-blue-600 border-white hover:bg-gray-100 transition-colors duration-200"
                        >
                            Live Chat
                        </Button>
                        <Button
                            variant="secondary"
                            className="whitespace-nowrap bg-transparent text-white border-white hover:bg-blue-700 transition-colors duration-200"
                        >
                            Email Support
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
