import React from 'react'
import logo from "../assets/ideas-creative-occupation-design_53876-61069.png";
import pkin from "../assets/pumpbook.jpg"
import techbook from "../assets/techbook.jpg"
import rainbook from "../assets/rainbook.jpg"
import book from "../assets/book.jpg"

const Slide = () => {
    return (
        <div className='md:flex md:justify-evenly'>
            <div className='text-white'>
                <h1 className='font-bold text-2xl md:text-4xl my-14 mx-5 uppercase' data-aos="zoom-out">Book Design Services</h1>
                <h1 className='font-bold text-2xl md:text-4xl mt-5 md:my-14  mx-5 uppercase' data-aos="zoom-out">Pagination</h1>
                <h1 className='font-bold text-2xl md:text-4xl mt-5 md:my-14 mx-5 uppercase' data-aos="zoom-out">Cover Design Services</h1>
                <h1 className='font-bold text-2xl md:text-4xl mt-5 md:my-14 mx-5 uppercase' data-aos="zoom-out">Ebook creation Services</h1>
                <h1 className='font-bold text-2xl md:text-4xl mt-5 md:my-14 mx-5 uppercase' data-aos="zoom-out">Ebook creation Services</h1>
                <h1 className='font-bold text-2xl md:text-4xl mt-5 md:my-14 mx-5 uppercase' data-aos="zoom-out">DTP Services</h1>
                

            </div>
            <div  data-aos="zoom-out" className="carousel carousel-center md:p-4 md:space-x-3 h-72 w-2/6 md:h-4/6 md:w-3/6 my-10 bg-gradient-to-b from-purple-500 via-gray-400 to-blue-500  hover:from-blue-500 hover:via-gray-400 hover:to-purple-500 rounded-box artboard phone-2">
                <div className="carousel carousel-center space-x-5 rounded-box">
                    <div className="carousel-item block text-white font-sans uppercase">
                        <img src={pkin} className='w-96 h-96' alt="Pizza" />
                        <p className='font-bold m-5 pl-7'>Book Design</p>
                       
                    </div>
                    <div className="carousel-item block text-white font-sans uppercase">
                        <img src={techbook} className='w-full h-96' alt="Pizza" />
                        <p className='font-bold m-5 pl-7'>Book Design</p>
                    </div>
                    <div className="carousel-item block text-white font-sans uppercase">
                        <img src={rainbook} className='w-full h-96' alt="Pizza" />
                        <p className='font-bold m-5 pl-7'>Book Design</p>
                    </div>
                    <div className="carousel-item block text-white font-sans uppercase">
                        <img src={book} className='w-full h-96' alt="Pizza" />
                        <p className='font-bold m-5 pl-7'>Book Design</p>
                    </div>
                    <div className="carousel-item block text-white font-sans uppercase">
                        <img src={logo} className='w-full h-96' alt="Pizza" />
                        <p className='font-bold m-5 pl-7'>Book Design</p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Slide
