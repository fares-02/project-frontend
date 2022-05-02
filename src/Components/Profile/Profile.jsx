import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_current } from "../../Redux/Actions/authActions";
import "./Profile.css";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_current());
  }, []);
  const user = useSelector((state) => state.authReducer.user);

  return <div>{user.email}</div>;
};

export default Profile;
