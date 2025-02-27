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
        </div>
    )
}

export default Inventory
