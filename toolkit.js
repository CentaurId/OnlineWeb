import toolkit from "@reduxjs/toolkit"

const {configureStore, createAction, createReducer} = toolkit

const addToCart = createAction("ADD_TO_CART")
const cartReducer = createReducer([],(builder)=>{
    builder.addCase(addToCart, (state,action)=>{
        state.push(action.payload)
    })
})
const login = createAction("CREATE_SESSION")

const loginReducer = createReducer({status : false},(builder)=>{
    builder.addCase(login,(state,action)=>{
        state.status = true ; 
    })
    
})

const store = configureStore({
    reducer: {
        cart : cartReducer,
        login : loginReducer,
}})

store.subscribe(()=>{
    console.log("login status :", store.getState())
    console.log("Store Change : ", store.getState())
})
console.log("on create store : "  , store.getState())
store.dispatch(addToCart({id:4,qty:1000}))
store.dispatch(login())