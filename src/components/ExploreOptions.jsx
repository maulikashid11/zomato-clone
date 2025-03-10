import React from 'react'
import OptionsCard from './OptionsCard'

export default function ExploreOptions() {
    const options = ['Popular cuisines near me','Popular restaurant types near me','Top restaurant chains','Cities we deliver to']
    return (
        <div className='m-10 '>
            <h1 className='text-3xl my-5 font-bold'>Explore options near me</h1>
            {
                options.map((option,i)=><OptionsCard key={option[i]} name={options[i]} down=">"/>)
            }
        </div>
    )
}
