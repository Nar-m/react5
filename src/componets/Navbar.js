import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"

export default function Navbar({ hover }) {
    const user = useSelector(state => state.login.user)
    const { t } = useTranslation()
    const { autuser } = user
    return (
        <nav className={`${hover ? 'navigation active' : 'navigation'}`}>
            <ul className='flex'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="product">{autuser ? 'Product' : 'Login'}</NavLink>
                </li>
                <li>
                    <NavLink to="blog">Blog</NavLink>
                </li>
            </ul>
        </nav>
    )
}