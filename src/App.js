
import React from 'react';
import Product from './components/product';
import Cart from './components/cart';
import './App.css';

const products = [
  { id: 1, name: 'T-shirt', price: 30, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Sleeve', price: 20, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Saree', price: 50, image: 'https://via.placeholder.com/150' },
];

const App = () => {
  return (
    <div className="app">
      <h1>Shopping Cart</h1>
      <div className="products">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Cart />
    </div>
  );
};

export default App;
