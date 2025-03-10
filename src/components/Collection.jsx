import React from 'react'
import CollectionCard from './CollectionCard'

export default function Collection() {

    const cards = [
        {
            img: 'https://b.zmtcdn.com/data/collections/96541881ed7b42d424990403ac3afdbf_1712923153.png?output-format=webp',
            heading: 'Top Trending Spots',
            places: 42
        },
        {
            img: 'https://b.zmtcdn.com/data/collections/2b9361aa328a43b08986f77bbec280bd_1709810606.png?output-format=webp',
            heading: 'Best Rooftop Places',
            places: 21
        },
        {
            img: 'https://b.zmtcdn.com/data/collections/6922d49fb675d0490edb652abf5ca45f_1727171289.png?output-format=webp',
            heading: 'Newly Opened Places',
            places: 36
        },
        {
            img: 'https://b.zmtcdn.com/data/collections/5aee46adaa9a17993f23fa9b3512cc4b_1710849422.png?output-format=webp',
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
