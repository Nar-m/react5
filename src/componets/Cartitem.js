import { useDispatch } from "react-redux"
import { removeCartitem, decrementQuantity, incrementQuantity } from "./redux/reduxtolkit/cart/cartReducer"


export default function Cartitem({ item }) {
    const dispath = useDispatch()

    return (
        <div className="cart-content">
            <div className="images" style={{ width: '12%', }}>
                <img src={item.image}></img>
            </div>
            <div>
                <p className="title" style={{ color: '#242424', whiteSpace: 'nowrap' }}>{item.title}</p>
            </div>
            <div className="quantity" style={{ display: 'inline-block' }}>
                <button disabled={item.quantity === 1 ? true : false} onClick={() => dispath(decrementQuantity(item))}
                    style={{ opacity: `${item.quantity === 1 ? '0.4' : '1'}`, width: '32px', margin: '0 15px', fontSize: '20px', lineHeight: '20px', background: '#f1f1f5', height: '32px', borderRadius: '8px' }}>-</button>
                {item.quantity}
                <button onClick={() => dispath(incrementQuantity(item))} style={{ width: '32px', margin: '0 15px', fontSize: '20px', lineHeight: '20px', background: '#f1f1f5', height: '32px', borderRadius: '8px' }}>+</button>
            </div>
            <div className="flex items-center flex-col">
                <div>
                    <span style={{ fontSize: '24px', fontWeight: '700' }}>{item.price} ₽</span>
                </div>
                <div className="flex items-center">
                    <del style={{ color: 'gainsboro' }}>{item.del}</del>
                </div>
                <div className="flex items-center justify-end flex-col">
                    <i onClick={() => dispath(removeCartitem(item))} style={{ marginTop: '15px', color: 'grey' }} className="fa-solid fa-trash"></i>
                </div>
            </div>
        </div>
    )
}