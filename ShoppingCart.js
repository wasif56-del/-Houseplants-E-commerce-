import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
  removeFromCart, 
  incrementQuantity, 
  decrementQuantity 
} from '../redux/actions';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleIncrement = (plantId) => {
    dispatch(incrementQuantity(plantId));
  };

  const handleDecrement = (plantId) => {
    dispatch(decrementQuantity(plantId));
  };

  const handleRemove = (plantId) => {
    dispatch(removeFromCart(plantId));
  };

  const handleCheckout = () => {
    alert('Coming Soon! Our checkout system is under development.');
  };

  if (cartItems.length === 0) {
    return (
      <div className="shopping-cart">
        <h1 className="cart-title">Your Shopping Cart</h1>
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/products" className="get-started-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <h1 className="cart-title">Your Shopping Cart</h1>
      
      <div className="cart-summary">
        <div className="cart-totals">
          <div>Total Items: <strong>{totalItems}</strong></div>
          <div>Total Cost: <strong>${totalCost.toFixed(2)}</strong></div>
        </div>
        
        <div className="cart-actions">
          <Link to="/products" className="cart-btn continue-shopping">
            Continue Shopping
          </Link>
          <button className="cart-btn checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
      
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-price">${item.price.toFixed(2)} each</p>
              <div className="cart-item-controls">
                <button 
                  className="quantity-btn" 
                  onClick={() => handleDecrement(item.id)}
                >
                  -
                </button>
                <span className="quantity-display">{item.quantity}</span>
                <button 
                  className="quantity-btn" 
                  onClick={() => handleIncrement(item.id)}
                >
                  +
                </button>
                <button 
                  className="delete-btn" 
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;