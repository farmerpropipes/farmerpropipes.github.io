import Head from 'next/head'
import Header from '/components/header'
import Footer from '/components/footer'
import Image from 'next/future/image'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Farmer Pro Pipes | About Us</title>
        <meta name="description" content="Farmer Pro Pipes | About Us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className='w-full bg-no-repeat bg-cover bg-center flex items-end page_hero page_about'>
          <div className='container mx-auto page_title uppercase mb-5'>About Us</div>
        </div>
        <div className='w-full mb-20 bg_green'>
          <div className='container mx-auto py-8'>
            <div className='flex lg:flex-row sm:flex-col lg:gap-16 md:gap-8 sm:gap-4 justify-center'>
              <div className='icon_card flex items-center'>
                <Image src="/icon/1.svg" alt="" width={36.15} height={46} />
                <p>Quality<br/>Assurance</p>
              </div>
              <div className='icon_card flex items-center'>
                <Image src="/icon/2.svg" alt="" width={44.71} height={42} />
                <p>Revolutionary<br/>Technology</p>
              </div>
              <div className='icon_card flex items-center'>
                <Image src="/icon/3.svg" alt="" width={43.56} height={43} />
                <p>Sustainable</p>
              </div>
              <div className='icon_card flex items-center'>
                <Image src="/icon/4.svg" alt="" width={43.76} height={46} />
                <p>Innovation</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full mb-20'>
          <div className='container mx-auto'>
            <div className='flex lg:flex-row sm:flex-col lg:gap-16 md:gap-8 sm:gap-4 justify-center items-center'>
              <div className='lg:w-6/12'>
                <Image src="/section_img1.png" alt="" width={630} height={396} className='rounded-3xl shadow-md w-full' />
              </div>
              <div className='lg:w-6/12'>
                <h2>About Us</h2>
                <p>Incepted in the year 2004, Miraj Pipes & Fittings Pvt. Ltd. is counted for offering top class quality Industrial Pipes, Industrial Pipe Fittings and HDPE Sprinklers. The company has attained the heights of success under the proficient headship of the COO Mr. Kailash Chandra Agarwal.</p>
                
                <h2 className='mt-10'>Infrastructure</h2>
                <p>Our state - of - the - art infrastructure is spread over more than 6 lacs Sq. Ft. area and is equipped with latest and technologically advanced machines to deliver small or bulk orders with excellence. We have in-house R&D facility to develop innovative products and Laboratory in order to provide products as per ISI standards. With total of 18 machines for PVC, CPVC, HDPE & Fittings, the company has a production capacity of 55640 MT.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full mb-20'>
          <div className='container mx-auto text-center'>
            <p>We are ISO 9001:2008 Certified and offers RIGID PVC pipes & fittings, SWR pipes & fittings, Elastomeric pipes, Underground Sewerage Pipes, CPVC & UPVC plumbing pipes & fittings, HDPE pipes & fittings, Sprinkler pipes & Fittings, Conduit pipes & fitting, MDPE pipes, Column pipes , Blue Casing Pipes Lateral, Drip Irrigation System and solvent Cement for diverse application in agriculture, housing, industries etc. We recently have launched “MIRAJ Rain water harvesting system” & “Miraj Green House Tunnel” which adds more diversification to our product portfolio.</p>
          </div>
        </div>

        <div className='w-full mb-20'>
          <div className='container mx-auto'>
            <div className='flex lg:flex-row sm:flex-col lg:gap-16 md:gap-8 sm:gap-4 justify-center items-center'>
              <div className='lg:w-6/12 p-8 rounded-3xl shadow-md'>
                <h2>Production Capacity - 55640 MT</h2>
                <p>UPVC Pipes/CPVC Pipes/SWR Pipes/Plumbing Pipes - 49866 MT</p>
                <p>HDPE Pipe/Sprinkler - 3942 MT</p>
                <p>PVC Fitting - 1832 MT</p>
                <p>Industrial Plastic Pipes,Rigid PVC Pipes,SWR Pipe Fittings Exporters</p>
              </div>
              <div className='lg:w-6/12 p-8 rounded-3xl shadow-md'>
                <h2>Product Quality</h2>
                <p>We give prime importance to the quality of products manufactured by us, as quality is the basic criterion that manages to give us an edge in the market. Hence, we conduct third party inspections to closely scrutinize the products delivered by us right from the procurement of the raw material to the final dispatch to the clients.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full mb-20'>
          <div className='container mx-auto'>
            <div className='flex gap-5 justify-center items-center mb-7'>
              <Image src="/title_icon/certificates.svg" alt="" width={43} height={47} />
              <h1 className='m-0'>Certificates</h1>
            </div>
            <div className='flex lg:flex-row sm:flex-col lg:gap-16 md:gap-8 sm:gap-4 justify-center items-center'>
              <Image src="/certificates/1.png" alt="" width={90} height={96} />
              <Image src="/certificates/2.png" alt="" width={140} height={96} />
              <Image src="/certificates/3.png" alt="" width={104} height={103} />
              <Image src="/certificates/4.png" alt="" width={125} height={99} />
              <Image src="/certificates/5.png" alt="" width={153} height={110} />
            </div>
          </div>
        </div>

        <div className='w-full mb-20'>
          <div className='container mx-auto text-center'>
            <h2>Product Quality Certificates</h2>
            <p>We have earned the following quality certificates for our products :</p>

            <p className='mt-7'>“IS 4985” for Potable Water in PVC Pipes</p>
            <p>“IS 4984” for potable water in HDPE Pipes</p>
            <p>“IS 13592” for Sewerage Pipe</p>
            <p>“IS 14151 Part I to Part II” for Sprinkler System for Irrigation</p>
            <p>“IS 15778 for Hot and cold Water system</p>
            <p>“IS 9537” for Conduits for electrical installation</p>
            <p>“IS 12786” for Lateral Pipes for Irrigation.</p>
            <p>"IS 14333" for HDPE pipes for sewerage</p>
          </div>
        </div>


        <div className='w-full mb-20'>
          <div className='container mx-auto'>
            <div className='flex gap-5 justify-center items-center mb-7'>
              <Image src="/title_icon/achievements.svg" alt="" width={55.75} height={40.19} />
              <h1 className='m-0'>Achievements</h1>
            </div>
            <div className='flex lg:flex-row sm:flex-col gap-16 justify-center items-center'>
              <div className='p_card text-center'>
                <Image src="/achievements/1.svg" alt="" width={187.64} height={240} />
                <h3>2019</h3>
              </div>
              <div className='p_card text-center'>
                <Image src="/achievements/1.svg" alt="" width={187.64} height={240} />
                <h3>2020</h3>
              </div>
              <div className='p_card text-center'>
                <Image src="/achievements/1.svg" alt="" width={187.64} height={240} />
                <h3>2021</h3>
              </div>
              <div className='p_card text-center'>
                <Image src="/achievements/1.svg" alt="" width={187.64} height={240} />
                <h3>2022</h3>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full mb-20'>
          <div className='container mx-auto'>
            <div className='flex gap-5 justify-center items-center mb-7'>
              <Image src="/title_icon/achievements.svg" alt="" width={55.75} height={40.19} />
              <h1>Management Team</h1>
            </div>
            <div className='flex lg:flex-row sm:flex-col gap-16 justify-center items-center'>
              <div className='p_card text-center'>
                <Image src="/management/1.png" alt="" width={283} height={283} />
                <h3>Mr. Kailash Chandra Agarwal</h3>
                <p>Managing Director</p>
              </div>
              <div className='p_card text-center'>
                <Image src="/management/1.png" alt="" width={283} height={283} />
                <h3>Mr. Kailash Chandra Agarwal</h3>
                <p>Managing Director</p>
              </div>
              <div className='p_card text-center'>
                <Image src="/management/1.png" alt="" width={283} height={283} />
                <h3>Mr. Kailash Chandra Agarwal</h3>
                <p>Managing Director</p>
              </div>
            </div>
          </div>
        </div>
        
      </main>
      <Footer />
    </div>
  )
}
