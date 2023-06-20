import React from "react";
import "./Icon.css";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { ImTwitter } from "react-icons/im";

const Icon = () => {
  return (
    <div className="icon-container">
      <a
        href=" https://www.linkedin.com/in/debesh-mohapatra-650070205/"
        target="_blank"
      >
        <span className="icon">
          <BsLinkedin />
        </span>
      </a>
      <a href=" https://github.com/debesh-26" target="_blank">
        <span className="icon">
          <AiFillGithub />
        </span>
      </a>
      <a href=" https://twitter.com/DebeshMohapatr7" target="_blank">
        <span className="icon">
          <ImTwitter />
        </span>
      </a>
    </div>
  );
};

export default Icon;
