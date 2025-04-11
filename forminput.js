import user from './user.png'

export default function Forminput(props) {
    const { type, setType, upload, Uploadimg} = props
    return (
        <>
            <div style={{ position: 'relative' }} className='user'>
                <input type='text'  className='username'></input>
                <div className='placholder'>Username</div>
            </div>
            <div style={{ position: 'relative' }} className='mail'>
                <input type='email' className='email'></input>
                <div className='placholder'>Email</div>
            </div>
            <div style={{ position: 'relative' }} className='pass'>
                <input type={type ? "text" : "password"} placeholder='password' className='password'></input>
                {type ? <i onClick={() => setType(false)} style={{ position: 'absolute', color: '#4f4f4f', top: '10px', right: '-75%' }} className="fa-solid fa-eye"></i> : <i onClick={() => setType(true)} style={{ position: 'absolute', top: '10px', right: '-75%' }} className="fa-solid fa-eye-slash"></i>}
            </div>
            <div>
                <img onClick={() => file.current.click()} style={{ width: '80px', borderRadius: '50%', height: '80px' }} src={upload ? URL.createObjectURL(upload) : user}></img>
                <input onChange={Uploadimg} ref={file} type='file' style={{ display: 'none' }}></input>
            </div>
        </>
    )
}