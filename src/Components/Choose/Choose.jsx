import styles from './Choose.module.css'
import ChooseCard from './ChooseCard/ChooseCard'
export default function Choose(){
    return (<>
        <div className={styles.wrapper}>
            <p className={styles.head}>Why Choose Us?</p>
            <div className={styles.cards}>
                <ChooseCard rate={"98% Success Rate"}/>
                <ChooseCard rate={"100% Success Rate"}/>
                <ChooseCard rate={"100% Success Rate"}/>
            </div>
        </div>
    </>)
}