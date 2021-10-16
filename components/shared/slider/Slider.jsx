import s from "./Slider.module.css";
import Slider from "react-slick";
import { NextSlideBtn, PrevSlideBtn } from "../sliderButtons";
import SongCard from "../../songCard/SongCard";

const Sliders = ({ songs }) => {
  const settings = {
    centerMode: true,
    dots: true,
    speed: 600,
    initialSlide: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true, //add this one
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    centerPadding: "410px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "300px",
          swipeToSlide: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          swipeToSlide: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          centerPadding: "250px",
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          swipeToSlide: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "190px",
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          swipeToSlide: false,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "120px",
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          swipeToSlide: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "60px",
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: false,
        },
      },
    ],
    nextArrow: <NextSlideBtn />,
    prevArrow: <PrevSlideBtn />,
  };

  return (
    <div className={s.slider__container}>
      <Slider {...settings}>
        {songs.map((song, idx) => {
          return (
            <div key={idx}>
              <SongCard song={song} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export { Sliders };
