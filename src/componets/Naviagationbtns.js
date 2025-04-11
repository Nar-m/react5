import { useDispatch } from "react-redux";
import { Filteritems } from "./redux/reduxtolkit/filtercategory/filtercategory";
import { Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './navigationbtns.css';
import { useRef, useState } from "react";


export default function Naviagationbtns() {
    const [btnsleft, setbtnsleft] = useState(false)
    const [btnsright, setbtnsright] = useState(true)
    const buttons = ['switer', 'jacket', 'blouse', 'permegi', 'jeans', 'shirt', 'bag', 'rings', 'castyum', 'headset', 'children', 'sport']
    const dispath = useDispatch()
    const scrollref = useRef()

    const Nextbtns = () => {
        scrollref.current.scrollLeft += 250
    }
    const Prevbtns = () => {
        scrollref.current.scrollLeft -= 250
    }
    const Showbtns = () => {
        if (scrollref.current.scrollLeft === 0) {
            setbtnsleft(false)
        }
        else if (Math.ceil(scrollref.current.scrollLeft) === scrollref.current.scrollWidth - scrollref.current.offsetWidth) {
            setbtnsright(false)
        }
        else {
            setbtnsright(true)
            setbtnsleft(true)
        }
    }
    return (
        <div className="flex justify-center items-center py-8">
            <button style={{ color: `${btnsleft ? 'black' : 'rgb(185, 185, 185)'}` }} disabled={btnsleft ? false : true} onClick={() => Prevbtns()}>
                <FontAwesomeIcon size="2xl" icon={faChevronLeft} />
            </button>
            <div className="buttons" ref={scrollref} onScroll={Showbtns}>
                {buttons.map((but, index) => {
                    return (
                        <div key={index} className="mr-4">
                            <Link to={"/filteritems/" + but}>
                                <Button onClick={() => dispath(Filteritems(but))}
                                    color="gray"
                                    size="lg"
                                    variant="outlined"
                                    ripple={true}
                                    className="hover:bg-green-300 duration-300 ease-in-out"
                                >
                                    {but}
                                </Button>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <button style={{ color: `${btnsright ? 'black' : 'rgb(185, 185, 185)'}` }} disabled={btnsright ? false : true} onClick={() => Nextbtns()}>
                <FontAwesomeIcon size="2xl" icon={faChevronRight} />
            </button>
        </div>
    )
}