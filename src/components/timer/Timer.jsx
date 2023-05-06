import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import counterImg from "../../assets/images/counter-timer-img.png";
import "../../styles/Timer.css";
import Clock from "../UI/Clock";

const Timer = () => {
  return (
    <section className="timer__count ">
      <Container>
        <Row>
          <Col lg="6" md="12" className="count__down-col">
            <div className="clock__top-content">
              <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
              <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
            </div>
            <Clock />
            <motion.button whileTap={{ scale: 1.2 }} className="  store__btn">
              <Link to="/shop">Visit Store</Link>
            </motion.button>
          </Col>
          <Col lg="6" md="12" className="text-end counter__img">
            <img src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Timer;
