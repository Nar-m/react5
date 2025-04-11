import './blog.css'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import { useRef, useState } from 'react';
import Ligtbox from './Ligtbox';
import Sliders from './more/Sliders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

let clientslider = [
    'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1487447_alternate1?$plpDeskRF$',
    'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1442712_alternate1?$plpDeskRF$',
    'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1449615_alternate1?$plpDeskRF$',
    'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1488239_alternate1?$plpDeskRF$',
    'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1481410_alternate1?$plpDeskRF$',
    'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1487444_alternate1?$plpDeskRF$',
    'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1481405_alternate1?$plpDeskRF$',
    'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1358006_alternate1?$plpDeskRF$'
]

export default function Blog() {
    const arrowref = useRef(null)
    const [activeindex, setactiveindex] = useState(0)
    const [showmodal, setshowmodal] = useState(false)
    const [element, setelement] = useState("")

    var settings = {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    const Handlemodal = (el, i) => {
        setactiveindex(i)
        setelement(el)
        setshowmodal(true)
    }
    const Modalclose = () => {
        setshowmodal(false)
    }
    const Handlenext = () => {
        if (activeindex >= clientslider.length - 1) {
            setelement(clientslider[0])
            setactiveindex(0)
        }
        else {
            let nextslider = clientslider[activeindex + 1]
            setelement(nextslider)
            setactiveindex(activeindex + 1)
        }
    }
    const Handlprev = () => {
        if (activeindex <= 0) {
            setelement(clientslider[clientslider.length - 1])
            setactiveindex(clientslider.length - 1)
        }
        else {
            let prevslider = clientslider[activeindex - 1]
            setelement(prevslider)
            setactiveindex(activeindex - 1)
        }
    }

    return (
        <div style={{ background: 'rgb(45, 45, 58)', overflow: 'hidden' }}>
            <div>
                <div className="blog_conteiner">
                    <div className='blog-content'>
                        <h1>Blog with the best.</h1>
                        <p>More bloggers and independent creators choose WordPress than any other blogging tool.</p>
                        <p>Tap into intuitive, flexible tools that put writers, bloggers, and creators first.</p>
                        <Link to="/login"><button>Start a blog</button></Link>
                    </div>
                </div>
                <div className='conteiner'>
                    <h2>Products</h2>
                    <Slider ref={arrowref} {...settings}>
                        {clientslider.map((item, index) => {
                            return (
                                <div className='images'>
                                    <img onClick={() => Handlemodal(item, index)} key={index} src={item}></img>
                                </div>
                            )
                        })}
                    </Slider>
                    <div className='btns'>
                        <button onClick={() => arrowref.current.slickPrev()}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button onClick={() => arrowref.current.slickNext()}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
                {clientslider.map((item, index) => {
                    return <Ligtbox showmodal={showmodal}
                        Handlenext={Handlenext}
                        Handlprev={Handlprev}
                        activeindex={activeindex === index}
                        element={element}
                        Modalclose={Modalclose} />
                })}
            </div>
            <Sliders />
        </div>
    )
}
