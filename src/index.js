import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import NameTag from "./NameTag.js";

const App = () => (
  <div className="App">
    <h1>Name Tag Generator</h1>
    <NameTag name="John Smith" />
    <NameTag name="Jane Doe" />
    <NameTag name="Bob Jones" />
    <NameTag name="Sarah Lee" />
    <NameTag name="Mike Chen" />
    <NameTag name="Emily Wang" />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
