import { useSelector } from "react-redux"
import './wishlist.css';
import { useDispatch } from "react-redux";
import { CloseWishlist, ResetWishlist } from "./redux/reduxtolkit/wishlist/wishlistReducer";
import Wishlistcontent from "./Wishlistcontent";

export default function Wishlist() {
    const sydbar = useSelector(state => state.wishlist.sydbar)
    const wishlist = useSelector(state => state.wishlist.wishlist)
    const dispath = useDispatch()
    return (
        <div className={sydbar ? 'wishlist open' : 'wishlist'}>
            <div className="flex  justify-between items-center p-5">
                <div className="close">
                    <i onClick={() => dispath(CloseWishlist())} style={{ fontSize: '18px', color: 'gray' }} className="fa-solid fa-arrow-left"></i>
                </div>
                <div className="flex items-center">
                    <span><i style={{ fontSize: '17px', marginRight: '10px' }} className="fa-regular fa-heart"></i>(items: {wishlist.length})</span>
                    <div style={{ margin: '0 10px', color: 'red' }}>
                        <i onClick={() => dispath(ResetWishlist())} className="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>
            <div className="wish-item">
                {wishlist.length === 0 ? <div className="flex justify-center text-gray-500 p-2 items-center flex-col">
                    <h1 className="text-center  text-2xl" style={{ fontFamily: 'poppins, sans-serif', padding: '10px' }}>My Wish List is empty at the moment</h1>
                    <i style={{ fontSize: '30px' }} className="fa-solid fa-circle-exclamation"></i>
                </div>
                    : wishlist.map((item, index) => {
                        return (
                            <div className="flex justify-between items-center p-2 w-full border-b">
                                <Wishlistcontent item={item} key={index} />
                            </div>
                        )
                    })}

            </div>
        </div>
    )
}