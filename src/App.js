import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./componets/Layout";
import Home from "./componets/Home";
import Productitem from "./componets/productitem";
import Cart from "./componets/Cart";
import Modalimg from "./componets/Modal";
import ModalProvider from "./componets/Modalprovider";
import CartProvider from "./componets/Pluskarzina";
import Addcart from './componets/Addcart'
import Wishlist from "./componets/wishlistsydbar";
import Product from "./componets/product";
import Login from "./componets/Login";
import Dropdown from "./componets/dropdown";
import Blog from "./componets/Blog";
import Filteritems from "./componets/Filteritems";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(state => state.login.user)
  const { autuser } = user
  return (
    <HashRouter>
      <Wishlist />
      <Dropdown />
      <CartProvider>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="page" element={<Productitem />} />
              <Route path="cart" element={<Cart />} />
              <Route path="product" element={autuser ? <Product></Product> : <Login></Login>} />
              <Route path="login" element={<Login />} />
              <Route path="blog" element={<Blog />} />
              <Route path="filteritems/:type" element={<Filteritems />} />
            </Route>
          </Routes>
          <Modalimg />
          <Addcart />
        </ModalProvider>
      </CartProvider>
    </HashRouter>
  )
}

export default App;
