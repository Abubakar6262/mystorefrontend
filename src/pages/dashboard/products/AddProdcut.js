import React, { useState } from 'react'
import { UploadOutlined } from '@ant-design/icons'
import axios from 'axios'
import { useAuthContext } from '../../../contexts/AuthContext'

const initialstate = {
  title: '',
  category: '',
  description: '',
  price:0,
  color: '',
  size: '',
  stock: 0,
}
export default function AddProdcut() {
  const [formData, setFormData] = useState(initialstate)
  const [proImage, setProImage] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const { userInfo } = useAuthContext()


  const handleChange = async (e) => {
    let { name, value } = e.target;
    setFormData(s => ({ ...s, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true)

    let { title, description, category, price, color, size, stock } = formData

    const productData = {
      title, category, description, price, color, size, stock,
      imageurl: proImage,
      createdBy: {
        uid: userInfo.id,
        email: userInfo.email
      },
      createdAt: Date.now(),
    }


    console.log('updated state after adding image url =>', productData);
    axios.post('http://localhost:5000/dashboard/addproduct', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.message === 'product added') {
          window.notify('Product added successfully', 'success');
        } else {
          window.notify('product can not uploaded successfully', 'error');
        }
        setProImage(null)
        setFormData(initialstate)
      })
      .catch((error) => {
        console.log('Image can not uploaded =>', error);
        window.notify('Image can not uploaded successfully', 'error');
      })
      .finally(() => {
        setIsProcessing(false)
      })

  }
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center my-1"><h4>Add Prodcut</h4></div>
      </div>
      <form encType="multipart/form-data">
        <div className="row">
          <div className="col col-md-6 mb-2">
            <input required type="text" className='form-control' placeholder='Title' name='title' value={formData.title} onChange={handleChange} />
          </div>
          <div className="col col-md-6 mb-2">
            <input required type="text" className='form-control' placeholder='category' name='category' value={formData.category} onChange={handleChange} />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col ">
            <input required type="file" className='form-control' onChange={(e) => setProImage(e.target.files[0])} />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <textarea required className='form-control' onChange={handleChange} value={formData.description} placeholder='Please enter your product description...' name="description" cols="10" rows="5"></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col col-md-3 mb-2">
            <input required type="number" className='form-control' placeholder='$ price' name='price' value={formData.price} onChange={handleChange} />
          </div>
          <div className="col col-md-3 mb-2">
            <input required type="text" className='form-control' placeholder='color' name='color' value={formData.color} onChange={handleChange} />
          </div>
          <div className="col col-md-3 mb-2">
            <input required type="text" className='form-control' placeholder='size' name='size' value={formData.size} onChange={handleChange} />
          </div>
          <div className="col col-md-3 mb-2">
            <input required type="number" className='form-control' placeholder='stock' name='stock' value={formData.stock} onChange={handleChange} />
          </div>
        </div>
        <div className="row my-1">
          <div className="col">
            {!isProcessing
              ? <button onClick={handleSubmit} className='btn btn-success rounded-1 float-end px-3 d-flex justify-content-center align-items-center'><UploadOutlined className='pe-1 fs-5' />Upload Product</button>
              : <button className='btn btn-success rounded-1 float-end px-3 d-flex justify-content-center align-items-center rounded-5'> <span className="spinner-border  spinner-border-sm me-2"></span><span>Uploading...</span> </button>
            }
          </div>
        </div>
      </form>
    </div>
  )
}
