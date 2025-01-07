import React from "react";
import Login from "./pages/login";
import { Routes, Route } from "react-router";
import Signup from "./pages/signup";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={"home page"} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/register" element={"register"} />
      <Route path="/donor" element={"donor"} />
      <Route path="/receiver" element={"receiver"} />
      <Route path="*" element={"not found"} />
      {/* <Route path="/" element={<Home />} /> */}
    </Routes>
  );
};

export default App;
