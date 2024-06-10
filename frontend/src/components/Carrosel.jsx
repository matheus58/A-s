import{Swiper, SwiperSlide} from 'swiper/react';


export function Carrosel(){
    return(
        <>
        <div>
            <Swiper
               slidesPerView={3}
               pagination={{clickable: true}}
               navigation
            >
                <SwiperSlide><img src='src/img/001.webp' alt='Slide 1' ></img></SwiperSlide>
                <SwiperSlide><img src='src/img/002.webp' alt='Slide 2'></img></SwiperSlide>
                <SwiperSlide><img src='src/img/003.webp' alt='Slide 3'></img></SwiperSlide>
                <SwiperSlide><img src='src/img/004.webp' alt='Slide 4'></img></SwiperSlide>
                <SwiperSlide><img src='src/img/005.webp' alt='Slide 5'></img></SwiperSlide>
                <SwiperSlide><img src='src/img/006.webp' alt='Slide 6'></img></SwiperSlide>
            </Swiper>
        </div>
        </>
    )
}