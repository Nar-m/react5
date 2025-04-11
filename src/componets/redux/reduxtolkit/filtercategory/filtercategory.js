import { createSlice } from "@reduxjs/toolkit";
import { allproduct } from "../../../allproductitem";

export const CategorySlice = createSlice({
    name: 'category',
    initialState: {
        category: JSON.parse(localStorage.getItem('category')) || []
    },
    reducers: {
        Filteritems: (state, action) => {
            try {
                const filters = allproduct.filter(item => item.category === action.payload)
                state.category = filters
                localStorage.setItem('category', JSON.stringify(state.category))
            }
            catch (err) {
                return err
            }
        }
    }
})
export const { Filteritems } = CategorySlice.actions
export default CategorySlice.reducer