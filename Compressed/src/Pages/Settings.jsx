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
