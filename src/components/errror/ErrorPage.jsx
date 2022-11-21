import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Nav/Navbar";
import "./errorPage.css";

const ErrorPage = () => {

    const navigate = useNavigate()

  return (
    < >
    <div className="mainbox">
      <div className="err">4</div>
      <i className="far fa-question-circle fa-spin"></i>
      <div className="err2">4</div>
      <div className="msg">
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
        existed in the first place?
        <p>
          R <button onClick={() => navigate("/")}>home</button> and try from there.
        </p>
      </div>
    </div>
    </>
  );
};

export default ErrorPage;
