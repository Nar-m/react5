export default function Wishlistcontent({ item }) {
    return (
        <>
            <div style={{ width: '130px', height: '130px' }}>
                <img style={{ width: '100%', borderRadius: '5px', height: '100%' }} src={item.image}></img>
            </div>
            <div>
                <h3>{item.title}</h3>
            </div>
            <div>
                <p>{item.text}</p>
            </div>
            <div>{item.price} $</div>
        </>
    )
}