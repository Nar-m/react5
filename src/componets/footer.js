import { Link } from "react-router-dom"
import './footer.css';
import logo from './logo.png'
import { useSelector } from "react-redux";

export default function Footer() {
    const user = useSelector(state => state.login.user)
    const { autuser } = user
    const Scrollto = () => {
        window.scrollTo({
            top: '0',
            behavior: 'smooth'
        })
    }
    return (
        <footer>
            <div className="fotter-conteiner">
                <div className="futer-colmn">
                    <h4>Products</h4>
                    <ul className="fotter-list">
                        <li>
                            <Link>Teams</Link>
                        </li>
                        <li>
                            <Link>advertising</Link>
                        </li>
                        <li>
                            <Link>Talant</Link>
                        </li>
                    </ul>
                </div>
                <div className="futer-colmn">
                    <h4>Network</h4>
                    <ul className="fotter-list">
                        <li>
                            <Link>technology</Link>
                        </li>
                        <li>
                            <Link>sciense</Link>
                        </li>
                        <li>
                            <Link>business</Link>
                        </li>
                        <li>
                            <Link>professional</Link>
                        </li>
                        <li>
                            <Link>API</Link>
                        </li>
                    </ul>
                </div>
                <div className="futer-colmn">
                    <h4>Company</h4>
                    <ul className="fotter-list">
                        <li>
                            <Link to="blog">Blog</Link>
                        </li>
                        {autuser ?
                            <li>
                                <Link to="product">Product</Link>
                            </li> : <li>
                                <Link to="login">Contact us</Link>
                            </li>}

                    </ul>
                </div>
                <div className="futer-colmn">
                    <h4>Follow us</h4>
                    <div className="futer-icon">
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
            <div style={{ position: 'absolute', color: 'black', right: '20px' }}>
                <i onClick={Scrollto} style={{ padding: '12px', borderRadius: '50%', background: 'white', scrollBehavior: 'smooth' }} className="fa-solid fa-chevron-up"></i>
            </div>
            <div className="footer-bottom">
                <div>
                    <Link to='/'>
                        <img style={{ width: '200px' }} src={logo}></img>
                    </Link>
                </div>
                <div>
                    <p>All rights reserved &copy; creativo {new Date().getDate()}. {new Date().getMonth()}. {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    )
}