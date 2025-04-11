import { createSlice } from "@reduxjs/toolkit";
import { allproduct } from "../../../allproductitem";

export const SidbarSlice = createSlice({
    name: 'filters',
    initialState: {
        side: false,
        items: [],
        gender: [],
        price: [],
        Isgender: false,
    },
    reducers: {
        Pricefilter: (state, action) => {
            state.Isgender = false
            const filterprice = allproduct.filter(item => {
                return item.price >= parseFloat(action.payload, 10)
            }).sort((a, b) => (a.price > b.price ? a.price - b.price : b.price - a.price))
            state.price = filterprice
        },
        Handlchange: (state, action) => {
            state.Isgender = false
            let newfilter = allproduct.filter(item => item.category === action.payload.value
                || item.color === action.payload.value)
            if (action.payload.checked) {
                state.items = [...newfilter, ...state.items]
            }
            else {
                state.items = state.items.filter(item => item.category !== action.payload.value && item.color !== action.payload.value)
            }
        },
        Filtergender: (state, action) => {
            state.Isgender = true
            let filtergender = allproduct.filter(item => (action.payload === 'all' ? state.gender.concat(allproduct) : item.gender === action.payload))
            state.gender = filtergender
        },
        Sideopen: (state, action) => {
            state.side = true
        },
        SideClose: (state, action) => {
            state.side = false
        },
    }
})
export const { Handlchange, Sideopen, Checkitems, SideClose, Filtergender, Pricefilter } = SidbarSlice.actions
export default SidbarSlice.reducer