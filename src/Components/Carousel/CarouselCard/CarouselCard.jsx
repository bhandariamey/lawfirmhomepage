import styles from './CarouselCard.module.css'
export default function CarouselCard({name,image,role,desc}){
    return(<>
        <div className={styles.wrapper}>
            <img className={styles.image} src={image} alt={name} />
            <p className={styles.name}>{name}</p>
            <p className={styles.role}>{role}</p>
            <p className={styles.desc}>{desc}</p>
        </div>
    </>)
}