import './product.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart } from './redux/reduxtolkit/cart/cartReducer'
import { ToggleWishlist } from './redux/reduxtolkit/wishlist/wishlistReducer'
import Cancelbtn from './Cancel'
import { useContext } from 'react'
import { CartContext } from './Pluskarzina'

export default function Productcontent({ item }) {
    const { setPlus } = useContext(CartContext)
    const store = useSelector(state => state.cart)
    const heart = useSelector(state => state.wishlist.wishlist)
    const userid = useSelector(state => state.login.user)
    const { autuser } = userid
    const dispath = useDispatch()
    const { image, title, price, text } = item

    const Downloadimg = () => {
        fetch(image).then(element => element.blob()).then(file => {
            let a = document.createElement("a");
            a.href = URL.createObjectURL(file)
            a.download = new Date().getTime();
            a.click();
            document.body.appendChild(a)
        })
    }

    return (
        <>
            <div className='wrapp border'>
                <div className='outline'>
                    {autuser ?
                        <div onClick={() => dispath(ToggleWishlist(item))} className=' border'>
                            {(heart.find(el => el.id === item.id)) ? <i style={{ color: 'red' }} className="fa-solid fa-heart"></i> : <i style={{ color: 'red' }} className="fa-regular fa-heart"></i>}
                        </div> :
                        <Link to='login'>
                            <div className='border'>
                                <i style={{ color: 'red' }} className="fa-regular fa-heart"></i>
                            </div>
                        </Link>
                    }
                    <div onClick={Downloadimg} className=' border'>
                        <i style={{ color: 'green', borderRadius: '50%' }} className="fa-solid fa-download"></i>
                    </div>
                </div>
                <div className='image'>
                    <Link style={{ scrollBehavior: 'smooth' }} state={item} to={"page"}>
                        <img src={image}></img>
                    </Link>
                </div>
                <div>
                    <h1 style={{ fontSize: '26px', marginTop: '8px', fontFamily: 'poppins, sans-serif' }}>{title}</h1>
                </div>
                <p>{text}</p>
                <div className='flex items-center'>
                    <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'red' }}>{price}₽</span>
                </div>
                {(store.cart.find(cart => cart.id === item.id)) ? <Cancelbtn /> : <button onClick={() => {
                    setPlus(true)
                    dispath(addtoCart(item))
                }} className='addcart'>Add to carts</button>}
            </div>
        </>
    )
}