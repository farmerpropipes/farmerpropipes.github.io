import Head from 'next/head'
import Header from '/components/header'
import Footer from '/components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Farmer Pro Pipes</title>
        <meta name="description" content="Farmer Pro Pipes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        Home
      </main>
      <Footer />
    </div>
  )
}
