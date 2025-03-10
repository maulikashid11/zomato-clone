import React, { useEffect } from 'react'

export default function HeroSection() {
    useEffect(()=>{
        document.querySelector('.hamburger').addEventListener('click',(e)=>{
            e.stopPropagation()
            document.querySelector('.navbar').classList.remove('left-[-50%]')
        })
        document.body.addEventListener('click',(e)=>{
            document.querySelector('.navbar').classList.add('left-[-50%]')
        })
    },[])
    return (
        <div className="hero-section bg-red-500 w-full h-[65vh] relative overflow-hidden">
            <img src="../../src/assets/hero image.avif" className='w-[100%] min-w-[50rem] h-full absolute' alt="" />
            <div className="hero-content w-full text-white absolute z-10 sm:px-20 px-5 py-2">
                <p className='hamburger cursor-pointer sm:hidden text-xl'>☰</p>
                <nav className='navbar sm:flex justify-between text-black sm:text-white items-center text-sm md:text-lg sm:static absolute sm:bg-transparent bg-white transition-all duration-200 left-[-50%] p-4 sm:p-0'>
                    <div className="get-the-app">Get the App</div>
                    <ul className='sm:flex justify-center items-center gap-8'>
                        <li className='cursor-pointer sm:my-0 my-3'>Investor Relations</li>
                        <li className='cursor-pointer sm:my-0 my-3'>Add restaunt</li>
                        <li className='cursor-pointer sm:my-0 my-3'>Log in</li>
                        <li className='cursor-pointer sm:my-0 my-3'>Sign up</li>
                    </ul>
                </nav>
                <img src="../../src/assets/logo.avif" className='w-[17rem] my-10 mx-auto' alt="" />
                <p className="hero-description text-center sm:text-4xl text-xl">Discover the best food & drinks in Pune</p>
            </div>
        </div>
    )
}
