// src/hooks/useFetchProducts.js
import { useEffect, useState } from 'react';

const useFetchProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/productos');
            const data = await response.json();
            setProducts(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
        const interval = setInterval(fetchProducts, 5000); // Actualiza cada 5 segundos
        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, []);

    return { products, loading };
};

export default useFetchProducts;
