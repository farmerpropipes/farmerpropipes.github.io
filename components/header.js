import Link from 'next/link'
import Image from 'next/future/image'

export default function Header() {
  return (
    <header className='w-full'>
      <div className='container mx-auto'>
        <div className='flex lg:flex-row sm:flex-col justify-between items-center'>
          <div className='lg:w-4/12 main_logo'>
            <Link href="/"><Image src="/logo1.svg" alt="Vercel Logo" width={373} height={115} /></Link>
          </div>
          <div className='lg:w-8/12 text-right'>
            <ul>
              <li><Link href="/"><a>Home</a></Link></li>
              <li><Link href="/about-us"><a>About Us</a></Link></li>
              <li><Link href="/products"><a>Products</a></Link></li>
              <li><Link href="/contact-us"><a>Contact Us</a></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}