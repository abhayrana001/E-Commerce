'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from '@/styles/Home/Hero.module.css'
import Image from 'next/image';

const images: string[] = [
  '/images/headset.webp',
  '/images/controler.webp',
  '/images/logitec.webp',
  // 'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg',
];

export default function MySlider() {
  return (
    <div className={styles.imageSection}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={568}
              height={568}
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
