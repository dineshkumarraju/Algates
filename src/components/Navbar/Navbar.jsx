import React from 'react'
import './navbar.css'
import  logo from'../../Assets/logo.webp'
import { IoMdCloseCircle } from "react-icons/io"
import {  TbGridDots } from "react-icons/tb"
import { useState } from 'react'
const Navbar = () => {
  const [active, setActive] = useState('navBar')
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }
  const removeNavbar = ()=>{
    setActive('navBar')}

  return (
    <section className='navBarsection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a href='#' className='logo flex'>
            <h1> <img src={logo} alt="" /></h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href='#' className='navLink'>Home</a>
            </li>

            <li className="navItem">
              <a href='#' className='navLink'>Products</a>
            </li>

            <li className="navItem">
              <a href='#' className='navLink'>Events</a>
            </li>

            <li className="navItem">
              <a href='#' className='navLink'>Careers</a>
            </li>

            <li className="navItem">
              <a href='#' className='navLink'>Contact</a>
            </li>
            <button className='btn2'>
              <a href='#'>OPEN A DEMAT ACCOUNT</a>
            </button>
          </ul>
          <div onClick={removeNavbar} className='closeNavbar'>
            <IoMdCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
        <TbGridDots className='icon'/>
        </div>
      </header>
    </section>
  )
}

export default Navbar