import { useLocation } from "react-router-dom"
import './productitem.css'
import { useDispatch, useSelector } from "react-redux"
import { useContext, useEffect, useState } from 'react'
import { CartContext } from './Pluskarzina'
import Cancelbtn from "./Cancel"
import { addtoCart } from "./redux/reduxtolkit/cart/cartReducer"
import { Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Productitem() {
    const { setPlus } = useContext(CartContext)
    const store = useSelector(state => state.cart)
    const [spiner, setspinner] = useState(true)
    const lication = useLocation()
    const [cordinX, setclientX] = useState(0)
    const [cordinY, setClientY] = useState(0)
    const [x, setX] = useState(false);
    
    const dispath = useDispatch()
    useEffect(() => {
        setTimeout(() => {
            setspinner(false)
        }, 850)
    }, [])

    return (
        <>
            {spiner ? <div className="flex justify-center items-center" style={{ minHeight: '50vh' }}>
                <Spinner style={{ color: 'orangered', width: '50px', height: '50px' }} animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div> : <>
                <Link to="/">
                    <div className="home">
                        <i className="fa-solid fa-arrow-left"></i>
                        <span style={{ fontSize: '16px', margin: '0 12px' }}>Gat to back</span>
                    </div>
                </Link>
                <div className="single-product">
                    <div className="imag" onMouseLeave={() => {
                        setX(false)
                    }} onMouseMove={(e) => {
                        setX(true)
                        if (x) {
                            setclientX(e.clientX - e.target.offsetLeft)
                            setClientY(e.clientY - e.target.offsetTop)
                        }
                    }} style={{ borderRadius: '8px', overflow: 'hidden', }}>
                        <img key={lication.state.id} style={{
                            transformOrigin: `${cordinX}px ${cordinY}px`,
                            transform: `scale(${x ? '2' : '1'})`,
                            width: '100%',
                            borderRadius: '8px',
                            height: '100%'
                        }} src={lication.state.image}></img>
                    </div>
                    <div className="discript">
                        <div style={{ fontSize: '3.5rem', fontWeight: '400', fontFamily: 'poppins, sans-serif' }}>
                            <h1>{lication.state.title}</h1>
                        </div>
                        <div style={{ fontSize: '30px', }}>
                            <h2>{lication.state.category}</h2>
                        </div>
                        <div>
                            <span style={{ fontSize: '23px', color: 'red' }}>{lication.state.price}₽</span>
                        </div>
                        <div>
                            <del style={{ fontSize: '23px', color: 'gray' }}>{lication.state.del}₽</del>
                        </div>
                        <div>
                            <p style={{ fontSize: '18px', fontFamily: 'poppins, sans-serif' }}>{lication.state.text}</p>
                        </div>

                        {(store.cart.find(cart => cart.id === lication.state.id)) ? <Cancelbtn /> : <button onClick={() => {
                            setPlus(true)
                            dispath(addtoCart(lication.state))
                        }} className='addcart'>Add to carts</button>}
                    </div>
                </div>
            </>}
        </>
    )
}