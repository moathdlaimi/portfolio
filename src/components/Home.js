import React, {useRef, useEffect} from 'react'
import Navigation from '../components/Navigation.js'
import Footer from '../components/Footer.js'
import {Link} from 'react-router-dom'
import {gsap} from 'gsap'
import '../css/Home.css'


function Home() {

  const containersRef = useRef(null)
  useEffect(() => {
    gsap.from(containersRef.current, {
      duration: .4,
      autoAlpha: 0,
      y: 150,
      ease:'none'
    })
  },[])
    return (
      <div className="main-container">
        <Navigation />
        <section className="container" ref={containersRef}>
          <div className="about-me">
            <article>
              <h1>&lt;About Me&gt;</h1>
              <h3>Passionate for developing beautiful and functional user interface.</h3>
              <Link to={"/About"} className="explore-btn">Explore</Link>
            </article>
          </div>
          <div className="code">
            <article>
              <h1>C&lt;&gt;de</h1>
              <h3>Focuses on writing clean,elegant and efficient code.</h3>
                <Link to={"/Projects"} className="explore-btn">Explore</Link>
            </article>
          </div>
        </section>
        <Footer />
      </div>

    )

}


export default Home;
