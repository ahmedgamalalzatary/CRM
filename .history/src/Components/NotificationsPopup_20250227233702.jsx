import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { MdNotificationsActive, MdClose, MdCircle } from 'react-icons/md';
import Button from './UI/Button';

function NotificationsPopup({ notifications, onClose }) {
    const popupRef = useRef(null);

    useEffect(() => {
        // Handle click outside
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
                        <p className="text-sm mt-1">You&rsquo;re all caught up!</p>
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
