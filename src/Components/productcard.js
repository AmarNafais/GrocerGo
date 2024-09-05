import React from 'react';

const ProductCard = ({ product }) => (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
        <img src={product.image} alt={product.name} width="100" />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>${product.price}</p>
    </div>
);

export default ProductCard;