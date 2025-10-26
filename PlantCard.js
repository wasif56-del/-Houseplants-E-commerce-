import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions';

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
    setIsAdded(true);
    
    // Reset the button after a short delay for better UX
    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
  };

  // Check if plant is already in cart
  const isInCart = cartItems.some(item => item.id === plant.id);

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} className="plant-image" />
      <div className="plant-info">
        <h3 className="plant-name">{plant.name}</h3>
        <p className="plant-price">${plant.price.toFixed(2)}</p>
        <button 
          className="add-to-cart-btn"
          onClick={handleAddToCart}
          disabled={isAdded || isInCart}
        >
          {isAdded ? 'Added!' : isInCart ? 'In Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default PlantCard;