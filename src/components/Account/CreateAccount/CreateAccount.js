import React, {useState} from 'react';
import styles from '../SignIn/SignIn.module.scss';
import stylesAcc from './CreateAccount.module.scss';
const CreateAccount = ({slide, hide}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFirst = (e) => {
        setFirstName(e.target.value)
    }

    const handleLast = (e) => {
        setLastName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log(firstName, lastName, email, password)
        console.log(users)
    }

    function UserDB(firstName, lastName, email, password) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.password = password
        }

    let users = new UserDB(firstName, lastName, email, password)

    return (
        <div>
            <div id="slidingIn" className={`${hide === false ? styles.hide : null} ${slide ? styles.slideIn : null}`}>
                <div className={`container ${styles.formContainer} mt-1`}>
                <h1 className={styles.head}>CREATE AN ACCOUNT</h1>
                <p className={stylesAcc.subHead}>Create an account so you can get rewards <br/>and order your favorites even faster.</p>
                    <form className={''}>
                        <label>First Name</label>
                        <input onChange={handleFirst} type="text" className={`w-100 ${styles.inputText}`}></input>
                        <label>Last Name</label>
                        <input onChange={handleLast} type="text" className={`w-100 ${styles.inputText}`}></input>
                        <label>Email</label>
                        <input onChange={handleEmail} type="email" className={`w-100 ${styles.inputText}`}></input>
                        <label>Password</label>
                        <input onChange={handlePassword} type="password" className={`w-100 ${styles.inputText}`}></input>
                        <p className={stylesAcc.passReq}>Create a password with these requirements: <br /> ABC   abc   123   !@%   8 characters</p>
                        <button onClick={handleSubmit} type="button" className={styles.button}>CREATE AN ACCOUNT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount;