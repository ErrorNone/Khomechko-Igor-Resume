import React from "react";
import "./Contacts.scss";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { TextareaAutosize } from "@mui/material";

const Contacts = () => {
  const {
    register,
    formState: { errors, isValid },
    reset,
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => {
    emailjs.send("gmail", "resume-feedback", data, "Z7bCKp0B8j2HqEOQJ").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    reset();
  };

  return (
    <section id="contacts" className="section section__contacts">
      <div className="container container__contacts">
        <div className="contacts__form">
          <div className="contacts__form__body">
            <div className="text__form">
              <h3>Hire Me.</h3>
              <p>
                I am available for work. Connect with me via phone:{" "}
                <a
                  className="text__form-link text__form-link--fs"
                  href="tel:+79029176854"
                >
                  8 (902) 917-68-54{" "}
                </a>
                or email:{" "}
                <a
                  className="text__form-link"
                  href="mailto:igor.homechko@gmail.com"
                >
                  igor.homechko@gmail.com
                </a>
              </p>
            </div>
            <div>
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="input__validation">
                  {errors?.name && (
                    <p className="not__valid__input">
                      {errors?.name?.message}!
                    </p>
                  )}
                </div>
                <input
                  {...register("name", {
                    required: "The string must not be empty",
                    minLength: {
                      value: 2,
                      message: "MinLength 2 elements",
                    },
                    maxLength: {
                      value: 12,
                      message: "MaxLength 12 elements",
                    },
                    pattern: {
                      value: /^([а-яёА-ЯË]{1,23}|[a-zA-Z]{1,12})$/,
                      message: "Name must contain only liters",
                    },
                  })}
                  name="name"
                  autoComplete="off"
                  className="input__form"
                  placeholder="Your Name*"
                />
                <div className="input__validation">
                  {errors?.email && (
                    <p className="not__valid__input">
                      {errors?.email?.message}!
                    </p>
                  )}
                </div>
                <input
                  {...register("email", {
                    required: "The string must not be empty",
                    pattern: {
                      value:
                        /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                      message: "Not valid email",
                    },
                  })}
                  name="email"
                  autoComplete="off"
                  className="input__form"
                  placeholder="Your Email*"
                />
                <div className="input__validation">
                  {errors?.subject && (
                    <p className="not__valid__input">
                      {errors?.subject?.message}!
                    </p>
                  )}
                </div>
                <input
                  {...register("subject", {
                    required: "The string must not be empty",
                    minLength: {
                      value: 2,
                      message: "MinLength 2 elements",
                    },
                    maxLength: {
                      value: 12,
                      message: "MaxLength 12 elements",
                    },
                    pattern: {
                      value: /^([а-яёА-ЯË]{1,23}|[a-zA-Z]{1,12})$/,
                      message: "Subject must contain only liters",
                    },
                  })}
                  name="subject"
                  className="input__form"
                  placeholder="Write a Subject*"
                />
                <div className="input__validation">
                  {errors?.message && (
                    <p className="not__valid__input">
                      {errors?.message?.message}!
                    </p>
                  )}
                </div>
                <TextareaAutosize
                  {...register("message", {
                    required: "The string must not be empty",
                    minLength: {
                      value: 2,
                      message: "MinLength 2 elements",
                    },
                    maxLength: {
                      value: 320,
                      message: "MaxLength 320 elements",
                    },
                  })}
                  aria-label="empty textarea"
                  name="message"
                  className="textarea__form"
                  placeholder="Your Message*"
                  style={{ resize: "none" }}
                ></TextareaAutosize>
                <button type="submit" disabled={!isValid}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="contacts__img"></div>
      </div>
    </section>
  );
};

export default Contacts;
