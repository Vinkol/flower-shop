import React from 'react';
const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button>Купить</button>
    </div>
  );
};

export default ProductCard;
