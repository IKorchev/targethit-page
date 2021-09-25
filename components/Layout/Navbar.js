import Image from "next/image"
import Logo from "../../assets/Logo.svg"
import AccountIcon from "../../assets/MDI - account-circle.svg"
const Navbar = () => {
  return (
    <nav className='bg-secondary font-poppins shadow-2xl '>
      <div className='flex justify-around items-center border-b border-primary-yellow mx-auto py-2 z-50 '>
        <a href=''>
          <div className='relative h-12 w-48'>
            <Image src={Logo} layout='fill' />
          </div>
        </a>
        <div className='flex justify-between text-lg text-white w-1/3'>
          <a href=''>Home</a>
          <a href=''>Traders</a>
          <a href=''>News And Alerts</a>
          <a href=''>Charts</a>
          <a href=''>TGH Token</a>
        </div>
        <div className='text-center relative h-10 w-10'>
          <Image src={AccountIcon} className='absolute' layout='fill' />
        </div>
      </div>
      <div className='flex justify-between text-sm font-semibold px-48 py-2 z-50'>
        <div className='rounded-md bg-positive-green px-8'>
          <h5 className='text-black'>SOL</h5>
          <h5 className='text-black'>$147</h5>
        </div>
        <div className='rounded-md bg-negative-red px-8'>
          <h5 className='text-black'>SOL</h5>
          <h5 className='text-black'>$147</h5>
        </div>
        <div className='rounded-md bg-positive-green px-8'>
          <h5 className='text-black'>SOL</h5>
          <h5 className='text-black'>$147</h5>
        </div>
        <div className='rounded-md bg-positive-green px-8'>
          <h5 className='text-black'>SOL</h5>
          <h5 className='text-black'>$147</h5>
        </div>
        <div className='rounded-md bg-negative-red px-8'>
          <h5 className='text-black'>SOL</h5>
          <h5 className='text-black'>$147</h5>
        </div>
        <div className='rounded-md bg-positive-green px-8'>
          <h5 className='text-black'>SOL</h5>
          <h5 className='text-black'>$147</h5>
        </div>
        <div className='rounded-md bg-positive-green px-8'>
          <h5 className='text-black'>SOL</h5>
          <h5 className='text-black'>$147</h5>
        </div>
        <div className='rounded-md bg-negative-red px-8'>
          <h5 className='text-black'>SOL</h5>
          <h5 className='text-black'>$147</h5>
        </div>
        <div className='rounded-md bg-positive-green px-8'>
          <h5 className='text-black'>SOL</h5>
          <h5 className='text-black'>$147</h5>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
