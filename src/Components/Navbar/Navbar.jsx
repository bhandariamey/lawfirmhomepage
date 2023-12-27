import styles from './Navbar.module.css'
import {ReactComponent as Logo} from '../../Assets/logo.svg'

export default function Navbar(){
    return(<>
        <div className={styles.parentWrapper}>
            
            <div className={styles.logo}>
                <Logo/>
            </div>

            <div className={styles.wrapper}>
                <p>Home</p>
                <p>Attorneys</p>
                <p>Practice Areas</p>
                <p>About Us</p>
            </div>

            <div >
                <button className={styles.contact}>Contact Now</button>
            </div>

        </div>
    </>)
}