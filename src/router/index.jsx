import React, { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Loading from "../components/Loading";

import { useAuthContext } from "../contexts/AuthContext";

import ProtectedRoute from "../components/ProtectedRoute";
import styled from "styled-components";

const Box = styled.div`
  width: 100wv;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Img = styled.img`
  width: 40%;
`;

const Login = lazy(() => import("../pages/Login"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Home = lazy(() => import("../pages/Home"));
const Search = lazy(() => import("../pages/Search"));
const Profile = lazy(() => import("../pages/Profile"));
const DetailsJob = lazy(() => import("../pages/DetailsJob"));

const Router = () => {
  const { authorized, setAuthorized, setToken } = useAuthContext();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      setAuthorized(true);
    }
  }, [setToken, setAuthorized]);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route index element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={authorized ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authorized ? <Navigate to="/home" /> : <SignUp />}
        />

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="home" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="profile" element={<Profile />} />
          <Route path="details/:id" element={<DetailsJob />} />
        </Route>

        <Route
          path="/*"
          element={
            <Box>
              <Img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/06/how-to-fix-error-404-1.png" />
            </Box>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default Router;
