

const MovieTitle = ({title,overview}) => {
  return (
    <div className='absolute bg-gradient-to-r from-black xl:pt-[20%] w-screen aspect-video  text-white '>
       <div className=' mt-20 sm:mt-40 md:mt-30 lg:mt-35 xl:mt-15 m-5 sm:m-10 '>
        <h1 className="text-md sm:text-4xl py-2">{title}</h1>
        <p className='text-sm my-4 invisible absolute md:relative md:visible w-1/2 text-justify'>{overview}</p>
        <div className='sm:my-2 md:my-4 relative  md:mt-0 '>
            <button className=' bg-white text-black p-2 sm:px-4 md:px-10 rounded-md text-xs sm:text-lg md:text-2xl'>Play</button>
            <button className='mx-4 bg-gray-400 p-2 sm:px-4 md:px-9 rounded-md text-xs sm:text-lg md:text-2xl'>MoreInfo</button>
        </div>
        </div>
    </div>
  )
}

export default MovieTitle