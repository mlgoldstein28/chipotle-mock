import styles from './Navbar.module.scss';
import logo from '../../media/Chipotle_Mexican_Grill_logo.svg.png';
import secondaryLogo from '../../media/pepper-small-white@3x.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import bag from '../../media/Screen Shot 2023-05-11 at 5.45.56 PM.png';
import { NavLink } from 'react-router-dom';

const Navbar = ({handleClick, handleBag, handleNavMenu}) => {

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

  
    return (
    <div className={styles.Navbar}>
        <nav id="secondaryNav" className={`navbar navbar-light ${styles.secondaryNav}`}>
          <button style={{opacity: 0}} disabled></button>
          <a className={`navbar-brand mb-6 ${styles.secondNavText}`} href="/">ENABLE ACCESSIBILITY</a>
        </nav>
        <nav className={`${styles.mainNav} navbar navbar-expand-lg navbar-light bg-white border-bottom border-default fixed-top`}>
         <FontAwesomeIcon icon={faBars} onClick={handleNavMenu} className={styles.menu}/>
          <a className="navbar-brand" href="/"><img className={styles.image} src={logo} alt="logo" /></a>
          <div onClick={handleClick} className={`${styles.signIn} m-3`}>
                <FontAwesomeIcon className='ms-3 fs-4' icon={faUser} />
                <span className={` ${styles.signInText} m-3 fw-bold`}> SIGN IN</span>
          </div>
          <div className={`navbar-nav ms-auto fw-bold ${styles.tabContainer}`}>
            <NavLink to="/order"><div className={`nav-item nav-link ${styles.tabs}`}>ORDER</div></NavLink>
            <NavLink to="/catering"><div className={`nav-item nav-link ${styles.tabs}`}>CATERING</div></NavLink>
            <NavLink to="/rewards"><div class={`nav-item nav-link ${styles.tabs}`}>REWARDS</div></NavLink> 
            <NavLink to="/our-values"><div className={`nav-item nav-link ${styles.tabs}`}>OUR VALUES</div></NavLink>
            <NavLink to="/nutrition"><div className={`nav-item nav-link ${styles.tabs} me-2`}>NUTRITION</div></NavLink>
          </div>
            <div className={styles.findButtonContainer}>
              <button type="button" className={`${styles.findButton} fs-6 me-5`}>
                <span className=""><img src={secondaryLogo} alt="logo" className={`${styles.secondLogo} m-auto`} /></span>
                <span className="fs-4"> | </span><span className={styles.buttonText}>FIND A CHIPOTLE</span>
              </button>
            </div>
            <img onClick={handleBag} src={bag} alt='cart' className={styles.bag}/>
        </nav>
    </div>
    )
}

export default Navbar;