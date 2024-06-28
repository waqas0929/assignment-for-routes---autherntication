import React from "react";
import Product from "./pages/Products";
import "./Index.css";
import LoginFormValidation from "./pages/Login";
import SignupFormValidation from "./pages/Signup";

const App = () => {
  return (
    <>
      {/* <Product /> */}
      <SignupFormValidation />
      {/* <LoginFormValidation /> */}
    </>
  );
};

export default App;
