export default function Placholder() {
    return (
        <>
            <div style={{ width: '100%', height: '453px', border: 'none' }} className="card" aria-hidden="true">
                <div style={{ width: '100%' }} className="card-body">
                    <h5 className="card-title placeholder-glow">
                        <span className="placeholder col-6"></span>
                    </h5>
                    <p class="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-8"></span>
                    </p>
                    <a href="#" tabindex="-1" className="btn btn-primary disabled placeholder col-6"></a>
                </div>
            </div>
        </>
    )
}