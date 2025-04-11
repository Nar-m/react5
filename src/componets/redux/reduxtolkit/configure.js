import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './shopReducer'
import filterReducer from "./filters/filterReducer";
import cartReducer from "./cart/cartReducer";
import wishlistReducer from "./wishlist/wishlistReducer";
import searchReducer from "./search/searchReducer";
import sidbarReducer from './Sydbarfilter/Filterreducer'
import dropdownReducer from "./dropdown/dropdownReducer";
import CategoryReducer from './filtercategory/filtercategory'
import loginReducer from "./login/loginReducer";

export const store = configureStore({
    reducer: {
        product: ProductReducer,
        filteritem: filterReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
        search: searchReducer,
        sydbar: sidbarReducer,
        dropdown: dropdownReducer,
        category: CategoryReducer,
        login: loginReducer
    }
})