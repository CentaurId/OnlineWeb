const { createStore } = require("redux");

//reducer
const cartReducer = (state = {
    cart :[{id:2,qty:100}]
},action) => {
    switch(action.type){
        case "ADD_TO_CART": return{
            ...state,
            cart: [...state.cart,action.payload],  
        }
        default :
        return state;
    }
}

//store
const store =createStore (cartReducer);
console.log("on create store : ", store.getState())

//subscribe
store.subscribe(()=>{
    console.log("Store Change : ", store.getState())
})


//dispatch
const action1 = {type:"ADD_TO_CART",payload:{id:4,qty:1000}}
store.dispatch(action1)

const action2 = {type:"ADD_TO_CART",payload:{id:5,qty:5000}}
store.dispatch(action2)