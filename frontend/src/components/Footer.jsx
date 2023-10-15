import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='text-slate-400 px-8 pt-10'>
                <hr></hr>
            </div>
            <div className='grid grid-cols-5 pt-10'>
                <div className='pl-8'>
                    <h1 className='text-2xl text-white font-bold'>DESBEYOND</h1>
                    <h1 className='text-md text-white font-seminormal '>Design Beyond</h1>
                </div>
                <div>

                </div>
                <div></div>
                <div className='block text-white'>
                    <h1 className='font-bold text-lg text-white pb-2'>Follow Us</h1>
                    <div className='block'>
                        <p>Linked in</p>
                        <p>Facebook</p>
                        <p>Facebook</p>
                        <p className='pb-5'>Twitter</p>
                    </div>
                </div>
                <div className=' text-white'>
                    <h1 className='font-bold text-lg text-white pb-2'>Links</h1>
                    <p className=''>Home</p>
                    <p>About</p>
                    <p>Service</p>
                    <p>Contact</p>
                </div>
               
            </div>
            <p className='text-white text-sm flex justify-center'>Copyright 2023</p>
        </div>

    )
}

export default Footer
