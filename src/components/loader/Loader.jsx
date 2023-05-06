// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom";
import "../../styles/Loader.css";
import loaderImg from "../../assets/images/loading.gif";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        <img src={loaderImg} alt="loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader;
