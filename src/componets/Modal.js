
import './modalimg.css';
import ReactDOM from 'react-dom';
import { useContext } from 'react';
import { ModalContext } from './Modalprovider';

export default function Modalimg() {
    const { active, modal, setActive, Nexmodal, Prevmodal } = useContext(ModalContext)
    return (
        ReactDOM.createPortal(
            <div className={active ? 'modalimg active' : 'modalimg'}>
                <span onClick={() => setActive(false)} style={{ position: 'absolute', top: '15px', right: '20px', fontWeight: 'bold', fontSize: '40px', cursor: 'pointer' }}>&times;</span>
                <i onClick={Prevmodal} className="fa-solid fa-angle-left"></i>
                <div style={{ width: '480px', transition: '0.4s all' }}>
                    <img style={{ width: '100%' }} src={modal}></img>
                </div>
                <i onClick={Nexmodal} className="fa-solid fa-angle-right"></i>
            </div>, document.getElementById('img-modal')
        )
    )
}