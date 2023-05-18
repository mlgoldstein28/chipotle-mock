import {useState} from 'react';
import styles from './SignIn.module.scss';
import badge from '../../../media/chipBadge.png';
import CreateAccount from '../CreateAccount/CreateAccount';

const SignIn = ({display}) => {
  let [slide, setSlide] = useState(false);
  let [hide, setHide] = useState(false)

  const handleClick = (event) => {
      setSlide(true);
      setTimeout(() => {
        setHide(1)
      }, 500)
      
  }
    return (
        <div>
            <div className={`${display ? styles.display : `d-none`}`}>
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
                        <button onClick={handleClick}className={styles.createButton}>CREATE AN ACCOUNT</button>
                    </div>
                  </div>
                </div>
              <CreateAccount slide={slide} 
                             hide={hide}/>
            </div>
        </div>
    )
}

export default SignIn;