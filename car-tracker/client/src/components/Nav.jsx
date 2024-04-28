import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { train_intermodal } from '../assets';

const Nav = (props) => {
    const { title } = props
    return (
        <header className='bg-slate-500 flex flex-row justify-between items-center p-5'>
                <div>
                    <img className='w-52' src={train_intermodal} alt="Freight Train" />
                </div>
                <div>
                    <h1 className='text-fuchsia-100 decoration-solid text-6xl m-auto' >{title}</h1>
                </div>
                <div>
                    <button className='bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'><Link to={'/'}>Consist List</Link></button>
                </div>
        </header>
    )
}

export default Nav;