import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/Nav'
import { useNavigate, useParams } from 'react-router-dom'

const Update = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [getter, setter] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:9999/api/railcars/${id}`)
            .then((res) => {
                setter(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

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
        axios.put(`http://localhost:9999/api/railcars/${id}`, getter)
            .then((res) => {
                console.log(getter)
                navigate(`/railcars/${res.data._id}/details`)
            })
            .catch((err) => {
                setErrors(err.response.data.errors)
            })
    }

    const deleteHandler = () => {
        axios.delete(`http://localhost:9999/api/railcars/${id}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <Nav title={`Update ${getter.prefix} ${getter.number}`} />
            <form className='w-full max-w-sm mt-10' onSubmit={submitHandler}>
                <div className='md:flex md:items-center mb-6'>
                    <div className='md:w-1/3' >
                        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Location:</label>
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
                                <p className='text-red-600'>{errors.open.message}</p> :
                                null
                        }
                    </div>
                </div>
                <div className='md:flex md:items-center'>
                    <div className='md:w-1/3'></div>
                    <div className='md:w-2/3'>
                        <button className='shadow bg-blue-800 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'>Save</button>
                        <button className='shadow bg-red-800 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' onClick={deleteHandler} >Delete</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Update;