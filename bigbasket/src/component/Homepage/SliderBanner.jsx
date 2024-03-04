import React, { Component } from "react";
import Slider from "react-slick";
import {
  SliderElemBottom,
  SliderElem,
} from "./Slider_config";

export class SliderBanner extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
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
      <SliderElem className="viewport-slider">
        <Slider className="slider" {...settings}>
          <div>
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/B2C022308704-16155-460-DT-all-cm-290224.jpg?tr=w-1920,q=80"
              alt="tax-img"
              width="180px"
            />
          </div>
          
        </Slider>
      </SliderElem>
    );
  }
}

export class BottomSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: false,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <SliderElemBottom>
        <Slider {...settings}>
          <div className="down-to-view-div">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_emf_190x60_250322.png"
              alt="tax-img"
              width="180px"
            />
          </div>
          <div className="down-to-view-div">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_neupass-topstrip_m_250922_02.png"
              alt="tax-img"
              width="180px"
            />
          </div>
          <div className="down-to-view-div">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_ayurveda-topstrip_m_250922_03.png"
              alt="tax-img"
              width="180px"
            />
          </div>
          <div className="down-to-view-div">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_buy-more-save-more-topstrip_m_250922_04.png"
              alt="tax-img"
              width="180px"
            />
          </div>
          <div className="down-to-view-div">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_dow-topstrip_m_250922_05.png"
              alt="tax-img"
              width="180px"
            />
          </div>
          <div className="down-to-view-div">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_combo-storetopstrip_m_250922_06.png"
              alt="tax-img"
              width="180px"
            />
          </div>
        </Slider>
      </SliderElemBottom>
    );
  }
}
