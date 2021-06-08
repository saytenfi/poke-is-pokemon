import * as actionTypes from './shopping-types';

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      title: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      title: itemID,
    },
  };
};

export const leadCurrentItem = (itemID) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: {
      title: itemID,
    },
  };
};
