import React from 'react';
import logo from "../Images/logo.svg"

function Nav() {
    return (
        <div>
            <div className="flex align-center p-2">
                <div>
                    <img className="w-[200px]" src={logo} alt="" />
                </div>
                <div className="lg:flex flex-grow items-center hidden" id="example-navbar-danger">
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item"><a className="px-3 py-2 h-full flex items-center text-xs  font-bold leading-snug text-black hover:opacity-75" href="/about"><span className="ml-2">About Us</span></a></li>
                        <li className="nav-item"><a className="px-3 py-2 h-full flex items-center text-xs  font-bold leading-snug text-black hover:opacity-75" href="#Service"><span className="ml-2">Services</span></a></li>
                        <li className="nav-item"><a className="px-3 py-2 h-full flex items-center text-xs  font-bold leading-snug text-black hover:opacity-75" href="#Products"><span className="ml-2">Products</span></a></li>
                        <li className="nav-item"><a className="px-3 py-2 h-full flex items-center text-xs  font-bold leading-snug text-black hover:opacity-75" href="#Portfolio/ Case Studies"><span className="ml-2">Portfolio</span></a></li>
                        <li className="nav-item"><a className="px-3 py-2 h-full flex items-center text-xs  font-bold leading-snug text-black hover:opacity-75" href="#Developers On Demand"><span className="ml-2">Developers</span></a></li>
                        <a className="contact_btn" href="#contact"> <button className="btnContact font-bold text-xs ease-linear transition-all duration-150" type="button">Contact Us</button></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav
