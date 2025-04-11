import { createSlice } from "@reduxjs/toolkit";
import { productStore } from "../../../ProductStore";

export const Filterslice = createSlice({
    name: 'filter',
    initialState: {
        Iscategory: false,
        Isgender: false,
        Iscolor: false,
        category: [],
        gender: [],
        colors: [],
    },

    reducers: {
        Filterproduct: (state, action) => {
            let newcategory = productStore.filter(item => item.category === action.payload.category)
            state.Iscategory = true
            state.Isgender = false
            state.Iscolor = false
            state.category = newcategory
        },
        Filtergender: (state, action) => {
            let filtergender = productStore.filter(item => item.gender === action.payload.name)
            state.Isgender = true
            state.Iscategory = false
            state.Iscolor = false
            state.gender = filtergender
        },
        Filtercolor: (state, action) => {
            let filtercolor = productStore.filter(item => item.color === action.payload.color)
            state.Iscolor = true
            state.Iscategory = false
            state.Isgender = false
            state.colors = filtercolor
        }
    }
})

export const { Filterproduct, Filtercolor, Filtergender } = Filterslice.actions

export default Filterslice.reducer