const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

const AllAcounts = () => {
  return (
    <div>
      <h2 className='text-center text-white font-poppins text-3xl '>Accounts</h2>
      <div className='bg-card-gray shadow-lg w-full px-6 rounded-md py-5  mx-auto mt-8 '>
        <div className='flex justify-between mb-5'>
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Account name'
            className='bg-bggradient1 px-2 py-1 text-white border-primary-yellow border rounded-sm flex-grow mr-5 placeholder-primary-yellow placeholder-opacity-50'
          />
          <input
            type='submit'
            value='Search'
            className='bg-primary-yellow rounded-sm px-3 cursor-pointer'
          />
        </div>
        <div className='max-h-96 overflow-y-auto small-scrollbar pr-8'>
          {arr.map((el) => (
            <div
              key={el}
              className='bg-gray-800 text-white w-80 rounded-md p-2 flex items-center justify-between my-2 cursor-pointer shadow-lg'>
              <div className='h-12 w-12 bg-white rounded-full border border-primary-yellow'></div>
              <h1 className='ml-2 font-semibold flex-grow'>Rick/TargetHit</h1>
              <h1 className='font-semibold'>ROI: 100%</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllAcounts
