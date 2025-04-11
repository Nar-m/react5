import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Shopcontent from "./Shopcontent"
import './filteritems.css'

export default function Filteritems() {
    const category = useSelector(state => state.category.category)
    const { type } = useParams()
    
    return (
        <div>
            <div className="pl-14">
                <h1 className="text-4xl font-inter text-center text-gray-600 font-bold tracking-normal leading-none">{type}</h1>
            </div>
            <div className="ml-5">
                <Link to='/product'>
                    <button style={{ fontSize: '20px' }}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                </Link>
                <Link to='/product'>
                    <span className="name" style={{ color: '#868695', margin: '0 8px', fontSize: '17px' }}>продукт</span>
                </Link>
            </div>
            <div className="flex justify-center items-center mt-5 p-2 flex-wrap">
                {category.map((item, index) => {
                    return <Shopcontent item={item} key={index} />
                })}
            </div>
        </div>
    )
}