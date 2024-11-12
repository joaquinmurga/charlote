// src/components/ProductList.js
import React from 'react';
import useFetchProducts from '../hook/fetchProducto';

const ProductList = () => {
    const { products, loading } = useFetchProducts();

    if (loading) {
        return <p>Loading products...</p>;
    }

    return (
      <div className="container mt-5">
      <h2 className="text-center mb-4">Products</h2>
      <table className="table table-striped table-hover table-bordered">
          <thead className="table-dark">
              <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Description</th>
              </tr>
          </thead>
          <tbody>
              {products.map((product) => (
                  <tr key={product.id}>
                      <td>{product.codigo_fabrica}</td>
                      <td>{product.name}</td>
                      <td>{product.precio_venta}</td>
                      <td>{product.description}</td>
                  </tr>
              ))}
          </tbody>
      </table>
  </div>
    );
};

export default ProductList;
