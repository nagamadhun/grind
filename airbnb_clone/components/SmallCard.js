import Image from 'next/image'
import React from 'react'
Image

function SmallCard({img,location,distance}) {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4
    hover:bg-gray-100 hover:cursor-pointer hover:scale-105 transition transform duration-200 ease-out'
    
    >
        <div className='relative h-16 w-16'>
            <Image src={img}
            fill
            className='rounded-lg'
            />
        </div>
        <div>
            <h2>{location}</h2>
            <h3 className='text-gray-500'>{distance}</h3>
        </div>
    </div>
  )
}

export default SmallCard
