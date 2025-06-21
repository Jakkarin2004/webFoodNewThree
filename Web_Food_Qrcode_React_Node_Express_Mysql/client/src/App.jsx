import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import ManageCategory from "./pages/owner/manageCategory";
import ManageMenu from "./pages/owner/ManageMenu";
import ManageTable from "./pages/owner/ManageTable";

import UserMenu from "./pages/user/UserMenu";
import Navbar from "./pages/user/Navbar";
import UserProduct from "./pages/user/UserProduct";
import UserHome from "./pages/user/UserHome";

function App() {
  return (
    <>
      <Router>
        <div>
          {/* <Navbar /> */}
          {/* <ManageTable />
        <ManageMenu />
        <ManageCategory /> */}
          <Routes>
            <Route path="/" element={<UserMenu />} />
            <Route path="/product" element={<UserProduct />} />
            <Route path="/home" element={<UserHome />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
