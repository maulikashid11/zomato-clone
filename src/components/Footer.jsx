import React from 'react'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

export default function Footer() {
    return (
        <footer className='mx-[5rem] mt-[5rem] mb-4'>
            <div className="logo invert w-[10rem] mb-7"><img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="" /></div>
            <div className="footer flex flex-wrap gap-5 justify-around items-start mb-10">
                <div className="about">
                    <p className='text-xl'>ABOUT ZOMATO</p>
                    <ul className='text-gray-500 '>
                        <li className='hover:text-gray-800 cursor-pointer'>Who We Are</li>
                        <li className='hover:text-gray-800 cursor-pointer'>Blog</li>
                        <li className='hover:text-gray-800 cursor-pointer'>Work With Us</li>
                        <li className='hover:text-gray-800 cursor-pointer'>Investor Relations</li>
                        <li className='hover:text-gray-800 cursor-pointer'>Report Fraud</li>
                        <li className='hover:text-gray-800 cursor-pointer'>Press Kit</li>
                        <li className='hover:text-gray-800 cursor-pointer'>Contact Us</li>
                    </ul>
                </div>
                <div className="zomaverse">
                    <p className='text-xl'>ZOMAVERSE</p>
                    <ul className='text-gray-500 '>
                        <li className='hover:text-gray-800 cursor-pointer'>Zomato</li>
                        <li className='hover:text-gray-800 cursor-pointer'>Blinkit</li>
                        <li className='hover:text-gray-800 cursor-pointer'>District</li>
                        <li className='hover:text-gray-800 cursor-pointer'>Feeding India</li>
                        <li className='hover:text-gray-800 cursor-pointer'>Hyperpure</li>
                        <li className='hover:text-gray-800 cursor-pointer'>Zomato Live</li>
                        <li className='hover:text-gray-800 cursor-pointer'>Zomaland</li>
                        <li className='hover:text-gray-800 cursor-pointer'>Weather Union</li>
                    </ul>
                </div>
                <div className="restaurants">
                    <p className='text-xl'>FOR RESTAURANT</p>
                    <ul className='text-gray-500 '>
                        <li className='hover:text-gray-800 cursor-pointer'>Partner with us</li>
                        <li className='hover:text-gray-800 cursor-pointer'>Apps for you</li>
                    </ul>
                </div>
                <div className="learn-more">
                    <p className='text-xl'>LEARN MORE</p>
                    <ul className='text-gray-500 '>
                        <li className='hover:text-gray-800 cursor-pointer'>Privacy</li>
                        <li className='hover:text-gray-800 cursor-pointer'>Security</li>
                        <li className='hover:text-gray-800 cursor-pointer'>Terms</li>
                    </ul>
                </div>
                <div className="social-links">
                    <p className='text-xl'>SOCIAL LINKS</p>
                    <div className="social flex gap-2">
                        <FaLinkedin className='w-[1.5rem] h-[1.5rem]' />
                        <FaInstagramSquare className='w-[1.5rem] h-[1.5rem]' />
                        <FaSquareXTwitter className='w-[1.5rem] h-[1.5rem]' />
                        <FaYoutube className='w-[1.5rem] h-[1.5rem]' />
                        <FaFacebook className='w-[1.5rem] h-[1.5rem]' />
                    </div>
                    <ul className='text-gray-500 '>
                        <li className='w-30 my-3'><img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" /></li>
                        <li className='w-30 my-3'><img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" /></li>
                    </ul>
                </div>
            </div>
            <hr className='text-gray-400 mb-5'/>
            <p className='text-sm text-gray-600'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2025 © Zomato™ Ltd. All rights reserved.</p>
        </footer>
    )
}
