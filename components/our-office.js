import Image from 'next/future/image'
import { Fragment } from 'react'

export default function OurOffice() {
  return (
    <Fragment>
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
    </Fragment>
  )
}