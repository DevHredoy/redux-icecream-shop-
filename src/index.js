// below syntax we are using to use the library from redux
// we are going to use this to create the redux store

const redux = require("redux");
const createStore = redux.createStore;

// helper function
const bindActionCreators = redux.bindActionCreators;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_STOCKED = "CAKE_STOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_STOCKED = "ICECREAM_STOCKED";

// action creator which is returning an action
//action is an object with a type property
//an action creator is a function which returns an action
function orderCake() {
  return { type: CAKE_ORDERED, payload: 1 };
}

//RESTOCKING CAKE:
function stockCake(qty = 1) {
  return { type: CAKE_STOCKED, payload: qty };
}

//         ## icecream section

function orderIceCream(qty = 1) {
  return { type: ICECREAM_ORDERED, payload: qty };
}

function stockIceCream(qty = 1) {
  return { type: ICECREAM_STOCKED, payload: qty };
}

// below is the state , an object

const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 10,
};

// below is the reducer a function which acts like a shopkeeper in the cake shop
// this function take the initial state and take the action, based on the action it performs the necessary initiative.

// you are teaching the reducer the what he can do in a given situation. like you are training the person(reducer). reducer smoothly reducing the amount here
const reducer = (state = initialState, actio) => {
  switch (actio.type) {
    case CAKE_ORDERED:
      return {
        //below we are copying hte whole state object so that we can only change the desired state frm the object as there might be multiple states
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    case CAKE_STOCKED:
      return {
        //below we are copying hte whole state object so that we can only change the desired state frm the object as there might be multiple states
        ...state,
        numOfCakes: state.numOfCakes + actio.payload,
      };

    case ICECREAM_ORDERED:
      return {
        //below we are copying hte whole state object so that we can only change the desired state frm the object as there might be multiple states
        ...state,
        numOfIceCreams: state.numOfIceCreams - actio.payload,
      };

    case ICECREAM_STOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + actio.payload,
      };

    default:
      return state;
  }

  // redux store is somthing which brings actions and reducers together
};

// below is the first responsibility
const store = createStore(reducer);

//below is second responsibility, exposing the getState method to show the state
console.log("initial state:", store.getState());

// 4th responsibility

const unsubscribe = store.subscribe(() =>
  console.log("updated state:", store.getState())
);

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

actions.stockIceCream(1);
unsubscribe();
