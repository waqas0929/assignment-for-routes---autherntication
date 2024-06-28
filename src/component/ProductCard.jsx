import React from "react";

const ProductCard = ({ product }) => {
  return (
    <li
      key={product.id}
      className="product-card item-center mx-4 flex flex-col rounded-lg p-4 shadow-md"
    >
      <img
        className="bg-rm flex aspect-square w-1/3 flex-1 rounded-full object-cover"
        src={product.image}
        alt={product.productName}
      />
      <h2 className="mt-2 font-mono text-lg">{product.productName}</h2>
      <p className="text-sm">{product.description}</p>
      <p className="mt-2 font-mono text-base">
        Price: ${product.price.toFixed(2)}
      </p>
      <p className="text-sm">Category: {product.category}</p>
    </li>
  );
};

export default ProductCard;
