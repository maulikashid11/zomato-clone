import React from 'react'

export default function OrderSectionCards({ img, heading, description }) {
    return (
        <div className='rounded-xl overflow-hidden shadow hover:scale-[1.02] w-[20rem] sm:min-w-[7rem] transition-all duration-50'>
            <img className='h-50 w-full ' src={img} alt="" />
            <div className="content p-3">
                <h4 className='text-xl '>{heading}</h4>
                <p className='text-sm sm:text-lg'>{description}</p>
            </div>
        </div>
    )
}
