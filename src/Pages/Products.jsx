import { MdAdd, MdEdit, MdDelete } from 'react-icons/md'
import { useState } from 'react'

function Products() {
    const [showModal, setShowModal] = useState(false)
    const [products, setProducts] = useState([
        { id: 1, name: 'Product A', category: 'Electronics', price: 299.99, stock: 150 },
        { id: 2, name: 'Product B', category: 'Furniture', price: 599.99, stock: 75 },
        { id: 3, name: 'Product C', category: 'Clothing', price: 49.99, stock: 200 },
    ])
    const [newProduct, setNewProduct] = useState({
        name: '',
        category: '',
        price: '',
        stock: ''
    })
    const productMetrics = {
        topSelling: ['Product A', 'Product B', 'Product C'],
        lowStock: ['Product X', 'Product Y', 'Product Z'],
        categories: ['Electronics', 'Furniture', 'Clothing']
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewProduct(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newId = products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1
        const productToAdd = {
            id: newId,
            ...newProduct,
            price: parseFloat(newProduct.price),
            stock: parseInt(newProduct.stock)
        }
        setProducts(prev => [...prev, productToAdd])
        setShowModal(false)
        setNewProduct({
            name: '',
            category: '',
            price: '',
            stock: ''
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
                                <span className="text-gray-600">{product}</span>
                                <span className="text-gray-400 text-sm">234 sales</span>
                            </li>
                        ))}
                    </ul>
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
