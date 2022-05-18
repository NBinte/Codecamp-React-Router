import React from "react";
import { useEffect } from "react";
import { Routes, Route, useNavigate, Link, useMatch } from "react-router-dom";
import EditProfile from "./EditProfile";
import NotFound from "./NotFound";
import ViewProfile from "./ViewProfile";

const Profile = ({ login }) => {
  const navigate = useNavigate();

  const { path, url } = useMatch();

  useEffect(() => {
    window.scroll(0, 0);

    if (!login) {
      navigate("/");
    }
  }, [login]);
  return (
    <>
      <h1> Profile Page </h1>

      <ul className="nav">
        <li>
          <Link to={`${url}/viewprofile`}>View profile</Link>
        </li>
        <li>
          <Link to={`${url}/editprofile`}>Edit profile</Link>
        </li>
      </ul>
    </>
  );
};

export default Profile;
