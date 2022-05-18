import React from "react";
import { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <h1> Profile Page </h1>
    </>
  );
};

export default Profile;
