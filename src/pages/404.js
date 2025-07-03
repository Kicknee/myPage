import React from "react";
import SEO from "../components/SEO";
import Container from "../components/Container";
import { navigate } from "gatsby";

import "../assets/styles/not-found.css";

const Error = () => {
  setTimeout(() => {
    navigate("/");
  }, 5000);

  return (
    <Container>
      <SEO title="404" />
      <main className="error-404">
        <div className="rainyCloudBox">
          <div className="message-404">
            <span>#</span>404
          </div>
          <div className="cloud"></div>
          <div className="rain">
            <span style={{ "--i": "11" }}></span>
            <span style={{ "--i": "12" }}></span>
            <span style={{ "--i": "10" }}></span>
            <span style={{ "--i": "14" }}></span>
            <span style={{ "--i": "18" }}></span>
            <span style={{ "--i": "16" }}></span>
            <span style={{ "--i": "19" }}></span>
            <span style={{ "--i": "20" }}></span>
            <span style={{ "--i": "19" }}></span>
            <span style={{ "--i": "10" }}></span>
            <span style={{ "--i": "16" }}></span>
            <span style={{ "--i": "14" }}></span>
            <span style={{ "--i": "18" }}></span>
            <span style={{ "--i": "11" }}></span>
            <span style={{ "--i": "13" }}></span>
            <span style={{ "--i": "15" }}></span>
            <span style={{ "--i": "12" }}></span>
            <span style={{ "--i": "17" }}></span>
            <span style={{ "--i": "13" }}></span>
            <span style={{ "--i": "15" }}></span>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default Error;
