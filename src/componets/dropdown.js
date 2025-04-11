import './dropdown.css'
import { useSelector, useDispatch } from 'react-redux'
import { Logaout } from './redux/reduxtolkit/login/loginReducer'
import { Closedrowdown } from './redux/reduxtolkit/dropdown/dropdownReducer'
import { useNavigate } from 'react-router-dom'


export default function Dropdown() {
    const dropdown = useSelector(state => state.dropdown.dropdown)
    const dispath = useDispatch()
    const navigate = useNavigate()
    return (
        <div className={dropdown ? 'menu open' : 'menu'}>
            <h3>Website Designer</h3>
            <ul>
                <li>
                    <i className="fa-regular fa-circle-user"></i>
                    My Profile
                </li>
                <li>
                    <i className="fa-regular fa-pen-to-square"></i>
                    Edit Profile
                </li>
                <li>
                    <i className="fa-regular fa-envelope"></i>
                    Inbox
                </li>
                <li>
                    <i className="fa-solid fa-gear"></i>
                    Settings
                </li>
                <li>
                    <i className="fa-regular fa-circle-question"></i>
                    Help
                </li>
                <li onClick={()=> {
                    dispath(Logaout())
                    dispath(Closedrowdown())
                    navigate('/login')
                }}>
                    <i className="fa-solid fa-right-from-bracket"></i>
                    Logout
                </li>
            </ul>
        </div>
    )
}