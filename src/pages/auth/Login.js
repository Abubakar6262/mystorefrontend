import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const initialstate = {
  email: '',
  password: '',
}
export default function Login() {
  const [formData, setFormData] = useState(initialstate);
  const [isProcessing, setIsProcessing] = useState(false)

  const { setCurUserToken } = useAuthContext()
  const navigate = useNavigate();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log('Form data submitted:', formData);
    setIsProcessing(true)
    try {
      axios.post('http://localhost:5000/auth/login', formData)
        .then((res) => {
          const authToken = res.data.token
          if (authToken !== null) {
            setFormData(initialstate) //To empty form fields
            
            localStorage.setItem('jwt', authToken); //token store in localstorage
            setCurUserToken(authToken)
            
            window.notify('LoginIn successfully ', 'success')
            navigate('/')
          } else {
            window.notify('can not logedin', 'error')
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
  };

  return (

    <div className="registerPage d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="card p-2 p-sm-4 m-4 border-0 rounded-3 ">
          <div className="row">
            <div className="col-md-6">side content</div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
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
                <div className='d-flex flex-sm-wrap justify-content-center align-items-center justify-content-between my-1'>
                  <Link to='/auth'>Register Now?</Link>
                  {!isProcessing
                    ? <button type="submit" disable={isProcessing} className="btn btn-warning btn-sm my-1 px-4">
                      Login
                    </button>
                    : <button className="btn btn-warning btn-sm my-1 me-0 me-sm-1 rounded-5 px-4 d-flex justify-content-center align-items-center">
                      <span className="spinner-border  spinner-border-sm me-2"></span> Loading...
                    </button>
                  }
                  <Link to='/auth'>Forgot Passwrod</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
