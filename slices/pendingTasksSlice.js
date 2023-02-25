import { createSlice } from "@reduxjs/toolkit";

export const pendingTasksSlice = createSlice( {
    name: 'pendingTasks',
    initialState: {
        value: null
    },
    reducers: {
        count: (state, action) => {
            state.value = action.payload;
        },

        reset: (state) => {
            state.value = null;
        }
    }
})


export const {count, reset} = pendingTasksSlice.actions;
export const pendingtasks = (state) => state.pendingtasks.value;

export default pendingTasksSlice.reducer;