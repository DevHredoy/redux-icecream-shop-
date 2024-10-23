const CAKE_ORDERED="CAKE_ORDERED"


// action creator which is returning and action
//action is an object with a type property
//an action creator is a function which returns an action
function orderCake(){
return{type:CAKE_ORDERED,
  quantity:1,}

}


// below is the state , an object

const initialState={
  numOfCakes:10,
  anotherProperty:0,
}

//below is the reducer a function which acts like a shopkeeper in the cake shop
//this function take the initial state and take the action, based on the action it performs the necessary initiative.

const reducer=(state=initialState,action)=>{

switch(action.type){

case CAKE_ORDERED: 
    return{
      //below we are copying hte whole state object so that we can only change the desired state frm the object as there might be multiple states
      ...state,
      numOfCakes:state.numOfCakes-1

    }
    default:
      return state

}

reducer(initialState,orderCake);



}

