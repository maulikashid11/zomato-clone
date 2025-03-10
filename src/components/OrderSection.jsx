import React from 'react'
import OrderSectionCards from './OrderSectionCards'

export default function OrderSection() {

    const cards = [
        {
            img:'../../src/assets/order-online.avif',
            heading:'Order Online',
            description:'Stay home and order to your doorstep'
        },
        {
            img:'../../src/assets/dinning.avif',
            heading:'Dining',
            description:"View the city's favourite dining venues"
        },
        {
            img:'../../src/assets/events.jfif',
            heading:'Live Events',
            description:"Discover India's best events & concerts"
        },
    ]
  return (
    <div className='flex flex-wrap items-center justify-center m-12 gap-5 mx-auto mb-15'>
        {
            cards.map((card)=><OrderSectionCards key={card.img} img={card.img} heading={card.heading} description={card.description}/>)
        }
    </div>
  )
}
