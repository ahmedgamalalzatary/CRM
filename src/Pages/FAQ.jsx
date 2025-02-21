import { useState } from 'react'
import { MdExpandMore, MdExpandLess, MdSearch } from 'react-icons/md'

function FAQ() {
    const [openQuestion, setOpenQuestion] = useState(null)

    const faqCategories = [
        'General Questions',
        'Account & Billing',
        'Services',
        'Technical Support',
    ]

    const faqs = [
        { question: 'How do I create a new order?', answer: 'To create a new order, go to the Orders page and click on "New Order" button...' },
        { question: 'How can I reset my password?', answer: 'You can reset your password by clicking on "Forgot Password" on the login page...' },
        { question: 'What payment methods do you accept?', answer: 'We accept credit cards, PayPal, and bank transfers...' },
        { question: 'How can I contact customer support?', answer: 'You can reach our customer support through live chat, email, or phone...' },
    ]

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Frequently Asked Questions</h2>

            <div className="relative">
                <input
                    type="text"
                    placeholder="Search FAQ..."
                    className="w-full p-3 pl-10 border rounded-lg cursor-text"
                />
                <MdSearch className="absolute left-3 top-3.5 text-gray-400 text-xl" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {faqCategories.map((category, index) => (
                    <button
                        key={index}
                        className="p-4 text-center bg-white rounded-lg shadow-sm hover:shadow-md cursor-pointer"
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="bg-white rounded-lg shadow-sm">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b last:border-0">
                        <button
                            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 cursor-pointer"
                            onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                        >
                            <span className="font-medium">{faq.question}</span>
                            {openQuestion === index ? (
                                <MdExpandLess className="text-2xl text-gray-500" />
                            ) : (
                                <MdExpandMore className="text-2xl text-gray-500" />
                            )}
                        </button>
                        {openQuestion === index && (
                            <div className="px-6 py-4 bg-gray-50">
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQ
