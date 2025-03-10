import React from 'react'

export default function OptionsCard({name,down}) {
  return (
    <div className='flex justify-between items-center shadow my-5 border-1 p-3 border-gray-300 rounded'>
        <h4 className='text-xl'>{name}</h4>
        <p className='rotate-90'>{down}</p>
    </div>
  )
}
