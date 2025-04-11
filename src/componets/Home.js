import { Slide } from "./Slide"
import { useState, useEffect } from "react"
import './slider.css';
import Navigation from "./Navigation";
import Carusel from "./Carusel";
import Category from "./Category";
import Store from "./Store";
import { Link } from "react-router-dom";
import Gallery from "./gallery";
import Moreimg from "./Moreimg";

export default function Home() {
    const [curentindex, setCuretindex] = useState(0)
    const [load, setInter] = useState(true)
    const [animation, setanimation] = useState()

    useEffect(() => {
        if (load) {
            setanimation(setInterval(() => {
                { setCuretindex(curentindex => curentindex === Slide.length - 1 ? 0 : curentindex + 1) }
            }, 3200));
        }
        else {
            return clearInterval(animation)
        }
    }, [load]);

    function Moseslid() {
        setInter(false)
    }
    function Inter() {
        setInter(true)
    }

    return (
        <>
            <div>
                <div className="slider-conteiner" onMouseLeave={Inter} onMouseMove={Moseslid} style={{ width: '100%', maxWidth: '1500px', height: '400px', position: 'relative', zIndex: '-1', borderRadius: '8px', overflow: 'hidden', margin: ' 20px auto' }}>
                    {Slide.map((item, index) => {
                        return (
                            <>
                                <div className="slide" style={{
                                    width: '100%',
                                    position: 'absolute',
                                    height: '100%',
                                    transition: '0.5s all',
                                    transform: `translateX(-${curentindex * 100}%)`
                                }} key={index}>
                                    <Link to="/product">
                                        <img style={{ width: '100%', height: '100%', }} src={item}></img>
                                    </Link>
                                </div>
                            </>
                        )
                    })}
                </div>
                <Navigation curentindex={curentindex} setCuretindex={setCuretindex} />
                <Carusel />
                <Category />
                <Gallery />
                <Moreimg />
                <Store />
            </div>
        </>
    )
}