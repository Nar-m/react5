import ReactDOM from 'react-dom';

export default function Ligtbox({ showmodal, Handlenext, Handlprev, activeindex, element, Modalclose }) {
    return (
        ReactDOM.createPortal(
            <div className={showmodal ? 'image-slider-wrapper active' : 'image-slider-wrapper'}>
                <div>
                    <span onClick={Modalclose}> &times;</span>
                </div>
                <div style={{ marginRight: '10%' }}>
                    <i onClick={Handlprev} className="fa-solid fa-angle-left"></i>
                </div>
                <div className={`${activeindex ? 'img-slider active' : 'img-slider'}`}>
                    <img src={element}></img>
                </div>
                <div style={{ marginLeft: '10%' }}>
                    <i onClick={Handlenext} className="fa-solid fa-angle-right"></i>
                </div>
            </div>, document.getElementById('ligtbox')
        )
    )
}