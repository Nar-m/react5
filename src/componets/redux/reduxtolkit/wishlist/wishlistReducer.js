import { createSlice } from "@reduxjs/toolkit";

export const WishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        sydbar: false,
        wishlist: JSON.parse(localStorage.getItem('wishlist')) || []
    },
    reducers: {
        ToggleWishlist: (state, action) => {
            let wishlistitem = state.wishlist.findIndex(item => item.id === action.payload.id);
            if (wishlistitem !== -1) {
                state.wishlist.splice(wishlistitem, 1)
                localStorage.setItem('wishlist', JSON.stringify(wishlistitem))
            }
            else {
                let newitem = { ...action.payload }
                state.wishlist.push(newitem)
                localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
            }
        },
        OpenWishlist: (state, action) => {
            state.sydbar = true
        },
        CloseWishlist: (state, action) => {
            state.sydbar = false
        },
        ResetWishlist: (state) => {
            state.wishlist = []
            localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
        },
    }
})

export const { ToggleWishlist, OpenWishlist, CloseWishlist, ResetWishlist } = WishlistSlice.actions
export default WishlistSlice.reducer