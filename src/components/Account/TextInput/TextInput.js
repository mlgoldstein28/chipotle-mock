import { useState } from 'react';
import styles from './TextInput.module.scss';


export default function TextInput({type, label}) {
    const [userValue, setUserValue] = useState('');

    const handleChange = (e) => {
        setUserValue(e.target.value);
        if (userValue) {
            setErrorFont('')
        }
    }
   
    const [required, setRequired] = useState('')
    const [errorFont, setErrorFont] = useState('');

    const handleBlur = () => {
        setRequired('Required')
        if (!userValue) {
            setErrorFont(styles.emptyInput)
        }
    } 

    return (
        <div className={`form-floating mb-1 ${styles.inputContainer}`}>
            <input type={type} onChange={handleChange} onBlur={handleBlur} className={`${styles.inputText} form-control shadow-none`} id="floatingInput" placeholder="something"/>
            <label className={`${errorFont} fs-6 me-3`} for="floatingInput">{label} {!userValue && required }</label>
         </div>
    )
}