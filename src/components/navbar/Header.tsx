/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'

import { useState, useEffect, Fragment, memo } from 'react'

import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import dropdownItems from './dropdownItems'
import MobileMenu from './MobileMenu'

interface DropdwonMeduProps {
  name: string
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  items: {
    label: string
    link: string
  }[]
}

const DropdownMenu = memo(function DropdownMenu({
  name,
  isOpen,
  setIsOpen,
  items,
}: DropdwonMeduProps) {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Menu
      as="div"
      className="relative inline-block text-lef"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
        {name}
        <ChevronDownIcon
          className="-mr-1 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item) => (
              <Menu.Item key={item.label}>
                {({ active }) => (
                  <a
                    href={item.link}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    {item.label}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
})

// Header에서 상태를 분리함으로써 리렌더링 방지
const Menues = memo(function Menues() {
  const [isOpen1, setIsOpen1] = useState<boolean>(false)
  const [isOpen2, setIsOpen2] = useState<boolean>(false)
  const [isOpen3, setIsOpen3] = useState<boolean>(false)

  return (
    <ul className="hidden md:flex grow justify-end flex-wrap items-center">
      <li>
        <DropdownMenu
          name="menu1"
          isOpen={isOpen1}
          setIsOpen={setIsOpen1}
          items={dropdownItems[0]}
        />
      </li>
      <li>
        <DropdownMenu
          name="menu2"
          isOpen={isOpen2}
          setIsOpen={setIsOpen2}
          items={dropdownItems[1]}
        />
      </li>
      <li>
        <DropdownMenu
          name="menu3"
          isOpen={isOpen3}
          setIsOpen={setIsOpen3}
          items={dropdownItems[2]}
        />
      </li>
    </ul>
  )
})

export default function Header() {
  const [top, setTop] = useState(true)

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? 'bg-white backdrop-blur-sm shadow-lg' : ''
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <Link href="/" className="block" aria-label="Cruip">
              <div className="flex flex-row items-center">
                <img
                  className="w-8 h-8 mr-2"
                  src="/images/carbon-footprint.svg"
                  alt="logo"
                />
                <p className="font-bold">Carbon Traders</p>
              </div>
            </Link>
          </div>
          <Menues />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
