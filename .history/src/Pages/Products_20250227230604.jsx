import { MdAdd, MdEdit, MdDelete, MdFilterList, MdSearch, MdCategory, MdInventory, MdShoppingCart } from 'react-icons/md';
import { useState, useEffect } from 'react';
import Card from '../Components/UI/Card';
import Modal from '../Components/UI/Modal';
import Button from '../Components/UI/Button';

function Products() {
    const [showModal, setShowModal] = useState(false);
    const [animateItems, setAnimateItems] = useState(false);
    const [products, setProducts] = useState([
        { id: 1, name: 'Product A', category: 'Electronics', price: 299.99, stock: 150 },
        { id: 2, name: 'Product B', category: 'Furniture', price: 599.99, stock: 75 },
        { id: 3, name: 'Product C', category: 'Clothing', price: 49.99, stock: 200 },
    ]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        category: '',
        price: '',
        stock: ''
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');
    
    // Animation trigger when component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateItems(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);
    
    const productMetrics = {
        topSelling: ['Product A', 'Product B', 'Product C'],
        lowStock: ['Product X', 'Product Y', 'Product Z'],
        categories: ['Electronics', 'Furniture', 'Clothing']
    };
    
    const filteredProducts = products.filter(product => {
        const matchesSearch = searchTerm === '' || 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            product.category.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newId = products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1;
        const productToAdd = {
            id: newId,
            ...newProduct,
            price: parseFloat(newProduct.price),
            stock: parseInt(newProduct.stock)
        };
        setProducts(prev => [...prev, productToAdd]);
        setShowModal(false);
        setNewProduct({
            name: '',
            category: '',
            price: '',
            stock: ''
        });
    };
    
    const renderProductForm = () => (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                <input
                    type="text"
                    name="name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-gray-500 transition-colors duration-300"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                    name="category"
                    value={newProduct.category}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-gray-500 transition-colors duration-300"
                >
                    <option value="">Select Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Clothing">Clothing</option>
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                <input
                    type="number"
                    name="price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    required
                    step="0.01"
                    min="0"
                    className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-gray-500 transition-colors duration-300"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                <input
                    type="number"
                    name="stock"
                    value={newProduct.stock}
                    onChange={handleInputChange}
                    required
                    min="0"
                    className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-gray-500 transition-colors duration-300"
                />
            </div>
        </form>
    );

    const modalActions = (
        <>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
                Add Product
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                <input
                    type="number"
                    name="price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    required
                    step="0.01"
                    min="0"
                    className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-gray-500 transition-colors duration-300"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                <input
                    type="number"
                    name="stock"
                    value={newProduct.stock}
                    onChange={handleInputChange}
                    required
                    min="0"
                    className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-gray-500 transition-colors duration-300"
                />
            </div>
        </form>
    );

    const modalActions = (
        <>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
                Add Product
            </Button>
        </>
    );
    
    return (
        <div className="space-y-8">
            {/* Header section - with enhanced Add Product button */}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800 transition-all duration-300 ease-in-out">
                    Products Management
                </h2>
                <Button 
                    variant="primary"
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2.5 px-5 py-2.5 group transition-all duration-300 ease-in-out hover:scale-105 shadow-sm font-medium"
                >
                    <MdAdd className="text-xl transition-transform duration-300 group-hover:rotate-90" />
                    Add Product
                </Button>
            </div>

            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title="Add New Product"
                actions={modalActions}
            >
                {renderProductForm()}
            </Modal>
            
            {/* Category stats cards */}
            <div className={`
                grid grid-cols-1 md:grid-cols-4 gap-4
                transition-all duration-500 ease-in-out
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `} 
            style={{ transitionDelay: '100ms' }}
            >
                {[{ name: 'All Products', count: products.length, icon: MdInventory, color: 'bg-blue-100 text-blue-600' },
                    { name: 'Electronics', count: products.filter(p => p.category === 'Electronics').length, icon: MdCategory, color: 'bg-green-100 text-green-600' },
                    { name: 'Furniture', count: products.filter(p => p.category === 'Furniture').length, icon: MdCategory, color: 'bg-purple-100 text-purple-600' },
                    { name: 'Clothing', count: products.filter(p => p.category === 'Clothing').length, icon: MdCategory, color: 'bg-yellow-100 text-yellow-600' }
                ].map((category, index) => (
                    <Card 
                        key={category.name} 
                        hover 
                        className="p-4 transform transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                        style={{ transitionDelay: `${index * 100}ms` }}
                        onClick={() => setCategoryFilter(category.name === 'All Products' ? 'all' : category.name)}
                    >
                        <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg ${category.color}`}>
                                <category.icon className="text-xl" />
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-700">{category.name}</h3>
                                <p className="text-2xl font-bold">{category.count}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
            
            {/* Product metrics section */}
            <div className={`
                grid grid-cols-1 md:grid-cols-3 gap-6
                transition-all duration-500 ease-in-out
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '200ms' }}
            >
                <Card hover className="p-6 transition-transform duration-300 hover:-translate-y-1">
                    <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <MdShoppingCart className="text-blue-600" />
                        Top Selling
                    </h3>
                    <ul className="space-y-3">
                        {productMetrics.topSelling.map((product, idx) => (
                            <li 
                                key={product} 
                                className="flex items-center justify-between hover:bg-gray-50 p-2 rounded transition-colors duration-200"
                                style={{ transitionDelay: `${idx * 100}ms` }}
                            >
=======
        })
    }
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800">Products Management</h2>
                <button 
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    <MdAdd className="text-xl" />
                    Add Product
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md">
                        <h3 className="text-xl font-semibold mb-4">Add New Product</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={newProduct.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-gray-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                <select
                                    name="category"
                                    value={newProduct.category}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-gray-500"
                                >
                                    <option value="">Select Category</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Furniture">Furniture</option>
                                    <option value="Clothing">Clothing</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={newProduct.price}
                                    onChange={handleInputChange}
                                    required
                                    step="0.01"
                                    min="0"
                                    className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-gray-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                                <input
                                    type="number"
                                    name="stock"
                                    value={newProduct.stock}
                                    onChange={handleInputChange}
                                    required
                                    min="0"
                                    className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-gray-500"
                                />
                            </div>
                            <div className="flex justify-end space-x-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                >
                                    Add Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {/* Rest of the existing code */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {['All Products', 'Electronics', 'Furniture', 'Clothing'].map((category) => (
                    <div key={category} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md cursor-pointer">
                        <h3 className="font-medium text-gray-700">{category}</h3>
                        <p className="text-2xl font-bold mt-2">{category === 'All Products' ? products.length : 
                            products.filter(p => p.category === category).length}</p>
                    </div>
                ))}
            </div>
            {/* Rest of the existing code */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="font-semibold text-gray-800 mb-4">Top Selling</h3>
                    <ul className="space-y-3">
                        {productMetrics.topSelling.map((product) => (
                            <li key={product} className="flex items-center justify-between hover:bg-gray-50 p-2 rounded transition-colors duration-200">
>>>>>>> 85cc2c8f87b6224711140033850a91c38901943b
                                <span className="text-gray-600">{product}</span>
                                <span className="text-gray-400 text-sm">234 sales</span>
                            </li>
                        ))}
                    </ul>
<<<<<<< HEAD
                </Card>
                
                <Card hover className="p-6 transition-transform duration-300 hover:-translate-y-1">
                    <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <MdInventory className="text-red-600" />
                        Low Stock Alert
                    </h3>
                    <ul className="space-y-3">
                        {productMetrics.lowStock.map((product, idx) => (
                            <li 
                                key={product} 
                                className="flex items-center justify-between hover:bg-gray-50 p-2 rounded transition-colors duration-200"
                                style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                                <span className="text-gray-600">{product}</span>
                                <span className="text-red-500 text-sm font-medium">5 left</span>
                            </li>
                        ))}
                    </ul>
                </Card>
                
                <Card hover className="p-6 transition-transform duration-300 hover:-translate-y-1">
                    <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <MdCategory className="text-green-600" />
                        Category Distribution
                    </h3>
                    <ul className="space-y-3">
                        {productMetrics.categories.map((category, idx) => (
                            <li 
                                key={category} 
                                className="hover:bg-gray-50 p-2 rounded transition-colors duration-200"
                                style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-gray-600">{category}</span>
                                    <span className="text-gray-400 text-sm">32%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                                    <div 
                                        className={`h-2 rounded-full ${
                                            category === 'Electronics' ? 'bg-blue-500' :
                                            category === 'Furniture' ? 'bg-purple-500' : 'bg-yellow-500'
                                        }`}
                                        style={{ width: '32%' }}
                                    ></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Card>
            </div>
            
            {/* Products table */}
            <Card className={`
                transition-all duration-500 ease-in-out
                ${animateItems ? 'opacity-100' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '300ms' }}
            >
                {/* Search and filter section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                    <div className="flex items-center space-x-2">
                        <MdSearch className="text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Search products..." 
                            className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-gray-500 transition-colors duration-300"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <MdFilterList className="text-gray-400" />
                        <select 
                            className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-gray-500 transition-colors duration-300"
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                        >
                            <option value="all">All Categories</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Clothing">Clothing</option>
                        </select>
                    </div>
                </div>
                
                {/* Products table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stock</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product, idx) => (
                                    <tr 
                                        key={product.id}
                                        className="hover:bg-gray-50 transition-colors duration-200"
                                        style={{ 
                                            animationDelay: `${idx * 50}ms`,
                                            animationFillMode: 'both'
                                        }}
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">{product.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap font-medium">{product.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 rounded-full text-xs ${
                                                product.category === 'Electronics' ? 'bg-blue-100 text-blue-800' :
                                                product.category === 'Furniture' ? 'bg-purple-100 text-purple-800' :
                                                'bg-yellow-100 text-yellow-800'
                                            }`}>
                                                {product.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">${product.price.toFixed(2)}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`${product.stock < 50 ? 'text-red-600' : 'text-green-600'}`}>
                                                {product.stock}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex space-x-2">
                                                <button className="p-1 hover:bg-blue-100 rounded-full text-blue-600 transition-colors duration-200">
                                                    <MdEdit />
                                                </button>
                                                <button className="p-1 hover:bg-red-100 rounded-full text-red-600 transition-colors duration-200">
                                                    <MdDelete />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                                        No products found matching your criteria
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {filteredProducts.length > 0 && (
                    <div className="p-4 border-t flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                            Showing <span className="font-medium">{filteredProducts.length}</span> of <span className="font-medium">{products.length}</span> products
                        </div>
                        <div className="flex space-x-2">
                            <Button variant="secondary" className="px-3 py-1 text-sm transition-transform duration-200 active:scale-95">Previous</Button>
                            <Button variant="secondary" className="px-3 py-1 text-sm transition-transform duration-200 active:scale-95">Next</Button>
                        </div>
                    </div>
                )}
            </Card>
        </div>
    );
}

export default Products;
=======
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="font-semibold text-gray-800 mb-4">Low Stock Alert</h3>
                    <ul className="space-y-3">
                        {productMetrics.lowStock.map((product) => (
                            <li key={product} className="flex items-center justify-between hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                                <span className="text-gray-600">{product}</span>
                                <span className="text-gray-400 text-sm">5 left</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="font-semibold text-gray-800 mb-4">Category Distribution</h3>
                    <ul className="space-y-3">
                        {productMetrics.categories.map((category) => (
                            <li key={category} className="flex items-center justify-between hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                                <span className="text-gray-600">{category}</span>
                                <span className="text-gray-400 text-sm">32%</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm">
                <div className="grid grid-cols-2 gap-4 p-4">
                    <input 
                        type="text" 
                        placeholder="Search products..." 
                        className="p-2 border rounded-lg"
                    />
                    <select className="p-2 border rounded-lg">
                        <option>Filter by Category</option>
                        <option>Electronics</option>
                        <option>Furniture</option>
                        <option>Clothing</option>
                    </select>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stock</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{product.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{product.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap">${product.price}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{product.stock}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex space-x-2">
                                        <button className="p-1 hover:bg-blue-100 rounded-full text-blue-600">
                                            <MdEdit />
                                        </button>
                                        <button className="p-1 hover:bg-red-100 rounded-full text-red-600">
                                            <MdDelete />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Rest of the existing code */}
        </div>
    )
}

export default Products
>>>>>>> 85cc2c8f87b6224711140033850a91c38901943b
