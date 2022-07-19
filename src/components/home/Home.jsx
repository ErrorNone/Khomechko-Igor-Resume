import React from "react";
import "../../App.css";
import "./Home.scss";

const Home = () => {
  return (
    <section id="home" className="section section__home">
      <div className="container container__home">
        <div className="title__home">
          <div>
            <h1>WELCOME TO MY RESUME PAGE</h1>
            <p>
              Hi, I am Khomechko Igor
              <br />
              <span>Front-end Developer </span>
              <br />
              from Russia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
