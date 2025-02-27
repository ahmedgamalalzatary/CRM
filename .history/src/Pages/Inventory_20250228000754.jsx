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
    
    // Get unique categories for the filter dropdown
    const categories = ['all', ...new Set(inventoryItems.map(item => item.category))];

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