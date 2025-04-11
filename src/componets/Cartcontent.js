import { useSelector } from "react-redux"
import Emptycart from "./Emptycart"
import Cartitem from "./Cartitem"
import Carttotal from "./Carttotal"
import { useState } from "react"
import './cartcontent.css';


export default function Cartcontent() {
    const store = useSelector(state => state.cart)
    const [curentHeight, setcurentHeight] = useState(true)
    const totael = useSelector(state => state.cart.totael)
    return (
        <div>
            {store.cart.length === 0 ? <Emptycart /> : <div className="cart">
                <div className="cart-item">
                    <div className="cart-add" style={{ borderRadius: '20px', position: 'relative', overflow: 'hidden', background: 'white',  padding: '24px' }}>
                        <div className="flex justify-between items-center p-2">
                            <h1 style={{ fontSize: '24px', marginBottom: '15px', fontWeight: '700' }}>Корзина <sup>{store.cart.length}</sup></h1>
                            <i onClick={() => {
                                if (curentHeight) {
                                    setcurentHeight(false)
                                }
                                else if (!curentHeight) {
                                    setcurentHeight(true)
                                }
                            }} style={{ fontSize: '18px', transition: '0.3s all', transform: `rotate(${curentHeight ? '180deg' : '0deg'})`, display: `${store.cart.length > 1 ? 'block' : 'none'}` }} className="fa-solid fa-chevron-down"></i>
                        </div>
                        {!curentHeight ? <div className="p-2 flex items-center">
                            <span>{store.cart.length} товара</span>
                            <div style={{ marginLeft: '15px' }}>
                                <span>{totael}₽</span>
                            </div>
                        </div> : ''}
                        <div className={`${curentHeight ? 'cartcontent show' : 'cartcontent'}`}>
                            {store.cart.map((item, index) => {
                                return <Cartitem curentHeight={curentHeight} item={item} key={index} />
                            })}
                        </div>
                    </div>
                    <div className="adrees" style={{ padding: '24px', width: '100%', background: 'white', borderRadius: '20px', margin: '20px 0' }}>
                        <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px', lineHeight: '22px' }}>Способ доставки</h2>
                        <p style={{ color: '#cb11ab', fontSize: '16px', lineHeight: '22px', fontWeight: '600' }}>Выбрать адрес доставки</p>
                    </div>
                </div>
                <Carttotal />
            </div>}
        </div>
    )
}