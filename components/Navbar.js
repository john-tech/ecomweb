import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsBagHeartFill } from 'react-icons/bs';


const Navbar = ({ cart, addtoCart, removeFromCart, clearCart, subtotal }) => {
  console.log(cart, addtoCart, removeFromCart, clearCart, subtotal)
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    } else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef()

  return (
    <div className='flex flex-col md:flex-row md:justify-start  justify-center items-center py-2 shadow-md sticky top-0 bg-white z-10'>
      <div className="logo mx-5">
        <Link href={'/'}> <Image src="/logo.png" alt="" width={60} height={60} /></Link>
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-8 font-bold md:text-md'>
          <Link href={'/tshirts'}><li className=''>Tshirts</li></Link>
          <Link href={'/hoodies'}><li className=''>Hoodies</li></Link>
          <Link href={'/stickers'}><li className=''>Stickers</li></Link>
          <Link href={'/mugs'}><li className=''>Mugs</li></Link>
          <li></li>
        </ul>
      </div>
      <div onClick={toggleCart} className="cursor-pointer cart absolute right-0 top-4 mx-5">
        <AiOutlineShoppingCart className='text-xl md:text-2xl' />
      </div>
      <div ref={ref} className={`w-72 h-[100vh] sideCart absolute top-0 right-0 bg-orange-100 px-8 py-10 transition-transform translate-x-0 transform`}>
        <h2 className='font-bold text-xl'>Shopping Cart</h2>
        <span onClick={toggleCart} className='absolute top-5 right-2 cursor-pointer text-2xl text-orange-500'>
          <AiFillCloseCircle />
        </span>
        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length == 0 && <div className='my-4 font-normal'>Your cart Empty</div>}
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className="item flex my-5">
                <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                <div className='flex font-semibold items-center justify-center w-1/3 text-lg'>
                  < AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-orange-500' />
                  <span className='mx-2 text-sm'>{cart[k].qty}</span>
                  <AiFillPlusCircle onClick={() => { addtoCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-orange-500' />

                </div>
              </div>
            </li>
          })}
        </ol>
        <div className="font-bold my-4" >SubTotal: {subtotal}</div>

        <div className="flex">
            <Link href={'/chackout'}>
          <div className="flex mr-1  text-white bg-orange-500 border-0 py-2 px-2 focus:outline-none hover:bg-orange-600 rounded text-sm">
            <BsBagHeartFill className='m-1' />   Chackout</div>
            </Link>

          <button onClick={clearCart} className="flex mr-1 text-white bg-orange-500 border-0 py-2 px-2 focus:outline-none hover:bg-orange-600 rounded text-sm">
            <BsBagHeartFill className='m-1' /> Clear Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar