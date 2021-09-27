import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className='relative bg-gradient-to-b from-bggradient1 to-bggradient2 overflow-hidden layout'>
      <Navbar />
      <main className='homepage'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
