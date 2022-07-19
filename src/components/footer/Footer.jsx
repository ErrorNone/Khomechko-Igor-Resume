import React from "react";
import "./Footer.scss";
import "../../App.css";
import vk from "../../common/img/icons/vk.svg";
import telegram from "../../common/img/icons/telegram.svg";
import github from "../../common/img/icons/github.svg";
import codewars from "../../common/img/icons/codewars.svg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container container__footer">
        <div className="social">
          <a href="https://github.com/ErrorNone" target="_blank">
            <img
              className="social__img social__img--w29"
              src={github}
              alt="github"
            />
          </a>
          <a href="https://www.codewars.com/users/Error_None" target="_blank">
            <img
              className="social__img social__img--w23"
              src={codewars}
              alt="codewars"
            />
          </a>
          <a href="https://web.telegram.org/k/#@Stive_Voznick" target="_blank">
            <img
              className="social__img social__img--w23"
              src={telegram}
              alt="telegram"
            />
          </a>
          <a href="https://vk.com/feed" target="_blank">
            <img className="social__img" src={vk} alt="vk" />
          </a>
        </div>
        <h2>My portfolio © 2022 </h2>
      </div>
    </section>
  );
};

export default Footer;
