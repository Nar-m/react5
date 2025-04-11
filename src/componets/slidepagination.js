export default function SlidePagination({ curentindex, setCurentindex }) {
    return (
        <div style={{ width: 'auto', zIndex: '1', transform: `translateX(-50%)`, maxWidth: '100%', position: 'absolute', bottom: '5px', left: '50%' }} className="flex justify-center items-center ">
            {Array.from({ length: 13 }).map((item, index) => {
                return <span onClick={() => setCurentindex(index)} style={{
                    width: '8px',
                    height: '8px',
                    margin: '0 5px',
                    borderRadius: '100%',
                    background: 'white',
                    opacity: `${curentindex === index ? '1' : '0.3'}`,
                    display: 'inline-block',
                    cursor: 'pointer',
                }} key={index}>{item}</span>
            })}
        </div>
    )
}