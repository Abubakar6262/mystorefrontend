import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Rate } from 'antd'

//components
import Banner from './Home/Banner'
import { useAuthContext } from '../../contexts/AuthContext'

export default function DetailPage() {
    const { handleProcessing, setHandleProcessing } = useAuthContext()
    const location = useLocation();
    const proData = location.state.product
    // console.log('This is product Data ====>', proData);

    const handleCart = () => {

        if (proData.stock >= 1) {

            const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            console.log(storedCartItems)

            const isProductInCart = storedCartItems.some(item => item._id === proData._id);
            // console.log(isProductInCart);
            if (!isProductInCart) {
                proData.qty = 1;
                storedCartItems.push(proData)
                localStorage.setItem('cartItems', JSON.stringify(storedCartItems));
                window.notify('Product is added to cart successfully', 'success')
                setHandleProcessing(!handleProcessing)
            } else {

                window.notify('You have already this item in your cart store ', 'error')
            }
        } else {
            window.notify('Sorry Product is out of Stock!', 'error')
        }
    }

    return (
        <div className="container">
            <Banner />
            <div className="card mb-3 my-1 rounded-0" >
                <div className="row g-0"> 
                    <div className="col-md-4">
                        <img src={'http://localhost:5000/uploads/'+proData.image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{proData.title}</h5>
                            <h5 className="card-title">${proData.price}</h5>
                            <p><span className='me-3'>Category:</span><span>{proData.category}</span></p>
                            <p><span className='me-3'>Availibility:</span>{proData.stock >= 1 ? <span className='text-primary'> Instock</span> : <span className='text-danger'> Out of stock</span>}</p>
                            <hr className='my-2' />
                            <p className="card-text">{proData.description}</p>
                            <button className='btn btn-warning px-5 py-2 rounded-0' onClick={handleCart}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    <nav className="navbar navbar-expand-sm ">
                        <ul className='navbar-nav'>
                            <li className='nav-item'><Link className='btn btn-outline-dark rounded-5 me-1'>Description</Link></li>
                            <li className='nav-item'><Link className='btn btn-outline-dark rounded-5 me-1'>Comments</Link></li>
                            <li className='nav-item'><Link className='btn btn-outline-dark rounded-5 '>Reviews</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex my-2">
                    <div className="col-sm-6 ">
                        <div className="card text-center p-4 rounded-0 border-0 bg-secondary bg-opacity-25">
                            <h4>Overall</h4>
                            <h2>4.0</h2>
                            <span>(03 Review)</span>
                        </div>
                    </div>
                    <div className="col-sm-6 text-center">
                        <h3>Based on Reviews</h3>
                        <div><span>5 Star</span><Rate allowHalf defaultValue={5} /><span className='ms-1'>1</span></div>
                        <div><span>4 Star</span><Rate allowHalf defaultValue={5} /><span className='ms-1'>1</span></div>
                        <div><span>3 Star</span><Rate allowHalf defaultValue={5} /><span className='ms-1'>1</span></div>
                        <div><span>2 Star</span><Rate allowHalf defaultValue={5} /><span className='ms-1'>1</span></div>
                        <div><span>1 Star</span><Rate allowHalf defaultValue={5} /><span className='ms-1'>1</span></div>
                    </div>
                </div>
                <div className="col-md-6 my-2">
                    <h1 className='mb-2'>Add a Review</h1>
                    <div className='my-1'><span>Your Rating</span><Rate allowHalf defaultValue={5} /></div>
                    <form>
                        <div className="row">
                            <div className="col">
                                <input required className='form-control rounded-0 mb-1' type="text" placeholder='Enter Your Name' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input required className='form-control rounded-0 mb-1' type="email" placeholder='Enter Your Email' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input required className='form-control rounded-0 mb-1' type="tel" placeholder='Enter Your Phone Number' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input required className='form-control rounded-0 mb-1' type="text" placeholder='Write Review' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button className='btn btn-sm btn-secondary px-4 py-2 float-end  my-2 rounded-0'>Submit Now</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    )
}