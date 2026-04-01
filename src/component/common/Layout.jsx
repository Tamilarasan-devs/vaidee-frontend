import React from 'react'
import PremiumHeader from './Header'
import { Outlet } from 'react-router-dom'
import PremiumFooter from './Footer'

export default function Layout() {
  return (
    <>
        <PremiumHeader/>
        <main>
            <Outlet/>
        </main>
        <PremiumFooter/>
    </>
  )
}
