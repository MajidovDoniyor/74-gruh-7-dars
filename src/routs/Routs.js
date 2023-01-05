import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../layout/header/Header";
import Crud from "../pages/crud/Crud";
import Get from "../pages/get/Get";

const Routs = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Crud />} />
        <Route path="/get" element={<Get />} />
      </Routes>
    </>
  );
};

export default Routs;
