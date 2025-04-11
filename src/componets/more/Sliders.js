import Slider from "react-slick"
import './Sliders.css';
import { useState } from "react";

const images = [
    'https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic6.webp',
    'https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic5.webp',
    'https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic4.webp',
    'https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic3.webp',
    'https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic2.webp',
    'https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic1.webp'
]
export default function Sliders() {
    const [curentindex, setcurentindex] = useState(0)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 1000,
        beforeChange: (current, next) => setcurentindex(next),
        centerMode: true
    }
    return (
        <div style={{ minHeight: '50vh' }}>
            <div className="sliders">
                <Slider {...settings}>
                    {images.map((item, index) => {
                        return (
                            <div key={index} className={`slid ${curentindex === index ? 'active' : ''}`}>
                                <img src={item}></img>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}