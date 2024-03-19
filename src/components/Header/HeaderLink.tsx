import Link from 'next/link'
import { ReactNode } from 'react'

interface HeaderLinkProps {
  children: ReactNode
  href: string
}

export const HeaderLink = ({ children, href }: HeaderLinkProps) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded border border-transparent bg-neutral-800 p-3 font-medium transition-all hover:border hover:border-red-600"
    >
      {children}
    </Link>
  )
}

export default HeaderLink
