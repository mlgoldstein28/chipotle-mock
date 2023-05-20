import styles from './ShoppingBag.module.scss';

const ShoppingBag = ({bagDisplay}) => {

    return (
        <div>
            <div className={`${bagDisplay ? styles.bagContainer : styles.hide}`}>
                <div className="row">
                    
                </div>
            </div>
        </div>
    )
}

export default ShoppingBag;