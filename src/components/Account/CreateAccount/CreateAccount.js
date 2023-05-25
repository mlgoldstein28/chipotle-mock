import React, {useState} from 'react';
import styles from './CreateAccount.module.scss';

const CreateAccount = ({slide, hide}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFirst = (e) => {
        setFirstName(e.target.value);
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
    }


    
    return (
        <div>
            <div className={`${hide === false ? styles.hide : null} ${slide ? styles.slideIn : null}`}>
                <div className={`container ${styles.formContainer}`}>
                <h1 className={styles.header}>CREATE AN ACCOUNT</h1>
                <p className={styles.subHeader}>Create an account so you can get rewards <br/>and order your favorites even faster.</p>
                    <form className={''}>
                        <label className="">First Name</label>
                        <input onChange={handleFirst} type="text" className={`w-100 ${styles.inputText}`} required />
                        <label className={''}>Last Name</label>
                        <input onChange={handleLast} type="text" className={`w-100 ${styles.inputText}`} required />
                        <label>Email</label>
                        <input onChange={handleEmail} type="email" className={`w-100 ${styles.inputText}`} required />
                        <label>Password</label>
                        <input onChange={handlePassword} type="password" className={`w-100 ${styles.inputText}`} required />
                        <p className={styles.passReq}>Create a password with these requirements: <br /> ABC   abc   123   !@%   8 characters</p>
                        <button onClick={handleSubmit} type="submit" className={styles.button}>CREATE AN ACCOUNT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount;