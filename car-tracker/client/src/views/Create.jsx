import React, { useState } from 'react';
import axios from 'axios';
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom'

const Create = (props) => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [getter, setter] = useState({
        prefix: "",
        number: "",
        type: "",
        features: "",
        modifications: "",
        loaded: false,
        location: ""
    })

    const changeHandler = (e) => {
        setter((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value
        }))
    }

    const changeHandlerCheckbox = (e) => {
        setter((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.checked
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9999/api/railcars', getter)
            .then((res) => {
                navigate(`/railcars/${res.data._id}/details`)
            })
            .catch((err) => {
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div>
            <Nav title='Create Railcar' />
            <form className='w-50 mx-auto' onSubmit={submitHandler}>
                <div>
                    <label className='form-label' >Car Prefix:</label>
                    <div>
                        <input type="text" name="prefix" value={getter.prefix} onChange={(e) => changeHandler(e)} />
                        {
                            errors.prefix ?
                                <p className='text-danger'>{errors.prefix.message}</p> :
                                null
                        }
                    </div>
                </div>
                <div>
                    <label className='form-label' >Car Number:</label>
                    <div>
                        <input type="number" name="number" value={getter.number} onChange={(e) => changeHandler(e)} />
                        {
                            errors.number ?
                                <p className='text-danger'>{errors.number.message}</p> :
                                null
                        }
                    </div>
                </div>
                <div>
                    <label className='form-label' >Car Type:</label>
                    <div>
                        <select name="type" value={getter.type} onChange={(e) => changeHandler(e)}>
                            <option value="">Select Car Type</option>
                            <option value="Autorack">Autorack</option>
                            <option value="Boxcar">Boxcar</option>
                            <option value="caboose">Caboose</option>
                            <option value="Centerbeam">Centerbeam</option>
                            <option value="Covered Hopper">Covered Hopper</option>
                            <option value="Coil Car">Coil Car</option>
                            <option value="Flatcar">flatcar</option>
                            <option value="Gondola">Gondola</option>
                            <option value="Intermodal">Intermodal</option>
                            <option value="Hopper">Hopper</option>
                            <option value="MOW">MOW</option>
                            <option value="Passenger">Passenger</option>
                            <option value="Refrigerator">Refrigerator</option>
                            <option value="Tank Car">Tank Car</option>
                            <option value="Well Car">Well Car</option>
                            <option value="Other">Other</option>
                        </select>
                        {
                            errors.type ?
                                <p className='text-danger'>{errors.type.message}</p> :
                                null
                        }
                    </div>
                </div>
                <div>
                    <label className='form-label' >Location:</label>
                    <div>
                        <input type="text" name="location" value={getter.location} onChange={(e) => changeHandler(e)} />
                        {
                            errors.location ?
                                <p className='text-danger'>{errors.location.message}</p> :
                                null
                        }
                    </div>
                </div>
                <div>
                    <label className='form-label' >Features:</label>
                    <div>
                        <input type="text" name="features" value={getter.features} onChange={(e) => changeHandler(e)} />
                        {
                            errors.features ?
                                <p className='text-danger'>{errors.features.message}</p> :
                                null
                        }
                    </div>
                </div>
                <div>
                    <label className='form-label' >Modifications:</label>
                    <div>
                        <input type="text" name="modifications" value={getter.modifications} onChange={(e) => changeHandler(e)} />
                        {
                            errors.modifications ?
                                <p className='text-danger'>{errors.modifications.message}</p> :
                                null
                        }
                    </div>
                </div>
                <div>
                    <input className='m-2' type="checkbox" name="loaded" checked={getter.loaded} onChange={(e) => changeHandlerCheckbox(e)} />
                    <label className='form-label' >Loaded?</label>
                    {
                        errors.loaded ?
                            <p className='text-danger'>{errors.loaded.message}</p> :
                            null
                    }
                </div>
                <button className='btn btn-primary' >Create</button>
            </form>
        </div>
    )
}

export default Create;