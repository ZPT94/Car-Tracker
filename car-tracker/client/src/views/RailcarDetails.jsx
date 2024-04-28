import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';

const RailcarDetails = (props) => {
    const [railcar, setRailcar] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:9999/api/railcars/${id}`)
            .then((res) => {
                setRailcar(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <Nav title={`${railcar.prefix} ${railcar.number} Status`} />
            <div className='m-5' >
                <h2 className='text-4xl mb-4'>Description:</h2>
                <h3 className='text-xl'>Features:</h3>
                <h4 className='ml-4 mb-8'>{railcar.features}</h4>
                <h3 className='text-xl'>Modifications:</h3>
                <h4 className='ml-4 mb-8'>{railcar.modifications}</h4>
                <h3 className='text-xl'>Load Status:</h3>
                <h4 className='ml-4 mb-8'>{railcar.loaded ? 'Loaded' : 'Empty'}</h4>
                <h3 className='text-xl'>Location:</h3>
                <h4 className='ml-4'>{railcar.location}</h4>
            </div>
            <button className='shadow bg-blue-800 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ml-5'><Link className='btn btn-primary m-5' to={`/railcars/edit/${railcar._id}`}>Update</Link></button>
        </div>
    )
}

export default RailcarDetails