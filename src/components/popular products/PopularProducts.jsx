import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import ProductsList from "../../components/UI/ProductsList";
import products from "../../assets/data/products";
const PopularProducts = () => {
  const [popularProducts, setPopulaProducts] = useState([]);

  useEffect(() => {
    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setPopulaProducts(filteredPopularProducts);
  }, []);

  return (
    <section className="new__arrivals">
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="section__title">Popular in Category</h2>
          </Col>
          <ProductsList data={popularProducts} />
        </Row>
      </Container>
    </section>
  );
};

export default PopularProducts;
