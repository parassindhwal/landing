import React from 'react'

function Contact() {
    return (
        <div className="bg-[#D49DC2] text-[#fff]" id="contact">
            <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between py-[20px] md:flex-row flex-col p-10">
                <div className="md:text-left text-center">
                    <h2 className="text-3xl pb-3">Let's Discuss</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, porro?</p>
                </div>
                <form className="relative w-[350px] my-[20px]">
                    <input className="w-full p-[10px] rounded-[2.25rem] outline-none" type="text" />
                    <button className="absolute top-[2px] right-[2px] btnContact font-bold text-xs">Sign up</button>
                </form>

            </div>
        </div>
    )
}

export default Contact
