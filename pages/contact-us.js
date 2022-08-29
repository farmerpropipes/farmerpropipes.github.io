import Head from 'next/head'
import Header from '/components/header'
import Footer from '/components/footer'
import Image from 'next/future/image'

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
        <div className='page_hero page_contact'>
          <div className='section_width page_title'>
            Contact Us
          </div>
        </div>
        <div className='section_one'>
          <div className='icon_card'>
            <Image src="/icon/1.svg" alt="" width={36.15} height={46} />
            <p>Quality<br/>Assurance</p>
          </div>
          <div className='icon_card'>
            <Image src="/icon/2.svg" alt="" width={44.71} height={42} />
            <p>Revolutionary<br/>Technology</p>
          </div>
          <div className='icon_card'>
            <Image src="/icon/3.svg" alt="" width={43.56} height={43} />
            <p>Sustainable</p>
          </div>
          <div className='icon_card'>
            <Image src="/icon/4.svg" alt="" width={43.76} height={46} />
            <p>Innovation</p>
          </div>
        </div>
      
        <div className='contact_section section_width section_content'>
          <div className='contact_data'>
            <h1>Mahashakti Estate</h1>
            <div className='footer_copy'>
              <div className='footer_data'>
                <h3>Our Office</h3>
                <div className='d-flex'>
                  <Image src="/icon/address.svg" alt="" width={16} height={22} />
                  <p className='fix_address_w'>Plot No-1, Mahashakti Estate, Nr., Rajlakshmi Plot, Bhavda, Ahmedabad-382433. (Gujarat) India.</p>
                </div>
                <div className='d-flex'>
                  <Image src="/icon/phone.svg" alt="" width={17} height={17} />
                  <div><a href="tel:+919825687734">+91 98256 87734</a>  <a href="tel:+919586078607">+91 95860 78607</a></div>
                </div>
                <div className='d-flex'>
                  <Image src="/icon/email.svg" alt="" width={18.85} height={13.25} />
                  <a href="mailto:mahashaktiplast.0607@gmail.com">mahashaktiplast.0607@gmail.com</a>
                </div>
              </div>
              <div className='footer_data'>
                <h3>Business Hours</h3>
                <div className='d-flex'>
                  <b>Monday-Saturday</b> 
                  <p>10am to 6pm</p>
                </div>
                <div className='d-flex'>
                  <b>Sunday</b> 
                  <p>Closed</p>
                </div>
              </div>
            </div>
          </div>
          <div className='contact_map'>
            <Image src="/map.png" alt="" width={859} height={343} />
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5774953140904!2d72.62594681545016!3d23.039280384944718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8690b99a0b87%3A0x99f41a3c2ad56839!2sMahashakti%20Estate!5e0!3m2!1sen!2sin!4v1661684152876!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
