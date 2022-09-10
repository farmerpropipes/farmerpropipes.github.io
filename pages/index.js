import Head from 'next/head'
import Link from 'next/link'
import Header from '/components/header'
import Footer from '/components/footer'
import Image from 'next/future/image'
import Advantages from '../components/advantages'
import Certificates from '../components/certificates'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Farmer Pro Pipes</title>
        <meta name="description" content="Farmer Pro Pipes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className='w-full home_hero'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col lg:flex-row justify-center items-center py-16 md:py-20 lg:py-24'>
              <div className='lg:w-6/12'>
                <div  className='header_typo'>
                  <div className='header_typo1 text_shadow'>Welcome to</div>
                  <div className='header_typo2 text_shadow'>Farmer Pro Pipes</div>
                </div>
                <div className='header_typo_p text_shadow'>Take a look of our wide rang of products</div>
                <Link href="/products"><button className='btn btn_lg'>See Our Products</button></Link>
              </div>
              <div className='lg:w-6/12 flex justify-end mt-8 lg:mt-0'>
                <Image src="/hero_product.png" alt="" width={571} height={452} />
              </div>
            </div>
          </div>
        </div>
        <Advantages />
        <div className='w-full mb-12 md:mb-16 lg:mb-20'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 justify-center items-center'>
              <div className='w-full lg:w-6/12'>
                <Image src="/section_img1.png" alt="" width={630} height={396} className='rounded-3xl shadow-md w-full' />
              </div>
              <div className='w-full lg:w-6/12'>
                <h1>About Us</h1>
                <p>Farmer Pro Pipes & Fitting Pvt. Ltd., a Gujarat based business entity is appreciated in the market for offering premium quality Industrial Pipes, Industrial Pipe Fittings and HDPE pipes & Fittings. We manufacture and supply rigid PVC Pipes, HDPE Pipes & fittings, SWR Pipes & Fittings, PVC Pipe Fittings, Underground Sewerage Pipes, solvent Cement, etc.</p>
                <Link href="/about-us"><button className='btn'>Know More</button></Link>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full mb-10 md:mb-14 lg:mb-20'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 justify-center'>
              <div className='w-full lg:w-6/12 card_vision p-8 rounded-3xl shadow-md'>
                <div className='flex flex-col justify-center'>
                  <h2>Vision</h2>
                  <p>Farmer Pro Pipes was established in 2010 with the aim of manufacturing plumbing and drainage systems in India. Today, we cover the needs of millions of farmers. Our aims to be a truly global, high-performing organisation delivering quality products and services to its customers.</p>
                </div>
              </div>
              <div className='w-full lg:w-6/12 card_mission p-8 rounded-3xl shadow-md'>
                <div className='flex flex-col justify-center'>
                  <h2>Mission</h2>
                  <p>Farmer Pro Pipes was established in 2010 with the aim of manufacturing plumbing and drainage systems in India. Today, we cover the needs of millions of farmers. Our aims to be a truly global, high-performing organisation delivering quality products and services to its customers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Certificates />

        <div className='w-full mb-12 md:mb-16 lg:mb-20 bg_LightGray'>
          <div className='container mx-auto px-4 py-12 md:py-6 lg:py-8'>
          <div className='flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 justify-center items-center'>
              <div className=' w-full lg:w-4/12'>
                <h1>Hot Products</h1>
                <p>We build responsible water management solutions that can unlock higher crop yields, better harvest, and efficient resource productivity for prolonged use.</p>
                <Link href="/products"><button className='btn'>See Our Products</button></Link>
              </div>
              <div className='w-full lg:w-8/12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-4 lg:gap-8'>
                <div className='text-center mx-auto'>
                  <Image src="/product/1.png" alt="" width={230} height={230}/>
                  <h3>HDPE Pipe & Fittings</h3>
                </div>
                <div className='text-center mx-auto'>
                  <Image src="/product/2.png" alt="" width={230} height={230} />
                  <h3>Sprinkler Pipe</h3>
                </div>
                <div className='text-center mx-auto'>
                  <Image src="/product/3.png" alt="" width={230} height={230} />
                  <h3>Garden Pipes</h3>
                </div>
                <div className='text-center mx-auto'>
                  <Image src="/product/4.png" alt="" width={230} height={230} />
                  <h3>PP Ropes</h3>
                </div>
                <div className='text-center mx-auto'>
                  <Image src="/product/5.png" alt="" width={230} height={230} />
                  <h3>Section Pipes</h3>
                </div>
                <div className='text-center mx-auto'>
                  <Image src="/product/6.png" alt="" width={230} height={230} />
                  <h3>LD Kishan Pipes</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full mb-12 md:mb-16 lg:mb-20'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col md:flex-row justify-center items-center w-full md: lg:w-8/12 mx-auto'>
              <div className='w-full lg:w-6/12'>
                <Image src="/office.png" alt="" width={631} height={421} className='rounded-3xl w-full'/>
              </div>
              <div className='w-full lg:w-6/12 bg_LightGray p-8 lg:p-16 rounded-r-3xl'>
                <h2>Infrastructure & Machine</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec lectus a nibh aliquet auctor non in neque. Nunc vestibulum, diam vitae placerat asd af fringilla, leo neque pharetra nunc, vel voasdhbaiy.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
