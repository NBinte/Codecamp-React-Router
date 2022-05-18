import React from "react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <h1> About Page </h1>
    </>
  );
};

export default About;
