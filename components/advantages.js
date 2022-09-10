import Image from 'next/future/image'

export default function Advantages() {
  return (
    <div className='w-full mb-12 md:mb-16 lg:mb-20 bg_green'>
      <div className='container mx-auto px-6 py-6 md:py-8'>
        <div className='icon_section m-auto grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div className='icon_card flex items-center justify-center'>
            <Image src="/icon/1.svg" alt="" width={49} height={49} />
            <p>Quality<br />Assurance</p>
          </div>
          <div className='icon_card flex items-center justify-center'>
            <Image src="/icon/2.svg" alt="" width={49} height={49} />
            <p>Revolutionary<br />Technology</p>
          </div>
          <div className='icon_card flex items-center justify-center'>
            <Image src="/icon/3.svg" alt="" width={49} height={49} />
            <p>Sustainable</p>
          </div>
          <div className='icon_card flex items-center justify-center'>
            <Image src="/icon/4.svg" alt="" width={49} height={49} />
            <p>Innovation</p>
          </div>
        </div>
      </div>
    </div>
  )
}