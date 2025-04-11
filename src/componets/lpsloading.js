
export default function Lpsloading() {
    return (
        <div className="flex justify-center items-center" style={{ minHeight: '50vh', color: '#2196f3' }}>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}