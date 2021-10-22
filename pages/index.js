import Head from "next/head"
import Image from "next/image"
import LogoXS from "../assets/LogoXS.svg"
import BearvsBull from "../assets/bulls-bears-and-the-farm.svg"
import DownChevron from "../assets/MDI - chevron-double-down.svg"
export default function Home() {
  return (
    <div className='homepage'>
      <Head>
        <title>Target Hit</title>
      </Head>
      <main className='font-poppins container mx-auto'>
        <section className='mt-72'>
          <div className='flex justify-around'>
            <div className='flex flex-col justify-between'>
              <h1 className='text-5xl text-primary-yellow font-semibold'>
                Take your trading to the next level
              </h1>
              <ul className='bg-card-gray w-2/3 rounded-xl px-12 mt-12 shadow-2xl border border-primary-yellow'>
                <li className='text-white text-2xl my-5 flex items-center'>
                  <div className='relative h-5 w-5 mr-5'>
                    <Image src={LogoXS} className='absolute' layout='fill' />
                  </div>
                  Technical analysis
                </li>
                <li className='text-white text-2xl my-5 flex items-center'>
                  <div className='relative h-5 w-5 mr-5'>
                    <Image src={LogoXS} className='absolute' layout='fill' />
                  </div>
                  Trading signals
                </li>
                <li className='text-white text-2xl my-5 flex items-center'>
                  <div className='relative h-5 w-5 mr-5'>
                    <Image src={LogoXS} className='absolute' layout='fill' />
                  </div>
                  Crypto news
                </li>
              </ul>
              <button role='button' className='btn-primary'>
                Join now
              </button>
            </div>
            <div className='h-96 w-96 relative mt-12'>
              <Image src={BearvsBull} className='absolute' layout='fill' />
            </div>
          </div>
          <div className='flex justify-center'>
            <button className='relative h-12 w-12 mx-auto animate-bounce mt-36'>
              <Image src={DownChevron} className='absolute' layout='fill' />
            </button>
          </div>
        </section>
        <section className='my-48'>
          <h1 className='text-5xl text-primary-yellow mb-24 z-50'>
            Watch me trade live on <span className='text-red-600'>YouTube</span> 24/7
          </h1>
          <iframe
            className='rounded-xl border-primary-yellow border z-10'
            width='1000'
            height='562.50'
            src='https://www.youtube.com/embed/_0_E9xPL4EQ'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen='true'></iframe>

          <p className='text-primary-yellow text-lg mt-8'>
            Disclaimer: This is NOT financial advice! Target Hit does not take any
            responsibility for your losses.
          </p>
        </section>
       
      </main>
    </div>
  )
}
