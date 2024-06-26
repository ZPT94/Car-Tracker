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
            <form className='w-full max-w-sm mt-10' onSubmit={submitHandler}>
                <div className='md:flex md:items-center mb-6'>
                    <div className='md:w-1/3' >
                        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' >Car Prefix:</label>
                    </div>
                    <div className='md:w-2/3'>
                        <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800' type="text" name="prefix" value={getter.prefix} onChange={(e) => changeHandler(e)} />
                        {
                            errors.prefix ?
                                <p className='text-red-600'>{errors.prefix.message}</p> :
                                null
                        }
                    </div>
                </div>
                <div className='md:flex md:items-center mb-6'>
                    <div className='md:w-1/3' >
                        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' >Car Number:</label>
                    </div>
                    <div className='md:w-2/3'>
                        <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800' type="number" name="number" value={getter.number} onChange={(e) => changeHandler(e)} />
                        {
                            errors.number ?
                                <p className='text-red-600'>{errors.number.message}</p> :
                                null
                        }
                    </div>
                </div>
                <div className='md:flex md:items-center mb-6'>
                    <div className='md:w-1/3'>
                        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' >Car Type:</label>
                    </div>
                    <div className='md:w-2/3'>
                        <select className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800' name="type" value={getter.type} onChange={(e) => changeHandler(e)}>
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
                                <p className='text-red-600'>{errors.type.message}</p> :
                                null
                        }
                    </div>
                </div>
                <div className='md:flex md:items-center mb-6'>
                    <div className='md:w-1/3'>
                        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' >Location:</label>
                    </div>
                    <div className='md:w-2/3'>
                        <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800' type="text" name="location" value={getter.location} onChange={(e) => changeHandler(e)} />
                        {
                            errors.location ?
                                <p className='text-red-600'>{errors.location.message}</p> :
                                null
                        }
                    </div>
                </div>
                <div className='md:flex md:items-center mb-6'>
                    <div className='md:w-1/3'>
                        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' >Features:</label>
                    </div>
                    <div className='md:w-2/3'>
                        <textarea className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800' type="text" rows={5} name="features" value={getter.features} onChange={(e) => changeHandler(e)} />
                        {
                            errors.features ?
                                <p className='text-red-600'>{errors.features.message}</p> :
                                null
                        }
                    </div>
                </div>
                <div className='md:flex md:items-center mb-6'>
                    <div className='md:w-1/3'>
                        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' >Modifications:</label>
                    </div>
                    <div className='md:w-2/3'>
                        <textarea className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800' type="text" rows={5} name="modifications" value={getter.modifications} onChange={(e) => changeHandler(e)} />
                        {
                            errors.modifications ?
                                <p className='text-red-600'>{errors.modifications.message}</p> :
                                null
                        }
                    </div>
                </div>
                <div className='md:flex md:items-center mb-6'>
                    <div className='md:w-1/3'>
                        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Loaded?</label>
                    </div>
                    <div className='md:w-2/3'>
                        <input className='mr-2 leading-tight' type="checkbox" name="loaded" checked={getter.loaded} onChange={(e) => changeHandlerCheckbox(e)} />
                        {
                            errors.loaded ?
                                <p className='text-red-600'>{errors.loaded.message}</p> :
                                null
                        }
                    </div>
                </div>
                <div className='md:flex md:items-center'>
                    <div className='md:w-1/3'></div>
                    <div className='md:w-2/3'>
                        <button className='shadow bg-blue-800 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' >Create</button>
                    </div>
                </div >
            </form >
        </div >
    )
}

export default Create;