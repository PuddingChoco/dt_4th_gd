import React, { Component } from "react";
import PropTypes from "prop-types";

const FoodComponent = (props) => {
  const { name } = props;
  return (
    <>
      <p>
        내가 좋아하는 음식은 <span style={{ color: "red" }}>{name}</span>이다.
      </p>
    </>
  );
};

FoodComponent.defaultProps = {
  name: "팬케이크",
};

export default FoodComponent;
