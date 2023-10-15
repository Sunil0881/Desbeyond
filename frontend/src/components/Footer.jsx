import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='text-slate-400 px-8 pt-10'>
                <hr></hr>
            </div>
            <div className='md:flex md:justify-center gap-96 md:mx-20 py-10'>
                <div className='pl-8'>
                    <h1 className='text-2xl md:text-4xl text-white font-bold'>DESBEYOND</h1>
                    <h1 className='md:text-3xl text-lg text-white font-seminormal '>Design Beyond</h1>
                </div>
                <div className='md:flex md:justify-between gap-10'>
                <div className='block text-white'>
                    <h1 className='font-bold text-lg text-white pb-2 mx-10 md:mx-0 py-5'>Follow Us</h1>
                    <div className='block mx-10 md:mx-0'>
                        <p>Linked in</p>
                        <p>Facebook</p>
                        <p>Facebook</p>
                        <p className='pb-5'>Twitter</p>
                    </div>
                </div>
                <div className=' text-white'>
                    <h1 className='font-bold text-lg text-white pb-2 mx-10 md:mx-0 py-5'>Links</h1>
                    <div className='block mx-10 md:mx-0'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Service</p>
                    <p>Contact</p>
                    </div>
                </div>
                </div>
            </div>
            <p className='text-sm flex justify-center text-gray-500 pb-5'>@Copyright 2023</p>
        </div>

    )
}

export default Footer
