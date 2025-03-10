import React from 'react'

export default function CollectionCard({ img, heading, places }) {
    return (
        <div className='rounded-xl overflow-hidden relative w-[15rem] min-w-[10rem]'>
            <img src={img} className=' brightness-[.4] h-[20rem] w-full' alt="" />
            <div className="content absolute z-10 bottom-0 mx-auto p-3 text-white">
                <h3>{heading}</h3>
                <p className="places">{places} Places</p>
            </div>
        </div>
    )
}
