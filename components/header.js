import Link from 'next/link'
import Image from 'next/future/image'
import { Popover } from '@headlessui/react'

export default function Header() {
  return (
    <header className='w-full'>
      <div className='container mx-auto'>
        <div className='flex lg:flex-row justify-between items-center'>
          <div className='lg:w-4/12 main_logo z-10'>
            <Link href="/"><Image src="/logo1.svg" alt="Vercel Logo" width={373} height={115} /></Link>
          </div>
          <div className='lg:w-8/12 text-right hidden lg:block'>
            <ul>
              <li><Link href="/"><a>Home</a></Link></li>
              <li><Link href="/about-us"><a>About Us</a></Link></li>
              <li><Link href="/products"><a>Products</a></Link></li>
              <li><Link href="/contact-us"><a>Contact Us</a></Link></li>
            </ul>
          </div>
          <Popover className="lg:hidden">
            <Popover.Button className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none">Menu</Popover.Button>
            <Popover.Overlay className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur" />
            <Popover.Panel className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20">
              <div className="">
                <Link href="/"><a className='block text-base leading-7 tracking-tight text-gray-700'>Home</a></Link>
                <Link href="/about-us"><a className='block text-base leading-7 tracking-tight text-gray-700'>About Us</a></Link>
                <Link href="/products"><a className='block text-base leading-7 tracking-tight text-gray-700'>Products</a></Link>
                <Link href="/contact-us"><a className='block text-base leading-7 tracking-tight text-gray-700'>Contact Us</a></Link>
              </div>
            </Popover.Panel>
          </Popover>
        </div>
      </div>
    </header>
  )
}