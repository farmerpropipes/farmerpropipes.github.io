import Head from 'next/head'
import Header from '/components/header'
import Footer from '/components/footer'
import Advantages from '../components/advantages'
import BusinessHours from '../components/business-hours'
import OurOffice from '../components/our-office'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Farmer Pro Pipes | Contact Us</title>
        <meta name="description" content="Farmer Pro Pipes | Contact Us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className='w-full bg-no-repeat bg-cover bg-center flex items-end page_hero page_contact'>
          <div className='container mx-auto px-4 page_title uppercase mb-5'>Contact Us</div>
        </div>
        <Advantages /> 
        <div className='w-full mb-12 md:mb-16 lg:mb-20'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col md:flex-row gap-8 lg:gap-16 justify-center items-center'>
              <div className='w-full lg:w-4/12'>
                <h1>Mahashakti Estate</h1>
                  <div className='footer'>
                    <div className='mt-10'>
                      <OurOffice />
                    </div>
                    <div className='mt-10'>
                      <BusinessHours />
                    </div>
                  </div>
                
              </div>
              <div className='w-full lg:w-8/12'>
                <div className='contact_map'>
                  <iframe className='rounded-3xl card_box_shadow w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5774953140904!2d72.62594681545016!3d23.039280384944718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8690b99a0b87%3A0x99f41a3c2ad56839!2sMahashakti%20Estate!5e0!3m2!1sen!2sin!4v1661684152876!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
