import { useState, useEffect } from 'react';
import { MdWarehouse, MdLocalShipping, MdWarning, MdAddBox, MdOutlineQrCodeScanner, MdRefresh, MdFilterList, MdSearch, MdEdit, MdDelete, MdInventory, MdHistory, MdImportExport } from 'react-icons/md';
import Card from '../Components/UI/Card';
import Button from '../Components/UI/Button';
import Modal from '../Components/UI/Modal';

function Inventory() {
    const [animateItems, setAnimateItems] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showTable, setShowTable] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [sortBy, setSortBy] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');
    
    const [newProduct, setNewProduct] = useState({
        name: '',
        category: '',
        quantity: '',
        minQuantity: '',
        price: '',
        supplier: ''
    });
    
    // Animation trigger when component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateItems(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const inventoryStats = [
        { title: 'Total Stock', value: '2,547', icon: MdWarehouse, color: 'bg-blue-100 text-blue-800' },
        { title: 'In Transit', value: '150', icon: MdLocalShipping, color: 'bg-yellow-100 text-yellow-800' },
        { title: 'Low Stock', value: '15', icon: MdWarning, color: 'bg-red-100 text-red-800' },
    ];

    const lowStockItems = [
        { id: 1, name: 'Product X', current: 5, minimum: 10 },
        { id: 2, name: 'Product Y', current: 3, minimum: 15 },
        { id: 3, name: 'Product Z', current: 8, minimum: 20 },
    ];
    
    const inventoryItems = [
        { id: 1, name: 'Widget A', category: 'Electronics', quantity: 45, minQuantity: 20, price: 129.99, supplier: 'Tech Supplies Inc.', lastUpdated: '2024-01-18' },
        { id: 2, name: 'Widget B', category: 'Electronics', quantity: 32, minQuantity: 15, price: 89.99, supplier: 'Tech Supplies Inc.', lastUpdated: '2024-01-15' },
        { id: 3, name: 'Desk Chair', category: 'Furniture', quantity: 12, minQuantity: 8, price: 249.99, supplier: 'Office Furnishings Co.', lastUpdated: '2024-01-10' },
        { id: 4, name: 'LED Monitor', category: 'Electronics', quantity: 7, minQuantity: 10, price: 179.99, supplier: 'Display Solutions', lastUpdated: '2024-01-05' },
        { id: 5, name: 'Filing Cabinet', category: 'Furniture', quantity: 18, minQuantity: 5, price: 149.99, supplier: 'Office Furnishings Co.', lastUpdated: '2023-12-28' },
    ];

    const categories = ['all', 'Electronics', 'Furniture', 'Accessories'];
    
    // Filter and sort inventory items
    const filteredItems = inventoryItems.filter(item => {
        const matchesSearch = searchTerm === '' || 
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            item.category.toLowerCase().includes(searchTerm.toLowerCase());
            
        const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
        
        return matchesSearch && matchesCategory;
    }).sort((a, b) => {
        let comparison = 0;
        
        switch(sortBy) {
            case 'name':
                comparison = a.name.localeCompare(b.name);
                break;
            case 'quantity':
                comparison = a.quantity - b.quantity;
                break;
            case 'price':
                comparison = a.price - b.price;
                break;
            default:
                comparison = a.name.localeCompare(b.name);
        }
        
        return sortOrder === 'asc' ? comparison : -comparison;
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddProduct = () => {
        // Add product logic would go here
        setShowAddModal(false);
        // Reset form
        setNewProduct({
            name: '',
            category: '',
            quantity: '',
            minQuantity: '',
            price: '',
            supplier: ''
        });
    };

    return (
        <div className="space-y-6">
            {/* Header with animation */}
            <div className={`
                flex justify-between items-center
                transform transition-all duration-500
                ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
            `}>
                <h2 className="text-2xl font-semibold text-gray-800">Inventory Management</h2>
                <Button
                    variant="primary"
                    onClick={() => setShowAddModal(true)}
                    className="flex items-center gap-2 group transition-all duration-300 hover:shadow-lg"
                    icon={<MdAddBox className="text-xl transition-transform group-hover:rotate-90 duration-300" />}
                >
                    Add Product
                </Button>
            </div>

            {/* Inventory Stats with staggered animation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {inventoryStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <Card
                            key={index}
                            hover
                            className={`
                                p-6 transform transition-all duration-500
                                hover:-translate-y-1 hover:shadow-md
                                ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                            `}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500">{stat.title}</p>
                                    <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                                </div>
                                <div className={`p-3 rounded-full ${stat.color}`}>
                                    <Icon className="text-2xl" />
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>

            {/* Main content section with animation */}
            <div className={`
                grid grid-cols-1 md:grid-cols-2 gap-6
                transform transition-all duration-500
                ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '200ms' }}
            >
                {/* Low Stock Alerts */}
                <Card hover className="p-6 transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-800">
                            <MdWarning className="text-red-500" />
                            Low Stock Alerts
                        </h3>
                        <span className="px-2.5 py-0.5 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                            {lowStockItems.length} items
                        </span>
                    </div>
                    <div className="space-y-4">
                        {lowStockItems.map((item, idx) => (
                            <div 
                                key={item.id} 
                                className={`
                                    flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100
                                    transform transition-all duration-300 
                                    hover:shadow-md hover:border-red-200
                                    ${animateItems ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
                                `}
                                style={{ transitionDelay: `${idx * 100 + 300}ms` }}
                            >
                                <div>
                                    <p className="font-medium text-gray-800">{item.name}</p>
                                    <div className="flex items-center text-sm text-gray-600 mt-1">
                                        <span className="text-red-600 font-medium mr-2">Current: {item.current}</span>
                                        <span>Minimum: {item.minimum}</span>
                                    </div>
                                </div>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    className="whitespace-nowrap"
                                >
                                    Reorder
                                </Button>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Quick Actions */}
                <Card hover className="p-6 transition-transform duration-300 hover:-translate-y-1">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-800">
                        <MdInventory className="text-blue-600" />
                        Inventory Actions
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { name: 'Stock Adjustment', icon: MdRefresh, color: 'bg-blue-100 text-blue-700 hover:bg-blue-200' },
                            { name: 'Purchase Order', icon: MdAddBox, color: 'bg-green-100 text-green-700 hover:bg-green-200' },
                            { name: 'Stock Transfer', icon: MdImportExport, color: 'bg-purple-100 text-purple-700 hover:bg-purple-200' },
                            { name: 'Scan Inventory', icon: MdOutlineQrCodeScanner, color: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200' },
                            { name: 'View History', icon: MdHistory, color: 'bg-gray-100 text-gray-700 hover:bg-gray-200' },
                            { name: 'Export List', icon: MdDownload, color: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200' }
                        ].map((action, idx) => {
                            const Icon = action.icon;
                            return (
                                <Button
                                    key={action.name}
                                    variant="light"
                                    className={`
                                        flex flex-col items-center justify-center p-4 gap-2 
                                        ${action.color} border-0
                                        transition-all duration-300 transform
                                        ${animateItems ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                                    `}
                                    style={{ transitionDelay: `${idx * 100 + 300}ms` }}
                                >
                                    <Icon className="text-2xl" />
                                    <span className="text-sm">{action.name}</span>
                                </Button>
                            );
                        })}
                    </div>
                </Card>
            </div>

            {/* Inventory Table Toggle Button */}
            <div className={`
                transform transition-all duration-500
                ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '400ms' }}
            >
                <Button
                    variant="secondary"
                    onClick={() => setShowTable(!showTable)}
                    className="w-full flex justify-center items-center gap-2 py-3"
                    icon={<MdInventory className="text-xl" />}
                >
                    {showTable ? "Hide Inventory Table" : "Show Inventory Table"}
                </Button>
            </div>
            
            {/* Inventory Table */}
            {showTable && (
                <Card className={`
                    transform transition-all duration-500
                    ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                    hover:shadow-md
                `}
                style={{ transitionDelay: '500ms' }}
                >
                    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="relative">
                            <MdSearch className="absolute left-3 top-3 text-gray-400" />
                            <input 
                                type="text" 
                                placeholder="Search inventory..." 
                                className="w-full p-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-300 transition-colors duration-300"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        
                        <div className="relative">
                            <MdFilterList className="absolute left-3 top-3 text-gray-400" />
                            <select 
                                className="w-full p-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-300 transition-colors duration-300"
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                            >
                                <option value="all">All Categories</option>
                                {categories.filter(cat => cat !== 'all').map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                        
                        <select 
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-300 transition-colors duration-300"
                            value={`${sortBy}-${sortOrder}`}
                            onChange={(e) => {
                                const [newSortBy, newSortOrder] = e.target.value.split('-');
                                setSortBy(newSortBy);
                                setSortOrder(newSortOrder);
                            }}
                        >
                            <option value="name-asc">Name (A-Z)</option>
                            <option value="name-desc">Name (Z-A)</option>
                            <option value="quantity-asc">Quantity (Low-High)</option>
                            <option value="quantity-desc">Quantity (High-Low)</option>
                            <option value="price-asc">Price (Low-High)</option>
                            <option value="price-desc">Price (High-Low)</option>
                        </select>
                    </div>
                    
                    <div className="overflow-x-auto"></div>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Min Qty</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredItems.length > 0 ? (
                                    filteredItems.map((item, idx) => (
                                        <tr 
                                            key={item.id} 
                                            className={`
                                                hover:bg-gray-50 transition-colors duration-200
                                                animate-fadeIn
                                            `}
                                            style={{ animationDelay: `${idx * 100}ms` }}
                                        ></tr>
                                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{item.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 py-1 rounded-full text-xs ${
                                                    item.category === 'Electronics' ? 'bg-blue-100 text-blue-800' :
                                                    item.category === 'Furniture' ? 'bg-purple-100 text-purple-800' :
                                                    'bg-green-100 text-green-800'
                                                }`}>
                                                    {item.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`${item.quantity < item.minQuantity ? 'text-red-600 font-bold' : ''}`}>
                                                    {item.quantity}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">{item.minQuantity}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">${item.price.toFixed(2)}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{item.supplier}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex space-x-2">
                                                    <Button
                                                        variant="ghost"
                                                        size="xs"
                                                        className="p-1 hover:bg-blue-100 text-blue-600"
                                                        icon={<MdEdit />}
                                                    />
                                                    <Button
                                                        variant="ghost"
                                                        size="xs"
                                                        className="p-1 hover:bg-red-100 text-red-600"
                                                        icon={<MdDelete />}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr></tr>
                                        <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                                            No inventory items found matching your criteria
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="p-4 border-t"></div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-600">
                                Showing <span className="font-medium">{filteredItems.length}</span> of <span className="font-medium">{inventoryItems.length}</span> items
                            </p>
                            <div className="flex gap-2">
                                <Button variant="secondary" size="sm">Previous</Button>
                                <Button variant="secondary" size="sm">Next</Button>
                            </div>
                        </div>
                    </div>
                </Card>
            )}
            
            {/* Add Product Modal */}
            <Modal
                isOpen={showAddModal}
                onClose={() => setShowAddModal(false)}
                title="Add New Product"
                actions={
                    <></>
                        <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleAddProduct}>
                            Add Product
                        </Button>
                    </>
                }
            ></Modal>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                        <input
                            type="text"
                            name="name"
                            value={newProduct.name}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                            <select
                                name="category"
                                value={newProduct.category}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                                required
                            >
                                <option value="">Select Category</option>
                                {categories.filter(cat => cat !== 'all').map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                            <input
                                type="number"
                                name="price"
                                value={newProduct.price}
                                onChange={handleInputChange}
                                step="0.01"
                                min="0"
                                className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                value={newProduct.quantity}
                                onChange={handleInputChange}
                                min="0"
                                className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Min Quantity</label>
                            <input
                                type="number"
                                name="minQuantity"
                                value={newProduct.minQuantity}
                                onChange={handleInputChange}
                                min="0"
                                className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Supplier</label>
                        <input
                            type="text"
                            name="supplier"
                            value={newProduct.supplier}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                            required
                        />
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default Inventory;
