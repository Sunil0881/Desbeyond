import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gradient-to-b from-gray-900 via-gray-600 to bg-gray-500 text-white">
                <nav>
                    <header className="footer-title font-bold text-2xl">Services</header>
                    <a className="link link-hover" href='/'>Branding</a>
                    <a className="link link-hover" href='/'>Design</a>
                    <a className="link link-hover" href='/'>Marketing</a>
                    <a className="link link-hover" href='/'>Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title font-bold text-2xl">Company</header>
                    <a className="link link-hover" href='/'>About us</a>
                    <a className="link link-hover" href='/'>Contact</a>
                    <a className="link link-hover" href='/'>Jobs</a>
                    <a className="link link-hover" href='/'>Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title font-bold text-2xl">Legal</header>
                    <a className="link link-hover" href='/'>Terms of use</a>
                    <a className="link link-hover" href='/'>Privacy policy</a>
                    <a className="link link-hover" href='/'>Cookie policy</a>
                </nav>
                <form>
                    <header className="footer-title font-bold text-2xl">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    )
}

export default Footer
