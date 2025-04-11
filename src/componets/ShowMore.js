export default function ShowMore({ShowProduct}){
    return(
        <div className="flex justify-center items-center p-10">
            <button onClick={ShowProduct} style={{padding: '12px 35px', borderRadius: '8px', color: 'white', fontSize: '17px', background: 'green'}}>Show More</button>
        </div>
    )
}