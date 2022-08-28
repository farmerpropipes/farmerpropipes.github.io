import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='section_width'>
      <header>
        <div className='main_logo'>
          <Link href="/"><Image src="/logo1.svg" alt="Vercel Logo" width={373} height={115} /></Link>
        </div>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/about-us"><a>About Us</a></Link></li>
          <li><Link href="/products"><a>Products</a></Link></li>
          <li><Link href="/contact-us"><a>Contact Us</a></Link></li>
        </ul>
      </header>
    </div>
  )
}