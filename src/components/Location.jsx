import React from 'react'
import LocationCard from './LocationCard'

export default function Location() {
    const locations = [
        {
            name:'Baner',
            places:710,
            right:'>'
        },
        {
            name:'Viman Nagar',
            places:687,
            right:'>'
        },
        {
            name:'Hinjawadi',
            places:1417,
            right:'>'
        },
        {
            name:'Koregaon Park',
            places:256,
            right:'>'
        },
        {
            name:'Wakad',
            places:1028,
            right:'>'
        },
        {
            name:'Kothrud',
            places:803,
            right:'>'
        },
        {
            name:'Kalyani Nagar',
            places:175,
            right:'>'
        },
        {
            name:'Kharadi',
            places:894,
            right:'>'
        },
        {
            name:'Mundhwa',
            places:205,
            right:'>'
        },
    ]
  return (
    <div className='m-10 mx-20  '>
        <h1 className='text-2xl my-5'>Popular localities in and around <b>Pune</b></h1>
        <div className="locations flex items-center justify-center flex-wrap gap-5 mx-auto">
            {
                locations.map((location)=><LocationCard key={location.name} name={location.name} places={location.places} right={location.right}/>)
            }
        </div>
    </div>
  )
}
