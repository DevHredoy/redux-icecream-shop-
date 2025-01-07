const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

//middlewire section

const applyMiddleware = redux.applyMiddleware;

//logger section
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_STOCKED = "CAKE_STOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_STOCKED = "ICECREAM_STOCKED";

function orderCake() {
  return { type: CAKE_ORDERED, payload: 1 };
}

function stockCake(qty = 1) {
  return { type: CAKE_STOCKED, payload: qty };
}

function orderIceCream(qty = 1) {
  return { type: ICECREAM_ORDERED, payload: qty };
}
//h
function stockIceCream(qty = 1) {
  return { type: ICECREAM_STOCKED, payload: qty };
}

const CakeState = { numOfCakes: 10 };
const IceCreamState = { numOfIceCreams: 33 };

const cakeReducer = (state = CakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return { ...state, numOfCakes: state.numOfCakes - action.payload };
    case CAKE_STOCKED:
      return { ...state, numOfCakes: state.numOfCakes + action.payload };
    default:
      return state;
  }
};

const iceCreamReducer = (state = IceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };
    case ICECREAM_STOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

const unsubscribe = store.subscribe(() => {});

const actions = bindActionCreators(
  { orderCake, stockCake, orderIceCream, stockIceCream },
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.stockCake(3);
actions.orderIceCream(1);
actions.orderIceCream(1);
actions.stockIceCream(5);

unsubscribe();
