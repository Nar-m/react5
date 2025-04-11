import { useDispatch } from "react-redux"
import { Filterproduct } from "./redux/reduxtolkit/filters/filterReducer"

export default function Categorycontent({ setCategoryname, Loading, item, setSow }) {
    const dispath = useDispatch()
    return (
        <div className="border" style={{ padding: '8px', margin: '10px 0' }}>
            <label form='category'>
                <input onChange={() => {
                    setCategoryname(item.category)
                    dispath(Filterproduct(item))
                    Loading()
                    setSow(false)
                }} type='radio' name='category' id='category'></input>
            </label>
            <span style={{ marginLeft: '13px', fontSize: '19px' }}>{item.category}</span>
        </div>
    )
}