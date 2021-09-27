const arr = [1, 2, 3, 4, 5, 6, 7]

const MostVolume = () => {
  return (
    <div className='w-96 mx-12 section'>
      <h1 className='text-2xl text-center mb-3'>Most Volume</h1>
      <div className='bg-card-gray shadow-lg rounded-md py-5 section'>
        <div className='px-6'>
          <h1 className='font-semibold text-lg text-center mb-2'>Binance</h1>
          {arr.map((el) => (
            <div
              key={el}
              className='bg-white text-black black p-1 my-1 rounded-md flex justify-around'>
              <h1>BTC</h1>
              <h1>$100K</h1>
            </div>
          ))}
        </div>
        <hr className='my-5' />
        <div className='px-6'>
          <h1 className='font-semibold text-lg text-center mb-2'>FTX</h1>
          {arr.map((el) => (
            <div
              key={el}
              className='bg-white text-black black my-1 p-1 rounded-md flex justify-around'>
              <h1>BTC</h1>
              <h1>$100K</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MostVolume
