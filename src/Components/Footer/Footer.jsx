import styles from './Footer.module.css'

import Navbar from '../Navbar/Navbar'
import {ReactComponent as Logo} from '../../Assets/logo.svg'
import {ReactComponent as Links} from '../../Assets/links.svg'

export default function Footer(){
    return(<>
        <div className={styles.above}>
            <div className={styles.top}>
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

            <div className={styles.links}>
               <Links width={137} height={30}/>
            </div>

            </div>
            </div>
            <div className={styles.bottom}>
                <p>© 2020 Acme. All right reserved.</p>
                <p>Privacy policy</p>
                <p>Terms of service</p>
            </div>
        </div>
    </>)
}