import { teamMember } from '../../Assets/TeamMember'
import Card from './Card/Card'
import styles from './Team.module.css'
export default function Team(){
    return(<>
        <div className={styles.wrapper}>
            <p className={styles.title}>Our Team</p>
            <div className={styles.teamWrapper}>
               { teamMember.map((item)=>(
                    <Card name={item.name} cases={item.cases} image={item.image}/>
                ))}
            </div>
        </div>
    </>)
}