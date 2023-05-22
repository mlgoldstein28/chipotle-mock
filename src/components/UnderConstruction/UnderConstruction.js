import mehCado from '../../media/Meh-Cado.svg';
import styles from './UnderConstruction.module.scss';

const UnderConstruction = () => {
    return (
        <div>
            <div className={styles.header}>
                <h1 className={styles.headerText}>THIS PAGE IS UNDER CONSTRUCTION</h1>
            </div>
            <div className="text-center">
                <img src={mehCado} alt="Meh-Cado" className={styles.img}/>
            </div>
        </div>
    )
}

export default UnderConstruction;