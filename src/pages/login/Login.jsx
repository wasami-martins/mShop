import React, { useState } from "react";
import Helmet from "../../components/helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { auth } from "../../firebase/config";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import "../../styles/Auth.css";
import LoginImg from "../../assets/images/login.png";
import Card from "../../components/card/Card";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsloading(false);
        toast.success("Login Successful...");
        navigate("/");
      })
      .catch((error) => {
        setIsloading(false);
        toast.error(error.message);
      });
  };

  // Login with Google
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const user = result.user;
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <Helmet title="Login">
      {isLoading && <Loader />}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={LoginImg} alt="login" className="img" />
            </Col>

            <Col lg="6" className="m-auto text-center">
              <Card>
                <h2 className="fw-bold mb-2">Login</h2>

                <Form className="form" onSubmit={loginUser}>
                  <FormGroup className="form__group">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
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

                  <button type="submit" className="--btn --btn-primary w-100">
                    Login
                  </button>
                  <div className="links">
                    <Link to="/reset">Reset Password</Link>
                  </div>
                  <p>-- or --</p>
                  <button
                    onClick={signInWithGoogle}
                    className="--btn --btn-danger w-100"
                  >
                    <FaGoogle /> Login with google
                  </button>
                  <span className="register">
                    <p className="reg">
                      Don't have an account? <Link to="/signup"> Register</Link>
                    </p>
                  </span>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
