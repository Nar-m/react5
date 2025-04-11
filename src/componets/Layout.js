import logo from './logo.png'
import { Link, Outlet } from 'react-router-dom'
import './Layout.css'
import { useState } from 'react'
import Navbar from './Navbar'
import Icons from './Icons'
import Footer from './footer'

export default function Layout() {
    const [fixed, setFixed] = useState(false)
    const [hover, sethover] = useState(false)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            setFixed(true)
        }
        else {
            setFixed(false)
        }
    })
    return (
        <>
            <header className={fixed ? 'header active' : 'header'}>
                <div className='flex justify-between items-center p-10'>
                    <div className='wrapper'>
                        <Link  to="/">
                            <img style={{ width: '200px' }} src={logo}></img>
                        </Link>
                    </div>
                    <div className='wrapper navbar'>
                        <div onClick={() => {
                            sethover((hover) => !hover ? true : false)
                        }} className={`menus text-4xl`}>
                            <i style={{ fontSize: '22px' }} className={`${hover ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}`}></i>
                        </div>
                        <Navbar hover={hover} />
                    </div>
                    <Icons />
                </div>
            </header>
            <Outlet />
            <Footer />
        </>
    )
}