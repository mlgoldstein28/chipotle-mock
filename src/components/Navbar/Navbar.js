import React from 'react';
import styles from './Navbar.module.scss';
import logo from '../../images/Chipotle_Mexican_Grill_logo.svg.png';
import secondaryLogo from '../../images/Screen Shot 2023-05-11 at 10.49.46 AM.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import bag from '../../images/Screen Shot 2023-05-11 at 5.45.56 PM.png';

const Navbar = () => {

    return (
    <div className="">
        <nav className={`navbar fixed-top navbar-light ${styles.secondaryNav}`}>
          <button style={{opacity: 0}} disabled></button>
          <a className={` ${styles.secondNavText} navbar-brand mb-6 ${styles.secondNavText}`} href="/">ENABLE ACCESSIBILITY</a>
        </nav>
        <nav className={`navbar navbar navbar-expand-lg navbar-light bg-white border-bottom border-default ${styles.mainNav}`}>
          <a className="navbar-brand" href="/"><img className={styles.image} src={logo} alt="logo" /></a>
          <div className={`${styles.signIn} m-3`}>
                <FontAwesomeIcon className='ms-3 fs-4' icon={faUser} />
                <span className={` ${styles.signInText} m-3 fw-bold`}> SIGN IN</span>
          </div>
          <div className={`navbar-nav m-auto fw-bold`}>
            <a className={`nav-item nav-link ${styles.tabs}`} href="/">ORDER</a>
            <a className={`nav-item nav-link ${styles.tabs}`} href="/">CATERING</a>
            <a class={`nav-item nav-link ${styles.tabs}`} href="/">REWARDS</a>
            <a className={`nav-item nav-link ${styles.tabs}`} href="/">OUR VALUES</a>
            <a className={`nav-item nav-link ${styles.tabs} me-2`} href="/">NUTRITION</a>
            <button className={`${styles.findButton} fs-6 me-4`}>
                <span className=""><img src={secondaryLogo} alt="logo" className={`${styles.secondLogo} m-auto`} /></span>
                <span className="fs-4"> | </span><span className={styles.buttonText}>FIND A CHIPOTLE</span>
            </button>
            <div className="ms-3">
              <img src={bag} alt='cart' className="" style={{width: "21px", height: "33px"}} />
            </div>
          </div>
        </nav>
    </div>
    )
}

export default Navbar;