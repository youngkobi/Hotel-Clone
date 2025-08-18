import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router'
Link

const HotelCard = ({room, index}) => {
  return (
      <Link to={'/rooms/' + room._id} key={room._id} className='relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90'>
      <img src={room.images[0] } alt="" />
      {
            index% 2 === 0 &&
      <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full'>
        Best Seller</p>
      }
      <div className='p-4 pt-5'>
        <div className='flex items-center justify-between'>
            <p className='font-playfair tet-xl font-medium text-gray-800'> {room.hotel.name}</p>
            <div className='flex items-center gap-1'>
                <img src={assets.starIconFilled} alt="" /> 4.5
            </div>
        </div>
        <div className='flex items-center gap-1 text-sm'>
            <img src={assets.locationIcon} alt="" />
<span>{room.hotel.address}</span>
        </div>
        <div className='flex items-center justify-between mt-4'>
            <p>
             <span className='text-xl text-gray-800'>   ${room.pricePerNight} </span>/night
            </p>
            <button className='px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer'>Book Now</button>
        </div>
      </div>
      </Link>

  )
}

export default HotelCard
