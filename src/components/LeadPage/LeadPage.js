import videoPastor from '../../media/Chipotle_ChickenAlPastor.mp4';
import React from 'react';
import styles from './LeadPage.module.scss';
import chipBadge from '../../media/chipBadge.png'

const LeadPage = ({setDisplay, display, setHide, handleClick}) => {

  const handleClickAcc = () => {
    setHide(true);
    setDisplay(true);
    window.scrollTo(0,0);
    document.body.style.overflow = 'hidden';
  }

    return(
        <div className="">
            <div className={`ratio ${styles.vidContainer}`}>
                <video
                    controls=""
                    autoplay=""
                    muted 
                    loop 
                    className={`${styles.vid}`}
                    src={videoPastor} 
                    type="video/mp4"  
                      >
                </video>
                <div className={`container ${styles.vidText} ${display ? styles.hide : null} ${display === 'shrink' ? styles.show : null}`}>
                  <div className={`${styles.new}`}>NEW</div>
                  <div className={`${styles.vidHead}`}>
                    <h1 className={`${styles.chicken}`}>CHICKEN</h1>
                    <h1 className={`${styles.alPastor}`}>AL PASTOR</h1>
                  </div>
                  <h2 className="fw-bold">WHERE FIRE MEETS FLAVOR</h2>
                  <p className={styles.vidDescript}>The rich flavor of Chicken Al Pastor delivers <br/> the right amount of heat 
                    balanced with a <br/> splash of pineapple, fresh lime, and cilantro.</p>
                  <a href="#menu" className={`text-decoration-none`}><div className={`${styles.orderButton}`}>ORDER NOW</div></a>
                </div>
            </div>
            <div className={`d-flex flex-wrap mt-1 justify-content-center m-auto`}>
              <div className={`d-flex justify-content-center m-0`}>
                <img src={chipBadge} alt="" className={`${styles.badge}`}/>
                <p className={` ${styles.subText}`}>JOIN CHIPOTLE REWARDS. UNLOCK FREE CHIPOTLE.</p>
              </div>
              <div className="d-flex flex-wrap mt-0 text-center">
                <button onClick={handleClickAcc} className={styles.account}>CREATE AN ACCOUNT</button>
                  <div className={styles.subText} id="menu">
                    <span className={styles.or}> OR </span>
                    <a onClick={handleClick} className={styles.signIn}> SIGN IN</a>
                  </div>
              </div>
            </div>
            <hr className="m-2"/>
        </div>
    )
}

export default LeadPage;