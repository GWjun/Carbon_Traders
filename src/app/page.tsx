'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Example from '#components/Example'
import Feature from '#components/Feature'
import Hero from '#components/Hero'
import Method from '#components/Method'

export default function Page() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    AOS.init({
      duration: 600,
    })
  })
  return (
    <div>
      <Hero />
      <Feature />
      <Example />
      <Method />
    </div>
  )
}
