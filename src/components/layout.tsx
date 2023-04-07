import type { ReactNode } from 'react'

import { ActiveLink } from './active-link'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">🗞️ noticias</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <ActiveLink href="/" activeClassName="text-accent">
                Top
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/new" activeClassName="text-accent">
                New
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/best" activeClassName="text-accent">
                Best
              </ActiveLink>
            </li>
          </ul>
        </div>
      </div>
      <main className="container mx-auto">{children}</main>
    </>
  )
}
