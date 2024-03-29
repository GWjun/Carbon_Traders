/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'

import { useState, useEffect, forwardRef, memo } from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '#components/ui/navigation-menu'
import { cn } from '#utils/utils'

import dropdownItems from './dropdownItems'
import MobileMenu from './MobileMenu'

const ListItem = forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

const Menues = memo(function Menues() {
  return (
    <div className="hidden md:flex grow justify-end flex-wrap items-center">
      <NavigationMenu>
        <NavigationMenuList>
          {dropdownItems.map((menu, idx) => (
            <NavigationMenuItem key={idx}>
              <NavigationMenuTrigger className="bg-transparent">
                {menu.title}
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="gap-3 p-2 w-[580px] flex flex-col">
                  {menu.items.map((item) => (
                    <ListItem
                      key={item.label}
                      title={item.label}
                      href={item.link}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
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
