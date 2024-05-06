import React from 'react';
import Shimmer from './Shimmer';

const Cart = ({ cartItems, removeFromCart }) => {
  // Check if cartItems is null or undefined
  if (!cartItems) {
    return <Shimmer /> // Return null or any placeholder when cartItems is not available
  }

  // Calculate total price only if cartItems is not null or undefined
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button className = "btn btn-outline-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice}</p>
    </div>
  );
};

export default Cart;
