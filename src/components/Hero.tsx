'use client'
/* eslint-disable @next/next/no-img-element */

import { LazyMotion, domAnimation, m } from 'framer-motion'

import AutoVideo from '../../public/videos/AutoVideo'

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute z-[-1]" aria-hidden="true">
        <img
          className="h-[1389px] object-cover object-right"
          src="/images/earth.svg"
          alt="landing"
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 flex flex-col items-center">
        <div className="pt-48 pb-12 md:pt-64 md:pb-60 w-full flex flex-col md:flex-row items-center justify-between">
          <div className="text-center pb-24 md:pb-0">
            <h1
              className="text-5xl md:text-7xl font-extrabold mb-6 flex flex-col items-center md:items-start"
              data-aos="zoom-y-out"
            >
              <span>Contents About</span>
              <span className="bg-clip-text text-transparent pb-3 bg-gradient-to-r from-green-600 to-teal-400">
                Carbon Neutrality
              </span>
            </h1>
            <div
              className="max-w-xl flex flex-col items-center md:items-start"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              <p className="text-xl text-gray-600 mb-8">Our landing page</p>
              <div className="flex flex-col md:flex-row">
                <button className="text-lg mb-4 md:mb-0 md:mr-4 px-28 md:px-10 py-4 shadow-lg rounded-lg bg-gradient-to-r text-white from-green-600 to-lime-600">
                  Simple Test
                </button>
                <a
                  className="text-lg px-28 md:px-10 py-4 shadow-lg rounded-lg text-black bg-white"
                  href="https://github.com/gwjun"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <LazyMotion features={domAnimation}>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="mb-12 md:mb-0">
                <AutoVideo src="/videos/aa.mp4" width={500} />
              </div>
            </m.div>
          </LazyMotion>
        </div>
        <div
          className=" max-w-4xl text-center text-2xl text-gray-700 md:text-4xl font-bold mb-28"
          data-aos="zoom-y-out"
          data-aos-delay="300"
        >
          Our platform aims to track and reward carbon emissions reductions.
          We're here to help you achieve{' '}
          <span className="bg-clip-text text-transparent pb-3 bg-gradient-to-r from-green-600 to-teal-400">
            carbon neutrality
          </span>{' '}
          carbon neutrality while positively impacting the planet.
        </div>
      </div>
    </section>
  )
}
