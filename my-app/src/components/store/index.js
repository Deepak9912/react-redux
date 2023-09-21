import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";

const store = configureStore({
    reducer: {ui: uiSlice.reducer}
    // ui name can be anything
});

//export the store
export default store;

