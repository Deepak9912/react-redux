import {createSlice} from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {cartIsVisible: false},
    reducers: {
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
})

//export actions which are automatically created by each createSlice
export const uiActions = uiSlice.actions;

//export uiSlice
export default uiSlice;

