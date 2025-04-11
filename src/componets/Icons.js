import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { OpenWishlist } from "./redux/reduxtolkit/wishlist/wishlistReducer"
import { Opendropdown } from "./redux/reduxtolkit/dropdown/dropdownReducer"



export default function Icons() {
    const store = useSelector(state => state.cart)
    const heart = useSelector(state => state.wishlist)

  
    const dispath = useDispatch()
    return (
        <div className='wrapper icon' style={{ display: 'flex' }}>
          
            <div className="flex flex-col items-center">
                <i onClick={() => dispath(Opendropdown())} className="fa-solid fa-circle-user"></i>
            </div>
            <div className="relative">
                <i onClick={() => dispath(OpenWishlist())} className="fa-regular fa-heart"></i>
                <div className="length">
                    {heart.wishlist.length}
                </div>
            </div>

            <div className="relative">
                <Link to="cart">
                    <i className="fa-solid fa-bag-shopping"></i>
                    <div className="length">
                        {store.cart.length}
                    </div>
                </Link>
            </div>
        </div>
    )
}