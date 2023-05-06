import React, { useState } from "react";
import Helmet from "../../components/helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import signUpImg from "../../assets/images/register.png";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { storage } from "../../firebase/config";
import { db } from "../../firebase/config";

import { toast } from "react-toastify";
import "../../styles/Auth.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();

    if (password !== cPassword) {
      toast.error("passwords do not match");
    }

    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;

        setLoading(false);
        toast.success("Registration successful...");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <Helmet title="Signup">
      {loading && <Loader />}
      <section className="auth">
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <Card>
                <h2 className="fw-bold">Signup</h2>
                <Form className="form" onSubmit={registerUser}>
                  <FormGroup className="form__group">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      value={cPassword}
                      onChange={(e) => setCPassword(e.target.value)}
                      required
                    />
                  </FormGroup>

                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    type="submit"
                    className="--btn --btn-danger"
                  >
                    Create an Account
                  </motion.button>
                  <p>
                    Already have an account?
                    <Link to="/login"> Login</Link>{" "}
                  </p>
                </Form>
              </Card>
            </Col>
            <Col lg="6">
              <img src={signUpImg} alt="login" className="img" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default SignUp;
