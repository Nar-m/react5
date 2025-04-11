
export default function Pagination(props) {
    const { setPlacholder, curentpage, Nextpege, Prevpage, maxnumberlimit, minnumbers, Indexchanges, newcaretnpage, moreproduct } = props
    const pages = []

    for (let i = 1; i <= Math.ceil(moreproduct.length / newcaretnpage); i++) {
        pages.push(i)
    }
    return (
        <div className="flex justify-center items-center p-5">

            <button disabled={curentpage === 1 ? true : false} onClick={() => {
                Prevpage()
                setPlacholder(true)
            }} className={`${curentpage === 1 ? 'prevpage active' : 'prevpage'}`}>Prev</button>
            <div>
                {pages.map((item, index) => {
                    if (item < maxnumberlimit + 1 && item > minnumbers) {
                        return <span className={`${curentpage === item ? 'pages active' : 'pages'}`} onClick={() => {
                            setPlacholder(true)
                            Indexchanges(item)
                        }} key={index}>{item}</span>
                    }
                    else {
                        return null
                    }
                })}
            </div>
            <button disabled={curentpage === Math.ceil(moreproduct.length / newcaretnpage) ? true : false} onClick={() => {
                Nextpege()
                setPlacholder(true)
            }} className={`${curentpage === Math.ceil(moreproduct.length / newcaretnpage) ? 'nextpage active' : 'nextpage'}`}>Next</button>
        </div>
    )
}