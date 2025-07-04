import React from "react";
import RainCanvas from "../assets/canvas/matrix";

const Container = ({ children }) => {
  return (
    <>
      <div className="body">{children}</div>
      <RainCanvas />
    </>
  );
};

export default Container;
