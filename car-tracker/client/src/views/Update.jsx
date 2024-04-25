import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/Nav'
import { useNavigate, useParams } from 'react-router-dom'

const Update = (props) => {
    const { id } = useParams()
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

    useEffect(() => {
        axios.get(`http://localhost:9999/api/railcars/${id}`)
            .then((res) => {
                setter({
                    prefix: res.data.name,
                    number: res.data.number,
                    type: res.data.type,
                    features: res.data.features,
                    modifications: res.data.modifications,
                    loaded: res.data.loaded,
                    location: res.data.location
                })
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

    const deleteHandler = (deleteId) => {
        axios.delete(`http://localhost:9999/api/railcars/${deleteId}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <Nav title={`Update ${getter.prefix} ${getter.number}`}/>
            <form className='w-50 mx-auto' onSubmit={submitHandler}>
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
                    <label className='form-label' >features:</label>
                    <div>
                        <input type="text" name="features" value={getter.features} onChange={(e) => changeHandler(e)} />
                        {
                            errors.description ?
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
                            <p className='text-danger'>{errors.open.message}</p> :
                            null
                    }
                </div>
                <button className='btn btn-primary'>Save</button>
                <button className='btn btn-danger' onClick={deleteHandler} >Delete</button>
            </form>
        </div>
    )
}

export default Update;