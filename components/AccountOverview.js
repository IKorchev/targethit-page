import Image from "next/image"
import Graph from "../assets/GraphExample.svg"

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

const AccountOverview = () => {
  return (
    <div>
      <h2 className='text-center text-white font-poppins text-3xl'>Account overview</h2>
      <div className='bg-card-gray p-12 mx-auto rounded-md shadow-lg w-max mt-8'>
        <div className='mx-auto'>
          <div>
            <h3 className='flex items-center text-primary-yellow font-semibold font-poppins mb-8 text-2xl'>
              <div className='bg-white h-12 w-12 mr-4 rounded-full text-black grid place-items-center'>
                R
              </div>
              Rick/TargetHit
            </h3>
            <div>
              <h3 className=' text-white font-poppins text-lg '>
                Account age: <span className='ml-2 text-primary-yellow'>69 days</span>
              </h3>
              <h3 className=' text-white font-poppins text-lg '>
                ROI: <span className='ml-2 text-positive-green'>+30%</span>
              </h3>
              <h3 className=' text-white font-poppins text-lg '>
                Total $:
                <span className='ml-2 text-primary-yellow'>$100,000.20</span>
              </h3>
            </div>
          </div>
          <div className=''>
            <div className='flex text-white mt-5 ml-auto'>
              <div className='flex flex-col justify-between mt-3'>
                <p>$10M</p>
                <p>$1M</p>
                <p>$100K</p>
                <p>$10000</p>
                <p>$1000</p>
                <p>$100</p>
                <p>$0</p>
              </div>
              <div className='relative w-full ml-0'>
                <Image src={Graph} className='absolute' layout='responsive' />
              </div>
            </div>
            <div className='flex text-sm mt-3 justify-between pl-8 -mr-5 text-white'>
              <p>Jan</p>
              <p>Feb</p>
              <p>Mar</p>
              <p>Apr</p>
              <p>May</p>
              <p>Jun</p>
              <p>Jul</p>
              <p>Aug</p>
              <p>Sep</p>
              <p>Oct</p>
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <div className='flex justify-between w-full'>
            <button className='px-2 py-1 rounded-md bg-primary-yellow font-semibold'>
              Open Positions
            </button>
            <button className='px-2 py-1 rounded-md  text-white border border-primary-yellow font-semibold'>
              Pending orders
            </button>
            <button className='px-2 py-1 rounded-md text-white border border-primary-yellow font-semibold'>
              Stop orders
            </button>
          </div>
          <table className='text-white mt-8  rounded-lg max-h-72 overflow-y-auto block small-scrollbar bg-secondary'>
            <thead className='sticky top-0'>
              <tr className=''>
                <th className='bg-gray-900'>Pair</th>
                <th className='bg-gray-900'>Side</th>
                <th className='bg-gray-900'>Position size</th>
                <th className='bg-gray-900'>Notional size</th>
                <th className='bg-gray-900'>Market price</th>
                <th className='bg-gray-900'>PNL</th>
                <th className='bg-gray-900'>Average open price</th>
              </tr>
            </thead>
            <tbody className='h-24'>
              <tr>
                <td>BTC-PERP</td>
                <td>Short</td>
                <td>3.9 BTC</td>
                <td>$192,231.12</td>
                <td>$43,234</td>
                <td className='text-negative-red'>-$210.12</td>
                <td>$43,250.00</td>
              </tr>
              {arr.map((item) => (
                <tr key={item}>
                  <td>BTC-PERP</td>
                  <td>Short</td>
                  <td>3.9 BTC</td>
                  <td>$192,231.12</td>
                  <td>$43,234</td>
                  <td className='text-positive-green'>$210.12</td>
                  <td>$43,250.00</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AccountOverview
