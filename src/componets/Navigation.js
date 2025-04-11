export default function Navigation({ curentindex, setCuretindex }) {
    return (
        <div className="flex justify-center p-10">
            {Array.from({ length: 5 }).map((item, index) => {
                return <span key={index} onClick={() => {
                    setCuretindex(index)
                }}
                    style=
                    {{
                        width: '8px',
                        background: 'black',
                        cursor: 'pointer',
                        borderRadius: '50%',
                        opacity: `${curentindex == index ? '1' : '0.5'}`,
                        height: '8px',
                        margin: '0 10px'
                    }}>{item}</span>
            })}
        </div>
    )
}