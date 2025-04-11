import './gallery.css'
import images3 from './images3.webp'
import images4 from './images4.webp'
import images5 from './images5.webp'
import images6 from './images6.webp'
import images7 from './images7.webp'
import images8 from './images8.webp'
import images9 from './images9.webp'
import images10 from './images10.webp'
import images11 from './images11.webp'
import images12 from './images12.webp'
import images13 from './images13.webp'
import images14 from './images14.webp'
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'

export default function Gallery() {
    let Isdrag = false
    let startX = null
    let scrollstart = null
    const [right, setbtnsright] = useState(true)
    const [btnsleft, setbtnsleft] = useState(false)
    const slider = useRef()

    const Dragstart = (e) => {
        e.preventDefault()
        Isdrag = true
        startX = e.pageX - slider.current.offsetLeft
        scrollstart = slider.current.scrollLeft
    }
    const Dragging = (e) => {
        if (!Isdrag) return;
        e.preventDefault();
        const x = e.pageX - slider.current.offsetLeft
        const cordinX = (x - startX) * 2
        slider.current.scrollLeft = scrollstart - cordinX
    }
    const Dragend = () => {
        Isdrag = false
    }
    const Dragstop = () => {
        Isdrag = false
    }
    const Prevcarusel = () => {
        slider.current.scrollLeft = slider.current.scrollLeft -= 900
        setbtnsright(true)
    }
    const Nextcarusel = () => {
        slider.current.scrollLeft = slider.current.scrollLeft += 900
    }
    const Infinitescroll = () => {
        if (slider.current.scrollLeft === 0) {
            setbtnsleft(false)
        }
        else if (Math.ceil(slider.current.scrollLeft) === slider.current.scrollWidth - slider.current.offsetWidth) {
            setbtnsright(false)
        }
        else {
            setbtnsleft(true)
        }
    }
    return (
        <div className='gallery-items'>
            <i style={{ display: `${btnsleft ? 'block' : 'none'}` }} onClick={() => {
                Prevcarusel()
            }} className="fa-solid fa-arrow-left"></i>
            <div onScroll={Infinitescroll} onMouseMove={Dragging} onMouseDown={Dragstart} onMouseLeave={Dragend} onMouseUp={Dragstop}
                className="gallery" ref={slider}>
                <div>
                    <Link to="product">
                        <img src={images3} alt=''></img>
                    </Link>
                    <Link to="product">
                        <img src={images4} alt=''></img>
                    </Link>
                    <Link to="product">
                        <img src={images5} alt=''></img>
                    </Link>
                </div>
                <div>
                    <Link to="product">
                        <img src={images6} alt=''></img>
                    </Link>
                    <Link to="product">
                        <img src={images7} alt=''></img>
                    </Link>
                    <Link to="product">
                        <img src={images8} alt=''></img>
                    </Link>
                </div>
                <div>
                    <Link to="product">
                        <img src={images9} alt=''></img>
                    </Link>
                    <Link to="product">
                        <img src={images10} alt=''></img>
                    </Link>
                    <Link to="product">
                        <img src={images11} alt=''></img>
                    </Link>
                </div>
                <div>
                    <Link to="product">
                        <img src={images12} alt=''></img>
                    </Link>
                    <Link to="product">
                        <img src={images13} alt=''></img>
                    </Link>
                    <Link to="product">
                        <img src={images14} alt=''></img>
                    </Link>
                </div>
            </div>
            <i style={{ display: `${right ? 'block' : 'none'}` }} onClick={() => {
                Nextcarusel()
            }} className="fa-solid fa-arrow-right"></i>
        </div >
    )
}