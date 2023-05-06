import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import ProductsList from "../../components/UI/ProductsList";
import products from "../../assets/data/products";

const Arrival = () => {
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);

  useEffect(() => {
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
  }, []);

  return (
    <section className="new__arrivals">
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="section__title">New Arrivals</h2>
          </Col>
          <ProductsList data={mobileProducts} />
          <ProductsList data={wirelessProducts} />
        </Row>
      </Container>
    </section>
  );
};

export default Arrival;
