import React, { useState } from 'react'

export default function GetAppSection() {

    const [email, setEmail] = useState(true)
    return (
        <div className='flex flex-wrap m-20 gap-10 justify-center items-center'>
            <img src="../../src/assets/get-the-app.avif" className='  w-[20rem] h-[20rem]' alt="" />
            <div className="content w-[25rem] md:my-7 md:mx-8">
                <h1 className='text-4xl font-bold my-5'>Get the Zomato app</h1>
                <p className='my-5'>We will send you a link, open it on your phone to download the app</p>
                <div className="radio flex gap-4" >
                    <div className="input1">
                        <input type="radio" name='radio' id='email' checked={email} onChange={(e) => { setEmail(!email) }} />  <label htmlFor="email">Email</label>
                    </div>
                    <div className="input2">    
                        <input type="radio" name='radio' id='phone' checked={!email} onChange={(e) => { setEmail(!email) }} />  <label htmlFor="phone">Phone</label>
                    </div>
                </div>
                <div className="input mt-2 mb-5 flex flex-wrap gap-5">
                    <input type={`${email ? 'text' : 'number'}`} className='w-[20rem] border-1 border-gray-500 rounded p-2' placeholder={`${email ? 'Email' : 'Phone'}`} />
                    <button className='bg-red-500 text-white p-2 rounded' >Share App Link</button>
                </div>
                <p className='text-gray-500 my-2'>Download app from</p>
                <div className="images flex gap-5">
                    <img className='w-[9rem]' src="../../src/assets/google-play.webp" alt="" />
                    <img className='w-[9rem]' src="../../src/assets/app-store.webp" alt="" />
                </div>
            </div>
        </div>
    )
}
