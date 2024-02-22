import React from 'react'

export default function Index() {
    const year = new Date().getFullYear();
    return (

        <footer className='bg-dark py-2'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className='text-white text-center p-0 m-0 '>&copy; {year} All Rights Resevered</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
