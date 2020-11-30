import React, { Component } from "react";

import "./App.css";
import Images from "./ImgComponent/Img";

class App extends Component {
  render() {
    return (
      <div className="mainPage">
        <h1>Add Images you like from WEB</h1>
        <Images />
      </div>
    );
  }
}

export default App;
