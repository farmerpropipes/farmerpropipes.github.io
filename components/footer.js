import Image from 'next/future/image'

export default function Footer() {
  return(
    <div className='bg_LightGray w-full'>
      <footer className='lg:container mx-auto px-4 py-16'>
        <div className='flex lg:flex-row sm:flex-col justify-center items-center'>
          <div className='lg:w-4/12'>
            <Image src="/logo2.svg" alt="" width={373} height={115} />
          </div>
          <div className='lg:w-8/12'>
            <div className='flex lg:flex-row sm:flex-col lg:gap-16 md:gap-8 sm:gap-4 justify-end'>
              <div>
                <h3 className='mb-2.5 mt-0'>Our Office</h3>
                <div className='flex items-center mb-2.5'>
                  <Image src="/icon/address.svg" alt="" width={16} height={22} className='mr-2' />
                  <p className='fix_address_w'>Plot No-1, Mahashakti Estate, Nr., Rajlakshmi Plot, Bhavda, Ahmedabad-382433. (Gujarat) India.</p>
                </div>
                <div className='flex items-center mb-2.5'>
                  <Image src="/icon/phone.svg" alt="" width={17} height={17} className='mr-2' />
                  <a href="tel:+919825687734">+91 98256 87734</a>&nbsp;&nbsp;<a href="tel:+919586078607">+91 95860 78607</a>
                </div>
                <div className='flex items-center mb-2.5'>
                  <Image src="/icon/email.svg" alt="" width={18.85} height={13.25} className='mr-2' />
                  <a href="mailto:mahashaktiplast.0607@gmail.com">mahashaktiplast.0607@gmail.com</a>
                </div>
              </div>
              <div>
                <h3 className='mb-2.5 mt-0'>Business Hours</h3>
                <div className='flex justify-between items-center mb-2.5'>
                  <b className='mr-2.5'>Monday-Saturday</b> 
                  <p>10am to 6pm</p>
                </div>
                <div className='flex justify-between items-center mb-2.5'>
                  <b className='mr-2.5'>Sunday</b>
                  <p>Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='footer_line py-2 text-center bg_green'>Copyright © 2022 Farmer Pro And Fittings Ltd.</div>
    </div>
  )
}