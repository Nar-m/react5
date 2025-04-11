import { useDispatch } from "react-redux"
import { Filtergender } from "./redux/reduxtolkit/filters/filterReducer"

export default function Genderitem({ setgendername, Loading, setShowgender, item }) {
    const dispath = useDispatch()
    return (
        <div className="border" style={{ padding: '8px', margin: '10px 0' }}>
            <label form="gender">
                <input onChange={() => {
                    setgendername(item.name)
                    dispath(Filtergender(item))
                    Loading()
                    setShowgender(false)
                }} type="radio" name="gander" id="gander"></input>
            </label>
            <span style={{ marginLeft: '13px', fontSize: '19px' }}>{item.name}</span>
        </div>
    )
}