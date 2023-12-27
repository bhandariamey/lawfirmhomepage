import styles from './Hero.module.css'
import HeroImage from '../../Assets/heroImage.png'
import {ReactComponent as Message} from '../../Assets/message.svg'

export default function Hero(){
    return(<>
        <div className={styles.wrapper}>
            <p className={styles.tag1}>You don't have to</p>
            <p className={styles.tag2}>Fight them Alone.</p>
            <p className={styles.body}> Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
            <div className={styles.input}>
                <Message className={styles.messageIcon}/>
                <input className={styles.inputBar} type="text" placeholder="Enter your email address" />
                <button className={styles.button}>Let's Talk</button>
            </div>

            <div className={styles.introduceWrapper}> 
            <p className={styles.left}>Let's Introduce Ourself</p>
            <hr className={styles.line} />
            <div className={styles.right}>
                <p className={styles.first}>Criminal Lawyer</p>
                <p className={styles.second}>Amet minim mollit non deserunt ullamco est
                sit aliqua dolor do amet sint. Velit officia consequatduis
                enim velit mollit Exercitation.</p>
            </div>
        </div>
        </div>

        
      
        <img className={styles.image} src={HeroImage} alt="" />
    </>)
}