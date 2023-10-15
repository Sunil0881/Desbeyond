import React from 'react'
import logo from "../assets/ideas-creative-occupation-design_53876-61069.png";

const Slide = () => {
    return (
        <div className='md:flex md:justify-evenly'>
            <div className='text-white'>
                <h1 className='font-bold text-5xl md:text-4xl mt-24 mx-5 uppercase'>Book Design Services</h1>
                <h1 className='font-bold text-5xl md:text-4xl mt-5 mx-5 uppercase'>Pagination</h1>
                <h1 className='font-bold text-5xl md:text-4xl mt-5 mx-5 uppercase'>Cover Design Services</h1>
                <h1 className='font-bold text-5xl md:text-4xl mt-5 mx-5 uppercase'>Ebook creation Services</h1>
                <h1 className='font-bold text-5xl md:text-4xl mt-5 mx-5 uppercase'>Ebook creation Services</h1>
                <h1 className='font-bold text-5xl md:text-4xl mt-5 mx-5 uppercase'>DTP Services</h1>
                

            </div>
            <div className="carousel carousel-center md:p-4 md:space-x-3 h-96 w-6/6 md:h-4/6 md:w-3/6 my-10 mx-5 bg-purple-500 rounded-box artboard phone-2">
                <div className="carousel carousel-center space-x-5 rounded-box">
                    <div className="carousel-item block text-white font-sans uppercase">
                        <img src={logo} className='w-full h-96' alt="Pizza" />
                        <p className='font-bold m-5'>Name: mani kandan</p>
                        <p className='font-bold mx-5'>position: designer</p>
                        <p className='font-bold m-5'>Experience : 3+ years</p>
                    </div>
                    <div className="carousel-item block text-white font-sans uppercase">
                        <img src={logo} className='w-full h-96' alt="Pizza" />
                        <p className='font-bold m-5'>Name: mani kandan</p>
                        <p className='font-bold mx-5'>position: designer</p>
                        <p className='font-bold m-5'>Experience : 3+ years</p>
                    </div>
                    <div className="carousel-item block text-white font-sans uppercase">
                        <img src={logo} className='w-full h-96' alt="Pizza" />
                        <p className='font-bold m-5'>Name: mani kandan</p>
                        <p className='font-bold mx-5'>position: designer</p>
                        <p className='font-bold m-5'>Experience : 3+ years</p>
                    </div>
                    <div className="carousel-item block text-white font-sans uppercase">
                        <img src={logo} className='w-full h-96' alt="Pizza" />
                        <p className='font-bold m-5'>Name: mani kandan</p>
                        <p className='font-bold mx-5'>position: designer</p>
                        <p className='font-bold m-5'>Experience : 3+ years</p>
                    </div>
                    <div className="carousel-item block text-white font-sans uppercase">
                        <img src={logo} className='w-full h-96' alt="Pizza" />
                        <p className='font-bold m-5'>Name: mani kandan</p>
                        <p className='font-bold mx-5'>position: designer</p>
                        <p className='font-bold m-5'>Experience : 3+ years</p>
                    </div>
                    <div className="carousel-item block text-white font-sans uppercase">
                        <img src={logo} className='w-full h-96' alt="Pizza" />
                        <p className='font-bold m-5'>Name: mani kandan</p>
                        <p className='font-bold mx-5'>position: designer</p>
                        <p className='font-bold m-5'>Experience : 3+ years</p>
                    </div>
                    <div className="carousel-item block text-white font-sans uppercase">
                        <img src={logo} className='w-full h-96' alt="Pizza" />
                        <p className='font-bold m-5'>Name: mani kandan</p>
                        <p className='font-bold mx-5'>position: designer</p>
                        <p className='font-bold m-5'>Experience : 3+ years</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide