import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href="/about-us">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/contact-us">
            <a>Contact Us</a>
          </Link>
        </li>
      </ul>
    </header>
  )
}