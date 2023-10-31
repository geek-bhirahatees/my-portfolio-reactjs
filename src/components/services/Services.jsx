import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My works</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <h1>XO</h1>
            <h3 className="services__title">Tic Tac Toe</h3>
          </div>
          <span className="services__button" onClick={() => setToggleState(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => setToggleState(0)}
              ></i>
              <h3 className="services__modal-title">Tic Tac Toe</h3>
              <p className="services__modal-description">
                This was my first project when I learned HTML, CSS, and JS.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    This Project helps me to understand about DOM.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a href="https://github.com/coding-medjey/tictactoe/tree/4c9ba77ad45c93a78b4bc26479219a87d1b016f7">
                      Github Link
                    </a>
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a href="https://619f5fe49eae3e00c40c4887--happy-northcutt-198e4c.netlify.app/">
                      Live Demo
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/pulsar-line/48/land-mine.png"
              alt="land-mine"
            />
            <h3 className="services__title">Minesweeper</h3>
          </div>
          <span className="services__button" onClick={() => setToggleState(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => setToggleState(0)}
              ></i>
              <h3 className="services__modal-title"> Minesweeper</h3>
              <p className="services__modal-description">
                This was my favorite project I like to play Minesweeper. So I
                decided to make my version of Minesweeper.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    This helps me to build a login into code {"< >"}.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Technologies used in this project HTML, CSS and JS.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a href="https://github.com/coding-medjey/minesweeper">
                      Github Link
                    </a>
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <a href="https://vibrant-noether-1f5518.netlify.app/">
                    Live Demo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-comment services__icon"></i>
            <h3 className="services__title">Pupdesk</h3>
          </div>
          <span className="services__button" onClick={() => setToggleState(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => setToggleState(0)}
              ></i>
              <h3 className="services__modal-title">Pupdesk</h3>
              <p className="services__modal-description">
                Pupdesk is a web app designed for school student who wants to
                raise an issue like a ticket
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Technologies used in this project HTML, CSS and JS.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a href="https://github.com/fssa-batch3/bhirahatees.periyasamy__web_project_2/tree/dev">
                      Github Link
                    </a>
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a href="https://deploy-preview-2--precious-zabaione-0f2cc5.netlify.app/">
                      Live Demo
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
