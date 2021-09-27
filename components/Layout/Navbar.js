import Image from "next/image"
import Logo from "../../assets/Logo.svg"
import AccountIcon from "../../assets/MDI - account-circle.svg"

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const Navbar = () => {
  return (
    <nav className='bg-secondary font-poppins shadow-2xl fixed w-full z-10 '>
      <div className='container flex justify-around items-center mx-auto py-2 z-50 '>
        <a href=''>
          <div className='relative h-12 w-48'>
            <Image src={Logo} layout='fill' />
          </div>
        </a>
        <div className='flex justify-between text-lg text-white w-1/3'>
          <a href='/'>Home</a>
          <a href='/traders'>Traders</a>
          <a href='/news'>News And Alerts</a>
          <a href=''>Charts</a>
          <a href=''>TGH Token</a>
        </div>
        <button className='text-center relative h-10 w-10 usericon cursor-pointer'>
          <Image src={AccountIcon} className='absolute' layout='fill' />
        </button>
      </div>
      <hr className='bg-current border border-primary-yellow' />
      <div className='flex justify-between text-sm font-semibold px-36 py-2 z-50 container mx-auto'>
        {arr.map((el) => (
          <div
            key={el}
            className={`rounded-md  text-black px-8 animate-pulse ${
              el === 2 || el === 5 || el === 7 ? "bg-negative-red" : "bg-positive-green"
            }`}>
            <h5>SOL</h5>
            <h5>$147</h5>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
