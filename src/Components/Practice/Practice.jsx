import styles from './Practice.module.css'
import one from '../../Assets/1.png'
import two from '../../Assets/2.png'
import three from '../../Assets/3.png'
import four from '../../Assets/4.png'
import five from '../../Assets/5.png'
import six from '../../Assets/6.png'

export default function Practice(){
    return(<>
        <div className={styles.wrapper}>
            <p className={styles.title}>Area of Practices</p>
            <div className={styles.container}>
               <div className={styles.first}>
                   <div style={{display: 'inline-block', position:'relative'}}>
                        <img src={one} className={styles.one} alt="" width={752} />
                        <p style={{position:'absolute', bottom:'41px', color:'white', left:'50%', transform:'translateX(-50%)', fontFamily:"Inter", fontWeight:"600", fontSize:"24px", lineHeight:"24px" }}>Business Law</p>
                   </div>
                   <div style={{display: 'inline-block', position:'relative'}}>
                        <img src={two} className={styles.two} alt="" width={358} />
                        <p style={{position:'absolute', bottom:'41px', color:'white', left:'50%', transform:'translateX(-50%)', fontFamily:"Inter", fontWeight:"600", fontSize:"24px", lineHeight:"24px" }}>Partnership Law</p>
                   </div>
               </div>
               <div className={styles.second}>
                    <div style={{display: 'inline-block', position:'relative'}}>
                        <img src={three} className={styles.three} alt="" width={358} />
                        <p style={{position:'absolute', bottom:'41px', color:'white', left:'50%', transform:'translateX(-50%)', fontFamily:"Inter", fontWeight:"600", fontSize:"24px", lineHeight:"24px" }}>Real-estate Law</p>
                   </div>
                   <div style={{display: 'inline-block', position:'relative'}}>
                        <img src={four} className={styles.four} alt="" width={752} />
                        <p style={{position:'absolute', bottom:'41px', color:'white', left:'50%', transform:'translateX(-50%)', fontFamily:"Inter", fontWeight:"600", fontSize:"24px", lineHeight:"24px" }}>Business Law</p>
                   </div>
               </div>
               <div className={styles.third}>
                   <div style={{display: 'inline-block', position:'relative'}}>
                        <img src={five} className={styles.five} alt="" width={752} />
                        <p style={{position:'absolute', bottom:'41px', color:'white', left:'50%', transform:'translateX(-50%)', fontFamily:"Inter", fontWeight:"600", fontSize:"24px", lineHeight:"24px" }}>LandLord Disputes</p>
                   </div>                    
                   <div style={{display: 'inline-block', position:'relative'}}>
                        <img src={six} className={styles.six} alt="" width={358} />
                        <p style={{position:'absolute', bottom:'41px', color:'white', left:'50%', transform:'translateX(-50%)', fontFamily:"Inter", fontWeight:"600", fontSize:"24px", lineHeight:"24px" }}>Elder Abuse</p>
                   </div>
               </div>
               
            </div>
        </div>
    </>)
}