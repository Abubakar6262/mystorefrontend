import React, { useState } from 'react'
import { DeleteFilled } from '@ant-design/icons';
import { useEffect } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';

export default function AddToCart() {
  const [quantity, setQuantity] = useState(1);
  const [cartItem, setCartItem] = useState([])
  const { handleProcessing, setHandleProcessing } = useAuthContext()
  useEffect(() => {
    let storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItem(storedCartItems);
  }, [])

  const increaseQuantity = () => {
    setQuantity(quantity + 1);

  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const handleDelete = (product) => {
    // console.log(product);
    const updatedCartItems = cartItem.filter(item => item._id !== product._id);
    setCartItem(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    setHandleProcessing(!handleProcessing)
    window.notify('successfully remove from cart', 'success')
  }


  return (
    <div className="container bg-primary">
      <div className="row">
        <div className="col-12">
          <hr />
          <div className="table-responsive">
            <table className="table align-middle">
              <thead className='text-center'>
                <th>Sr#</th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total  Price</th>
                <th>Delete</th>
              </thead>
              <tbody className='text-center'>
                {cartItem.map((product, key) => {
                  return <tr key={key}>
                    <th scope="row">{key + 1}</th>
                    <td><img src={'http://localhost:5000/uploads/'+product.image} alt="cart-item" width={70} height={70} /></td>
                    <td>{product.title}</td>
                    <td>${product.price}</td>
                    <td >
                      <button className='border-0 bg-transparent fs-5' onClick={() => decreaseQuantity()}  >-</button>
                      <span className='mx-2'>{quantity}</span>
                      <button className='border-0 bg-transparent fs-5' onClick={() => increaseQuantity()} >+</button>
                    </td>
                    <td>${product.price * quantity}</td>
                    <td><DeleteFilled className='text-danger fs-3 m-0 p-0' onClick={() => handleDelete(product)} /></td>
                  </tr>
                })
                }
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-12">
          <div className="cart my-2 bg-white p-2">
            <h5 className='my-2'>Summary</h5><hr />
            <div className='cart-items'>
              <div className='d-flex justify-content-between my-1'><span>product</span><span>$2000</span></div>
              <div className='d-flex justify-content-between my-1'><span>Shipping</span><span>$2000</span></div>
            </div>
            <hr />
            <div className='my-2'>
              <div className='d-flex justify-content-between'><span>Total Amount</span><span>$2000</span></div>
            </div>
            <div className='text-center'>
              <button className='btn btn-primary btn-sm px-5 py-1'>buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
