import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../../components/helmet/Helmet";
import CommonSection from "../../components/UI/commonSection/CommonSection";

import "../../styles/checkout.css";

const CheckOut = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="number" placeholder="Phone number" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your street address" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your city" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter Postal code" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  subTotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  Shipping: <span>$0</span>
                </h6>
                <h6>Free Shipping</h6>

                <h4>
                  Total Cost: <span>${totalAmount}</span>
                </h4>
                <button className=" mt-4 --btn btn w-100 ">
                  Place an order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CheckOut;
