import React from 'react';

const AddToCartButton = ({ itemId, itemName, itemPrice, addToCart, removeFromCart, isInCart }) => {
  const handleClick = () => {
    if (isInCart) {
      removeFromCart(itemId);
    } else {
      addToCart(itemId, itemName, itemPrice);
    }
  };

  return (
    <button type="button" className="btn btn-outline-success"onClick={handleClick}>
      {isInCart ? 'Remove from Cart' : 'Add to Cart'}
    </button>
  );
};

export default AddToCartButton;
