const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

const TopMovers = () => {
  return (
    <div className='w-1/4'>
      <h1 className='text-2xl text-center mb-3'>Top Movers</h1>
      <div className=' bg-card-gray rounded-md shadow-lg section overflow-y-auto small-scrollbar section'>
        <div className='flex justify-between px-8 py-3 w-full border-b'>
          <button>
            <h1 className='bg-primary-yellow text-black px-2 rounded-md text-lg'>1D</h1>
          </button>
          <button>
            <h1 className='bg-black text-white px-2 rounded-md text-lg'>1W</h1>
          </button>
          <button>
            <h1 className='bg-black text-white px-2 rounded-md text-lg'>1M</h1>
          </button>
        </div>
        <div className='py-2 px-8'>
          {arr.map((el) => (
            <div className='flex justify-between items-center text-white py-1' key={el}>
              <h1>SOL</h1>
              <div className='w-2/4 bg-primary-yellow h-0.5 rounded-full' />
              <h1
                className={`${
                  el === 5 || el === 2 || el === 8
                    ? "text-negative-red"
                    : "text-positive-green"
                }`}>
                {el === 5 || el === 2 || el === 8 ? "-20%" : "+21%"}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopMovers
