import React from 'react'

export default function LocationCard({name,places,right}) {
    return (
        <a  className='flex w-[22rem] p-2 cursor-pointer rounded border-1 border-gray-400 justify-between items-center'>
            <div className='locationContent'>
                <h3 className='text-xl'>{name}</h3>
                <p className="text-gray-500">{places} Places</p>
            </div>
            <div className="right">{right}</div>
        </a>
    )
}
