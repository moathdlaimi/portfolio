import React, {useRef, useEffect, useState} from 'react'
import {gsap, TweenMax, Power3} from 'gsap'
import Navigation from '../components/Navigation.js'
import Footer from '../components/Footer.js'
import '../css/Projects.css'
import gizmo from '../css/imgs/gizmo.png'
import greatfood from '../css/imgs/greatfood.png'
import rolodex from '../css/imgs/rolodex.png'
import weather from '../css/imgs/weather.png'
import wish from '../css/imgs/wish.png'
import calc from '../css/imgs/calc.png'

function Projects() {

  // const [isShown, setIsShown] = useState(false);

  let projectsContainer = useRef(null)
  let project1 = useRef(null)
  let project2 = useRef(null)
  let project3 = useRef(null)
  let project4 = useRef(null)
  let project5 = useRef(null)
  let project6 = useRef(null)

  useEffect(() => {
    TweenMax.to(projectsContainer, 0, {css: {visibility:'visible'}})
    // TweenMax.from(project1, .8, {opacity: 0, y: 100, ease: Power3.easeOut, delay:.2 })
    // TweenMax.from(project2, .8, {opacity: 0, y: 100, ease: Power3.easeOut, delay:.4 })
    // TweenMax.from(project3, .8, {opacity: 0, y: 100, ease: Power3.easeOut, delay:.6 })
    // TweenMax.from(project4, .8, {opacity: 0, y: 100, ease: Power3.easeOut, delay:.8 })
    // TweenMax.from(project5, .8, {opacity: 0, y: 100, ease: Power3.easeOut, delay: 1 })
    // TweenMax.from(project6, .8, {opacity: 0, y: 100, ease: Power3.easeOut, delay:1.2})

    TweenMax.staggerFrom(
      [project1,project2,project3,project4,project5,project6], 0.8, {opacity: 0, y: 100, ease: Power3.easeOut}, .2 )
  }, [])

    return (
      <div>
        <Navigation />
          <div
            className="projects-container"
            ref={el => projectsContainer = el}>

           <div className="sub-container"
            ref={el => project1 = el}>

             <img className="image" src={gizmo} alt=""/>
             <a href="https://gizmo-frontend.herokuapp.com/" target="_blank">
               <div className="text">Gizmo - tool share</div>
             </a>
           </div>

           <div className="sub-container" ref={el => project2 = el}>
             <img className="image" src={greatfood} alt="" />
             <a href="https://greatfood.herokuapp.com/" target="_blank">
               <div className="text">grEAT food - user contriubed recipes</div>
             </a>
           </div>

           <div className="sub-container" ref={el => project3 = el}>
             <img className="image" id="rolodex" src={rolodex} alt="" />
             <a href="https://cohortrolodex.herokuapp.com/" target="_blank">
               <div className="text">Cohortrolodex - GA cohort</div>
             </a>
           </div>

           <div className="sub-container" ref={el => project4 = el}>
             <img className="image" src={weather} alt="" />
             <a href="https://moathdlaimi.github.io/" target="_blank">
               <div className="text">The Weather App</div>
             </a>
           </div>

           <div className="sub-container" ref={el => project5 = el}>
             <img className="image" src={wish} alt="" />
             <a href="https://sheltered-garden-16773.herokuapp.com/" target="_blank">
               <div className="text">React wishlist</div>
             </a>
           </div>

           <div className="sub-container" ref={el => project6 = el}>
             <img className="image" src={calc} alt="" />
             <a href="https://github.com/moathdlaimi/React_Calculator">
               <div className="text">React - iOS mock calculator</div>
             </a>
           </div>

   </div>
        <Footer />
      </div>
    )
}

export default Projects
