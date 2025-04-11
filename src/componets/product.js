import { useState, useEffect } from "react"
import Spinerloading from "./Spinerloading";
import { allproduct } from "./allproductitem";
import Shopcontent from "./Shopcontent";
import './shopslider.css';
import { shopslider } from "./shopslider";
import SlidePagination from './slidepagination'
import './search.css'
import { useSelector, useDispatch } from "react-redux";
import { Searchproduct } from "./redux/reduxtolkit/search/searchReducer";
import './btns.css';
import { Sideopen } from "./redux/reduxtolkit/Sydbarfilter/Filterreducer";
import Aside from "./aside";
import Naviagationbtns from "./Naviagationbtns";

export default function Product() {
    const [spinner, setspinner] = useState(true);
    const [curentindex, setCurentindex] = useState(0);
    const search = useSelector(state => state.search.search)
    const [value, setValue] = useState('')
    const filtred = useSelector(state => state.search.filtred)
    const newgender = useSelector(state => state.sydbar.gender)
    const Isgender = useSelector(state => state.sydbar.Isgender)
    const items = useSelector(state => state.sydbar.items)
    const price = useSelector(state => state.sydbar.price)
    const [Isarray, setisarray] = useState(false)
    const [Isprice, setIsprice] = useState(false)
    const result = useSelector(state => state.search.result)
    const dispath = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            setspinner(false)
        }, 850)
    }, [spinner])

    const Nextslider = () => {
        setCurentindex((curentindex) => curentindex === shopslider.length - 1 ? 0 : curentindex + 1)
    }
    const Prevslider = () => {
        setCurentindex((curentindex) => curentindex === 0 ? shopslider.length - 1 : curentindex - 1)
    }
    return (
        <div style={{ background: '#fff', minHeight: '100vh' }}>
            <Aside items={items} setisarray={setisarray} setIsprice={setIsprice} />
            {spinner ? <Spinerloading /> : <>
                <div className="shopslider">
                    <i onClick={Prevslider} className="fa-solid fa-arrow-left"></i>
                    {shopslider.map((item, index) => {
                        return (
                            <div style={{ left: `${index * 100}%`, transform: `translateX(-${curentindex * 100}%)` }} key={index} className="slider">
                                <img alt="" src={item}></img>
                            </div>
                        )
                    })}
                    <i onClick={Nextslider} className="fa-solid fa-arrow-right"></i>
                    <SlidePagination setCurentindex={setCurentindex} curentindex={curentindex} />
                </div>
                <div className="input-group">
                    <div className="form-outline" data-mdb-input-init>
                        <form onSubmit={(e) => {
                            setspinner(true)
                            e.preventDefault();
                            dispath(Searchproduct(value.trim().replace(/\s/g, '').toLocaleLowerCase()))
                        }} className="flex items-center">
                            <div className="input-group">
                                <div className="form-outline relative" data-mdb-input-init>
                                    <input style={{ borderRadius: '5px' }} onChange={(e) => setValue(e.target.value)} placeholder="search" type="search" id="form1" className="form-control" />
                                </div>
                                <button onClick={() => {
                                    dispath(Searchproduct(value))
                                }} type="button" class="btn btn-primary" data-mdb-ripple-init>
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex justify-end " style={{ padding: '10px' }}>
                    <button  onClick={() => dispath(Sideopen())} className="filter-btns"><img style={{ width: '20px', marginRight: '12px', height: '20px' }} src='https://cdn-icons-png.flaticon.com/128/839/839599.png?ga=GA1.1.674697043.1703588396'></img>Все фильтры</button>
                </div>
                <Naviagationbtns />
                <p className="text-center" style={{ fontSize: '30px', color: `${search.length === 0 ? 'red' : 'green'}`, fontWeight: 'bold', fontFamily: 'poppins, sans-serif' }}>{result}</p>
                <div className="flex justify-center items-center mt-5 p-2 flex-wrap">
                    {(filtred ? search : Isgender ? newgender : Isarray ? items : Isprice ? price : allproduct).map((item, index) => {
                        return <Shopcontent item={item} key={index} />
                    })}
                </div>
            </>}
        </div>
    )
}