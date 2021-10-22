import { ChainId, useContractFunction, useEtherBalance, useEthers } from "@usedapp/core"
import { useEffect, useState } from "react"
import { shortenAddress } from "@usedapp/core"
import { formatEther } from "@ethersproject/units"
import { abi } from "../abi"
import { utils } from "ethers"
import { Contract } from "@ethersproject/contracts"

const Mint = () => {
  const [value, setValue] = useState(1)
  const { activateBrowserWallet, account, library, chainId, deactivate } = useEthers()
  const etherBalance = useEtherBalance(account)
  const cInterface = new utils.Interface(abi)
  const wethContractAddress = "0x419ae022948a917bD3B0e79B790434487e308Fe6"
  const contract = new Contract(wethContractAddress, cInterface)
  const { state, send } = useContractFunction(contract, "mint")

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      }}
      className=' flex flex-col  items-center mx-auto h-full justify-around'>
      {!account ? (
        <button
          onClick={activateBrowserWallet}
          className='whitespace-nowrap bg-gray-800 hover:bg-gray-900 transform duration-100 text-yellow-500 font-semibold text-xl border border-yellow-500 py-1 rounded-md px-5'
          placeholder='Image'>
          Connect metamask
        </button>
      ) : (
        <div className='h-12'>
          {etherBalance && (
            <span
              className='whitespace-nowrap  bg-gray-800  transform duration-100
             text-yellow-500 font-semibold text-sm border border-yellow-500 py-1 rounded-l-md px-5'>
              {parseFloat(formatEther(etherBalance)).toFixed(3)}
            </span>
          )}
          <span
            className='whitespace-nowrap  bg-gray-800  transform duration-100 
          text-yellow-500 font-semibold text-sm border-b border-t border-yellow-500 py-1 px-5'>
            {shortenAddress(account)}
          </span>
          <button
            onClick={deactivate}
            className='whitespace-nowrap bg-gray-800  transform duration-100 
          text-negative-red font-semibold text-sm border border-negative-red py-1 rounded-r-md px-5 hover:opacity-90'>
            Disconnect
          </button>
        </div>
      )}
      {/* {chainId === ChainId.Polygon ? ( */}
      <div className='h-full mt-24 w-70 text-black'>
        <div className='flex flex-col my-2'>
          <label htmlFor='amount' className='text-white text-center text-lg mb-2'>
            How many would you like to mint?
          </label>
          <select
            onChange={(e) => {
              console.log(e.target.value)
              setValue(e.target.value)
            }}
            name='amount'
            id='amount'
            className='h-full border-primary-yellow rounded-md text-center font-semibold text-xl'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='21'>11</option>
          </select>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault()
            send(value.toString())
          }}
          type='submit'
          className='h-full w-full bg-gray-800 hover:bg-gray-900 transform duration-100 flex-grow text-primary-yellow font-semibold text-xl border border-primary-yellow rounded-md px-5'
          placeholder='Image'>
          MINT
        </button>
      </div>
      {/* ) : (
        <h1 className='text-3xl mt-12'>Please change network to Polygon to continue</h1>
      )} */}
    </form>
  )
}

export default Mint
