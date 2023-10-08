import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Autoplay } from "swiper/modules";

const Gallery = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("/galleryData.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div>
      <div data-aos="fade-right" className="text-center my-8">
        <h3 className="text-3xl md:text-4xl text-contrast font-bold">
          Success in Every Frame
        </h3>
        <p className="md:text-lg text-base font-medium max-w-4xl mx-auto">
          Relive the moments of triumph with our collection of recent successful
          projects. These photos showcase our dedication to excellence.
        </p>
      </div>
      <div className="" data-aos="fade-right">
        <Swiper
          loop={true}
          slidesPerView={3}
          grid={{
            rows: 2,
            fill: "row",
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={0}
          modules={[Grid, Autoplay]}
          className="mySwiper">
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <GalleryCard card={card}></GalleryCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
