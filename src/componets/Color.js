import { useDispatch } from "react-redux"
import { Filtercolor } from "./redux/reduxtolkit/filters/filterReducer"

export default function Color({setcolorname, Loading,  setShowcolor, item }) {
    const dispath = useDispatch()
    return (
        <div className="border" style={{ padding: '8px', margin: '10px 0' }}>
            <label form='color'>
                <input onChange={()=>{
                    setcolorname(item.color)
                    dispath(Filtercolor(item))
                    Loading()
                    setShowcolor(false)
                }} type='radio' name="color" id="color"></input>
            </label>
            <span style={{ marginLeft: '13px', fontSize: '19px' }}>{item.color}</span>
        </div>
    )
}