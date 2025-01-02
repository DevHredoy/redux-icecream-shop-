// below syntax we are using to use the library from redux
// we are going to use this to create the redux store

const redux = require("redux");

const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_STOCKED = "CAKE_STOCKED";

// action creator which is returning an action
//action is an object with a type property
//an action creator is a function which returns an action
function orderCake() {
  return { type: CAKE_ORDERED, quantity: 1 };
}

//RESTOCKING CAKE:
function stockCake() {
  return { type: CAKE_STOCKED, quantity: 1 };
}

// below is the state , an object

const initialState = {
  numOfCakes: 10,
  anotherProperty: 0,
};

// below is the reducer a function which acts like a shopkeeper in the cake shop
// this function take the initial state and take the action, based on the action it performs the necessary initiative.

// you are teaching the reducer the what he can do in a given situation. like you are training the person(reducer). reducer smoothly reducing the amount here
const reducer = (state = initialState, action) => {
  switch (action.type) {
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
        numOfCakes: state.numOfCakes + 1,
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

// 3rd responsibility
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(stockCake());
// now what is happening in the above:When I call store.dispatch(orderCake()),
// the orderCake() function returns the type of
// the action (CAKE_ORDERED). This action is then passed
// to the reducer through the redux store, which updates the store by reducing the
// amount of cakes (numOfCakes) based on the logic defined in the reducer.

//5th responsibity

unsubscribe();

store.dispatch(orderCake());
