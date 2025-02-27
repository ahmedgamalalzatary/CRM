<<<<<<< HEAD
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { MdNotificationsActive, MdClose, MdCircle } from 'react-icons/md';

function NotificationsPopup({ notifications, onClose }) {
    const popupRef = useRef(null);

    useEffect(() => {
        // Handle click outside
        function handleClickOutside(event) {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        }

        // Handle escape key
        function handleEscKey(event) {
            if (event.key === 'Escape') {
                onClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscKey);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscKey);
        };
    }, [onClose]);

    return (
        <div
            ref={popupRef}
            className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 animate-fadeIn"
            style={{ animationDuration: '0.2s' }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="notifications-title"
        >
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <MdNotificationsActive className="text-gray-700 text-lg" />
                    <h3 id="notifications-title" className="text-lg font-medium text-gray-800">Notifications</h3>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs bg-gray-100 text-gray-700 rounded-full px-2 py-0.5">
                        {notifications.length} new
                    </span>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600"
                        aria-label="Close notifications"
                    >
                        <MdClose />
                    </button>
                </div>
            </div>

            <div className="max-h-80 overflow-y-auto">
                {notifications.length === 0 ? (
                    <div className="p-6 text-center text-gray-500">
                        <p>No new notifications</p>
                        <p className="text-sm mt-1">You're all caught up!</p>
                    </div>
                ) : (
                    <ul className="divide-y divide-gray-100">
                        {notifications.map((notification, index) => (
                            <li
                                key={index}
                                className="p-4 hover:bg-gray-50 transition-colors duration-150"
                            >
                                <div className="flex items-start">
                                    <div className="mt-1 mr-3">
                                        <MdCircle className="text-xs text-blue-500" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-800">{notification.message}</p>
                                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="p-3 border-t border-gray-200 flex justify-between">
                <button
                    onClick={() => onClose()}
                    className="text-sm text-gray-600 hover:text-gray-900"
                >
                    Close
                </button>
                {notifications.length > 0 && (
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                        Mark all as read
                    </button>
                )}
            </div>
        </div>
    );
}

NotificationsPopup.propTypes = {
    notifications: PropTypes.arrayOf(
        PropTypes.shape({
            message: PropTypes.string.isRequired,
            time: PropTypes.string.isRequired
        })
    ).isRequired,
    onClose: PropTypes.func.isRequired
};

export default NotificationsPopup;
=======
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
>>>>>>> 85cc2c8f87b6224711140033850a91c38901943b
