// Action Types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';

// Action Creators
export const addToCart = (plant) => ({
  type: ADD_TO_CART,
  payload: plant
});

export const removeFromCart = (plantId) => ({
  type: REMOVE_FROM_CART,
  payload: plantId
});

export const incrementQuantity = (plantId) => ({
  type: INCREMENT_QUANTITY,
  payload: plantId
});

export const decrementQuantity = (plantId) => ({
  type: DECREMENT_QUANTITY,
  payload: plantId
});