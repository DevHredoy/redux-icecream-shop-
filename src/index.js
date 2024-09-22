// import { legacy_createStore as createStore} from 'redux'

const redux = require("redux");
const createStore=redux.createStore
const CAKE_ORDERED = "CAKE_ORDERED";

const orderCake = () => {
  const ORDER_CAKE = "ORDER_CAKE";

  return {
    type: ORDER_CAKE,
    quantity: 1,
  };
};

const initialState = {
  numberOfCakes: 26,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return { ...state, numberOfCakes: state.numberOfCakes - 1 };

    default:
      return state;
  }
};


