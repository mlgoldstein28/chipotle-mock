import styles from './NavMenu.module.scss';
import foodFootprint from '../../../media/FoodFootprint.png';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faX} from '@fortawesome/free-solid-svg-icons';

const NavMenu = ({navMenuDisplay, setNavMenuDisplay, setDisplay, setHide}) => {

    const handleExit = (event) => {
        setNavMenuDisplay(1);
        document.body.style.overflow = 'visible';
        if (event.currentTarget.id === 'signIn' ) {
            setDisplay(true)
        }
        else if (event.currentTarget.id === 'createAccountButton') {
            setDisplay(true);
            setHide(1)
        }
    }
    

    return (
        <div className={`${navMenuDisplay ? styles.display : `d-none`} ${navMenuDisplay === 1 ? styles.hide : null}`}>
            <div className={styles.header}>
                <FontAwesomeIcon icon={faX} onClick={handleExit} className={styles.x}/>
            </div>
            <div className={styles.titleContainer}>
                <img src={foodFootprint} alt="title" className={styles.img} />
                <hr className="w-50 m-auto"/>
            </div>
            <div className={`${styles.bodyContainer} fw-bold pt-5 border-bottom border-bottom-default`}>
              <div className={`${styles.tabContainer}`}>
                <NavLink to="/order" className={styles.navLink}><div className={`${styles.tabs}`}>ORDER</div></NavLink>
                <NavLink to="/catering" className={styles.navLink}><div className={`${styles.tabs}`}>CATERING</div></NavLink>
                <NavLink to="/rewards" className={styles.navLink}><div class={`${styles.tabs}`}>REWARDS</div></NavLink> 
                <NavLink to="/our-values" className={styles.navLink}><div className={`${styles.tabs}`}>OUR VALUES</div></NavLink>
                <NavLink to="/nutrition" className={styles.navLink}><div className={`${styles.tabs}`}>NUTRITION</div></NavLink>
              </div>
            </div>
            <div className={styles.footer}>
                <h1 className="fw-bold fs-3">EARN POINTS, <br/>COMPLETE CHALLENGES,<br/>AND REDEEM REWARDS.</h1>
                <button id="createAccountButton" type="button" onClick={handleExit} className={styles.createButton}>CREATE AN ACCOUNT</button>
                <div className={styles.signInContainer}>
                <p className={styles.signInQ}>ALREADY A MEMBER?</p>
                <p className={styles.signInA} id="signIn" onClick={handleExit}>SIGN IN</p>
                </div>
            </div>
        </div>
    )
}

export default NavMenu;