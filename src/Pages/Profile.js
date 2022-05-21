import React from "react";
import { useEffect } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";

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

      <ul className="nav">
        <li>
          <Link to="viewprofile">View profile</Link>
        </li>
        <li>
          <Link to="editprofile">Edit profile</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default Profile;
