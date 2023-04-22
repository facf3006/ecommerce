import React, { useState, useEffect } from "react";
import Product from "./Product";

export default function ShoppingCart () {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:5000/products");
      const prods = await response.json();
      setProducts(prods);
    }
    fetchProducts();
  }, []);

  const handleIncrement = (product, maxValue) => {
    if (product.quantity < maxValue) {
      setProducts((prevProducts) => {
        const newProducts = [...prevProducts];
        const index = newProducts.indexOf(product);
        newProducts[index].quantity++;
        return newProducts;
      });
    }
  };

  const handleDecrement = (product, minValue) => {
    if (product.quantity > minValue) {
      setProducts((prevProducts) => {
        const newProducts = [...prevProducts];
        const index = newProducts.indexOf(product);
        newProducts[index].quantity--;
        return newProducts;
      });
    }
  };

  const handleDelete = (product) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts((prevProducts) =>
        prevProducts.filter((prod) => prod.id !== product.id)
      );
    }
  };

  return (
    <div>
      <h4>Shopping Cart</h4>
      <div className="row">
        {products.map((prod) => (
          <Product
            key={prod.id}
            product={prod}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
          >
            <button className="btn btn-primary">Buy Now</button>
          </Product>
        ))}
      </div>
    </div>
  );
}
