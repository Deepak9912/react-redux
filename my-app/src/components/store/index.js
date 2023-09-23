import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
    reducer: {ui: uiSlice.reducer, cart: cartSlice.reducer}
    // ui name can be anything
});

//export the store
export default store;

