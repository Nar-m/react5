import { createSlice } from '@reduxjs/toolkit'


export const Productslice = createSlice({
    name: 'all',
    initialState: {
        arr: []
    },

    reducers: {
        Allproduct: (state, action) => {
            state.arr = action.payload
        }
    }
})

export const { Allproduct } = Productslice.actions
export default Productslice.reducer