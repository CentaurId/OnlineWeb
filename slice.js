import toolkit from "@reduxjs/toolkit"

const {configureStore, createSlice} = toolkit

const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        addToCart(state,action){
            state.push(action.payload)
    },
},
})


const  store = configureStore({
    reducer : {
        cart : cartSlice.reducer
    }
})

console.log("on create store : "  , store.getState())
store.subscribe (()=>{
    console.log ("STORE_CHANGE", store.getState())
})

store.dispatch(cartSlice.actions.addToCart({id:23,qty:10}))
store.dispatch(cartSlice.actions.addToCart({id:24,qty:11}))