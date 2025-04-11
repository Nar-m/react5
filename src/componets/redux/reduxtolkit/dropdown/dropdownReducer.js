import { createSlice } from "@reduxjs/toolkit";

export const DropdownSlice = createSlice({
    name: 'dropdown',
    initialState: {
        dropdown: false,
    },
    reducers: {
        Opendropdown: (state, action) => {
            if (!state.dropdown) {
                state.dropdown = true
            }
            else {
                state.dropdown = false
            }
        },
        Closedrowdown: (state) =>{
            state.dropdown = false
        }
    }
})
export const { Opendropdown, Closedrowdown } = DropdownSlice.actions
export default DropdownSlice.reducer