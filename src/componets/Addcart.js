import './addcart.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from './Pluskarzina'

export default function Addcart() {
    const {plus} = useContext(CartContext)
    return (
        <div className={plus ? 'cartplus active' : 'cartplus'}>
            <Link to="cart">
                <i style={{ color: 'white' }} className="fa-solid fa-plus"></i>
            </Link>
            <p style={{ color: 'white', marginLeft: '13px' }}>добавить в корзину</p>
        </div>
    )
}