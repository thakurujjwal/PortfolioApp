import React from "react";
import Autotypewritter from "../components/Autotypewritter";
import "../Styles/Home.css";
import Socialmedia from "../components/Socialmedia";

const Home = () => {
  return (
    <>
      <div className="homemain">
        <div className="impo">
          <p className="heading">WELCOME TO MY WORLD</p>
          <h1 className="title">
            Hi, I’m <span>Ujjwal Thakur</span>
            <br />
            <Autotypewritter />
          </h1>

          <div>
            <p className="description">
              Web designer and developer working for
              <span> webui.soft </span> and <span>w3webservice</span> in Delhi,
              india.
            </p>
          </div>
          <Socialmedia />
        </div>

        <div className="Divimg">
          {" "}
          <img
            // src="/images/my_photo-removebg-preview.png"
            src="/images/author1.png"
            alt="logo"
            // style={{ height: "600px", width: "400px" }}
            style={{ height: "600px", width: "auto" }}
            className="image"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
