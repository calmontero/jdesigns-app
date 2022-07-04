import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
//import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReactLoading from "react-loading";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/core';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../App.scss";

function CraftSwiper() {
    const params = useParams();
    const id = params.id;
    const [slides, setSlides] = useState([]);
    const history = useHistory();
    const [done, setDone] = useState(undefined);
    const [service, setService] = useState("");

    //Recover the data
    useEffect(() => {
        setTimeout(() => {
          fetch(`https://pure-thicket-24038.herokuapp.com/data/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setSlides(data.image);
                setDone(true);
                setService(data.service);
            });
        }, 2000);
      }, []);

    function handleClick() {
        history.goBack();
    }

    return (
        <div className="craft-swiper-container" >
          <div className="title_wrapper">
            <IconButton aria-label="close">
              <ArrowBackIcon onClick={handleClick} />
            </IconButton>
            <div className="reactLogo">
              <img src="/images/JDesigns-logo.png" />
            </div>
            <div className="title_">
              <span>{service}</span>
            </div>
          </div>
          {!done ? (
                <ReactLoading
                type={"spinningBubbles"}
                color={"#03fc4e"}
                height={300}
                width={300}
                className={"loading"}
                />
            ) : (
              <Swiper
              modules={[EffectCoverflow, Pagination, Navigation]} 
              autoHeight={true}
              effect={"coverflow"}
              centeredSlides={true}
              slidesPerView={window.innerWidth < 768 ? 1 : 3}
              //slidesPerView={3}
              navigation={true}
              pagination={{
                  clickable: true
              }}
              coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
              }}
              className="mySwiper"
            >
              {slides && slides.map((slide) =>
                  <SwiperSlide>
                      <img src={slide} alt="" />
                  </SwiperSlide>
              )}
            </Swiper>
            )}
        </div >
      );
}

export default CraftSwiper;