import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    const { title } = props
    return (
        <header className=' bg-dark-subtle' >
            <nav className='d-flex justify-content-between border p-1'>
                <div>
                    <h1>{title}</h1>
                </div>
                <div className='d-flex flex-column' >
                    <Link to={'/'}>Consist List</Link>
                </div>
            </nav>
        </header>
    )
}

export default Nav;