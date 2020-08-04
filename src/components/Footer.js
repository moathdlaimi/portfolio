import React, {useRef, useEffect} from 'react'
import {gsap} from 'gsap'
import '../css/Footer.css'

function Footer() {

  let footerRef = useRef(null)
  useEffect(() => {
    gsap.from(footerRef.current, {
      duration: .4,
      autoAlpha: 0,
      y: 20,
      ease:'none',
      delay: .5
    })
  },[])

    return (
        <div className="footer-container" ref={footerRef}>
          <h6> &copy; Moath Dlaimi 2020</h6>
        </div>
    )

}
export default Footer;
