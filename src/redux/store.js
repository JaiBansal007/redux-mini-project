import { configureStore } from "@reduxjs/toolkit";
import { cartreducer } from "./reducer";
const store=configureStore({
    reducer:{
        cart:cartreducer.reducer,
    }
})
export default store;