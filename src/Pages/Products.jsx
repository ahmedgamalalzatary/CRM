import { MdAdd, MdEdit, MdDelete } from 'react-icons/md'

function Products() {
    const products = [
        { id: 1, name: 'Product A', category: 'Electronics', price: 299.99, stock: 150 },
        { id: 2, name: 'Product B', category: 'Furniture', price: 599.99, stock: 75 },
        { id: 3, name: 'Product C', category: 'Clothing', price: 49.99, stock: 200 },
    ]

    const productMetrics = {
        topSelling: ['Product A', 'Product B', 'Product C'],
        lowStock: ['Product X', 'Product Y', 'Product Z'],
        categories: ['Electronics', 'Furniture', 'Clothing']
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800">Products Management</h2>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    <MdAdd className="text-xl" />
                    Add Product
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {['All Products', 'Electronics', 'Furniture', 'Clothing'].map((category) => (
                    <div key={category} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md cursor-pointer">
                        <h3 className="font-medium text-gray-700">{category}</h3>
                        <p className="text-2xl font-bold mt-2">{category === 'All Products' ? products.length : 
                            products.filter(p => p.category === category).length}</p>
                    </div>
                ))}
            </div>

            {/* New Quick Actions Section */}
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

            {/* New Product Analytics Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Stock Summary</h3>
                    <div className="space-y-4">
                        {[
                            { label: 'Low Stock Items', value: '12', change: '-2' },
                            { label: 'Out of Stock', value: '3', change: '+1' },
                            { label: 'Overstocked', value: '5', change: '0' }
                        ].map(item => (
                            <div key={item.label} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                                <span className="text-gray-600">{item.label}</span>
                                <div className="flex items-center space-x-2">
                                    <span className="font-semibold text-gray-900">{item.value}</span>
                                    <span className="text-sm text-gray-500">({item.change})</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Stock Update</h3>
                    <div className="space-y-4">
                        {products.slice(0, 3).map(product => (
                            <div key={product.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                                <span className="text-gray-700">{product.name}</span>
                                <div className="flex items-center space-x-2">
                                    <button className="p-1 hover:bg-gray-200 rounded">-</button>
                                    <span className="w-12 text-center">{product.stock}</span>
                                    <button className="p-1 hover:bg-gray-200 rounded">+</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
