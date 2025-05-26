import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

class ShoppingCart {
  constructor() {
    this.items = []; // ❌ Deficient encapsulation: exposed directly
  }

  addItem(item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }
}

function App() {
  const [cart] = useState(new ShoppingCart());
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Add item via method (✅ intended usage)
    cart.addItem({ name: 'Laptop', price: 1000 });

    // Update UI
    setItems([...cart.getItems()]);

    // Direct manipulation of internal array (❌ bad practice)
    cart.items.push({ name: 'Phone', price: 500 });

    // Update UI again
    setItems([...cart.getItems()]);
  }, [cart]);

  return (
    <div style={{ padding: '2em', fontFamily: 'Arial, sans-serif' }}>
      <h1>Shopping Cart (Deficient Encapsulation)</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p><strong>Note:</strong> Internal cart.items was accessed and modified directly, which breaks encapsulation!</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
