import React, {useRef, useEffect, useState} from 'react'
import {gsap, TweenMax, Power3} from 'gsap'
import {useIntersection} from 'react-use'
import '../css/About.css'
import Navigation from '../components/Navigation.js'
import Footer from '../components/Footer.js'
import mypic from '../css/imgs/mypic.jpg'

function About() {

  const sectionRef = useRef(null)
  const intersection = useIntersection(sectionRef, {
    root:null,
    rootMargin:"0px",
    threshold:0.9
  })

  const fadeIn = (element) => {
    gsap.to(element, 1,{
      opacity:1,
      y: -70,
      ease: 'power4.out',
      stagger: {
          amount: 0.6
      }
    })
  }

  const fadeOut = (element) => {
    gsap.to(element, 1,{
      opacity:0,
      y: -40,
      ease: 'power4.out'
    })
  }

  intersection && intersection.intersectionRatio < 0.9 ?
  fadeOut('.fadeIn')
  :
  fadeIn('.fadeIn')

  // let graphContainer = useRef(null)
  // let div1 = useRef(null)
  // let div2 = useRef(null)
  // let div3 = useRef(null)
  // let div4 = useRef(null)

  // useEffect(() => {
  //   TweenMax.to(graphContainer, 0, {css: {visibility:'visible'}})
  //
  //   TweenMax.staggerFrom(
  //     [div1,div2,div3,div4], 0.8, {opacity: 0, x: -700, ease: Power3.easeOut}, .2 )
  // }, [])
  // ref={el => graphContainer = el}
  // ref={el => div1 = el}
  // ref={el => div2 = el}
  // ref={el => div3 = el}
  // ref={el => div4 = el}

    return (
        <div>
          <Navigation />
          <div className="about-container" >

            <div className="intro-container">
              <div className="intro-div1">
              <h2>Hello, my name is Moath Dlaimi, I'm from San Francisco, California</h2>
              <p>I am a Full-Stack Software Developer and a Front-End enthusiast.
                I recevied my bachelor from the University of Petra in Amman/Jordan in Software
                Engineering. I moved the United States in 2017, I graduated from General Assembly
                Software Immersive Bootcamp in July/2020.
              </p>
              </div>
              <div className="intro-div2">
                <img src={mypic} className="mypic" alt="mypic"/>
              </div>
            </div>

            <div className="graph-container" ref={sectionRef}>
              <div className="div1 fadeIn" ></div>
              <div className="div2 fadeIn" ></div>
              <div className="div3 fadeIn" ></div>
              <div className="div4 fadeIn" ></div>
            </div>

            <div>

            </div>
          </div>
          <Footer />
        </div>
    )

}
export default About;
