import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';

import { country } from '../../config/Api/Countrydata'
const initialstate = {
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    country: '',
    city: '',
}
export default function Register() {
    const [formData, setFormData] = useState(initialstate);
    const [isProcessing, setIsProcessing] = useState(false)

    const navigate = useNavigate()


    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (formData.password === formData.confirmPassword) {
            setIsProcessing(true)
            try {
                axios.post('http://localhost:5000/auth', formData)
                    .then((res) => {
                        if (res.data.message === 'user register success') {
                            window.notify('User register successfully ', 'success')
                            setFormData(initialstate) //To empty form fields
                            navigate('/auth/login')
                        } else {
                            window.notify('Can not registered check email or fields carefully', 'error')
                        }
                    })
                    .catch(() => {
                        window.notify('server does not responsed ', 'error')
                    })
                    .finally(() => {
                        setIsProcessing(false)
                    })
            } catch (error) {
                window.notify('somthing went wrong', 'error')
            }
        } else {
            window.notify('Password can not matched', 'error')
        }
    };

    return (

        <div className="registerPage">
            <div className="container">
                <div className="card p-2 p-sm-4 m-4 border-0 rounded-3 ">
                    <div className="row">
                        <div className="col-md-6">side content</div>
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>First Name<span className='text-danger ms-1'>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="fname"
                                        value={formData.fname}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last Name<span className='text-danger ms-1'>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="lname"
                                        value={formData.lname}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email<span className='text-danger ms-1'>*</span></label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password<span className='text-danger ms-1'>*</span></label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password<span className='text-danger ms-1'>*</span></label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Gender<span className='text-danger ms-1'>*</span></label>
                                    <select
                                        className="form-control"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Country<span className='text-danger ms-1'>*</span></label>
                                    <select
                                        className="form-control"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select country</option>
                                        {country.map((cname, key) => {
                                            return <option key={key} value={cname.name}>{cname.name}</option>
                                        })

                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>City<span className='text-danger ms-1'>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className='d-flex justify-content-center align-items-center justify-content-between'>
                                    <Link to='/auth/login'>Already Have an account?</Link>
                                    {!isProcessing
                                        ? <button type="submit" className="btn btn-warning btn-sm my-1 px-4">
                                            Register
                                        </button>
                                        : <button className="btn btn-warning btn-sm my-1 rounded-5 px-4 d-flex justify-content-center align-items-center">
                                            <span className="spinner-border  spinner-border-sm me-2"></span> Loading...
                                        </button>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
