import React, {useState} from 'react';
import styles from './CreateAccount.module.scss';
import TextInput from '../TextInput/TextInput';

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
                        <TextInput type="text" label="First Name"/>
                        <TextInput type="text" label="Last Name" />
                        <TextInput type="email" label="Email" />
                        <TextInput type="password" label="Password" />
                        <p className={styles.passReq}>Create a password with these requirements: <br /> ABC   abc   123   !@%   8 characters</p>
                        <button onClick={handleSubmit} type="submit" className={styles.button}>CREATE AN ACCOUNT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount;