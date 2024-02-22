import React from 'react'
import { Link } from 'react-router-dom'
import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import AppLogo from '../../../../assets/Logo.jpeg'
import { Avatar, Badge, Space } from 'antd';
import { useAuthContext } from '../../../../contexts/AuthContext';
import { useEffect } from 'react';
import { useState } from 'react';

// import profile from '../../../../assets/profile.JPG'

export default function Index() {

    const { userInfo, setUserInfo, curUserToken, setCurUserToken,handleProcessing } = useAuthContext()
    const [cartCount, setCartCount] = useState(0)
    useEffect(() => {
        let storedCartItems = JSON.parse(localStorage.getItem('cartItems'))
        setCartCount(storedCartItems.length)
    }, [handleProcessing])

    const handleLogout = () => {
        localStorage.removeItem('jwt');
        setCurUserToken(null)
        setUserInfo(null)
        window.notify('Logged out', 'success')
    }

    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-white">
            <div className="container">
                <Link to='/' className="navbar-brand d-flex justify-content-center align-items-center"> <img src={AppLogo} width={100} height={50} alt='fashionStore' /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" data-bs-auto-close="outside" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">

                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item dropdown">
                            <Link to='/' className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to='/' className="dropdown-item" >cat1</Link></li>
                                <li><Link to='/' className="dropdown-item" >cat2</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link to='/' className="dropdown-item" >cat3</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link active" aria-current="page" >Deals</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link active" aria-current="page" >What's New</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link active" aria-current="page" >Delivery</Link>
                        </li>

                    </ul>
                    <form className="d-flex position-relative" role="search">
                        <input className="form-control me-2 border rounded-5 " type="search" placeholder="Search Products" aria-label="Search" style={{ backgroundColor: '#edede9' }} />
                        <span className='position-absolute ' style={{ right: 20, top: 5 }}><SearchOutlined /></span>
                    </form>
                    <ul className='navbar-nav me-0  mb-2 mb-lg-0'>

                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <Link className="nav-link d-lg-flex justify-content-center align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                                    <UserOutlined style={{ fontSize: 20, marginRight: '4px' }} /> Account
                                </Link>
                                <div className="dropdown-menu dropdown-menu-dark" style={{ maxWidth: 200 }}>
                                    <div className="container">
                                        {curUserToken
                                            ? <div className="row">
                                                <div className="col">
                                                    <h5 className='text-center text-white mb-1'>Hi! {userInfo.username}</h5>
                                                    <Space wrap size={16} className="d-flex justify-content-center align-items-center">
                                                        <Avatar size={64} icon={<UserOutlined />} />
                                                    </Space>
                                                    <p className='my-1 text-center'>{userInfo.email}</p>
                                                </div>
                                                <hr />
                                                {userInfo.role === 'admin'
                                                    ? <div>
                                                        <div className="col-12 mb-2">
                                                            <Link to='/dashboard' className='btn btn-sm btn-success w-100 '>Dashboard</Link>
                                                        </div>
                                                        <div className="col-12 mb-2">
                                                            <Link className='btn btn-sm btn-danger w-100 mb-2' onClick={handleLogout}>Logout</Link>
                                                        </div>

                                                    </div>
                                                    : <div className="col mb-2">
                                                        <Link className='btn btn-sm btn-danger w-100 mb-2' onClick={handleLogout}>Logout</Link>
                                                    </div>

                                                }

                                            </div>
                                            : <div className="row py-3">

                                                <div className="col-12 mb-2">
                                                    <Link to='/auth' className='btn btn-sm btn-primary w-100 '>Rigester</Link>
                                                </div>
                                                <div className="col-12 mb-2">
                                                    <Link to='/auth/login' className='btn btn-sm btn-primary w-100 '>Login</Link>
                                                </div>
                                            </div>
                                        }
                                    </div>

                                </div>
                            </li>
                        </ul>

                        <li className='nav-item'><Link to='/addtocart' className='nav-link d-lg-flex  justify-content-center align-items-center'><Badge size="small" count={cartCount} overflowCount={10}><ShoppingCartOutlined style={{ fontSize: 20, marginRight: '5px' }} /></Badge><span>Cart</span></Link></li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}
