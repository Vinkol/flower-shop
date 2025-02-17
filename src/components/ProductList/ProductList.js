import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const products = [
  { id: 1, name: "Весенний", price: "1290₽", img: "/img/spring.png" },
  { id: 2, name: "Фиолетовый", price: "1690₽", img: "/img/purple.png" },
];

const ProductList = () => {
  return (
    <div className="productList">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
