import React from "react";
import Login from "./pages/login";
import { Routes, Route } from "react-router";
import Signup from "./pages/signup";
import Home from "./pages/home";
import DonorListing from "./pages/donor";
import Chat from "./pages/cat";
import AdminDashboard from "./pages/admin";
import Header from "./components/common/header/Header";
import Request from "./pages/request";
import Profile from "./pages/profile";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/register" element={"register"} />
      <Route path="/donor" element={<DonorListing />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/request" element={<Request />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={"not found"} />
      {/* <Route path="/" element={<Home />} /> */}
    </Routes>
  );
};

export default App;
