import React from 'react'
import { IoIosArrowDropdown } from 'react-icons/io'

const Item = ({event}) => {
  return (
    <div className='flex gap-5 itmes-center'>
      <span className='bg-gray-700 text-gray-300 p-2 rounded-lg
      h-16 w-16 font-bold text-center'>{event.date}</span>
      <div>
        <h1 className='text-xl font-semibold'>{event.title}</h1>
        <p className='text-fray-600 font-montserrat'>{event.description}</p>
      </div>
      <IoIosArrowDropdown className='mt-5 text-bold '/>
    </div>
  )
}

export default Item
