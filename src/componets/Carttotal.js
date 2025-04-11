import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Carttotal() {
    const totael = useSelector(state => state.cart.totael)
    const userid = useSelector(state => state.login.user)
    const { autuser } = userid
    return (
        <div className="cart-totael" style={{ background: 'white', borderRadius: '20px', height: '230px', marginTop: '50px', padding: '24px', width: '55%', lineHeight: '25px' }}>
            <div style={{ marginBottom: '12px' }}>
                <span style={{ borderBottom: '1px dashed', cursor: 'pointer', fontWeight: '600', color: '#cb11ab', borderColor: 'rgba(203,17,171,.2)', lineHeight: '22px', fontSize: '16px' }}>Выбрать адрес доставки</span>
            </div>
            <div style={{ marginTop: '12px' }}>
                <span style={{ fontSize: '16px', lineHeight: '22px', color: '#868695' }}>Товары, 1 шт.</span>
            </div>
            <div className="flex justify-between items-center mt-2 p-2">
                <h2 style={{ fontSize: '30px', fontWeight: '700', color: '#242424' }}>Итого</h2>
                <span style={{ fontSize: '30px', fontWeight: '700', color: '#242424' }}>{totael} ₽</span>
            </div>
            <div style={{ width: '100%', marginTop: '12px' }}>
                {autuser ?
                    <button style={{ width: '100%', fontWeight: '600', color: '#fff', borderRadius: '8px', fontSize: '16px', background: '#cb11ab', lineHeight: '22px', padding: '11px 24px 13px' }}>Заказать</button>
                    : <Link to="/login">
                        <button style={{ width: '100%', fontWeight: '600', color: '#fff', borderRadius: '8px', fontSize: '16px', background: '#cb11ab', lineHeight: '22px', padding: '11px 24px 13px' }}>Заказать</button>
                    </Link>
                }
            </div>
        </div>
    )
}