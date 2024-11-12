// src/components/AddProduct.js
import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [product, setProduct] = useState({
        id_categoria: '',
        id_tipo: 'codigo',
        name: '',
        description: '',
        img_url: '',
        precio_costo: '',
        precio_venta: '',
        precio_kg: '',
        stock_cantidad: 0,
        stock_kg: 0,
        codigo_fabrica: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: name === "precio_costo" || name === "precio_venta" || name === "precio_kg" || name === "stock_cantidad" || name === "stock_kg"
                ? parseFloat(value) || 0
                : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/producto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });
    
            if (response.ok) {
                alert("Product added successfully!");
                setProduct({
                    id_categoria: '',
                    id_tipo: 'codigo',
                    name: '',
                    description: '',
                    img_url: '',
                    precio_costo: '',
                    precio_venta: '',
                    precio_kg: '',
                    stock_cantidad: 0,
                    stock_kg: 0,
                    codigo_fabrica: ''
                });
            } else {
                alert("Failed to add product. Please check your input.");
            }
        } catch (error) {
            console.error("Error adding product:", error);
            alert("Failed to add product. Please check your input.");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Category ID</label>
                    <input
                        type="number"
                        className="form-control"
                        name="id_categoria"
                        value={product.id_categoria}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Type</label>
                    <select
                        className="form-select"
                        name="id_tipo"
                        value={product.id_tipo}
                        onChange={handleChange}
                        required
                    >
                        <option value="codigo">Codigo</option>
                        <option value="unitario">Unitario</option>
                        <option value="granel">Granel</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label">Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        name="img_url"
                        value={product.img_url}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Cost Price</label>
                    <input
                        type="number"
                        className="form-control"
                        name="precio_costo"
                        value={product.precio_costo}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Sale Price</label>
                    <input
                        type="number"
                        className="form-control"
                        name="precio_venta"
                        value={product.precio_venta}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Price per Kg</label>
                    <input
                        type="number"
                        className="form-control"
                        name="precio_kg"
                        value={product.precio_kg}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Stock Quantity</label>
                    <input
                        type="number"
                        className="form-control"
                        name="stock_cantidad"
                        value={product.stock_cantidad}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Stock Kg</label>
                    <input
                        type="number"
                        className="form-control"
                        name="stock_kg"
                        value={product.stock_kg}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Factory Code</label>
                    <input
                        type="text"
                        className="form-control"
                        name="codigo_fabrica"
                        value={product.codigo_fabrica}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
