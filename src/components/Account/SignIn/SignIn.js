import { useState } from 'react';
import styles from './SignIn.module.scss';
import badge from '../../../media/chipBadge.png';
import CreateAccount from '../CreateAccount/CreateAccount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const SignIn = ({display, setDisplay, setHide, hide}) => {

  //Sign In Features
      //Event Handler for Username Requirements
          
      //Event Handler for Password Requirements

      //Event Handler for Submission Request

  
  //Handling Switching/Canceling Pages

    //Slides in Account Page, Hides Sign In Page
      const [slide, setSlide] = useState(false);
      const handleClickAccount = (event) => {
        setSlide(true);
        setTimeout(() => {
          setHide(1)
          }, 500)
      }

    //see Key 
    const [labelAnimation, setLabelAnimation] = useState(false)

      const handleExit = () => {
        setDisplay('shrink');
        setHide(false);
        setSlide(false);
        setLabelAnimation(false);
        document.body.style.overflow = 'visible';
      }

    return (
      //When display is true, opening animation begins. When display === 'shrink', closing animation begins.
        <div className={`${display ? styles.display : `d-none`} ${display === 'shrink' ? styles.shrink : null}`}>
          <div>
          <FontAwesomeIcon icon={faX} onClick={handleExit} className={styles.x}/>
          </div>
          <div>
              <div className="text-center">
                <img src={badge} alt="badge" className={`${styles.img}`} />
              </div>
              <div className={`${slide ? styles.slideOut : null} ${hide ? styles.hide : null}`}>
                <div className={`container ${styles.formContainer}`}>
                    <h1 className={styles.head}>SIGN IN</h1>
                    <form className={''}>
                        <label>Email</label>
                        <input type="email" className={`w-100 ${styles.inputText}`}></input>
                        <label>Password</label>
                        <input type="password" className={`w-100 ${styles.inputText}`}></input>
                        <button className={styles.button}>SIGN IN</button>
                        <hr />
                    </form>
                    <div className="text-center">
                      <div className="">
                        <h1 className={styles.createHead}>NOT A MEMBER?</h1>
                        <h3 className={styles.createSubHead}>JOIN REWARDS. GET REWARDED.</h3>
                      </div>
                        <button onClick={handleClickAccount} className={styles.createButton}>CREATE AN ACCOUNT</button>
                    </div>
                  </div>
                </div>
              <CreateAccount slide={slide}
                             display={display}
                             hide={hide}
                             setLabelAnimation={setLabelAnimation}
                             labelAnimation={labelAnimation}/>
          </div>
        </div>
    )
}

export default SignIn;