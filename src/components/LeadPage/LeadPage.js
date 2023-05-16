import videoPastor from '../../media/Chipotle_ChickenAlPastor.mp4';
import React from 'react';
import styles from './LeadPage.module.scss';
import chipBadge from '../../media/chipBadge.png'

const LeadPage = () => {
    return(
        <div className="">
            <div className={`ratio ${styles.vidContainer}`}>
                <video
                    autoplay=""
                    muted 
                    loop 
                    className={`w-100 ${styles.vid}`}
                    src={videoPastor} 
                    type="video/mp4"  
                      >
                </video>
                <div className={`text-center ${styles.vidText}`}>
                  <div className={`${styles.new}`}>NEW</div>
                  <div className={`${styles.vidHead}`}>
                    <h1 className={`${styles.chicken}`}>CHICKEN</h1>
                    <h1 className={`${styles.alPastor}`}>AL PASTOR</h1>
                  </div>
                  <h2 className="fw-bold">WHERE FIRE MEETS FLAVOR</h2>
                  <p className="fs-3">The rich flavor of Chicken Al Pastor delivers <br/> the right amount of heat 
                    balanced with a <br/> splash of pineapple, fresh lime, and cilantro.</p>
                  <a href="#menu" className={`text-decoration-none`}><div className={`${styles.orderButton}`}>ORDER NOW</div></a>
                </div>
            </div>
            <div className="text-center mt-1 mb-1">
              <div className={`text-center d-flex justify-content-center`}>
              <img src={chipBadge} alt="" className={`${styles.badge}`}/>
                <p className={` ${styles.subText}`}>JOIN CHIPOTLE REWARDS. UNLOCK FREE CHIPOTLE.</p>
                    <button className={styles.account}>CREATE AN ACCOUNT</button>
                  <div className={styles.subText} id="menu">
                    <span className={styles.or}> OR </span>
                    <a className={styles.signIn}> SIGN IN</a>
                    </div>
                </div>
              </div>
            <hr className="m-0"/>
        </div>
    )
}

export default LeadPage;