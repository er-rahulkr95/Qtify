import React from "react";

const Button = ({ className, children, type }) => {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};

export default Button;
