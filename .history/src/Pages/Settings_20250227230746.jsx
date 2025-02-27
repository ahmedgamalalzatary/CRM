
import { useState, useEffect } from 'react';
import { MdPerson, MdNotifications, MdSecurity, MdLanguage, MdBrightness6, MdBackup, MdSave, MdEdit, MdCheck } from 'react-icons/md';
import Card from '../Components/UI/Card';
import Button from '../Components/UI/Button';

function Settings() {
    const [animateItems, setAnimateItems] = useState(false);
    const [activeTab, setActiveTab] = useState('profile');
    const [darkMode, setDarkMode] = useState(false);
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    
    // Animation trigger when component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateItems(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const settingsTabs = [
        { id: 'profile', icon: MdPerson, title: 'Profile' },
        { id: 'notifications', icon: MdNotifications, title: 'Notifications' },
        { id: 'security', icon: MdSecurity, title: 'Security' },
        { id: 'appearance', icon: MdBrightness6, title: 'Appearance' },
        { id: 'language', icon: MdLanguage, title: 'Language' },
        { id: 'backup', icon: MdBackup, title: 'Backup & Data' },
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'profile':
                return (
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white text-2xl">
                                <MdPerson className="text-3xl" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-1">Admin User</h3>
                                <p className="text-gray-500">admin@example.com</p>
                                <Button 
                                    variant="secondary"
                                    className="mt-2 flex items-center gap-1.5 text-sm"
                                >
                                    <MdEdit className="text-sm" />
                                    Change Photo
                                </Button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        value="Admin"
                                        className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value="admin@example.com"
                                        className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        value="User"
                                        className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="+1 (123) 456-7890"
                                        className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                            <textarea
                                id="bio"
                                rows={3}
                                placeholder="Write a short bio..."
                                className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex justify-end">
                            <Button 
                                variant="primary"
                                className="flex items-center gap-2"
                            >
                                <MdSave />
                                Save Changes
                            </Button>
                        </div>
                    </div>
                );
                
            case 'notifications':
                return (
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold">Email Notifications</h3>
                        <div className="space-y-4">
                            {['New Orders', 'Order Status Change', 'Inventory Alerts', 'Customer Support', 'System Updates'].map(item => (
                                <div key={item} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                                    <span className="text-gray-800">{item}</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" defaultChecked className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className="border-t pt-6">
                            <h3 className="text-lg font-semibold mb-4">Push Notifications</h3>
                            <div className="space-y-4">
                                {['Desktop Notifications', 'Mobile Notifications'].map(item => (
                                    <div key={item} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                                        <span className="text-gray-800">{item}</span>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" defaultChecked className="sr-only peer" />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
                
            case 'security':
                return (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Change Password</h3>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                                    <input
                                        type="password"
                                        id="currentPassword"
                                        className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                                    <input
                                        type="password"
                                        id="newPassword"
                                        className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <Button variant="primary">Update Password</Button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="border-t pt-6">
                            <h3 className="text-lg font-semibold mb-4">Two-Factor Authentication</h3>
                            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                                <div>
                                    <p className="font-medium text-gray-800">Enable Two-Factor Authentication</p>
                                    <p className="text-sm text-gray-500 mt-1">Add an extra layer of security to your account</p>
                                </div>
                                <Button variant="secondary">Enable</Button>
                            </div>
                        </div>
                    </div>
                );
                
            case 'appearance':
                return (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Theme Preferences</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="font-medium text-gray-800">Dark Mode</p>
                                        <p className="text-sm text-gray-500 mt-1">Use dark theme across the application</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            checked={darkMode}
                                            onChange={() => setDarkMode(!darkMode)}
                                            className="sr-only peer" 
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                                
                                <div className="p-3 border rounded-lg">
                                    <p className="font-medium text-gray-800 mb-3">Color Scheme</p>
                                    <div className="flex items-center space-x-3">
                                        {['bg-blue-600', 'bg-purple-600', 'bg-green-600', 'bg-red-600', 'bg-yellow-600'].map((color, idx) => (
                                            <div 
                                                key={idx} 
                                                className={`${color} w-8 h-8 rounded-full cursor-pointer ${idx === 0 ? 'ring-2 ring-offset-2 ring-blue-600' : ''}`}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="border-t pt-6">
                            <h3 className="text-lg font-semibold mb-4">Dashboard Layout</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="border p-4 rounded-lg cursor-pointer bg-gray-50 ring-2 ring-blue-500">
                                    <p className="font-medium text-center mb-2">Compact View</p>
                                    <div className="h-20 bg-gray-200 rounded flex flex-col">
                                        <div className="h-3 w-full bg-gray-300 mb-1"></div>
                                        <div className="flex-1 flex gap-1 p-1">
                                            {[1,2,3,4].map(n => (
                                                <div key={n} className="flex-1 bg-gray-300 rounded"></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="border p-4 rounded-lg cursor-pointer">
                                    <p className="font-medium text-center mb-2">Expanded View</p>
                                    <div className="h-20 bg-gray-200 rounded flex flex-col">
                                        <div className="h-3 w-full bg-gray-300 mb-1"></div>
                                        <div className="flex-1 flex flex-col gap-1 p-1">
                                            {[1,2].map(n => (
                                                <div key={n} className="flex-1 bg-gray-300 rounded"></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
                
            case 'language':
                return (
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold mb-4">Language Settings</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { code: 'en', name: 'English', flag: '🇺🇸', description: 'English (US)' },
                                { code: 'es', name: 'Español', flag: '🇪🇸', description: 'Spanish' },
                                { code: 'fr', name: 'Français', flag: '🇫🇷', description: 'French' },
                                { code: 'de', name: 'Deutsch', flag: '🇩🇪', description: 'German' },
                                { code: 'ar', name: 'العربية', flag: '🇸🇦', description: 'Arabic (RTL)' },
                                { code: 'zh', name: '中文', flag: '🇨🇳', description: 'Chinese (Simplified)' }
                            ].map((language) => {
                                const isSelected = selectedLanguage === language.code;
                                return (
                                    <div 
                                        key={language.code}
                                        className={`
                                            flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all duration-300
                                            ${isSelected ? 'bg-blue-50 border-blue-500 shadow-sm' : 'hover:bg-gray-50'}
                                        `}
                                        onClick={() => setSelectedLanguage(language.code)}
                                    >
                                        <div className="flex items-center">
                                            <div className="text-2xl mr-3">{language.flag}</div>
                                            <div>
                                                <p className="font-medium text-gray-800">{language.name}</p>
                                                <p className="text-sm text-gray-500">{language.description}</p>
                                            </div>
                                        </div>
                                        {isSelected && <MdCheck className="text-blue-600 text-xl" />}
                                    </div>
                                );
                            })}
                        </div>
                        
                        <div className="border-t pt-6">
                            <h3 className="text-lg font-semibold mb-4">Date & Time Format</h3>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="dateFormat" className="block text-sm font-medium text-gray-700 mb-1">Date Format</label>
                                    <select
                                        id="dateFormat"
                                        className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500"
                                    >
                                        <option value="MM/DD/YYYY">MM/DD/YYYY (US)</option>
                                        <option value="DD/MM/YYYY">DD/MM/YYYY (EU)</option>
                                        <option value="YYYY-MM-DD">YYYY-MM-DD (ISO)</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="timeFormat" className="block text-sm font-medium text-gray-700 mb-1">Time Format</label>
                                    <select
                                        id="timeFormat"
                                        className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500"
                                    >
                                        <option value="12h">12-hour (AM/PM)</option>
                                        <option value="24h">24-hour</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">Time Zone</label>
                                    <select
                                        id="timezone"
                                        className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-500"
                                    >
                                        <option value="UTC-8">(UTC-8:00) Pacific Time</option>
                                        <option value="UTC-5">(UTC-5:00) Eastern Time</option>
                                        <option value="UTC+0">(UTC+0:00) London</option>
                                        <option value="UTC+1">(UTC+1:00) Paris, Berlin</option>
                                        <option value="UTC+3">(UTC+3:00) Moscow</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="mt-6 flex justify-end">
                                <Button 
                                    variant="primary"
                                    className="flex items-center gap-2"
                                >
                                    <MdSave />
                                    Save Language Settings
                                </Button>
                            </div>
                        </div>
                    </div>
                );
                
            case 'backup':
                return (
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold mb-4">Data Backup & Export</h3>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                            <p className="text-sm text-blue-700">
                                Regular data backups help protect your business information. We recommend exporting your data at least once a month.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="border rounded-lg p-4">
                                <h4 className="font-medium text-gray-800 mb-2">Manual Backup</h4>
                                <p className="text-sm text-gray-600 mb-4">Export all your data as CSV or Excel files</p>
                                <div className="flex space-x-2">
                                    <Button variant="secondary" className="flex-1">CSV</Button>
                                    <Button variant="secondary" className="flex-1">Excel</Button>
                                </div>
                            </div>
                            
                            <div className="border rounded-lg p-4">
                                <h4 className="font-medium text-gray-800 mb-2">Scheduled Backups</h4>
                                <p className="text-sm text-gray-600 mb-4">Set up automatic scheduled backups</p>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-medium">Enable auto backup</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                                <select className="w-full p-2 border rounded-lg">
                                    <option>Weekly</option>
                                    <option>Monthly</option>
                                    <option>Quarterly</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="border-t pt-6">
                            <h3 className="text-lg font-semibold mb-4">Data Management</h3>
                            <div className="space-y-4">
                                <div className="p-4 border rounded-lg flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-gray-800">Import Data</p>
                                        <p className="text-sm text-gray-500">Import data from CSV, Excel or JSON</p>
                                    </div>
                                    <Button variant="secondary">Import</Button>
                                </div>
                                
                                <div className="p-4 border border-red-200 rounded-lg flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-red-600">Delete All Data</p>
                                        <p className="text-sm text-red-500">This action cannot be undone</p>
                                    </div>
                                    <Button 
                                        variant="secondary" 
                                        className="border-red-300 text-red-600 hover:bg-red-50"
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
                
            default:
                return (
                    <div className="p-6 text-center text-gray-500">
                        Select a settings category from the tabs above
                    </div>
                );
        }
    };

    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-gray-800 transition-all duration-300 ease-in-out">
                Settings
            </h2>

            {/* Quick Settings Toggles */}
            <div className={`
                grid grid-cols-1 md:grid-cols-3 gap-4
                transition-all duration-500 ease-in-out
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '100ms' }}
            >
                <Card hover className="transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <MdNotifications className="text-xl text-blue-600" />
                            </div>
                            <span className="text-gray-800">Email Notifications</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                                type="checkbox" 
                                checked={emailNotifications}
                                onChange={() => setEmailNotifications(!emailNotifications)}
                                className="sr-only peer" 
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </Card>
                <Card hover className="transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <MdBrightness6 className="text-xl text-purple-600" />
                            </div>
                            <span className="text-gray-800">Dark Mode</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                                type="checkbox" 
                                checked={darkMode}
                                onChange={() => setDarkMode(!darkMode)}
                                className="sr-only peer" 
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </Card>
                <Card hover className="transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <MdLanguage className="text-xl text-green-600" />
                            </div>
                            <span className="text-gray-800">Language</span>
                        </div>
                        <select className="py-2 px-3 border rounded-lg focus:ring-1 focus:ring-blue-500 bg-white">
                            <option>English</option>
                            <option>Español</option>
                            <option>Français</option>
                            <option>العربية</option>
                        </select>
                    </div>
                </Card>
            </div>

            {/* Settings Tabs */}
            <div className={`
                transition-all duration-500 ease-in-out
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '200ms' }}
            >
                <Card>
                    <div className="flex flex-wrap border-b overflow-x-auto whitespace-nowrap">
                        {settingsTabs.map((tab, index) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    className={`
                                        px-6 py-3 flex items-center gap-2 transition-colors duration-200
                                        ${isActive 
                                            ? 'border-b-2 border-blue-600 text-blue-600' 
                                            : 'text-gray-500 hover:text-gray-800'
                                        }
                                    `}
                                    onClick={() => setActiveTab(tab.id)}
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    <Icon className="text-xl" />
                                    <span className="font-medium">{tab.title}</span>
                                </button>
                            );
                        })}
                    </div>
                    <div className="p-6">
                        {renderTabContent()}
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Settings;

import { MdPerson, MdNotifications, MdSecurity, MdLanguage, MdBrightness6, MdBackup } from 'react-icons/md'

function Settings() {
    const settingsSections = [
        { icon: MdPerson, title: 'Profile Settings', description: 'Update your profile information' },
        { icon: MdNotifications, title: 'Notifications', description: 'Manage your notification preferences' },
        { icon: MdSecurity, title: 'Security', description: 'Password and security settings' },
        { icon: MdLanguage, title: 'Language', description: 'Choose your preferred language' },
        { icon: MdBrightness6, title: 'Appearance', description: 'Customize the look and feel' },
        { icon: MdBackup, title: 'Backup', description: 'Manage your data backup settings' },
    ]

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Settings</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {settingsSections.map((section, index) => {
                    const Icon = section.icon
                    return (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md cursor-pointer">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-blue-100 rounded-lg">
                                    <Icon className="text-2xl text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">{section.title}</h3>
                                    <p className="text-sm text-gray-500">{section.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
                <h3 className="font-semibold mb-4">Quick Settings</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-2">
                        <span>Email Notifications</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between p-2">
                        <span>Dark Mode</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings

