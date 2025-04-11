export default function Dottimg(props) {
    const { curentindex, categorystore, Slideshow } = props
    return (
        <div style={{ zIndex: '1', transform: 'translateY(-100px)' }} className="flex justify-center items-center">
            {categorystore.map((item, index) => {
                return (
                    <div className="dott-img" style=
                        {{
                            width: '200px',
                            height: '200px',
                            margin: '0 15px',
                            borderRadius: '10px',
                            border: `${curentindex === index ? '3px solid red' : 'none'}`,
                        }}>
                        <img style={{ width: '100%', height: '100%', borderRadius: '10px', }} onClick={() => Slideshow(index)} key={index} src={item}></img>
                    </div>
                )
            })}
        </div>
    )
}