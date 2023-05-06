import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Container, Row } from "reactstrap";
import { sliderData } from "./slider-data";
import "../../styles/Slider.css";
import { motion } from "framer-motion";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let sliderInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  function auto() {
    sliderInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    if (autoScroll) {
      auto;
    }
  }, [currentSlide]);

  return (
    <Container>
      <Row>
        <div className="slider">
          <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
          <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
          {sliderData.map((slide, index) => {
            const { image, heading, desc, id } = slide;
            return (
              <div
                className={index === currentSlide ? "slide current" : "slide"}
                key={index}
              >
                {index === currentSlide && (
                  <>
                    <img src={image} alt="slide" />
                    <div className="content">
                      <h2>{heading}</h2>
                      <p>{desc}</p>
                      <hr />
                      <motion.a
                        whileTap={{ scale: 1.2 }}
                        href="/shop"
                        className="--btn --btn-primary"
                        style={{ textDecoration: "none" }}
                      >
                        Shop Now
                      </motion.a>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </Row>
    </Container>
  );
};

export default Slider;
