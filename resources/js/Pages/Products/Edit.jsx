import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const ProductForm = ({ product = {} }) => {
    const [name, setName] = useState(product.name || '');
    const [description, setDescription] = useState(product.description || '');
    const [price, setPrice] = useState(product.price || 0);
    const [stockQuantity, setStockQuantity] = useState(product.stock_quantity || 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, description, price, stock_quantity: stockQuantity };

        if (product.id) {
            Inertia.put(`/products/${product.id}`, data);
        } else {
            Inertia.post('/products', data);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <label>Price</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <div>
                <label>Stock Quantity</label>
                <input type="number" value={stockQuantity} onChange={(e) => setStockQuantity(e.target.value)} required />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save</button>
        </form>
    );
};

export default ProductForm;
