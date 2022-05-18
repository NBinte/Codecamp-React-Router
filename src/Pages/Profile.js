import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ login }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);

    if (!login) {
      navigate("/");
    }
  }, [login]);
  return (
    <>
      <h1> Profile Page </h1>
    </>
  );
};

export default Profile;
