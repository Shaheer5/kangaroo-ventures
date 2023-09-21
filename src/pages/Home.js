import React from 'react'

import Hero from '../components/Hero/Hero'
import Pricing from '../components/Pricing/Pricing'
import WhyUs from '../components/WhyUs/WhyUs'
import FAQs from '../components/FAQs/FAQs'
import Testimonial from '../components/Testimonial/Testimonial'
import Services from '../components/Services/Services'

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonial />
      <Pricing />
      <WhyUs />
      <FAQs />
    </div>
  )
}
