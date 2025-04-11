import './filterstore.css';
import { useState } from 'react';
import { array } from './array';
import Categorycontent from './categorycontent';
import Genderitem from './genderitem';
import Color from './Color';

const gender = [{ name: 'male' }, { name: 'female' }]
const colors = [{ color: 'blue' }, { color: 'brown' }, { color: 'black' }, { color: 'pink' }, { color: 'yellow' }, { color: 'red' }, { color: 'gray' }]
export default function Filterstore({ Loading }) {

    const [showcategory, setSow] = useState(false);
    const [showgender, setShowgender] = useState(false);
    const [showcolor, setShowcolor] = useState(false);
    const [categoryname, setCategoryname] = useState('');
    const [gendername, setgendername] = useState('')
    const [colorname, setcolorname] = useState('')
    return (
        <div className='filter'>
            <div className='relative'>
                <div onClick={() => {
                    if (showcategory) {
                        setSow(false)
                    }
                    else {
                        setSow(true)
                    }
                    setShowgender(false)
                    setShowcolor(false)
                }} className='category'>
                    <span>{categoryname ? categoryname : 'Filter by category'}</span>
                    <i
                        style=
                        {{
                            marginLeft: '13px',
                            transform: `rotate(${showcategory ? '180deg' : '0deg'})`

                        }} className="fa-solid fa-chevron-down"></i>
                </div>
                <div
                    style=
                    {{
                        transform: `scale(${showcategory ? '1' : '0'})`,
                        transition: '0.2s all',
                        position: 'absolute',
                        padding: '12px',
                        background: 'white',
                        zIndex: '1',
                        margin: '10px 0'
                    }}>
                    {array.map((item, index) => {
                        return (
                            <Categorycontent setCategoryname={setCategoryname} Loading={Loading} setSow={setSow} item={item} key={index} />
                        )
                    })}
                </div>
            </div>
            <div className='relative'>
                <div onClick={() => {
                    if (showgender) {
                        setShowgender(false)
                    }
                    else {
                        setShowgender(true)
                    }
                    setSow(false)
                    setShowcolor(false)
                }} className='gender'>
                    <span>{gendername ? gendername : 'filter by gender'}</span>
                    <i style={{ transform: `rotate(${showgender ? '180deg' : '0deg'})` }} className="fa-solid fa-chevron-down"></i>
                </div>
                <div style={{
                    transform: `scale(${showgender ? '1' : '0'})`,
                    transition: '0.2s all',
                    position: 'absolute',
                    padding: '20px',
                    background: 'white',
                    zIndex: '1',
                    margin: '10px 0'
                }}>
                    {gender.map((item, index) => {
                        return <Genderitem setgendername={setgendername} Loading={Loading} setShowgender={setShowgender} item={item} key={index} />
                    })}
                </div>
            </div>
            <div className='relative'>
                <div onClick={() => {
                    if (showcolor) {
                        setShowcolor(false)
                    }
                    else {
                        setShowcolor(true)
                    }
                    setSow(false)
                    setShowgender(false)
                }} className='coloritem'>
                    <span>{colorname ? colorname : 'Filter by color'}</span>
                    <i style
                        ={{
                            marginLeft: '13px',
                            transform: `rotate(${showcolor ? '180deg' : '0deg'})`
                        }} className="fa-solid fa-chevron-down"></i>
                </div>
                <div style={{
                    transform: `scale(${showcolor ? '1' : '0'})`,
                    position: 'absolute',
                    transition: '0.2s all',
                    position: 'absolute',
                    padding: '20px',
                    background: 'white',
                    zIndex: '1',
                    margin: '10px 0'
                }}>
                    {colors.map((item, index) => {
                        return (
                            <Color setcolorname={setcolorname} Loading={Loading} setShowcolor={setShowcolor} item={item} key={index} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}