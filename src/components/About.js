import React from 'react'
import Navigation from '../components/Navigation.js'
import Footer from '../components/Footer.js'

function About() {

    return (
        <div>
          <Navigation />
          <div className="about-container">

  <div className="about-first-sub1">
    <h2>A San Francisco based <strong>Full-Stack Software Developer</strong>
    </h2>
    <br/>
    <div className="contact-container">
      <h3>FIND ME ON:</h3>
      <div className="links-container">
        <h4><a className="contact-link" id="linkedin"  href="https://www.linkedin.com/in/moathdlaimi" target="_blank" ><i class="fab fa-linkedin"></i> Linkedin</a></h4>
        <h4><a className="contact-link" id="github" href="https://github.com/moathdlaimi" target="_blank" ><i class="fab fa-github"></i> Github</a></h4>
        <h4><a className="contact-link" id="insta" href="https://www.instagram.com/moathdlaimi/" target="_blank" ><i class="fab fa-instagram"></i> Instagram</a></h4>

      </div>
    </div>

  </div>

  <div className="about-first-sub2">
    <img className="mypic" src="./css/imgs/mypic.jpg" alt="" />
  </div>
</div>
          <Footer />
        </div>
    )

}
export default About;
