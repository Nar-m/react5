import './shopcontent.css'
import { addtoCart } from './redux/reduxtolkit/cart/cartReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useContext } from 'react'
import { CartContext } from './Pluskarzina'
import { ToggleWishlist } from './redux/reduxtolkit/wishlist/wishlistReducer'
import { useState, useEffect } from 'react'
import './placholder.css'
import { Link } from 'react-router-dom'


export default function Shopcontent({ item }) {
    const { setPlus } = useContext(CartContext)
    const store = useSelector(state => state.cart.cart)
    const wishlist = useSelector(state => state.wishlist.wishlist)
    const [loading, setloadingproduct] = useState(true)

    const dispath = useDispatch()
    useEffect(() => {
        setTimeout(() => setloadingproduct(false), 850)
    }, [loading])
    return (
        <>
            {loading ? <div className="content-wrapper">
                <div className="placeholder">
                    <div className="animated-background"></div>
                </div>
            </div> : <div className='column'>
                {(wishlist.find(el => el.id === item.id)) ? <i onClick={() => dispath(ToggleWishlist(item))} style={{ color: 'red', position: 'absolute', fontSize: '22px', top: '10px', right: '10px' }} className="fa-solid fa-heart"></i> : <i onClick={() => dispath(ToggleWishlist(item))} style={{ color: 'red', position: 'absolute', fontSize: '22px', top: '10px', right: '10px' }} className="fa-regular fa-heart"></i>}
                <div style={{ margin: '0' }}>
                    <Link state={item} to={"/page"}><img alt='' src={item.image}></img></Link>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center'>
                        <span style={{ fontSize: '25px', color: 'black', fontWeight: '700' }}>{item.price}₽</span>
                    </div>
                    <div style={{ marginLeft: '8px' }} className='flex items-center'>
                        <del style={{ fontSize: '17px', color: 'gray' }}>{item.del}₽</del>
                    </div>
                </div>
                <div>
                    <span>{item.title}  /  <span style={{ color: 'gray' }}>{item.text}</span></span>
                </div>
                <div>
                    <i style={{ color: 'orange' }} className="fa-solid fa-star"></i>
                    <span style={{ marginLeft: '8px' }}>{item.star}</span>
                </div>
                <div style={{ margin: '15px 0' }} className='flex justify-center items-center'>
                    {(store.find(cart => cart.id === item.id)) ? <Link to="/cart">
                        <button className='btns-otmena'>отмена</button>
                    </Link>
                        : <button onClick={() => {
                            setPlus(true)
                            dispath(addtoCart(item))
                        }} className='btns'>в корзину</button>}

                </div>
            </div>}
        </>
    )
}