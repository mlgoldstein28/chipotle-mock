import React, {useState} from 'react';
import styles from './ShoppingBag.module.scss';
import secondaryLogo from '../../media/pepper-small-white@3x.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import mehCado from '../../media/Meh-Cado.svg'; 

const ShoppingBag = ({bagDisplay, setBagDisplay}) => {

    const handleCancelBag = () => {
      setBagDisplay(false)
      document.body.style.overflow = 'visible';
    }

    return (
        <div>
            <div className={`${bagDisplay ? styles.bagContainer : styles.hide}`}>
                <div className={`${styles.head}`}>
                  <button type="button" className={`${styles.findButton} fs-6`}>
                    <span><img src={secondaryLogo} alt="logo" className={`${styles.secondLogo}`} /></span>
                    <span className="fs-4"> | </span><span className={styles.buttonText}>FIND A CHIPOTLE</span>
                  </button>
                  <FontAwesomeIcon onClick={handleCancelBag} icon={faX} className={`${styles.x}`} />
                </div>
            <div className={styles.body} >
                <div className={styles.content}>
                    <img src={mehCado} alt="Meh-Cado" className="w-25 m-auto"/>
                  <div className={styles.text}>
                    <h1 className={styles.mainText}>YOUR BAG IS EMPTY</h1>
                    <p className={`fs-5 text-black`}>It's lonely in here.</p>
                    <button className={styles.orderButton}>ORDER NOW</button>
                    <p className={styles.inviteOthersContainer}><span className="me-2 fs-3"><FontAwesomeIcon icon={faUserCircle}/></span><span className={styles.inviteOthersText}>INVITE OTHERS</span></p>
                  </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default ShoppingBag;