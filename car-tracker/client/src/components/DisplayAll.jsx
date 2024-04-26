import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DisplayAll = (props) => {

    const [railcars, setRailcars] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9999/api/railcars')
            .then((res) => {
                console.log(res);
                setRailcars(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <header className='bg-slate-500 flex flex-row justify-between items-center p-5' >
                <div>
                    <h1 className='text-fuchsia-100 decoration-solid text-6xl' >Railcar Fleet</h1>
                </div>
                <div>
                    <button className='bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' ><Link to={'/railcars/add'}>Add Railcar</Link></button>
                </div>
            </header>
            <table className='table-fixed w-full text-left m-5' >
                <thead>
                    <tr>
                        <th>Car Prefix</th>
                        <th>Car Number</th>
                        <th>Car type</th>
                        <th>Load Status</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody className=' hover:bg-slate-300 border-2' >
                    {
                        railcars.map(railcar => (
                            < tr key={railcar._id}>
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
        </div >
    )
}

export default DisplayAll;