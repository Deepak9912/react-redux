import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: cart,
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers: {
        //action arg carries extra info once dispatched
        //payload prop contain any extra data you add to action
        addItemTocart(state, action){
            const item = action.payload;
            const totalQuantity = 
        },
        removeItemFromCart(){}
    }
});

