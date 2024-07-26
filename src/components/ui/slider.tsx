import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import './slider.css';

function Fade({ onCardClick }) {

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  };

  const Dots = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  };

  function CustomDots({ dots }) {
    return (
      <ul className="custom-dots"> {dots} </ul>
    );
  }

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    appendDots: dots => <CustomDots dots={dots} />,
    customPaging: i => (
      <button className="custom-dot"></button>
    )
  };

  const handlePhotoClick = (index) => {
    onCardClick(index);
  };

  return (
    <div style={{ width: '90%', height: '500px', margin: '0 auto', color: 'black' }}>
      <Slider {...settings}>
      <div className="" onClick={() => handlePhotoClick(0)}>
          <div className="flex justify-start items-end h-[60vh] photo-1 rounded-xl ">
            <div className="border-2 rounded-full border-[#27bc8e] bg-black/80 p-2 m-4">
              <h1 className="text-2xl text-white">09/2019 – 05/2022
              </h1>
            </div>
          </div>
        </div>
        <div className="" onClick={() => handlePhotoClick(1)}>
          <div className="flex justify-start items-end h-[60vh] photo-2 rounded-xl">
            <div className="border-2 rounded-full border-[#27bc8e] bg-black/80 p-2 m-4">
              <h1 className="text-2xl text-white">10/2022 – current</h1>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Fade;
