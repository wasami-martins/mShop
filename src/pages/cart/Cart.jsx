import React from "react";
import "../../styles/Cart.css";
import Helmet from "../../components/helmet/Helmet";
import CommonSection from "../../components/UI/commonSection/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../../redux/features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">No item added to the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => {
                      const { productName, price, quantity, id, imgUrl } = item;
                      return (
                        <tr key={id}>
                          <td>
                            <img src={imgUrl} alt="" />{" "}
                          </td>
                          <td>{productName}</td>
                          <td>$ {price}</td>
                          <td>{quantity} pcs </td>
                          <td>
                            <motion.i
                              whileTap={{ scale: 1.2 }}
                              onClick={() =>
                                dispatch(cartActions.removeItem(id))
                              }
                              class="ri-delete-bin-line"
                            ></motion.i>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                  <span className="fs-4 fw-bold"> ${totalAmount}</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">
                taxes and shipping will be calculated in checkout
              </p>
              <div className="btn-cart">
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="--btn --btn-danger w-100 "
                >
                  <Link to="/checkout">Checkout</Link>
                </motion.button>

                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="--btn --btn-danger mt-3 w-100"
                >
                  <Link to="/shop">Continue Shopping</Link>
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
