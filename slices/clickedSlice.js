import { createSlice } from "@reduxjs/toolkit";

export const clickedSlice = createSlice( {
    name: 'clickedSlice',
    initialState: {
        value: false
    },
    reducers: {
    
        onclick: (state) => !state.value
    }
})


export const {onclick} = clickedSlice.actions;
export const Clicked = (state) => state.user.user;

export default clickedSlice.reducer;