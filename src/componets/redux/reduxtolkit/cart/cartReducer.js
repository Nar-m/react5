import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        totael: JSON.parse(localStorage.getItem('totael')) || 0,
    },
    reducers: {
        addtoCart: (state, action) => {
            const newcartitem = state.cart.find(item => item.id === action.payload.id)
            if (newcartitem) {
                state.cart[newcartitem].quantity += 1
                localStorage.setItem('cart', JSON.stringify(newcartitem))
            }
            else {
                const cartitems = { ...action.payload, quantity: 1 }
                state.cart.push(cartitems)
                localStorage.setItem('cart', JSON.stringify(state.cart))
            }
            state.totael = state.cart.reduce((aggr, item) => aggr + item.price * item.quantity, 0)
            localStorage.setItem('totael', JSON.stringify(state.totael))
        },

        removeCartitem: (state, action) => {
            const removeitem = state.cart.filter(item => item.id !== action.payload.id)
            state.cart = removeitem
            localStorage.setItem('cart', JSON.stringify(state.cart))
            state.totael = state.cart.reduce((aggr, item) => aggr + item.price * item.quantity, 0)
            localStorage.setItem('totael', JSON.stringify(state.totael))
        },
        incrementQuantity: (state, action) => {
            const decremnt = state.cart.find(item => item.id === action.payload.id)
            if (decremnt) {
                decremnt.quantity++
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
            state.totael = state.cart.reduce((aggr, item) => aggr + item.price * item.quantity, 0)
            localStorage.setItem('totael', JSON.stringify(state.totael))
        },
        decrementQuantity: (state, action) => {
            const increment = state.cart.find(item => item.id === action.payload.id)
            if (increment) {
                increment.quantity--
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
            state.totael = state.cart.reduce((aggr, item) => aggr + item.price * item.quantity, 0)
            localStorage.setItem('totael', JSON.stringify(state.totael))
        },
    },
})
export const { addtoCart, removeCartitem, decrementQuantity, incrementQuantity } = CartSlice.actions
export default CartSlice.reducer