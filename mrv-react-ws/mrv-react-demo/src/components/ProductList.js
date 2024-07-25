import React from "react";


const ProductList = ({ products, handleAdd, handleUpdate, handleDelete }) => {
    const handleAddClick = () => {
        const newProduct = {
            id: products.length + 1,
            title: 'New Product',
            category: 'category',
            price: 20
        };
        handleAdd(newProduct);
    };

    const handleUpdateClick = (product) => {
        const updatedProduct = { ...product, title: `${product.title} (Updated)` };
        handleUpdate(updatedProduct);
    };

    const handleDeleteClick = (productId) => {
        handleDelete(productId);
    };

    return (
        <div className='card-container'>
            {products.map(product => (
                <div key={product.id} className='product-card'>
                    <h2>{product.title}</h2>
                    <p>ID: {product.id}</p>
                    <p>Category: {product.category}</p>
                    <p>Price: ₹{product.price}</p>
                    <button onClick={() => handleUpdateClick(product)}>Update</button>
                    <button onClick={() => handleDeleteClick(product.id)}>Delete</button>
                </div>
            ))}
            <button className='add-button' onClick={handleAddClick}>Add New Product</button>
        </div>
    );
};

export default ProductList;