"use client";
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const images = [
  { id: 1, image: "/images/1.png" },
  { id: 2, image: "/images/img11.png" },
  { id: 3, image: "/images/img10.png" },
  { id: 4, image: "/images/img9.png" },
  { id: 5, image: "/images/img7.png" },
  { id: 6, image: "/images/img8.png" },
  { id: 7, image: "/images/img4.png" },
  { id: 8, image: "/images/img5.png" },
];

const Images = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((item) => (
          <div
            key={item.id} // Correct placement of "key"
            className="slider-container rounded-xl w-1/2 border-black-[2px]"
          >
            <div className="w-full rounded-xl">
              <Image
                src={item.image}
                alt={`Image ${item.id}`}
                width={500}
                height={200}
                className="w-[615px] h-[450px] m-[30px] rounded-xl rounded-tr-xl rounded-br-xl duration-1000 scroll-auto"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Images;