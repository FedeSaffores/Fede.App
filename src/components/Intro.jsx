import React from "react";
import { Link } from "react-router-dom";
import "./Intro.module.css";
import style from "./Intro.module.css";

function Intro() {
  return (
    <div>
      <button>
        {" "}
        <Link to="/home">Intro</Link>
      </button>
      <h1></h1>
    </div>
  );
}
export default Intro;
