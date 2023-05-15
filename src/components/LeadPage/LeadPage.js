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
            </div>
            <div className="text-center mt-1 mb-1">
              <div className={`text-center d-flex justify-content-center`}>
              <img src={chipBadge} alt="" className={`${styles.badge}`}/>
                <p className={` ${styles.subText}`}>JOIN CHIPOTLE REWARDS. UNLOCK FREE CHIPOTLE.</p>
                    <button className={styles.account}>CREATE AN ACCOUNT</button>
                  <div className={styles.subText}>
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