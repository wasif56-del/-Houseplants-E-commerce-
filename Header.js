import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector(state => state.cart);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="nav-link">GreenLeaf Plants</Link>
      </div>
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Plants</Link>
        <Link to="/cart" className="nav-link">
          <div className="cart-icon">
            <span>🛒</span>
            <span>({totalItems})</span>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;