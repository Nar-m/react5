import { useState, useEffect } from "react";
import Cartloading from "./Cartloading";
import Cartcontent from "./Cartcontent";

export default function Cart() {
    const [cartloading, setcartloading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setcartloading(false)
        }, 800)
    }, [cartloading])

    return (
        <div style={{ background: '#eae7e7', paddingTop: '80px', minHeight: '50vh' }}>
            {cartloading ? <Cartloading /> : <Cartcontent />}
        </div>
    )
}