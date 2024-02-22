import React, { useEffect, useState } from 'react'
import { StarOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'


// import productimg from '../../../assets/bannerimg.png'
import axios from 'axios'
import { ClimbingBoxLoader } from 'react-spinners'

export default function Products() {
    const [products, setProducts] = useState([])
    const [isProcessing, setIsProcessing] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:5000/dashboard/readproduct')
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsProcessing(false)
            })
    }, [])


    const handleDetail = (product) => {
        navigate("/detail", { state: { product } })
    }

    return (
        <div className="container">
            {isProcessing
                ? <div className="row "><div className="col d-flex justify-content-center align-items-center my-5"><ClimbingBoxLoader color="#36d7b7" /></div></div>
                : <div className="row">
                    {
                        products.map((product, key) => {
                            return <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-1 my-2 " key={key}>
                                <div className="card">
                                    <img src={'http://localhost:5000/uploads/'+product.image} className="card-img-top" alt='productcart' />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <div className="d-flex align-items-center">
                                            <span className="me-2">Rating:</span>
                                            <StarOutlined />
                                            <StarOutlined />
                                            <StarOutlined />
                                            <StarOutlined />
                                            <StarOutlined />
                                        </div>
                                        <button className="btn btn-outline-dark rounded-5 mt-3" onClick={() => handleDetail(product)} >Show product's details</button>
                                    </div>
                                </div>
                            </div>

                        })
                    }
                </div>
            }



        </div>
    )
}
