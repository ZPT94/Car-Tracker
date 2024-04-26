import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    const { title } = props
    return (
        <header className='bg-cyan-700' >
            <nav className=''>
                <div>
                    <h1 className='text-slate-200 decoration-solid text-6xl' >{title}</h1>
                </div>
                <div className='d-flex flex-column' >
                    <Link to={'/'}>Consist List</Link>
                </div>
            </nav>
        </header>
    )
}

export default Nav;