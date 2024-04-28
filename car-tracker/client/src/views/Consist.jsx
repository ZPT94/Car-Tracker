import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import lodash from 'lodash';
import { train_intermodal } from '../assets';

const Consist = (props) => {

    const [railcars, setRailcars] = useState([]);
    const [getter, setter] = useState([]);
    const [trains, setTrains] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9999/api/railcars')
            .then((res) => {
                setRailcars(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const changeHandler = (e) => {
        setter((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value
        }))
    }

    const createConsist = (e) => {
        e.preventDefault();
        const size = getter.size;
        setTrains(lodash.sampleSize(railcars, size))
    }

    return (
        <div>
            <header className='bg-slate-500 flex flex-row justify-between items-center p-5'>
            <div>
                <img className='w-52' src={train_intermodal} alt="Freight Train" />
            </div>
            <div>
                <h1 className='text-fuchsia-100 decoration-solid text-6xl m-auto' >Create Consist</h1>
            </div>
            <div>
                <button className='bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'><Link to={'/'}>Consist List</Link></button>
            </div>
        </header>
            <table className='table-fixed w-full text-left p-5 mt-10' >
                <thead>
                    <tr>
                        <th>Car Prefix</th>
                        <th>Car Number</th>
                        <th>Car type</th>
                        <th>Load Status</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        trains.map(railcar => (
                            < tr className=' hover:bg-slate-300 border-2' key={railcar._id}>
                                <td>{railcar.prefix}</td>
                                <td className='text-decoration-line: underline text-blue-600' ><Link to={`/railcars/${railcar._id}/details`}>{railcar.number}</Link></td>
                                <td>{railcar.type}</td>
                                <td>{railcar.loaded ? 'Loaded' : 'Empty'}</td>
                                <td>{railcar.location}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table >
            <form className='w-full max-w-sm mt-10' onSubmit={createConsist}>
                <div className='md:flex md:items-center mb-6'>
                    <div className='md:w-1/3' >
                        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' name="size">Train Length</label>
                    </div>
                    <div className='md:w-2/3'>
                        <select className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800' name="size" value={getter.size} onChange={(e) => changeHandler(e)}>
                            {
                                railcars.map((railcar, index) => (
                                    <option value={index + 1} key={index}>{index + 1}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className='md:flex md:items-center'>
                    <div className='md:w-1/3'></div>
                    <div className='md:w-2/3'>
                        <button className='shadow bg-blue-800 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'>Create Consist</button>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default Consist;