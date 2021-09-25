import Image from "next/image"
import LogoSM from "../../assets/LogoSM.svg"
const Footer = () => {
  return (
    <footer className='flex flex-col mt-12 bg-bggradient2'>
      <div className='bg-secondary font-poppins text-white py-8 z-20'>
        <div className='container px-24 mx-auto flex justify-between'>
          <ul>
            <h1 className='text-xl text-primary-yellow font-semibold mb-2'>Navigation</h1>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Traders</a>
            </li>
            <li>
              <a href=''>News and Alerts</a>
            </li>
            <li>
              <a href=''>Charts</a>
            </li>
          </ul>
          <ul>
            <h1 className='text-xl text-primary-yellow font-semibold mb-2'>Support</h1>
            <li>
              <a href=''>Contact</a>
            </li>
            <li>
              <a href=''>Privacy Policy</a>
            </li>
            <li>
              <a href=''>Terms and Conditions</a>
            </li>
            <li>
              <a href=''>Charts</a>
            </li>
          </ul>
          <ul>
            <h1 className='text-xl text-primary-yellow font-semibold mb-2'>Socials</h1>
            <li>
              <a href=''>Facebook</a>
            </li>
            <li>
              <a href=''>Twitter</a>
            </li>
            <li>
              <a href=''>Twitch</a>
            </li>
            <li>
              <a href=''>Youtube</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='bg-bggradient1'>
        <div className='flex justify-between px-24 container mx-auto py-2 '>
          <a href='' className='relative h-auto w-24'>
            <Image src={LogoSM} />
          </a>
          <p className='text-sm text-white'>Copyright &copy; 2021 IK</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
