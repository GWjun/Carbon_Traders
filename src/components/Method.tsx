import Image from 'next/image'

import { useEffect, useState } from 'react'

import { motion } from 'framer-motion'

import mk1 from '../../public/images/mk1.webp'
import mk2 from '../../public/images/mk2.jpg'
import mk3 from '../../public/images/mk3.png'

function MechanismTap() {
  const [tab, setTab] = useState<number>(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTab((prev) => (prev + 1) % 3)
    }, 4000)

    return () => clearTimeout(timeout)
  }, [tab])

  useEffect(() => {
    document.addEventListener('aos:in:Method', () => setTab(0))

    return () => {
      document.removeEventListener('aos:in:Method', () => setTab(0))
    }
  }, [setTab])

  return (
    <>
      <div
        className="hidden min-w-[40%] mb-16 md:flex justify-between"
        data-aos="zoom-y-out"
        data-aos-delay="100"
      >
        <div>
          <motion.button
            className={`font-bold px-12 ${tab === 0 ? 'text-xl -translate-y-3' : 'text-lg hover:scale-105'}`}
            onClick={() => setTab(0)}
          >
            Carbon Calculation
          </motion.button>
        </div>

        <motion.button
          className={`font-bold px-12 ${tab === 1 ? 'text-xl -translate-y-3' : 'text-lg hover:scale-105'}`}
          onClick={() => setTab(1)}
        >
          Offset Selection
        </motion.button>
        <motion.button
          className={`font-bold px-12 ${tab === 2 ? 'text-xl -translate-y-3' : 'text-lg hover:scale-105'}`}
          onClick={() => setTab(2)}
        >
          Financial Investment
        </motion.button>
      </div>

      <div
        className="hidden md:flex h-[300px] w-[90%]"
        data-aos="zoom-y-out"
        data-aos-delay="200"
      >
        {tab === 0 && <Calculation />}
        {tab === 1 && <Selection />}
        {tab === 2 && <Investment />}
      </div>
    </>
  )
}

function MobileTap() {
  return (
    <div className="md:hidden flex flex-col items-center" data-aos="fade-up">
      <Calculation />
      <Selection />
      <Investment />
    </div>
  )
}

function Calculation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-[90%] h-full md:w-full  p-6 bg-green-300 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between"
    >
      <div className="text-center max-w-2xl pb-4 md:pb-0">
        Users input their activities that generate carbon emissions, such as
        travel or energy consumption. Our system then calculates the carbon
        footprint associated with these activities using verified emission
        factors and data algorithms.
      </div>
      <Image
        src={mk1}
        width={400}
        height={400}
        alt="mk1"
        placeholder="blur"
        className="rounded-xl shadow-md"
      />
    </motion.div>
  )
}

function Selection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-[90%] h-full md:w-full p-6 my-8 md:my-0 bg-cyan-200 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between"
    >
      <div className="text-center max-w-2xl pb-4 md:pb-0">
        After the carbon footprint is determined, users can choose from a
        variety of carbon offset projects, ranging from reforestation efforts to
        renewable energy initiatives. Each project is carefully vetted to ensure
        its credibility and impact on reducing greenhouse gas emissions.
      </div>
      <Image
        src={mk2}
        width={250}
        height={250}
        alt="mk2"
        placeholder="blur"
        className="rounded-xl shadow-md"
      />
    </motion.div>
  )
}

function Investment() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-[90%] h-full md:w-full p-6 bg-violet-300 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between"
    >
      <div className="text-center max-w-2xl pb-4 md:pb-0">
        Once users select a carbon offset project, they make a financial
        contribution proportional to their carbon footprint. This investment
        directly funds the selected project, helping to reduce or remove an
        equivalent amount of CO2 from the atmosphere. Users receive verification
        of their contribution and the impact it has made in mitigating climate
        change.
      </div>
      <Image
        src={mk3}
        width={250}
        height={250}
        alt="mk3"
        placeholder="blur"
        className="rounded-xl shadow-md"
      />
    </motion.div>
  )
}

export default function Method() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-white pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2" />

      <div className="max-w-7xl mx-auto pt-24 md:pt-48 pb-24 md:pb-48 flex flex-col items-center justify-between">
        <h3
          className="text-3xl font-bold text-center mx-auto mb-16"
          data-aos="zoom-y-out"
          data-aos-id="Method"
        >
          Overall{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-400">
            Mechanism
          </span>
        </h3>

        <MechanismTap />
        <MobileTap />
      </div>
    </section>
  )
}
