import logo from "../assets/logo.png"
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navStyle = {
        top: menuOpen ? '8%' : '-100%',
    };
    return (
        <div className="hover:bg-violet-600 ">
        <header className=' md:mr-5 h-16 md:h-20 ml-5 pt-2 mr-5 '>
            <nav className="grid grid-cols-3   w-full ">
                <div className='flex'>
                    <img src={logo} alt="logo" className="h-12 md:h-14 md:pt-1 "></img>
                    <div className="md:pt-1">
                        <p className="text-white text-xl font-bold">DESBEYOND</p>
                        <p className="text-white text-sm  font-serif font-semibold">Design Beyond</p>
                    </div>
                 </div>
                 <div>

                 </div>
                
             
                <div className={`md:static absolute   md:min-h-fit left-0 w-full md:w-auto min-h-[41vh] flex items-center justify-end px-5 transition-all duration-700 ease-in-out`} style={navStyle}>
                    <p className="flex md:flex-row flex-col md:item-center md:gap-10 gap-8 md:font-semibold md:text-lg md:pt-1 ">
                        <a href="/" className=" text-white hover:text-fuchsia-600 cursor-pointer font-semibold md:ml-96" onClick={() => scrollToSection('home')}>Home</a>
                        <a href="/contact" className="text-white  hover:text-fuchsia-600 cursor-pointer font-semibold" onClick={() => scrollToSection('contact')}>Contact</a>
                        <a href="/about" className="text-white  hover:text-fuchsia-600 cursor-pointer font-semibold" onClick={() => scrollToSection('about')}>About</a>
                        <a href="/Service" className="text-white  hover:text-fuchsia-600 cursor-pointer font-semibold" onClick={() => scrollToSection('service')}>Service</a>

                    </p>
                </div>
             
                <div className="flex items-center gap-6 mr-5">

                    {menuOpen ? (
                        <div className="flex justify-end">
                        <svg onClick={toggleMenu} className="h-6 w-6 cursor-pointer md:hidden" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" fill="#ffffff" />
                        </svg>
                        </div>
                    ) : (
                        <div>
                        <svg onClick={toggleMenu} className="h-6 w-6 cursor-pointer md:hidden" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" fill="#ffffff" />
                        </svg>
                        </div>
                    )}
                </div>
            </nav>
        </header>
        </div>
    );
}

export default Navbar;