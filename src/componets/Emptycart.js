import { Link } from "react-router-dom"

export default function Emptycart() {
    return (
        <div className="flex justify-between items-center flex-col" style={{ padding: '28px 24px 40px', borderRadius: '20px', margin: '0 40px', background: '#fff' }}>
            <h1 style={{ marginBottom: '12px', fontWeight: '600', lineHeight: '32px', fontSize: '24px' }}>В корзине пока пусто</h1>
            <p style={{ fontSize: '16px', textAlign: 'center', color: '#868695', marginBottom: '24px', maxWidth: '365px' }}>Загляните на главную, чтобы выбрать товары или найдите нужное в поиске</p>
            <Link to="/">
                <button style={{
                    fontWeight: '600',
                    textDecoration: 'none',
                    letterSpacing: '0',
                    borderRadius: '8px',
                    verticalAlign: 'top',
                    color: '#fff',
                    lineHeight: '22px',
                    fontSize: '16px',
                    padding: '8px 24px 10px',
                    background: '#cb11ab',
                    fontFamily: 'revert-layer'
                }}>Перейти на главную</button>
            </Link>
        </div>
    )
}