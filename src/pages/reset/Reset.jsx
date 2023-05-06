import React, { useState } from "react";
import Helmet from "../../components/helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/Auth.css";
import forgotImg from "../../assets/images/forgot.png";
import Card from "../../components/card/Card";

import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const resetPassword = (e) => {
    e.preventDefault();
    setIsloading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsloading(false);
        toast.success("Check your mail for a reset link");
      })
      .catch((error) => {
        setIsloading(false);
        toast.error(error.message);
      });
  };
  return (
    <Helmet title="Reset Password">
      {isLoading && <Loader />}
      <section className="auth">
        <Container>
          <Row>
            <Col lg="6">
              <img src={forgotImg} alt="login" className="img" />
            </Col>

            <Col lg="6" className="m-auto text-center">
              <Card>
                <h2 className="fw-bold mb-4">Reset Password</h2>
                <Form className="form" onSubmit={resetPassword}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </FormGroup>
                  <button className="w-100 --btn --btn-danger">
                    Reset Password
                  </button>
                  <div className="links">
                    <p>
                      <Link to="/login">- Login</Link>
                    </p>
                    <p>
                      <Link to="/signup">- Register</Link>
                    </p>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Reset;
