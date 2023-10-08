import { useEffect, useState } from "react";
import BannerSlider from "./BannerSlider";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

const Banner = () => {
    const [bannerData, setBannerData] = useState([]);
    useEffect(()=>{
        fetch('/banner.json')
        .then(res=> res.json())
        .then(data=> setBannerData(data))
    },[])


    
    return (
        
        <div data-aos="fade-down">
            <Swiper
        autoplay={{
            delay: 2700,
            disableOnInteraction: false,
          }}
        effect={'fade'}
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper"
      >
            {
                bannerData.map((banner, inx)=> <SwiperSlide key={inx}><BannerSlider banner={banner}></BannerSlider></SwiperSlide>)
            }

      </Swiper>

        </div>
    );
};

export default Banner;