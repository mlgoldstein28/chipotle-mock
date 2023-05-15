import styles from './MenuItems.module.scss'
import burrito from '../../media/menuItemBurrito.png';
import burritoBowl from '../../media/burritoBowl.png';
import lifestyleBowl from '../../media/lifestyleBowl.png';
import quesadilla from '../../media/quesadilla.png';
import salad from '../../media/salad.png';
import tacos from '../../media/tacos.png';
import sides from '../../media/sides.png';
import kidsMeal from '../../media/kidsMeal.png';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

const MenuItems = () => {
    return (
    <div>
        <div className="row m-auto w-75">
            <div className={`col-lg-4 text-center ${styles.menuItem}`}>
                <div className="pb-2">
                  <img src={burrito} className={styles.image} alt="Burrito"/>
                </div>
                <div className="">
                  <h1 className={styles.header}>BURRITO</h1>
                  <div className={styles.orderContainer}>
                    <p className={styles.order}>ORDER<span className="m-2"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span></p>
                  </div>
                </div>
            </div>
            <div className={`col-lg-4 text-center ${styles.menuItem}`}>
                <div className="pb-2 w-75 m-auto mt-3">
                  <img src={burritoBowl} className={`${styles.image} ${styles.image}`} alt="Burrito Bowl"/>
                </div>
                <div className="">
                  <h1 className={styles.header}>BURRITO BOWL</h1>
                  <div className={styles.orderContainer}>
                    <p className={styles.order}>ORDER<span className="m-2"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span></p>
                  </div>
                </div>
            </div>
            <div className={`col-lg-4 text-center ${styles.menuItem}`}>
                <div className="pb-2">
                  <img src={lifestyleBowl} className={styles.image} alt="Lifestyle Bowl"/>
                </div>
                <div className="">
                  <h1 className={styles.header}>LIFESTYLE BOWL</h1>
                  <div className={styles.orderContainer}>
                    <p className={styles.order}>ORDER<span className="m-2"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span></p>
                  </div>
                </div>
            </div>
            <div className={`col-lg-4 text-center ${styles.menuItem}`}>
                <div className="">
                  <img src={quesadilla} className={styles.image} alt="Quesadilla"/>
                </div>
                <div className="">
                  <h1 className={styles.header}>QUESADILLA</h1>
                  <div className={styles.orderContainer}>
                    <p className={styles.order}>ORDER<span className="m-2"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span></p>
                  </div>
                </div>
            </div>
            <div className={`col-lg-4 text-center ${styles.menuItem}`}>
                <div className="">
                  <img src={salad} className={styles.image} alt="Salad"/>
                </div>
                <div className="">
                  <h1 className={styles.header}>SALAD</h1>
                  <div className={styles.orderContainer}>
                    <p className={styles.order}>ORDER<span className="m-2"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span></p>
                  </div>
                </div>
            </div>
            <div className={`col-lg-4 text-center ${styles.menuItem}`}>
                <div className="">
                  <img src={tacos} className={styles.image} alt="Tacos"/>
                </div>
                <div className="">
                  <h1 className={styles.header}>TACOS</h1>
                  <div className={styles.orderContainer}>
                    <p className={styles.order}>ORDER<span className="m-2"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span></p>
                  </div>
                </div>
            </div>
            <div className={`col-lg-4 text-center m-auto mb-3 ${styles.menuItem}`}>
                <div className="">
                  <img src={sides} className={styles.image} alt="Sides & Drinks"/>
                </div>
                <div className="">
                  <h1 className={styles.header}>SIDES & DRINKS</h1>
                  <div className={styles.orderContainer}>
                    <p className={styles.order}>ORDER<span className="m-2"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span></p>
                  </div>
                </div>
            </div>
            <div className={`col-lg-4 text-center mb-3 m-auto ${styles.menuItem}`}>
                <div className="">
                  <img src={kidsMeal} className={styles.image} alt="Kid's Meal"/>
                </div>
                <div className="">
                  <h1 className={styles.header}>KID'S MEAL</h1>
                  <div className={styles.orderContainer}>
                    <p className={styles.order}>ORDER<span className="m-2"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span></p>
                  </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MenuItems;