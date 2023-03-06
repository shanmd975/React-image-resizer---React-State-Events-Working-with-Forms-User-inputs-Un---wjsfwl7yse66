import React, { useState } from "react";
import "../styles/App.css";
import imgSrc from "./image.jpeg";
// import imgSrc from "../image.jpeg";

const App = () => {
  const [height, setHeight] = useState(320);
  const [width, setWidth] = useState(320);

  return (
    <div id="main">
      <form>
        <label htmlFor="height-slider">Height Slider</label>
        <input
          type="range"
          min="100"
          max="800"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          id="height-slider"
        />
        <br />
        <label htmlFor="width-slider">Width Slider</label>
        <input
          type="range"
          min="100"
          max="800"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          id="width-slider"
        />
      </form>
      <img
        src={imgSrc}
        style={{ height: `${height}px`, width: `${width}px` }}
        id="resizable-img"
      />
    </div>
  );
};

export default App;
