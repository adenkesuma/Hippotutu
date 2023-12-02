'use client'

import { useEffect, useRef, useState } from 'react'

import { PRODUCT_CATEGORIES } from '@/config'
import { useOnClickOutsite } from '@/hooks/use-on-click-outsite'
import NavItem from './NavItem'

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null)
      }
    }

    document.addEventListener('keydown', handler)

    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [])

  const isAnyOpen = activeIndex !== null

  const navRef = useRef<HTMLDivElement | null>(null)

  useOnClickOutsite(navRef, () => setActiveIndex(null))

  return (
    <div className='flex gap-4 h-full' ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () => activeIndex === index ? setActiveIndex(null) : setActiveIndex(index)

        const isOpen = index === activeIndex

        return (
          <NavItem 
            key={category.value} 
            handleOpen={handleOpen}
            isOpen={isOpen}
            category={category}
            isAnyOpen={isAnyOpen}
          />
        )
      })}
    </div>
  )
}

export default NavItems
