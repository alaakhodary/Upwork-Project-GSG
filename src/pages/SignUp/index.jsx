import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { MenuItem, Select } from "@mui/material";

import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";

import FormCard from "../../components/FormCard";
import InputCard from "../../components/InputCard";

import { useAuthContext } from "../../contexts/AuthContext";

import * as yup from "yup";
import axios from "axios";

import {
  Button,
  DivCheckbox,
  DivInputFlex,
  DivLog,
  LabelCheck,
  Span,
  SpanSwitch,
  Switcher,
} from "./style";
import { DivLogos, ErrorMessage } from "../Login/style";

const regularExpression =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const schema = yup.object().shape({
  firstname: yup
    .string()
    .min(4, "FirstName must be at least 6 characters")
    .max(16, "FirstName must be no more than 16 characters")
    .required("FirstName is required"),
  lastname: yup
    .string()
    .min(3, "LastName must be at least 6 characters")
    .max(16, "LastName must be no more than 16 characters")
    .required("LastName is required"),

  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(regularExpression, "Invalid Password")
    .required("Password is required"),
  checked: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and conditions")
    .required(),
});

const SignUp = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const selectCountryHandler = (value) => setSelectedCountry(value);
  countries.registerLocale(enLocale);
  countries.registerLocale(itLocale);
  const countryObj = countries.getNames("en", { select: "official" });
  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  const {
    setAuthorized,
    loading,
    setLoading,
    errors,
    setErrors,
    setToken,
    setUsername,
  } = useAuthContext();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleChangeInput = (e) => {
    const { value, id } = e.target;
    if (id === "firstname") setFirstName(value);
    if (id === "lastname") setLastName(value);
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(value);
    if (id === "checked") setChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    schema
      .validate(
        {
          firstname,
          email,
          password,
          lastname,
          checked,
        },
        { abortEarly: false }
      )
      .then(async () => {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URLS_AUTH}/users/signup`,
          {
            name: firstname,
            email: email,
            password: password,
          }
        );
        if (res) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
          setUsername(res.data.name);
          localStorage.setItem("name", res.data.name);
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
      <DivLog>
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
        <div>
          <p>
            Here to hire talent? <SpanSwitch>Join as a Client</SpanSwitch>
          </p>
        </div>
      </DivLog>
      <FormCard>
        <h1>Sign up to find work you love</h1>
        <form onSubmit={handleSubmit}>
          <DivInputFlex>
            <InputCard
              width="251"
              disc="First name"
              typeInput="text"
              id="firstname"
              onChangeFunction={handleChangeInput}
              value={firstname}
            />
            <InputCard
              width="251"
              disc="Last name"
              typeInput="text"
              id="lastname"
              onChangeFunction={handleChangeInput}
              value={lastname}
            />
          </DivInputFlex>
          {errors && errors.firstname && (
            <ErrorMessage>{errors.firstname}</ErrorMessage>
          )}
          <InputCard
            width="535"
            disc="Email"
            typeInput="email"
            id="email"
            onChangeFunction={handleChangeInput}
            value={email}
          />
          {errors && errors.email && (
            <ErrorMessage>{errors.email}</ErrorMessage>
          )}
          <InputCard
            width="535"
            disc="Password (8 or more characters)"
            id="password"
            onChangeFunction={handleChangeInput}
            value={password}
          />
          {errors && errors.password && (
            <ErrorMessage>{errors.password}</ErrorMessage>
          )}
          <Select
            style={{ width: "535px" }}
            value={selectedCountry}
            onChange={(e) => selectCountryHandler(e.target.value)}
          >
            {!!countryArr?.length &&
              countryArr.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
          </Select>
          <DivCheckbox>
            <InputCard
              typeInput="checkbox"
              width="15"
              id="checked"
              onChangeFunction={handleChangeInput}
              checked={checked}
            />
            <LabelCheck htmlFor="">
              Yes, I understand and agree to the
              <Span> Upwork Terms of Service</Span> , including the
              <Span> User Agreement</Span> and <Span> Privacy Policy</Span> .
            </LabelCheck>
          </DivCheckbox>
          {errors && errors.checked && (
            <ErrorMessage>{errors.checked}</ErrorMessage>
          )}
          <Button type="submit">
            {loading ? "loading..." : "Create My Account"}
          </Button>
          <Switcher>
            Already have an account?
            <NavLink to="/" className="link">
              Log In
            </NavLink>
          </Switcher>
        </form>
      </FormCard>
    </div>
  );
};

export default SignUp;
