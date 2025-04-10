import React from 'react'

const MovieTitle = ({title,overview}) => {
  return (
    <div className='absolute bg-gradient-to-r from-black xl:pt-[20%] w-screen aspect-video  text-white '>
       <div className='mt-50 m-10 '>
        <h1 className="text-4xl py-4">{title}</h1>
        <p className='text-sm w-1/2 text-justify'>{overview}</p>
        <div className='my-4 '>
            <button className=' bg-white text-black p-2 px-10 rounded-md'>Play</button>
            <button className='mx-4 bg-gray-400 p-2 px-9 rounded-md'>MoreInfo</button>
        </div>
        </div>
    </div>
  )
}

export default MovieTitle