import './spinner.css';

export default function Spinerloading() {
    return (
        <div style={{ height: '100vh' }} className="flex justify-center items-center p-2">
            <div>
                <span className="loader"></span>
            </div>
        </div>
    )
}