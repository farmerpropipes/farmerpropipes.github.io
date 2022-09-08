import Image from 'next/future/image'

export default function Advantages() {
  return (
    <div className='w-full mb-12 md:mb-16 lg:mb-20 bg_green'>
      <div className='container mx-auto px-4 py-4 md:py-6 lg:py-8'>
        <div className='flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-16'>
          <div className='icon_card flex items-center justify-center w-4/12 md:w-auto'>
            <Image src="/icon/1.svg" alt="" width={36.15} height={46} />
            <p>Quality<br />Assurance</p>
          </div>
          <div className='icon_card flex items-center justify-center w-4/12 md:w-auto'>
            <Image src="/icon/2.svg" alt="" width={44.71} height={42} />
            <p>Revolutionary<br />Technology</p>
          </div>
          <div className='icon_card flex items-center justify-center w-4/12 md:w-auto'>
            <Image src="/icon/3.svg" alt="" width={43.56} height={43} />
            <p>Sustainable</p>
          </div>
          <div className='icon_card flex items-center justify-center w-4/12 md:w-auto'>
            <Image src="/icon/4.svg" alt="" width={43.76} height={46} />
            <p>Innovation</p>
          </div>
        </div>
      </div>
    </div>
  )
}