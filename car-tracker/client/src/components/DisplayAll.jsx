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
            <header className='' >
                <div>
                    <h1>Railcar Fleet</h1>
                </div>
                <div>
                    <Link className='' to={'/railcars/add'}>Add Railcar</Link>
                </div>
            </header>
            <table className='' >
                <thead>
                    <tr>
                        <th>Car Prefix</th>
                        <th>Car Number</th>
                        <th>Car type</th>
                        <th>Load Status</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        railcars.map(railcar => (
                            < tr key={railcar._id}>
                                <td>{railcar.prefix}</td>
                                <td><Link to={`/railcars/${railcar._id}/details`}>{railcar.number}</Link></td>
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