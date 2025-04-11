import { createSlice } from "@reduxjs/toolkit";
import { allproduct } from "../../../allproductitem";

export const Searchslice = createSlice({
    name: 'search',
    initialState: {
        search: [],
        filtred: false,
        result: '',
    },
    reducers: {
        Searchproduct: (state, action) => {
            const filterproduct = allproduct.filter(item => item.title.replace(/\s/g, '').toLocaleLowerCase().includes(action.payload)
                || item.text.replace(/\s/g, '').toLocaleLowerCase().includes(action.payload) || item.price.includes(action.payload)
                || item.color.replace(/\s/g, '').toLocaleLowerCase().includes(action.payload) || item.category.replace(/\s/g, '').toLocaleLowerCase().includes(action.payload)
                || item.acess.replace(/\s/g, '').toLocaleLowerCase().includes(action.payload)
            )
            state.search = filterproduct
            state.filtred = true
            if (state.search.length === 0) {
                state.result = `Not Result ${action.payload}`
            }
            else {
                state.result = `${state.search.length} Result ${action.payload} him`
            }
        }

    }
})

export const { Searchproduct } = Searchslice.actions
export default Searchslice.reducer