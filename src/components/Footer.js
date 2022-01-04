import React from 'react';
import logo from "../Images/logo.svg"

function Footer() {
    return (
        <div className="text-gray-500">
            
            <div className="flex md:flex-row text-center md:text-left flex-col max-w-[1200px] mx-auto justify-between p-10">
                <div className="flex flex-col items-center md:items-start">
                    <img className="w-[200px] pb-2" src={logo} alt="" />
                    <p className="w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facilis excepturi autem veniam?</p>
                </div>
                <div>
                    <h3 className="text-xl font-medium text-[#662D91] py-3">Links</h3>
                    <ul className="space-y-2">
                        <li>Our Clients</li>
                        <li>Privacy Policy</li>
                        <li>Our Benefits</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-medium text-[#662D91] py-3">Links</h3>
                    <ul className="space-y-2">
                        <li>Our Clients</li>
                        <li>Privacy Policy</li>
                        <li>Our Benefits</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-medium text-[#662D91] py-3">Links</h3>
                    <ul className="space-y-2">
                        <li>Our Clients</li>
                        <li>Privacy Policy</li>
                        <li>Our Benefits</li>
                    </ul>
                </div>
            </div>
            <div className="text-center border border-t-1 py-2">
                <p>Copyright 2020 ByteQuest Software Private Limited. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
