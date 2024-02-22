import React from 'react'
import bannerimg from '../../../assets/bannerimg.png'
export default function Banner() {
    return (
        <div className="container" style={{ backgroundColor: '#FAEFE4' }}>
            <div className="row">
                <div className="col-md-6 p-1 p-md-2 p-lg-4">
                    <h1 className='text-success'>Grab Upto 50% Off On Selected 5 Items</h1>
                    <button className='btn btn-success btn-sm rounded-5 mt-4 px-4 py-2'>Buy Now</button>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img src={bannerimg} alt="fashion-banner" width={200} height={200} />
                </div>
            </div>
        </div>
    )
}
