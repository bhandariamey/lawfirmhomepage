import styles from './Card.module.css'
export default function Card({image, name,cases}){
    return(<>
       <div className={styles.parent}>
       <div className={styles.wrapper}>
            <img className={styles.image} src={image} alt={name} />
            <div className={styles.details}>
                <p className={styles.name}>{name}</p>
                <p className={styles.cases}>{cases}</p>
            </div>
        </div>
       </div>
    </>)
}