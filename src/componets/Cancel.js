import { Link } from "react-router-dom"


export default function Cancelbtn() {
    return (
        <Link to="/cart">
            <div style={{width: '100%'}}>
                <button style={{ width: '100%', fontSize: '18px', padding: '13px', fontFamily: 'poppins, sans-serif', borderRadius: '5px', color: '#f80', border: '1px solid #f80' }}>Cancel</button>
            </div>
        </Link>
    )
}