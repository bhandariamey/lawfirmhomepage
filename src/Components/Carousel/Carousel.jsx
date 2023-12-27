import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {useState} from 'react'

import styles from './Carousel.module.css'
import rightArrow from '../../Assets/rightArrow.png'
import leftArrow from '../../Assets/leftArrow.png'
import CarouselCard from './CarouselCard/CarouselCard'
import {clients} from '../../Assets/clientReviews'

export default function Carousel(){

    const [mySwiper, setSwiper] = useState(null)

    const handleLeft = ()=>{
        console.log("Left button clicked");
        mySwiper.slidePrev()
    }

    const handleRight = ()=>{
        console.log("Right button clicked");
        mySwiper.slideNext()
    }

    return(<>
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <p className={styles.title}> What says our happy Clients</p>
                <div className={styles.button}>
                    <div className={styles.left} onClick={handleLeft}>
                        <img src={leftArrow}  alt="Left Arrow" width={"38.48"} />     
                    </div> 

                     <div className={styles.right}  onClick={handleRight}>
                        <img src={rightArrow}  alt="Right Arrow" width={"38.48"} />     
                    </div>                    
                </div> 
            </div>
        </div>
    
        <div className={styles.swiperContainer}>
        <Swiper
                modules={[ Navigation]}
                slidesPerView={3}
                spaceBetween={0}
                navigation={true}
                scrollbar={{ draggable: true }}
                onSwiper={setSwiper}
                >
              
               { clients.map((item,idx)=>{return(
                     <SwiperSlide key={idx}>
                        <CarouselCard name={item.name} image={item.image} role={item.role} desc={item.desc}/>
                    </SwiperSlide>
               )})}
                

        </Swiper>
        </div>
    </>)
}