import Image from 'next/future/image'
import BusinessHours from './business-hours'
import OurOffice from './our-office'

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
                <OurOffice />
              </div>
              <div>
                <BusinessHours />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='footer_line py-2 text-center bg_green'>Copyright © 2022 Farmer Pro And Fittings Ltd.</div>
    </div>
  )
}