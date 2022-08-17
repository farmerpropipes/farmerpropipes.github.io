import Head from 'next/head'
import Header from '/components/header'
import Footer from '/components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Farmer Pro Pipes | Contact Us</title>
        <meta name="description" content="Farmer Pro Pipes | Contact Us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        Contact Us
      </main>
      <Footer />
    </div>
  )
}
