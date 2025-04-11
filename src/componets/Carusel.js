import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { carusel } from './caruselitem';
import { useContext } from 'react';
import { ModalContext } from './Modalprovider';
import './sliders.css'

export default function Carusel() {
    const { Openmodal } = useContext(ModalContext)

    return (
        <div className='relative'>
            <div className='flex justify-center'>
                <h1 style={{ padding: '8px', marginBottom: '15px', width: '270px', fontWeight: '600', fontSize: '30px', textAlign: 'center', borderBottom: '4px solid orange' }}>Unmissable Offers</h1>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                navigation={{ nextEl: '.nextel', prevEl: '.prevev' }}
                pagination={{ el: '.pagination', clickable: true }}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='swiper'
            >
                <div className='carusel' style={{ margin: '10px 0' }}>
                    {carusel.map((item, index) => {
                        return (
                            <SwiperSlide>
                                <img className='opacity-70 hover:opacity-100 duration-200' onClick={() => {
                                    Openmodal(item, index)
                                }} style={{ width: '93%', borderRadius: '20px' }} key={index} src={item}></img>
                            </SwiperSlide>
                        )
                    })}
                </div>
                <span style={{ position: 'absolute', zIndex: '10', right: '0', borderRadius: '50%', bottom: '50%', padding: '15px', background: 'white', color: 'black' }} className='nextel'>
                    <i style={{ fontSize: '18px' }} className="fa-solid fa-angle-right"></i>
                </span>
                <span style={{ position: 'absolute', bottom: '50%', zIndex: '10', left: '0', padding: '15px', background: 'white', borderRadius: '50%' }} className='prevev'>
                    <i style={{ fontSize: '18px' }} className="fa-solid fa-angle-left"></i>
                </span>
                <div className='flex justify-center p-10'>
                    <div>
                        <span style={{
                            width: '8px',
                            color: 'black',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            height: '8px',
                            margin: '0 15px'
                        }} className='pagination'></span>
                    </div>
                </div>
            </Swiper>
        </div>
    )
}