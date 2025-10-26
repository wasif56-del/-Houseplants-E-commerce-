import { 
  ADD_TO_CART, 
  REMOVE_FROM_CART, 
  INCREMENT_QUANTITY, 
  DECREMENT_QUANTITY 
} from './actions';

// Initial state
const initialState = {
  cart: [],
  plants: [
    {
      id: 1,
      name: "Snake Plant",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1593482892290-6c43d2fb9bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      category: "Low Light"
    },
    {
      id: 2,
      name: "Fiddle Leaf Fig",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1598880940086-5fb1c4c57e6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      category: "Bright Light"
    },
    {
      id: 3,
      name: "Monstera Deliciosa",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1621359371385-4a4e4d69385e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
      category: "Medium Light"
    },
    {
      id: 4,
      name: "ZZ Plant",
      price: 22.99,
      image: "https://images.unsplash.com/photo-159888133616-13ac00324b54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      category: "Low Light"
    },
    {
      id: 5,
      name: "Pothos",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1598881309393-ba691b9f9c0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      category: "Medium Light"
    },
    {
      id: 6,
      name: "Rubber Plant",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1598880791506-cf076c49762a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      category: "Bright Light"
    }
  ]
};

// Helper function to group plants by category
export const groupPlantsByCategory = (plants) => {
  const grouped = {};
  plants.forEach(plant => {
    if (!grouped[plant.category]) {
      grouped[plant.category] = [];
    }
    grouped[plant.category].push(plant);
  });
  return grouped;
};

// Root reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        };
      }
      
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
      
    case INCREMENT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };
      
    case DECREMENT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload
            ? { 
                ...item, 
                quantity: item.quantity > 1 ? item.quantity - 1 : 1 
              }
            : item
        )
      };
      
    default:
      return state;
  }
};

export default rootReducer;