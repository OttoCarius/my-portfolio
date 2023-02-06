import "./style.css";
import React from "react";
import link from "./../../img/icons/link.svg";
import insta from "./../../img/icons/insta.svg";
import git from "./../../img/icons/git.svg";


export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a
                  href="https://www.instagram.com/_andrew_reich?igshid=YmMyMTA2M2Y="
                  target={"blank"}
                >
                  <img src={insta} alt="insta" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://github.com/OttoCarius" target={"blank"}>
                  <img src={git} alt="git" />
                </a>
              </li>
              <li className="social__item">
                <a
                  href="https://www.linkedin.com/in/andrew-podlesnyi/"
                  target={"blank"}
                >
                  <img src={link} alt="link" />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2023 andrew podlesnyi</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}