import { MdClose, MdCircle } from 'react-icons/md'

function NotificationsPopup({ notifications, onClose }) {
    return (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800">Notifications</h3>
                <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                    <MdClose />
                </button>
            </div>
            <div className="max-h-96 overflow-y-auto">
                {notifications.map((notification, index) => (
                    <div key={index} className="p-4 border-b border-gray-100 hover:bg-gray-50">
                        <div className="flex items-center space-x-3">
                            <MdCircle className="text-xs text-gray-400" />
                            <div>
                                <p className="text-sm text-gray-800">{notification.message}</p>
                                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-4 text-center border-t border-gray-200">
                <button className="text-sm text-gray-600 hover:text-gray-800">
                    View All Notifications
                </button>
            </div>
        </div>
    )
}

export default NotificationsPopup
