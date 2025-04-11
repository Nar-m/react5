import './login.css'
import 'react-international-phone/style.css';
import { useState, useEffect } from 'react'
import Lpsloading from './lpsloading';
import Forminput from './forminput';

export default function Login() {
    const [lpsloading, setlpsloading] = useState(true)
    const [value, setValue] = useState({ username: "", email: "", password: "" })

    useEffect(() => {
        setTimeout(() => {
            setlpsloading(false)
        }, 850)
    }, [])

    const onChange = (e) => {
        const { name, value } = e.target
        setValue({ ...value, [name]: value })
    }

    return (
        <>
            {lpsloading ? <Lpsloading /> :<div className='flex justify-center items-center flex-col'>
                <div className='login-title' style={{marginBottom: '50px'}}>
                    <span style={{lineHeight: '30px'}} className='text-2xl text-gradient-to-tr '>To activate the shopping page and make purchases, please register on our page</span>
                </div>
                <Forminput
                    value={value}
                    onChange={onChange} />
            </div>}
        </>
    )
}