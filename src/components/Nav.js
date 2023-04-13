import React, {useState} from "react";
import Link from "next/link";
import { FaBars } from 'react-icons/fa'

export default function Nav() {

  const [nav, setNav] = useState(true)

  return (
    <nav className='nav-bar'>
    <h1 className='logo-name'>Katherine <span id="last-name">Nishimura</span></h1>
    <ul id="nav-list" className={nav ? 'nav-list' : "hamburger-nav"}>
      <li className='nav-item'><Link href={'#about'}>About Me</Link></li>
      <li className='nav-item'><Link href={'#why'}>Why You and I</Link></li>
      <li className='nav-item'><Link href={'#projects'} scrollSmooth>Projects</Link></li>
      <li className='nav-item'><Link href={'#contact'}>Contact</Link></li>
      <li><a className='resume' href="https://flowcv.com/resume/7ll6cs8fn2" target='_blank' rel="noreferrer noopener">Resume</a></li>
    </ul>
    <div className='hidden'>
      <button id="hamburger" onClick={() => setNav(!nav)}><FaBars /></button>
    </div>
  </nav>

  )
}