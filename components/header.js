import Link from 'next/link'
import Image from 'next/future/image'
import { Popover } from '@headlessui/react'

export default function Header() {
  return (
    <header className='w-full'>
      <div className='container mx-auto px-4'>
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
            <Popover.Button className="relative z-10 [&:not(:focus-visible)]:focus:outline-none">
              <Image src="/menu.svg" alt="Vercel Logo" width={25} height={20} />
            </Popover.Button>
            <Popover.Overlay className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur" />
            <Popover.Panel className="absolute inset-x-0 top-0 z-0 origin-top bg-white pt-48 pb-20">
              <div className="bg-white w-full">  
                <ul className='mobile_menu pl-4'>
                  <li><Link href="/"><a>Home</a></Link></li>
                  <li><Link href="/about-us"><a>About Us</a></Link></li>
                  <li><Link href="/products"><a>Products</a></Link></li>
                  <li><Link href="/contact-us"><a>Contact Us</a></Link></li>
                </ul>
              </div>
            </Popover.Panel>
          </Popover>
        </div>
      </div>
    </header>
  )
}