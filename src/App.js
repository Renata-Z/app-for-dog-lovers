import React from "react";
import dogBrown from "./Images/dogBrown.png";
import { Content } from './Sections/Content'
import "./App.css";

const App = () => {
  return (
    <>         
      <header className="header-container">
        <img className="header-image" src={dogBrown} alt="dog" />
        <h1 className="main-heading">Fascinating facts about dogs</h1>
      </header>
    <Content />
    </>
  )
};

export default App;
