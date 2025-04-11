import { Link } from "react-router-dom"

export default function Categoryslide({ item, curentindex }) {
    return (
        <>
            <div style={{ width: '100%', opacity: `${curentindex ? '1' : '0'}`, transition: '0.5s all' }}>
                {curentindex && (
                    <Link to="product">
                        <img style={{ width: '100%', borderRadius: '10px' }} src={item}></img>
                    </Link>
                )}
            </div>
        </>
    )
}