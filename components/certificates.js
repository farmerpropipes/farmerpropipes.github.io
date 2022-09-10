import Image from 'next/future/image'

export default function Certificates() {
  return (

    <div className='w-full mb-12 md:mb-16 lg:mb-20'>
      <div className='container mx-auto px-6'>
        <div className='flex gap-5 justify-center items-center mb-7'>
          <Image src="/title_icon/certificates.svg" alt="" width={43} height={47} />
          <h1 className='m-0'>Certificates</h1>
        </div>
        <div className='flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 certificates_img'>
          <div className='text-center'>
            <Image src="/certificates/1.png" alt="" width={118} height={118} />
          </div>
          <div className='text-center'>
            <Image src="/certificates/2.png" alt="" width={118} height={118} />
          </div> 
          <div className='text-center'> 
            <Image src="/certificates/3.png" alt="" width={118} height={118} />
          </div> 
          <div className='text-center'> 
            <Image src="/certificates/4.png" alt="" width={118} height={118} />
          </div> 
          <div className='text-center'> 
            <Image src="/certificates/5.png" alt="" width={118} height={118} />
          </div>
        </div>
      </div>
    </div>
  )
}