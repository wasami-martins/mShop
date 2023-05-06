import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../../components/helmet/Helmet";
import Slider from "../../components/slider/Slider";
import Services from "../../components/services/Services";
import ProductsList from "../../components/UI/ProductsList";
import products from "../../assets/data/products";
import Timer from "../../components/timer/Timer";
import Arrival from "../../components/new arrival/Arrival";
import PopularProducts from "../../components/popular products/PopularProducts";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestProducts = products.filter(
      (item) => item.category === "sofa"
    );
    setTrendingProducts(filteredTrendingProducts);
    setBestProducts(filteredBestProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <Slider />
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Bestselling Products</h2>
            </Col>
            <ProductsList data={bestProducts} />
          </Row>
        </Container>
      </section>
      <Timer />
      <Arrival />
      <PopularProducts />
    </Helmet>
  );
};

export default Home;
