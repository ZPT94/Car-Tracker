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
                <h2>Description</h2>
                <h4>Features: {railcar.features}</h4>
                <h4>Modifications: {railcar.modifications}</h4>
                <h4>Load Status: {railcar.loaded ? 'Loaded' : 'Empty'}</h4>
                <h4>Location: {railcar.location}</h4>
            </div>
            <Link className='btn btn-primary m-5' to={`/railcars/edit/${railcar._id}`}>Update</Link>
        </div>
    )
}

export default RailcarDetails