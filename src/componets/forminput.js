
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Loginform } from './redux/reduxtolkit/login/loginReducer';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useNavigate } from 'react-router-dom';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";


export default function Forminput(props) {
    const { onChange, value } = props
    const [type, setType] = useState(false)
    const [phonenumber, setPhonenumber] = useState('')
    const error = useSelector(state => state.login.error)
    const { usererror, emailerror, passworderror, phonerror } = error
    const navigate = useNavigate()
    const dispath = useDispatch()
    const Handlchange = (e) => {
        setPhonenumber(e)
    }
    return (
        <div className='w-96'>
            <Card className="w-96">
                <CardHeader
                    variant="gradient"
                    color="gray"
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Sign In
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <div>
                        <Input onChange={onChange} value={value.username} label='name' size='lg' type='text' />
                        <p style={{ color: 'red' }}>{usererror}</p>
                    </div>
                    <div>
                        <Input onChange={onChange} value={value.email} label="Email" size="lg" name='email' type='email' />
                        <p style={{ color: 'red' }}>{emailerror}</p>
                    </div>
                    <div className='relative'>
                        <Input onChange={onChange} value={value.password} label="Password" size="lg" name='password' type={`${type ? 'text' : 'password'}`} />
                        <p style={{ color: 'red' }}>{passworderror}</p>
                        {type ? <i onClick={() => setType(false)} style={{ position: 'absolute', bottom: '20px', top: '15px', right: '17px' }} className="fa-regular fa-eye"></i> : <i onClick={() => setType(true)} style={{ position: 'absolute', top: '15px', bottom: '20px', right: '17px' }} className="fa-regular fa-eye-slash"></i>}
                    </div>
                    <div>
                        <label>
                            Phone number:
                            <PhoneInput
                                country={'us'}
                                value={phonenumber}
                                onChange={Handlchange}
                                inputProps={{ required: true }}
                            />
                        </label>
                        <p style={{ color: 'red' }}>{phonerror}</p>
                    </div>
                    <div className="-ml-2.5">
                        <Checkbox label="Remember Me" />
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button onClick={() => {
                        dispath(Loginform({ value, phonenumber }))
                        if (value && phonenumber) {
                            navigate('/product')
                        }
                    }}
                        className='bg-gradient-to-tr from-gray-900 to-gray-800'
                        color="gray"
                        variant="gradient" fullWidth>
                        Sign In
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Don&apos;t have an account?
                        <Typography
                            as="a"
                            href="#signup"
                            variant="small"
                            color="blue-gray"
                            className="ml-1 font-bold"
                        >
                            Sign up
                        </Typography>
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    )
}