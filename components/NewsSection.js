import Image from "next/image"
import NewsImage from "../assets/BTCZero.svg"
const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const NewsSection = () => {
  return (
    <div className='w-3/6 '>
      <h1 className='text-2xl text-center mb-3'>Recent News</h1>
      <div className='bg-card-gray p-8 shadow-lg rounded-lg h-2/3 overflow-y-auto small-scrollbar section'>
        {arr.map((el) => (
          <div key={el} className='flex items-center p-3 my-3 bg-gray-900 rounded-lg'>
            <div className='h-24 w-60 relative'>
              <Image src={NewsImage} layout='fill' className='absolute' />
            </div>
            <div className='px-5'>
              <h1 className='text-lg font-semibold text-primary-yellow'>
                Bitcoin going to zero
              </h1>
              <p>
                Crypto experts predict bitcoin going to zero. Many moonboys though, think
                it will reach $100,000 by the end of 2021
              </p>
              <a className='text-blue-500' href=''>
                &gt; Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsSection
