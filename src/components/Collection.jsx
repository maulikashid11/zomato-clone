import React from 'react'
import CollectionCard from './CollectionCard'

export default function Collection() {

    const cards = [
        {
            img: '../../src/assets/collection1.avif',
            heading: 'Top Trending Spots',
            places: 42
        },
        {
            img: '../../src/assets/collection2.avif',
            heading: 'Best Rooftop Places',
            places: 21
        },
        {
            img: '../../src/assets/collection3.avif',
            heading: 'Newly Opened Places',
            places: 36
        },
        {
            img: '../../src/assets/collection4.avif',
            heading: 'Iftar Specials',
            places: 43
        },
    ]

    return (
        <div className='m-15'>
            <h1 className='text-3xl font-bold my-5'>Collections</h1>
            <div className="sm:flex justify-between items-center">
                <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Pune, based on trends</p>
                <a href="#" className='text-red-500'>All collections in Pune</a>
            </div>
            <div className="collections flex flex-wrap justify-center items-center my-5 gap-5">
                {
                    cards.map((card) => <CollectionCard key={card.img} img={card.img} heading={card.heading} places={card.places} />)
                }
            </div>
        </div>
    )
}
