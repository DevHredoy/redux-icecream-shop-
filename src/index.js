// below syntax we are using to use the library from redux
// we are going to use this to create the redux store

const redux = require("redux");
const createStore = redux.createStore;
const combineReducers=ReduxLogger.combineReducers

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

// below are the states

const CakeState={
  numOfCakes:10,
}

 
const IceCreamState={
  numOfIceCreams:33,
}

// below is the reducer a function which acts like a shopkeeper in the cake shop
// this function take the initial state and take the action, based on the action it performs the necessary initiative.

// you are teaching the reducer the what he can do in a given situation. like you are training the person(reducer). reducer smoothly reducing the amount here
 const cakeReducer=(CakeState,actio)=>{

  switch(actio.type){

case CAKE_ORDERED:
  return {
    
        numOfCakes: CakeState.numOfCakes + actio.payload,

  };

  case CAKE_STOCKED:
    return{
      numOfIceCreams:IceCreamState.numOfIceCreams+actio.payload,

    }}
 }

 const iceCreamReducer=(IceCreamState,actio)=>{

  switch(actio.type){

case ICECREAM_ORDERED:
  return {
    
    numOfIceCreams: IceCreamState.numOfIceCreams - actio.payload,
  };

  case ICECREAM_STOCKED:
    return{
      
        
          
          numOfIceCreams: IceCreamState.numOfIceCreams + actio.payload,
      

    }}
 }

  
const store = createStore(reducer);

console.log("initial state:", store.getState());



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

actions.stockIceCream(5);
unsubscribe();
