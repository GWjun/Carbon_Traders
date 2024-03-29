'use client'

import Link from 'next/link'

import { useState, memo, useEffect } from 'react'

import { Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'

import dropdownItems from './dropdownItems'

const Menu = memo(function Menu({ name, idx }: { name: string; idx: number }) {
  return (
    <li className="mt-10">
      <button className="text-2xl text-white rounded-lg w-full bg-green-700">
        {name}
      </button>
      <ul className="ml-4 flex flex-col items-center">
        {dropdownItems[idx].map((it) => (
          <li key={it.label} className="py-4">
            <Link href={it.link}>
              <button className="text-gray-700 hover:scale-110 hover:text-blue-800">
                {it.label}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
})

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    document.addEventListener('prevemtScroll', () => event?.preventDefault())

    return () => {
      document.removeEventListener('preventScroll', () =>
        event?.preventDefault(),
      )
    }
  }, [])

  return (
    <div className="flex md:hidden">
      {isOpen ? (
        <XMarkIcon
          className="-mr-1.5 w-8 cursor-pointer transition duration-500 transform hover:scale-110"
          aria-hidden="true"
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <Bars3Icon
          className="-mr-1 w-7 cursor-pointer transition duration-500 transform hover:scale-110"
          aria-hidden="true"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}

      <div>
        <Transition
          show={isOpen}
          as="nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white bg-opacity-90 backdrop-blur-sm"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            <Menu name="Menu1" idx={0} />
            <Menu name="Menu2" idx={1} />
            <Menu name="Menu3" idx={2} />
          </ul>
        </Transition>
      </div>
    </div>
  )
}
