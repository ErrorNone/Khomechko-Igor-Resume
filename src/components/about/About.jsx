import React from "react";
import "../../App.css";
import "./About.scss";
import BasicTabs from "./tab-container/TabsMU";

const About = () => {
  return (
    <section id="about" className="section section__about">
      <div className="container container__about">
        <div className="about__body">
          <div className="about__img__container">
            <div className="about__img"></div>
          </div>
          <div className="about__me">
            <div className="about__text">
              <h2> About Me</h2>
              <p>
                I am interested in challenging projects and ready to solve
                difficult tasks using my creative thinking. I am constantly
                improving my skills by creating my own projects. I developed
                good communication skills and became very good at working as a
                team member as well as reaching targets on my own. I would love
                to become a part of a company where I would be able to use my
                knowledge and initiative to help a business to succeed. This is
                a new and exciting path for me in this field but I am a very
                fast learner with a self motivated personality who is willing to
                work hard and give it my all.
              </p>
            </div>
            <div className="about__tabs">
              <BasicTabs />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
