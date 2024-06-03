
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';

const initialState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
        totalAmount: state.totalAmount + action.payload.price
      };
    case REMOVE_FROM_CART:
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      const itemToRemove = state.items.find(item => item.id === action.payload);
      return {
        ...state,
        items: filteredItems,
        totalAmount: state.totalAmount - (itemToRemove ? itemToRemove.price : 0)
      };
    default:
      return state;
  }
};

export default cartReducer;
