import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import MyBank from "./components/MyBank";
import SignUp from "./components/Signup";

const App = () => {
  const isAuthenticated = localStorage.getItem("isLoggedIn");
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp setIsLoggedIn={setIsLoggedIn} />}></Route>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}  />}></Route>
          <Route
    
    path={'/my-bank'}
      element={<MyBank isLoggedIn={isLoggedIn}  />}
    
  />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
