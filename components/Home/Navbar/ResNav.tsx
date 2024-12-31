"use client";

import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResNav = () => {
  const [showNav, setShowNav] = useState(false)
  const openNavbar = () => {
    setShowNav(true)
  }
  const closeNavbar = () => {
    setShowNav(false)
  }

  return (
    <div>
        <Nav openNav={openNavbar}/>
        <MobileNav showNav={showNav} closeNav={closeNavbar}/>
    </div>
  )
}

export default ResNav