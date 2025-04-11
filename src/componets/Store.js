import { productStore } from "./ProductStore"
import { Allproduct } from "./redux/reduxtolkit/shopReducer"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Productcontent from "./Productcontent";
import ShowMore from "./ShowMore";
import Notresults from "./Notresults";
import Filterstore from "./Filterstore";
import Load from "./Load";

export default function Store() {
    const store = useSelector(state => state.product.arr)
    const newfilter = useSelector(state => state.filteritem.Iscategory)
    const newcategory = useSelector(state => state.filteritem.category)
    const gender = useSelector(state => state.filteritem.Isgender)
    const newgender = useSelector(state => state.filteritem.gender)
    const newcolor = useSelector(state => state.filteritem.colors)
    const iscolor = useSelector(state => state.filteritem.Iscolor)

    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [btns, setBtns] = useState(true)

    const dispath = useDispatch()

    useEffect(() => {
        dispath(Allproduct(productStore))
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [loading])

    function ShowProduct() {
        setPage(page + 1)
        if ((page * 4 >= productStore.length)) {
            setBtns(false)
        }
    }
    function Loading() {
        setLoading(true)
    }
    return (
        <div>
            <Filterstore Loading={Loading} />
            {loading ? <Load /> : <div className="flex justify-center items-center p-10 flex-wrap">
                {(newfilter ? newcategory : gender ? newgender : iscolor ? newcolor : store).slice(0, page * 4).map((item, index) => {
                    return <Productcontent item={item} key={index} />
                })}
            </div>}
            {btns ? <ShowMore ShowProduct={ShowProduct} /> : <Notresults />}
        </div>
    )
}