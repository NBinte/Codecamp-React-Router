import React from "react";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <h1>404 Not Found</h1>
    </>
  );
};

export default NotFound;
