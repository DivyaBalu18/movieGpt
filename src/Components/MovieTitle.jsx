const MovieTitle = ({ title, overview }) => {
  return (
    <div className="absolute bg-gradient-to-r from-black xl:pt-[20%] w-screen aspect-video  text-white  --font-teko">
      <div className=" mt-20 sm:mt-40 md:mt-30 lg:mt-35 xl:mt-15 m-5 sm:m-10 ">
        <h1 className="text-md sm:text-4xl py-2 --font-display">{title}</h1>
        <p className="text-sm my-4 invisible absolute md:relative md:visible w-1/2 text-justify">
          {overview}
        </p>
        <div className="sm:my-2 md:my-4 relative  md:mt-0 ">
          <button className=" bg-white text-black/80 p-2 sm:px-4 md:px-8 rounded-md text-xs sm:text-lg md:text-2xl font-poppins">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5 mt-1"
              >
                <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z" />
              </svg>
              &nbsp;Play
            </div>
          </button>
          <button className="mx-4 bg-gray-400 p-2 sm:px-4 md:px-9 rounded-md text-xs sm:text-lg md:text-2xl font-poppins">
            <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 mt-1">
  <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clipRule="evenodd" />
</svg>

&nbsp;Info
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieTitle;
