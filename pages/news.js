import MostVolume from "../components/MostVolume"
import NewsSection from "../components/NewsSection"
import TopMovers from "../components/TopMovers"

const news = () => {
  return (
    <div className='container mx-auto px-36 font-poppins text-white '>
      <div className='flex justify-between mt-48'>
        <TopMovers />
        <MostVolume />
        <NewsSection />
      </div>
    </div>
  )
}

export default news
