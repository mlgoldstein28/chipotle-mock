import styles from '../SignIn/SignIn.module.scss';
import stylesAcc from './CreateAccount.module.scss';
const createAccount = ({slide, hide}) => {

    return (
        <div>
            <div id="slidingIn" className={`${hide === false ? styles.hide : null} ${slide ? styles.slideIn : null}`}>
                <div className={`container ${styles.formContainer} mt-1`}>
                <h1 className={styles.head}>CREATE AN ACCOUNT</h1>
                <p className={stylesAcc.subHead}>Create an account so you can get rewards <br/>and order your favorites even faster.</p>
                    <form className={''}>
                        <label>First Name</label>
                        <input type="text" className={`w-100 ${styles.inputText}`}></input>
                        <label>Last Name</label>
                        <input type="text" className={`w-100 ${styles.inputText}`}></input>
                        <label>Email</label>
                        <input type="email" className={`w-100 ${styles.inputText}`}></input>
                        <label>Password</label>
                        <input type="password" className={`w-100 ${styles.inputText}`}></input>
                        <p className={stylesAcc.passReq}>Create a password with these requirements: <br /> ABC   abc   123   !@%   8 characters</p>
                        <button className={styles.button}>CREATE AN ACCOUNT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default createAccount;