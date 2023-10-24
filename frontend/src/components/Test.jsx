import React from 'react'


const Test = () => {
    return (
        <div className='my-3 flex justify-center'>
            <div className="carousel artboard artboard-horizontal phone-5 rounded-3xl">
                <div id="slide1" className="carousel-item relative w-full bg-white">
                    
                    <p className='text-black px-20 py-32 md:font-semibold md:text-3xl md:px-28 md:py-32'>"Outstanding creativity! Desbeyond transformed our vision into captivating visuals. Their professionalism and attention to detail were exceptional." - Alex</p>
                    <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full bg-white">
                <p className='text-black px-20 py-32 md:font-semibold md:text-3xl md:px-28 md:py-32'>"Impressed by Desbeyond innovative designs. They exceeded our expectations with their attention to detail and prompt delivery." - Edwin Martin</p>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full bg-white">
                <p className='text-black px-20 py-32 md:font-semibold md:text-3xl md:px-28 md:py-32'>
                     "Working with This Agency was a game-changer. Their designs elevated our brand and left a lasting impression on our audience." - Samuel</p>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full bg-white">
                <p className='text-black px-20 py-32 md:font-semibold md:text-3xl md:px-28 md:py-32'>"Efficient, creative, and a pleasure to work with. Desbeyond brought our vision to life seamlessly. Highly recommended!" - John</p>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test
