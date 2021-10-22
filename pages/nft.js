import Mint from "../components/Mint"
import Image from "../assets/nfts/Group 1.png"
import { useEffect } from "react"
import { DAppProvider } from "@usedapp/core"
const NFT = () => {
  return (
    <DAppProvider>
      <div className='container mx-auto px-36 font-poppins text-white h-screen '>
        <div className='flex flex-col justify-center mt-48'>
          <h1 className='text-center text-3xl'>Mint 1 of 1000 NFT's</h1>
          <div className='flex mt-24'>
            <img src={Image} alt='' className='h-96 w-96' />
            <Mint />
          </div>
        </div>
      </div>
    </DAppProvider>
  )
}

export default NFT
