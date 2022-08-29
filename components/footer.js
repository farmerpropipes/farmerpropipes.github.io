import Image from 'next/future/image'

export default function Footer() {
  return(
    <div className='bg_LightGray section_content'>
      <footer className='section_width'>
        <Image src="/logo2.svg" alt="" width={373} height={115} />
        <div className='footer_copy'>
          <div className='footer_data'>
            <h3>Our Office</h3>
            <div className='d-flex'>
              <Image src="/icon/address.svg" alt="" width={16} height={22} />
              <p className='fix_address_w'>Plot No-1, Mahashakti Estate, Nr., Rajlakshmi Plot, Bhavda, Ahmedabad-382433. (Gujarat) India.</p>
            </div>
            <div className='d-flex'>
              <Image src="/icon/phone.svg" alt="" width={17} height={17} />
              <a href="tel:+919825687734">+91 98256 87734</a><a href="tel:+919586078607">+91 95860 78607</a>
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
      </footer>
      <div className='footer_line'>Copyright © 2022 Farmer Pro And Fittings Ltd.</div>
    </div>
    
  )
}