import React, { useEffect, useRef, useState } from "react";
import "../../styles/Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

import { useSelector, useDispatch } from "react-redux";

import { Container, Row } from "reactstrap";
import logo from "../../assets/images/cart.png";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
} from "../../redux/features/Auth/authSlice";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const nav__links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  const [displayName, setDisplayName] = useState("");

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const profileActionRef = useRef(null);
  const dispatch = useDispatch();
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const navigateToCart = () => {
    navigate("/cart");
  };

  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show__profileActions");

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  // monitor currently signed in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName === null) {
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);

          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayName]);

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
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

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon" onClick={navigateToCart}>
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className="profile">
                <span>
                  <a href="#">
                    <FaUserCircle
                      size={20}
                      color="orangered"
                      onClick={toggleProfileActions}
                    />
                    {""}
                    <span style={{ color: "#fff" }}> hi, {displayName} </span>
                  </a>
                </span>
                <div
                  className="profile__action"
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {displayName ? (
                    <span onClick={logout}>Logout</span>
                  ) : (
                    <div className="log-sign">
                      <span className="log">
                        <Link to="/signup">Signup</Link>
                      </span>
                      <span className="log">
                        <Link to="/login">Login</Link>
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
