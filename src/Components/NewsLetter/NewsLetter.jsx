import styles from './NewsLetter.module.css'
export default function NewsLetter(){
    return(<>
        <div className={styles.wrapper}>
            <p className={styles.title}>Subscribe Our Newsletter</p>
            <div className={styles.input}>
                <input className={styles.name} type="text" placeholder="Name"/>
                <input className={styles.email} type="email" placeholder="Email"/>
                <button className={styles.button}>SEND</button>
            </div>
        </div>
    </>)
}