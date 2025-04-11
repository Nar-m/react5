import './aside.css'
import { useDispatch, useSelector } from 'react-redux'
import { SideClose, Handlchange, Pricefilter, Filtergender } from './redux/reduxtolkit/Sydbarfilter/Filterreducer'
import { useState } from 'react'


const array = [
    { category: 'switer' },
    { category: 'jacket' },
    { category: 'blouse' },
    { category: 'permegi' },
    { category: 'jeans' },
    { category: 'shirt' },
    { category: 'bag' },
    { category: 'rings' },
    { category: 'castyum' },
    { category: 'headset' },
    { category: 'children' },
    { category: 'sport' }
]

const array1 = [{ gender: 'male' }, { gender: 'female' }, { gender: 'all' }]
const arrar2 = [
    { color: 'black' },
    { color: 'white' },
    { color: 'blue' },
    { color: 'gray-brown' },
    { color: 'all' },
    { color: 'milky' },
    { color: 'golden' },
    { color: 'gray' },
    { color: 'brown' },
    { color: 'purple' },
    { color: 'yellow' },
    { color: 'rose' },
    { color: 'green' },
]

export default function Aside({ setisarray, setIsprice }) {
    const [color, setcolor] = useState(false)
    const [category, setcategory] = useState(false)
    const [gender, setgender] = useState(false)
    const [cheked, setcheked] = useState(null)
    const [price, setprice] = useState(false)
    const [maxprice, setmaxprice] = useState(0)
    const dispath = useDispatch()
    const sydbar = useSelector(state => state.sydbar.side)

    return (
        <>
            <div onClick={() => dispath(SideClose())} style={{ display: `${sydbar ? 'block' : 'none'}` }} className='side-conteiner'>

            </div>
            <div className={sydbar ? 'aside open' : 'aside'}>
                <div>
                    <div className='side-title'>
                        <h3>Фильтры</h3>
                        <span onClick={() => {
                            dispath(SideClose())
                        }}>&times;</span>
                    </div>
                    <div>
                        <div onClick={() => {
                            setprice(true)
                            if (price) {
                                setprice(false)
                            }

                        }} className='flex cursor-pointer justify-between items-center p-2'>
                            <div>
                                <h3 style={{ fontWeight: '600' }}>Price</h3>
                            </div>
                            <div>
                                <i style={{ color: 'gray', transform: `rotate(${price ? '180deg' : '0deg'})` }} className="fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                        <div className={`${price ? 'price-items active' : 'price-items'}`}>
                            <label>
                                <input type='range' min="0" max="9855" value={maxprice} onChange={(e) => {
                                    setmaxprice(e.target.value)
                                }}></input>
                                <span style={{ margin: '0 12px' }}>{maxprice} ₽</span>
                            </label>
                        </div>
                    </div>
                    <div className='filters'>
                        <div>
                            <div onClick={() => {
                                setcategory(true)
                                if (category) {
                                    setcategory(false)
                                }
                            }} className='flex justify-between items-center p-2'>
                                <div>
                                    <h3 style={{ fontWeight: '600' }}>Категория</h3>
                                </div>
                                <div>
                                    <i style={{ color: 'gray', transform: `rotate(${category ? '180deg' : '0deg'})` }} className="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className={category ? 'category-items active' : 'category-items'}>
                                {array.map((item, index) => {
                                    return (
                                        <div key={index}  style={{ margin: '12px 0' }} className='flex items-center'>
                                            <input onChange={(e) => {
                                                setcheked(e.target.checked)
                                                dispath(Handlchange(e.target))
                                            }} value={item.category} style={{ borderRadius: '5px' }} type='checkbox'></input>
                                            <span className='text' style={{ fontSize: '18px', margin: '0 15px', lineHeight: '22px', color: '#242424' }}>{item.category}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div>
                            <div onClick={() => {
                                setcolor(true)
                                if (color) {
                                    setcolor(false)
                                }
                            }} className='flex justify-between items-center p-2'>
                                <div>
                                    <h3 style={{ fontWeight: '600' }}>Цвет</h3>
                                </div>
                                <div>
                                    <i style={{ color: 'gray', transform: `rotate(${color ? '180deg' : '0deg'})` }} className="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className={color ? 'color-items active' : 'color-items'}>
                                {arrar2.map((item, index) => {
                                    return (
                                        <div key={index} style={{ margin: '12px 0' }} className='flex items-center'>
                                            <input onChange={(e) => {
                                                setcheked(e.target.checked)
                                                dispath(Handlchange(e.target))
                                            }} value={item.color} style={{ borderRadius: '5px' }} type='checkbox'></input>
                                            <span className='text' style={{ fontSize: '18px', margin: '0 15px', lineHeight: '22px', color: '#242424' }}>{item.color}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div>
                            <div onClick={() => {
                                setgender(true)
                                if (gender) {
                                    setgender(false)
                                }
                            }} className='flex justify-between items-center p-2'>
                                <div>
                                    <h3 style={{ fontWeight: '600' }}>пол</h3>
                                </div>
                                <div>
                                    <i style={{ color: 'gray', transform: `rotate(${gender ? '180deg' : '0deg'})` }} className="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                            <div style={{ height: `${gender ? '115px' : '0'}` }} className="gender-item">
                                {array1.map((item, index) => {
                                    return (
                                        <div key={index} style={{ margin: '12px 0' }} className='flex items-center'>
                                            <label form='gender'>
                                                <input onChange={() => {
                                                    dispath(Filtergender(item.gender))
                                                }} name='gender' id='gender' type='radio'></input>
                                                <span className='text' style={{ fontSize: '18px', margin: '0 15px', lineHeight: '22px', color: '#242424' }}>{item.gender}</span>
                                            </label>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='filter-botom'>
                    <p>Нашли 36 товаров</p>
                    <button onClick={() => {
                        if(price){
                            setIsprice(true)
                        }
                        dispath(Pricefilter(maxprice))
                        if (cheked) {
                            setisarray(true)
                        }
                        else {
                            setisarray(false)
                        }
                    }}
                    >Показать</button>
                </div>
            </div>
        </>

    )
}