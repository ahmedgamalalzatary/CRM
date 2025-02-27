import { useState, useEffect } from 'react';
import { MdPerson, MdPersonAdd, MdFilterList, MdSearch, MdEdit, MdDelete, MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import Card from '../Components/UI/Card';
import Button from '../Components/UI/Button';
import Modal from '../Components/UI/Modal';

function Clients() {
    const [animateItems, setAnimateItems] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [clientFilter, setClientFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedClient, setSelectedClient] = useState(null);
    const [newClientData, setNewClientData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        type: 'regular'
    });

    // Mock client data
    const [clients, setClients] = useState([
        { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '555-1234', company: 'ABC Corp', type: 'premium', joinDate: '2023-05-15', lastOrder: '2024-01-10', totalSpent: 12450 },
        { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', phone: '555-5678', company: 'XYZ Inc', type: 'regular', joinDate: '2023-08-22', lastOrder: '2023-12-05', totalSpent: 4320 },
        { id: 3, firstName: 'Robert', lastName: 'Johnson', email: 'robert@example.com', phone: '555-9012', company: 'Tech Solutions', type: 'premium', joinDate: '2022-11-07', lastOrder: '2024-01-15', totalSpent: 18750 },
        { id: 4, firstName: 'Emily', lastName: 'Williams', email: 'emily@example.com', phone: '555-3456', company: 'Digital Media', type: 'regular', joinDate: '2023-10-18', lastOrder: '2023-12-28', totalSpent: 2890 },