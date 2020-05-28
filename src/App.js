import React from "react";
import dogBrown from "./Images/dogBrown.png";
import { Content } from "./Content/Content";
import "./App.css";

const App = () => {
  return (
    <>
      <header className="header_container">
        <img className="header_image" src={dogBrown} alt="dog" />
        <h1 className="header_heading">Fascinating facts about dogs</h1>
      </header>
      <Content />
    </>
  );
};

export default App;
