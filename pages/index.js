import Head from 'next/head'
import Header from '/components/header'
import Footer from '/components/footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Farmer Pro Pipes</title>
        <meta name="description" content="Farmer Pro Pipes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className='home_hero'>
          <div className='section_width'>
            <div>
              <div  className='header_typo'>
                <div className='header_typo1'>Welcome to</div>
                <div className='header_typo2'>Farmer Pro Pipes</div>
              </div>
              <div className='header_typo_p'>Take a look of our wide rang of products</div>
              <button className='btn btn_lg'>See Our Products</button>
            </div>
            <Image src="/hero_product.png" alt="" width={571} height={452} />
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

        <div className='section_two section_width section_content'>
          <div className='section_img'>
            <Image src="/section_img1.png" alt="" width={630} height={396} />
          </div>
          <div className='section_copy'>
            <h1>About Us</h1>
            <p>Farmer Pro Pipes & Fitting Pvt. Ltd., a Gujarat based business entity is appreciated in the market for offering premium quality Industrial Pipes, Industrial Pipe Fittings and HDPE pipes & Fittings. We manufacture and supply rigid PVC Pipes, HDPE Pipes & fittings, SWR Pipes & Fittings, PVC Pipe Fittings, Underground Sewerage Pipes, solvent Cement, etc.</p>
            <button className='btn'>Know More</button>
          </div>
        </div>

        <div className='section_three section_width section_content'>
          <div className='card card_vision'>
            <h2>Vision</h2>
            <p>Farmer Pro Pipes was established in 2010 with the aim of manufacturing plumbing and drainage systems in India. Today, we cover the needs of millions of farmers. Our aims to be a truly global, high-performing organisation delivering quality products and services to its customers.</p>
          </div>
          <div className='card card_mission'>
            <h2>Mission</h2>
            <p>Farmer Pro Pipes was established in 2010 with the aim of manufacturing plumbing and drainage systems in India. Today, we cover the needs of millions of farmers. Our aims to be a truly global, high-performing organisation delivering quality products and services to its customers.</p>
          </div>
        </div>

        <div className='section_four section_width section_content'>
          <div className='section_title'>
            <Image src="/title_icon/certificates.svg" alt="" width={43} height={47} />
            <h1>Certificates</h1>
          </div>
          
          <div className='section_certificates'>
            <Image src="/certificates/1.png" alt="" width={90} height={96} />
            <Image src="/certificates/2.png" alt="" width={140} height={96} />
            <Image src="/certificates/3.png" alt="" width={104} height={103} />
            <Image src="/certificates/4.png" alt="" width={125} height={99} />
            <Image src="/certificates/5.png" alt="" width={153} height={110} />
          </div>
        </div>


        <div className='bg_LightGray section_content'>
          <div className='section_five section_width'>          
            <div className='section_copy'>
              <h1>Hot Products</h1>
              <p>We build responsible water management solutions that can unlock higher crop yields, better harvest, and efficient resource productivity for prolonged use.</p>
              <button className='btn'>See Our Products</button>
            </div>
            <div className='hot_product'>
              <div className='hot_row'>
                <div className='hot_col'>
                  <Image src="/product/1.png" alt="" width={230} height={230} />
                  <h3>HDPE Pipe & Fittings</h3>
                </div>
                <div className='hot_col'>
                  <Image src="/product/2.png" alt="" width={230} height={230} />
                  <h3>Sprinkler Pipe</h3>
                </div>
                <div className='hot_col'>
                  <Image src="/product/3.png" alt="" width={230} height={230} />
                  <h3>Garden Pipes</h3>
                </div>
              </div>
              <div className='hot_row'>
                <div className='hot_col'>
                  <Image src="/product/4.png" alt="" width={230} height={230} />
                  <h3>PP Ropes</h3>
                </div>
                <div className='hot_col'>
                  <Image src="/product/5.png" alt="" width={230} height={230} />
                  <h3>Section Pipes</h3>
                </div>
                <div className='hot_col'>
                  <Image src="/product/6.png" alt="" width={230} height={230} />
                  <h3>LD Kishan Pipes</h3>
                </div>
              </div>
            </div>
        
          </div>
        </div>

        <div className='section_six section_width section_content'>
          <div className='office_img'>
            <Image src="/office.png" alt="" width={631} height={421} />
          </div>
          <div className='office_copy'>
            <h2>Infrastructure & Machine</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec lectus a nibh aliquet auctor non in neque. Nunc vestibulum, diam vitae placerat asd af fringilla, leo neque pharetra nunc, vel voasdhbaiy.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
