import Head from 'next/head'
import Header from '/components/header'
import Footer from '/components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Farmer Pro Pipes | About Us</title>
        <meta name="description" content="Farmer Pro Pipes | About Us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        About Us
      </main>
      <Footer />
    </div>
  )
}
