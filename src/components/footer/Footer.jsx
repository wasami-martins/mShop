import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, ListGroup, ListGroupItem } from "reactstrap";
import "../../styles/Footer.css";
import logo from "../../assets/images/cart.png";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="logo">
                <img src={logo} alt="logo" />
                <div>
                  <h1>
                    m<span>Shop</span>
                  </h1>
                </div>
              </div>
            </Link>
            <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              veniam debitis nemo, dignissimos temporibus excepturi corporis
              consectetur ut perferendis ex.
            </p>
          </Col>
          <Col lg="3" md="3" className="mb-4">
            <div className="footer_quick-links">
              <h4 className="quick__link-title">Top Categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watch</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3" className="mb-4">
            <div className="footer_quick-links">
              <h4 className="quick__link-title">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className="footer_quick-links">
              <h4 className="quick__link-title">Contact</h4>
              <ListGroup className="contact__footer">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2"></ListGroupItem>
                <span className="d-flex align-items-center gap-2">
                  <i class="ri-map-pin-line"></i>
                  <p> 1 Lane 10, Dalute, Tipper Garage, Ibadan</p>
                </span>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span className="d-flex align-items-center gap-2">
                    <i class="ri-phone-line"></i>
                    <p> +2347035043932</p>
                  </span>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span className="d-flex align-items-center gap-2">
                    <i class="ri-mail-line"></i>
                    <p> wasamimartins@gamil.com</p>
                  </span>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright">
              &copy; {year} developed by Wasami Martins. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
