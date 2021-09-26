const traders = () => {
  return (
    <div className='h-screen'>
      <h1 className='text-center text-primary-yellow text-5xl mt-48 font-semibold'>
        Traders
      </h1>
      <div className='flex justify-between container px-48 mx-auto mt-24'>
        <div className='h-full '>
          <h2 className='text-center text-primary-yellow text-3xl  font-semibold'>
            Accounts
          </h2>
          <div className='bg-card-gray shadow-lg '>
            <div className='bg-blue-100 w-60'>
              <div className='h-12 w-12 bg-white rounded-full border border-primary-yellow'>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default traders
