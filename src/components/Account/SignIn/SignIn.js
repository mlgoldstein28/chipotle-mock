import { useState } from 'react';
import styles from './SignIn.module.scss';
import badge from '../../../media/chipBadge.png';
import CreateAccount from '../CreateAccount/CreateAccount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const SignIn = ({display, setDisplay, setHide, hide}) => {


    //Slides in Account Page, Hides Sign In Page
      const [slide, setSlide] = useState(false);
      const handleClickAccount = (event) => {
        setSlide(true);
        setTimeout(() => {
          setHide(1)
          }, 500)
      }


      const handleExit = () => {
        setDisplay('shrink');
        setHide(false);
        setSlide(false);
        document.body.style.overflow = 'visible';
        document.body.style.touchAction = 'auto';
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
                      <div className={`form-floating mb-1`}>
                        <input className={`${styles.inputText} form-control shadow-none`} id="floatingInput" placeholder="something"/>
                        <label className={`fs-6 me-3`} for="floatingInput">Email</label>
                      </div>
                      <div className={`form-floating mb-1`}>
                        <input type="text" className={`${styles.inputText} form-control shadow-none`} id="floatingInput" placeholder="something"/>
                        <label type="password" className={`fs-6 me-3`} for="floatingInput">Password</label>
                      </div>
                        <button className={styles.button}>SIGN IN</button>
                        <hr />
                    </form>
                    <div className={styles.bottomTextContainer}>
                      <div className="">
                        <h1 className={styles.createHead}>NOT A MEMBER?</h1>
                        <h3 className={styles.createSubHead}>JOIN REWARDS. GET REWARDED.</h3>
                      </div>
                      <button onClick={handleClickAccount} className={styles.createButton}>CREATE AN ACCOUNT</button>
                    </div>
                </div>
              </div>
              <div className={`container ${styles.formContainer} m-auto`} >
                <CreateAccount slide={slide}
                             display={display}
                             hide={hide}
                            />
              </div>
          </div>
        </div>
    )
}

export default SignIn;