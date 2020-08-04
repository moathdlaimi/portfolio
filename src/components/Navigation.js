import React, {useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {gsap} from 'gsap'
import '../css/Navigation.css'

function Navigation() {
  const navRef = useRef(null)
  useEffect(() => {
    gsap.from(navRef.current, {
      duration: .4,
      autoAlpha: 0,
      y: -50,
      ease:'none'
    })
  },[])

    return (
      <div className="nav-container" ref={navRef} >
        <Link to="/" className="nav-links">HOME </Link>
        <Link to="/About" className="nav-links">ABOUT </Link>
        <Link to="/Projects" className="nav-links">PROJECTS </Link>
      </div>
    )
}

export default Navigation
