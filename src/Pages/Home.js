import React from "react";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <h1> Home Page </h1>
    </>
  );
};

export default Home;
