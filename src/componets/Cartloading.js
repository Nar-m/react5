

export default function Cartloading() {
    return (
        <div className='flex justify-center items-center p-5'>
            <div style={{color: '#cb11ab', width: '40px', height: '40px'}} className="spinner-border m-5" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}