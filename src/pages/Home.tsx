import React from 'react'
import Topbar from '../components/Topbar'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ImgSec from '../components/ImgSec'
import { Tables ,ReferralBenefitsSection} from '../components/Table'
import Button from '../components/Button'
import FAQSection from '../components/FAQ'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <div className='bg-cyan-100'>
        <Topbar />
      </div>
      <div className='pt-2'>
        <Header />
      </div>
      <div className='pt-4'>
        <Navbar />
      </div>
      <div>
        <ImgSec />
      </div>
      <div className='pt-8'>
      <ReferralBenefitsSection />
      </div>
      <div>
        <Tables />
        
      </div>
      <div>
        <FAQSection/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home