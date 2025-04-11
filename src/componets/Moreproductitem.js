import Placholder from "./Placholder"
import { addtoCart } from "./redux/reduxtolkit/cart/cartReducer"
import { useDispatch, useSelector } from "react-redux"
import { useContext } from "react"
import { CartContext } from "./Pluskarzina"
import { Link } from "react-router-dom"
import { ToggleWishlist } from "./redux/reduxtolkit/wishlist/wishlistReducer"



export default function Moreproductitem({ placholder, item }) {
    const { setPlus } = useContext(CartContext)
    const store = useSelector(state => state.cart.cart)
    const wishlist = useSelector(state => state.wishlist.wishlist)
    const userid = useSelector(state => state.login.user)
    const { autuser } = userid
    const dispath = useDispatch()
    return (
        <div className="flex justify-between items-center flex-col" style={{ width: '257px', overflow: 'hidden', position: 'relative', padding: '8px', margin: '0 10px',  }}>
            {placholder ? <Placholder /> : <div className="more-wrapper">
                {autuser ?
                    (wishlist.find(el => el.id === item.id)) ? <i onClick={() => dispath(ToggleWishlist(item))} style={{ color: 'red', position: 'absolute', fontSize: '22px', top: '10px', right: '10px' }} className="fa-solid fa-heart"></i> : <i onClick={() => dispath(ToggleWishlist(item))} style={{ color: 'red', position: 'absolute', fontSize: '22px', top: '10px', right: '10px' }} className="fa-regular fa-heart"></i>
                    : <Link to='login'>
                        <i onClick={() => dispath(ToggleWishlist(item))} style={{ color: 'red', position: 'absolute', fontSize: '22px', top: '10px', right: '10px' }} className="fa-regular fa-heart"></i>
                    </Link>

                }
                <div style={{ width: '100%' }}>
                    <Link style={{ scrollBehavior: 'smooth' }} state={item} to={"page"}>
                        <img style={{ width: '100%', borderRadius: '8px' }} src={item.image}></img>
                    </Link>
                </div>
                <div className="flex items-center">
                    <span style={{ fontWeight: 'bold', fontSize: '20px' }}>{item.price}₽</span>
                    <del style={{ fontSize: '18px', color: 'gray', marginLeft: '12px' }}>{item.del}₽</del>
                </div>
                <div>
                    <p style={{ fontFamily: 'poppins, sans-serif', color: 'gray' }}>{item.title}</p>
                </div>
                <div>
                    {(store.find(cart => cart.id === item.id)) ? <Link to="/cart">
                        <button style={{ padding: '5px 20px 7px', marginTop: '15px', borderRadius: '12px', color: '#a73afd', fontWeight: '600', background: 'white', border: '2px solid #a73afd', textTransform: 'initial' }}>отмена</button>
                    </Link>
                        : <button onClick={() => {
                            setPlus(true)
                            dispath(addtoCart(item))
                        }} style={{ padding: '5px 20px 7px', marginTop: '15px', borderRadius: '12px', color: 'white', fontWeight: '600', background: '#a73afd', border: '2px solid transparent', textTransform: 'initial' }}>в корзину</button>}
                </div>
            </div>}
        </div>
    )
}