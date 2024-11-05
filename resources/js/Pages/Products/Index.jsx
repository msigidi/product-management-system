import React from 'react';
import { Inertia } from '@inertiajs/inertia';

const Index = ({ products }) => {
    const deleteProduct = (id) => {
        if (confirm('Are you sure you want to delete this product?')) {
            Inertia.delete(`/products/${id}`);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Product List</h2>
            <a href="/products/create" className="bg-blue-500 text-white p-2 rounded">Add Product</a>
            <table className="min-w-full mt-4">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.stock_quantity}</td>
                            <td>
                                <a href={`/products/${product.id}/edit`} className="text-blue-600">Edit</a>
                                <button onClick={() => deleteProduct(product.id)} className="text-red-600 ml-4">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Index;
