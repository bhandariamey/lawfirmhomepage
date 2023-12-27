import Accordian from './Accordian/Accordian'
import styles from './FAQ.module.css'
export default function FAQ(){
    return(<>
        <div className={styles.parent}>
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <p className={styles.header}>FAQ</p>
                <p className={styles.body}>Amet minim mollit non deserunt ullamco est<br/> sit
                    aliqua dolor do amet sint. </p>
            </div>
            <div className={styles.right}>
                <p className={styles.rightHeader}>Do I need a personal injury report?</p>
                <p className={styles.rightBody}>Amet minim mollit non deserunt ullamco est sit  Amet minim mollit.                 . Velit officia consequatduis
                    enim velit mollit Exer. Amet minim mollit non deserunt
                    ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
                <div>
                    <Accordian/>
                </div>
            </div>
        </div>
        </div>
    </>)
}