import { useState } from 'react'
import logo from '../assets/logo.png'



function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 z-10 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md font-ubuntu font-bold g-gradient-to-r from-purple-600 via-gray-200 to-blue-400 h-20 z-10 md:hidden"> {/*logo container*/}
                <h1 className="text-xl font-poppins text-black uppercase font-bold">Desbeyond</h1>
            </div>

            <div className="flex flex-col ml-4 text-white">
                <a className="text-xl font-normal my-4" href="/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Home
                </a>
                <a className="text-xl font-normal my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Contact
                </a>
                <a className="text-xl font-normal my-4" href="/Service" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Services
                </a>
                <a className="text-xl font-normal my-4" href="/Blog" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Blogs
                </a>
            </div>  
        </div>
    )
}



export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-gradient-to-b bg-transparent px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-full md:w-2/12 flex items-center">
                <a className="flex" href="/"><img src={logo} className='h-12 w-full' alt='logo' /></a>
                <div className=''>
                    <a href='/'>
                    <h1 className='text-white font-bold text-2xl uppercase'>desbeyond</h1>
                    <h1 className='text-white font-semibold text-xs tracking-widest'>Design Beyond</h1>
                    </a>
                </div>
            </div>
            <div className="w-10/12 flex justify-end items-center text-black">
                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out md:hidden ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out md:hidden ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out md:hidden ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>
                <div className="hidden text-white font-semibold md:flex">
                    <NavLink to="/">
                        <h1 className=" hover:text-cyan-500">HOME</h1>
                    </NavLink>
                    <NavLink to="/contact">
                        <h1 className='hover:text-cyan-500'>CONTACT</h1>
                    </NavLink>
                    <NavLink to="/about">
                        <h1 className='hover:text-cyan-500'>ABOUT</h1>
                    </NavLink>
                    <NavLink to="/Service">
                        <h1 className='hover:text-cyan-500'>SERVICES</h1>
                    </NavLink>
                    <NavLink to="/Blog">
                        <h1 className='hover:text-cyan-500'>BLOGS</h1>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
