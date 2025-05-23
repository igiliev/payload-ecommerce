'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import './Nav.scss'
import { CartIcon } from '@/components/CartIcon'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex gap-3 items-center">
      {navItems.map(({ link }, i) => {
        return <CMSLink className="navLink" key={i} {...link} appearance="link" />
      })}
      <CartIcon />
      {/* <Link href="/search">
        <SearchIcon className="w-5" />
      </Link> */}
    </nav>
  )
}
