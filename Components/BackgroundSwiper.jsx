'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const slides = [
  {
    image: 'https://res.cloudinary.com/dpuj2f1h3/image/upload/v1746187875/CodingClass-342_pfz4xw.jpg',
    text: 'Welcome to Classic Systems Info Tech',
  },
  {
    image: 'https://res.cloudinary.com/dpuj2f1h3/image/upload/v1746187875/Learning1_wtmbwc.jpg',
    text: 'Discover Our Services',
  },
]

export default function BackgroundSwiper() {
  return (
    <div className="relative pt-[80px]"> 
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        slidesPerView={1}
        className="w-full h-screen -mt-25"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
                <div className="bg-white/20 backdrop-blur-md text-white text-center p-10 md:p-20 rounded-xl max-w-3xl">
                  <h1 className="text-3xl md:text-5xl font-bold leading-snug">
                    {slide.text}
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* {Swipper Arrows} */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          width: 50px;
          height: 50px;
        }
      `}</style>
    </div>
  )
}
