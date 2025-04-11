import { allproduct } from "./allproductitem"
import Moreproductitem from "./Moreproductitem"
import { useState, useEffect } from "react"
import Pagination from "./Pagination"
import './pagination.css'

export default function Moreimg() {
    const [curentpage, setCarentpage] = useState(1)
    const [newcaretnpage] = useState(6)
    const [pagenumberlimit] = useState(5)
    const [maxnumberlimit, setmaxnumberlimit] = useState(5)
    const [minnumbers, setminnumbers] = useState(0)
    const [placholder, setPlacholder] = useState(false)
    const lastcarentpages = curentpage * newcaretnpage
    const firstcarentpages = lastcarentpages - newcaretnpage

    useEffect(() => {
        setTimeout(() => {
            setPlacholder(false)
        }, 1200)
    }, [placholder])

    const Indexchanges = (i) => {
        setCarentpage(i)
    }
    function Prevpage() {
        setCarentpage(curentpage - 1)
        if ((curentpage - 1) % pagenumberlimit == 0) {
            setmaxnumberlimit(maxnumberlimit - pagenumberlimit)
            setminnumbers(minnumbers - pagenumberlimit)
        }
    }
    function Nextpage() {
        setCarentpage(curentpage + 1)
        if (curentpage + 1 > maxnumberlimit) {
            setmaxnumberlimit(maxnumberlimit + pagenumberlimit)
            setminnumbers(minnumbers + pagenumberlimit)
        }
    }

    return (
        <>
            <div className="text-center flex justify-center p-5 text-2xl font-bold">
                <h1 className="p-5">Смотреть все отзывы</h1>
            </div>
            <div style={{ scrollBehavior: 'smooth' }} className="flex justify-center items-center p-5 flex-wrap">
                {allproduct.slice(firstcarentpages, lastcarentpages).map((item, index) => {
                    return <Moreproductitem placholder={placholder} item={item} key={index} />
                })}
            </div>
            <Pagination
                firstcarentpages={firstcarentpages}
                pagenumberlimit={pagenumberlimit}
                maxnumberlimit={maxnumberlimit}
                minnumbers={minnumbers}
                lastcarentpages={lastcarentpages}
                setPlacholder={setPlacholder}
                curentpage={curentpage}
                Prevpage={Prevpage}
                Nextpege={Nextpage}
                Indexchanges={Indexchanges}
                newcaretnpage={newcaretnpage}
                moreproduct={allproduct} />
        </>
    )
}