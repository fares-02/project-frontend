import React from "react";
import Button from "@mui/material/Button";
import "./Home.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_current } from "../../Redux/Actions/authActions";
const Home = () => {
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_current());
  }, []);
  const user = useSelector((state) => state.authReducer.user);

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center", margin: 30 }}>
        Register 100% of your online reservations
      </h1>
      <h3 style={{ display: "flex", justifyContent: "center", margin: 50 }}>
        Offer your members a simple and efficient online court reservation
        system.
      </h3>
      <hr />
      {!token ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: 70,
          }}
        >
          <Button variant="contained" color="success">
            <Link to="/signIn" style={{ color: "white" }}>
              LOGIN
            </Link>
          </Button>
          <Button variant="contained" color="success">
            <Link to="/signUp" style={{ color: "white" }}>
              REGISTER
            </Link>
          </Button>
        </div>
      ) : (
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            margin: 70,
            color: "black",
          }}
        >
          Welcome {user.email} !
        </h1>
      )}
      <hr />
      <h2 style={{ display: "flex", justifyContent: "center", margin: 50 }}>
        MAKE IT EASY FOR YOUR USERS!
      </h2>
      <div>
        <div className="cardh">
          <div className="a-box">
            <div className="img-container">
              <div className="img-inner">
                <div className="inner-skew">
                  <img src="https://media.istockphoto.com/photos/dramatic-american-football-stadium-picture-id531912354?k=20&m=531912354&s=612x612&w=0&h=Y32ubiwr4bTvpKVp2qVmMevhzZ8NMOJA9srNTg5d4gs=" />
                </div>
              </div>
            </div>
            <div className="text-container">
              <h3>Sports directory</h3>
              <div>
                Add your field to our directory for free so that our users can
                discover your infrastructure and services.
              </div>
            </div>
          </div>
          <div className="a-box">
            <div className="img-container">
              <div className="img-inner">
                <div className="inner-skew">
                  <img src="https://media.istockphoto.com/photos/dramatic-american-football-stadium-picture-id531912354?k=20&m=531912354&s=612x612&w=0&h=Y32ubiwr4bTvpKVp2qVmMevhzZ8NMOJA9srNTg5d4gs=" />
                </div>
              </div>
            </div>
            <div className="text-container">
              <h3>Online booking</h3>
              <div>
                Receive reservations 24/7. Athletes can book your services at
                any time and pay online. This a demo experiment to skew image
                container. It looks good.
              </div>
            </div>
          </div>
          <div className="a-box">
            <div className="img-container">
              <div className="img-inner">
                <div className="inner-skew">
                  <img src="https://media.istockphoto.com/photos/dramatic-american-football-stadium-picture-id531912354?k=20&m=531912354&s=612x612&w=0&h=Y32ubiwr4bTvpKVp2qVmMevhzZ8NMOJA9srNTg5d4gs=" />
                </div>
              </div>
            </div>
            <div className="text-container">
              <h3>Management software</h3>
              <div>
                We have developed tools for sports centers to efficiently manage
                their reservations and resources.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
