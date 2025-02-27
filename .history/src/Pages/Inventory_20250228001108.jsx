import { useState, useEffect } from 'react';
import { MdWarehouse, MdLocalShipping, MdWarning, MdAddBox, MdOutlineQrCodeScanner, MdRefresh, MdFilterList, MdSearch, MdEdit, MdDelete } from 'react-icons/md';
import Card from '../Components/UI/Card';
import Button from '../Components/UI/Button';
import Modal from '../Components/UI/Modal';

function Inventory() {
    const [animateItems, setAnimateItems] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showAdjustModal, setShowAdjustModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [sortBy, setSortBy] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');
    const [showTable, setShowTable] = useState(false);
    
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
        { id: 6, name: 'Wireless Mouse', category: 'Accessories', quantity: 28, minQuantity: 15, price: 29.99, supplier: 'Tech Supplies Inc.', lastUpdated: '2024-01-12' },
        { id: 7, name: 'USB-C Cable', category: 'Accessories', quantity: 56, minQuantity: 30, price: 14.99, supplier: 'Cable Corp.', lastUpdated: '2024-01-14' },
    ];

    // Filter and sort inventory items
    const filteredItems = inventoryItems.filter(item => {
        const matchesSearch = searchTerm === '' || 
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.supplier.toLowerCase().includes(searchTerm.toLowerCase());
            
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
        
        // Show success notification or update state
    };

    const handleAddProductSubmit = (e) => {
        e.preventDefault();
        handleAddProduct();
    };
    
    // Get unique categories for the filter dropdown
    const categories = ['all', ...new Set(inventoryItems.map(item => item.category))];

    const addModalActions = (
        <>
            <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                Cancel
            </Button>
            <Button variant="primary" onClick={handleAddProduct}>
                Add Product
            </Button>
        </>
    );

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
                    className="flex items-center gap-2 group"
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Low Stock Alerts</h3>
                    <div className="space-y-4">
                        {lowStockItems.map((item) => (
                            <div key={item.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-gray-500">Current: {item.current} | Minimum: {item.minimum}</p>
                                </div>
                                <button className="px-3 py-1 bg-red-600 text-white rounded-lg text-sm">
                                    Reorder
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="p-4 border rounded-lg hover:bg-gray-50">
                            Stock Adjustment
                        </button>
                        <button className="p-4 border rounded-lg hover:bg-gray-50">
                            New Purchase Order
                        </button>
                        <button className="p-4 border rounded-lg hover:bg-gray-50">
                            Stock Transfer
                        </button>
                        <button className="p-4 border rounded-lg hover:bg-gray-50">
                            Generate Report
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Inventory Table */}
            <Button
                variant="secondary"
                className="w-full flex justify-center items-center gap-2"
                onClick={() => setShowTable(!showTable)}
            >
                {showTable ? "Hide Inventory Table" : "Show Inventory Table"}
            </Button>
            
            {showTable && (
                <Card className={`
                    transform transition-all duration-500
                    ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
                style={{ transitionDelay: '300ms' }}
                >
                    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2">
                            <MdSearch className="text-gray-400" />
                            <input 
                                type="text" 
                                placeholder="Search inventory..." 
                                className="w-full p-2 border rounded-lg"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        
                        <div className="flex items-center space-x-2">
                            <MdFilterList className="text-gray-400" />
                            <select 
                                className="w-full p-2 border rounded-lg"
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                            >
                                <option value="all">All Categories</option>
                                {categories.filter(cat => cat !== 'all').map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                            <select 
                                className="w-full p-2 border rounded-lg"
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
                    </div>
                    
                    <div className="overflow-x-auto">
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
                                    filteredItems.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{item.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
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
                                                    <button className="p-1.5 hover:bg-blue-100 rounded-full text-blue-600">
                                                        <MdEdit />
                                                    </button>
                                                    <button className="p-1.5 hover:bg-red-100 rounded-full text-red-600">
                                                        <MdDelete />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                                            No inventory items found matching your criteria
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </Card>
            )}
            
            {/* Add Product Modal */}
            <Modal
                isOpen={showAddModal}
                onClose={() => setShowAddModal(false)}
                title="Add New Product"
                actions={addModalActions}
            >
                <form onSubmit={handleAddProductSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                        <input
                            type="text"
                            name="name"
                            value={newProduct.name}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
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
                                className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
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
                                className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
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
                                className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
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
                                className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
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
                            className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default Inventory;
