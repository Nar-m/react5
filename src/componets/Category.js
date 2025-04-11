import Categoryslide from "./Categoryslide";
import { useState } from "react";
import Dottimg from "./Dottimg";
import './category.css';

const categorystore = [
    "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-PromoWidget24-Desk-Banner1-07Mar23.jpg",
    "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-UBERHP-GiftCard-13modblock-oneBythree-A-07Mar2023.jpg",
    "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget26-Desk-Banner1-08Mar23.jpg",
    "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget23-Desk-Banner1-14Mar23.gif",
]
export default function Category() {
    const [curentindex, setCurentindex] = useState(0)

    const Slideshow = (i) => {
        setCurentindex(i)
    }
    return (
        <div className="store" style={{ overflow: 'hidden' }}>
            <div className="text-center flex justify-center p-2">
                <h2 style={{ fontSize: '30px', fontWeight: '600', width: '240px', padding: '8px', borderBottom: '4px solid orange' }}>Category Store</h2>
            </div>
            <div className="categorys" style={{ maxWidth: '1300px', transition: '0.8s all', borderRadius: '10px', margin: '15px auto', position: 'relative', width: '100%' }}>
                {categorystore.map((item, index) => {
                    return <Categoryslide curentindex={curentindex === index} item={item} key={index} />
                })}
                <Dottimg curentindex={curentindex} categorystore={categorystore} Slideshow={Slideshow} />
            </div>
        </div>
    )
}