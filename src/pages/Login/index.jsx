import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import PersonIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";

import FormCard from "../../components/FormCard";
import InputCard from "../../components/InputCard";

import * as yup from "yup";
import axios from "axios";

import { useAuthContext } from "../../contexts/AuthContext";

import {
  DivFoo,
  DivInputImg,
  DivLogos,
  DivP,
  DivSwitch,
  ErrorMessage,
  Paragraph,
  ParagraphFoo,
  SubmitButton,
} from "./style";

const regularExpression =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("User Name is required"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(regularExpression, "Invalid Password")
    .required("Password is required"),
});

const Login = () => {
  const { loading, setLoading, errors, setErrors, setToken, setAuthorized } =
    useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeInput = (e) => {
    const { value, id } = e.target;
    if (id === "username") setEmail(value);
    if (id === "password") setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    schema
      .validate(
        {
          email,
          password,
        },
        { abortEarly: false }
      )
      .then(async () => {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URLS_AUTH}/users/login`,
          {
            email: email,
            password: password,
          }
        );
        if (res) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name", res.data.name);

          setToken(res.data.token);
          setErrors([]);
          setLoading(false);
          setAuthorized(true);
        }
      })
      .catch((e) => {
        const errors = e.inner.reduce((acc, error) => {
          acc[error.path] = error.message;
          return acc;
        }, {});
        setErrors(errors);
        setLoading(false);
      });
  };
  return (
    <div>
      <DivLogos>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 102 28"
          role="img"
          aria-hidden="true"
        >
          <path
            fill="#14a800"
            d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"
          ></path>{" "}
          <path
            fill="#14a800"
            d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"
          ></path>{" "}
          <polygon
            fill="#14a800"
            points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"
          ></polygon>{" "}
          <path
            fill="#14a800"
            d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"
          ></path>{" "}
          <path
            fill="#14a800"
            d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z"
          ></path>
        </svg>
      </DivLogos>
      <FormCard>
        <h1 style={{ marginBottom: "3rem" }}>Log in to Upwork</h1>
        <form onSubmit={handleSubmit}>
          <DivInputImg>
            <PersonIcon
              style={{
                position: "absolute",
                top: "9",
                left: "9",
              }}
            />
            <InputCard
              disc="Username or Email"
              typeInput="email"
              padding="40"
              width="330"
              id="username"
              onChangeFunction={handleChangeInput}
              value={email}
            />
          </DivInputImg>
          {errors && errors.email && (
            <ErrorMessage>{errors.email}</ErrorMessage>
          )}
          <DivInputImg>
            <PasswordIcon
              style={{
                position: "absolute",
                top: "9",
                left: "9",
              }}
            />
            <InputCard
              disc="Password"
              typeInput="password"
              padding="40"
              width="330"
              id="password"
              onChangeFunction={handleChangeInput}
              value={password}
            />
          </DivInputImg>
          {errors && errors.password && (
            <ErrorMessage>{errors.password}</ErrorMessage>
          )}
          <div>
            <SubmitButton type="submit">
              {loading ? "loading..." : "  Log In"}
            </SubmitButton>
          </div>
          <DivP>
            <Paragraph>Don't have an Upwork account?</Paragraph>
          </DivP>
          <DivSwitch>
            <NavLink to="../signup" className="link">
              Sign Up
            </NavLink>
          </DivSwitch>
        </form>
      </FormCard>
      <DivFoo>
        <ParagraphFoo>
          © 2015 - 2023 Upwork® Global Inc. • Privacy Policy
        </ParagraphFoo>
      </DivFoo>
    </div>
  );
};

export default Login;
