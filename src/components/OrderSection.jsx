import React from 'react'
import OrderSectionCards from './OrderSectionCards'

export default function OrderSection() {

    const cards = [
        {
            img:'https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*',
            heading:'Order Online',
            description:'Stay home and order to your doorstep'
        },
        {
            img:'https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*',
            heading:'Dining',
            description:"View the city's favourite dining venues"
        },
        {
            img:'https://b.zmtcdn.com/data/o2_assets/371de657644f1b5818fcb5d83387c8c91722851940.png?output-format=webp&fit=around|402:360&crop=402:360;*,*',
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
