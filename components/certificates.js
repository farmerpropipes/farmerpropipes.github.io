import Image from 'next/future/image'

export default function Certificates() {
  return (
    <div className='w-full mb-12 md:mb-16 lg:mb-20'>
      <div className='container mx-auto px-4'>
        <div className='flex gap-5 justify-center items-center mb-7'>
          <Image src="/title_icon/certificates.svg" alt="" width={43} height={47} />
          <h1 className='m-0'>Certificates</h1>
        </div>
        <div className='flex flex-wrap justify-center gap-6 lg:gap-16'>
          <div className='w-3/12 md:w-auto flex items-center justify-center'><Image src="/certificates/1.png" alt="" width={90} height={96} className='md:w-4/5 lg:w-full' /></div>
          <div className='w-3/12 md:w-auto flex items-center justify-center'><Image src="/certificates/2.png" alt="" width={140} height={96} className='md:w-4/5 lg:w-full' /></div>
          <div className='w-3/12 md:w-auto flex items-center justify-center'><Image src="/certificates/3.png" alt="" width={104} height={103} className='md:w-4/5 lg:w-full' /></div>
          <div className='w-3/12 md:w-auto flex items-center justify-center'><Image src="/certificates/4.png" alt="" width={125} height={99} className='md:w-4/5 lg:w-full' /></div>
          <div className='w-3/12 md:w-auto flex items-center justify-center'><Image src="/certificates/5.png" alt="" width={153} height={110} className='md:w-4/5 lg:w-full' /></div>
        </div>
      </div>
    </div>
  )
}