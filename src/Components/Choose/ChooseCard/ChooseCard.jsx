import styles from './ChooseCard.module.css'
import gift from '../../../Assets/gift.png'

export default function ChooseCard({rate}){
    return(<>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
            <img className={styles.image} src={gift} alt="" />
        </div>
        <p className={styles.rate}>{rate}</p>
        <p className={styles.desc}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</p>
        <button className={styles.button}>Read More</button>
      </div>
    </>)
}