import AllAcounts from "../components/AllAcounts"
import AccountOverview from "../components/AccountOverview"

const Traders = () => {
  return (
    <div className='my-36'>
      <h1 className='text-center  text-white font-poppins text-5xl mt-36 font-semibold'>
        Traders
      </h1>
      <div className='flex justify-between container px-24 mx-auto mt-12'>
        <AllAcounts />
        <AccountOverview />
      </div>
    </div>
  )
}

export default Traders