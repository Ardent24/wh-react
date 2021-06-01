import React from "react";
import "./styles/Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <span className="loader-wrap">
        <span className="loader-ball" />
        <span className="loader-circle" />
      </span>
    </div>
  );
};

export default Loader;
