import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import logo from '../../media/Chipotle_Mexican_Grill_logo.svg.png';
import secondaryLogo from '../../media/Screen Shot 2023-05-11 at 10.49.46 AM.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import bag from '../../media/Screen Shot 2023-05-11 at 5.45.56 PM.png';

const Navbar = ({display, setDisplay}) => {

  /*const [scrollState, setScrollState] = useState(0);


  const handleScroll = (event) => {
    setScrollState(window.scrollY);
    if (scrollState >= 32.5) {
      document.getElementById('mainNav').classList.add('fixed-top');
    }
    else {
      document.getElementById('mainNav').classList.remove('fixed-top');
    }
  }

window.addEventListener('scroll', handleScroll)*/

const handleClick = (event) => {
  setDisplay(true);
  document.body.style.overflow = "hidden";
  console.log(display);
}
  
    return (
    <div className="Navbar">
        <nav id="secondaryNav" className={`navbar navbar-light ${styles.secondaryNav}`}>
          <button style={{opacity: 0}} disabled></button>
          <a className={`navbar-brand mb-6 ${styles.secondNavText}`} href="/">ENABLE ACCESSIBILITY</a>
        </nav>
        <nav id="mainNav" className={`navbar navbar-expand-lg navbar-light bg-white border-bottom border-default fixed-top ${styles.mainNav}`}>
          <a className="navbar-brand" href="/"><img className={styles.image} src={logo} alt="logo" /></a>
          <div onClick={handleClick} className={`${styles.signIn} m-3`}>
                <FontAwesomeIcon className='ms-3 fs-4' icon={faUser} />
                <span className={` ${styles.signInText} m-3 fw-bold`}> SIGN IN</span>
          </div>
          <div className={`navbar-nav ms-auto fw-bold`}>
            <a className={`nav-item nav-link ${styles.tabs}`} href="/">ORDER</a>
            <a className={`nav-item nav-link ${styles.tabs}`} href="/">CATERING</a>
            <a class={`nav-item nav-link ${styles.tabs}`} href="/">REWARDS</a>
            <a className={`nav-item nav-link ${styles.tabs}`} href="/">OUR VALUES</a>
            <a className={`nav-item nav-link ${styles.tabs} me-2`} href="/">NUTRITION</a>
          </div>
            <div className="ms-1">
              <button className={`${styles.findButton} fs-6 me-5`}>
                <span className=""><img src={secondaryLogo} alt="logo" className={`${styles.secondLogo} m-auto`} /></span>
                <span className="fs-4"> | </span><span className={styles.buttonText}>FIND A CHIPOTLE</span>
              </button>
              <img src={bag} alt='cart' className="me-5" style={{width: "21px", height: "33px"}} />
            </div>
        </nav>
    </div>
    )
}

export default Navbar;