import FeaturedMenu from '@/components/home/FeaturedMenu'
import FindUs from '@/components/home/FindUs'
import Footer from '@/components/home/Footer'
import Hero from '@/components/home/Hero'
import OpeningHours from '@/components/home/OpeningHours'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full'>
      <Hero />
      <FeaturedMenu />
      <FindUs />
      <OpeningHours />
      <Footer />
    </div>
  )
}

export default page