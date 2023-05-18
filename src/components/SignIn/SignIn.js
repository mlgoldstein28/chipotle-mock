import styles from './SignIn.module.scss';
import badge from '../../media/chipBadge.png';

const SignIn = ({display}) => {
    return (
        <div>
            <div className={`${display ? styles.display : `d-none`}`}>
                <div className={`container ${styles.formContainer}`}>
                    <div className="m-auto text-center">
                        <img src={badge} alt="badge" className={`${styles.img}`} />
                    </div>
                    <h1 className={styles.head}>SIGN IN</h1>
                    <form className={''}>
                        <label>Email</label>
                        <input type="email" className={`w-100 ${styles.inputText}`}></input>
                        <label>Password</label>
                        <input type="password" className={`w-100 ${styles.inputText}`}></input>
                        <div>
                          {/*
                          <input type="checkbox" className='form-check-input'></input>
                          <div className={styles.checkboxText}>Remember Me</div>
    */}
                        </div>
                        <button className={styles.button}>SIGN IN</button>
                        <hr />
                    </form>
                    <div className="text-center">
                      <div className="">
                        <h1 className={styles.createHead}>NOT A MEMBER?</h1>
                        <h3 className={styles.createSubHead}>JOIN REWARDS. GET REWARDED.</h3>
                      </div>
                        <button className={styles.createButton}>CREATE AN ACCOUNT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;