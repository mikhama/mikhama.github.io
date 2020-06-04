/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrain,
  faGraduationCap,
  faPuzzlePiece,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const toTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

const App = () => {
  const [isAnimation, setIsAnimation] = useState(false);

  return (
    <div className="app">
      <header className="header background-box">
        <div className="header__background-box background-box__wrapper">
          <div className={`header__background-box-container background-box__container${isAnimation ? ' header__background-box-container_animation' : ''}`}>
            <h1 className="header__logo">mikhama.art</h1>
            <article className={`header__about${isAnimation ? ' header__about_animation' : ''}`}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse at rhoncus justo.
              </p>
              <p>
                Quisque efficitur lacus in auctor imperdiet.
                Aenean sollicitudin semper nisi nec malesuada.
              </p>
              <p>
                Aenean quam augue, varius et congue in, aliquet quis turpis.
                Suspendisse sed ultricies tellus, et consectetur enim.
                Aliquam commodo nulla ante, et pretium risus interdum eget.
                Nam dapibus risus lectus, ac efficitur ligula convallis sit amet.
              </p>
            </article>
          </div>
          <nav className={`menu header__menu ${isAnimation ? ' header__menu_animation' : ''}`}>
            <div className={`menu__container${isAnimation ? ' menu__container_animation' : ''}`}>
              <a className="menu__link">
                <FontAwesomeIcon className="menu__icon" icon={faCodeBranch} />
                <span className="menu__hidden-name">experience</span>
              </a>
              <a
                className={`menu__link${isAnimation ? ' menu__link_active' : ''}`}
                onClick={
                  () => {
                    setIsAnimation((state) => !state);
                    setTimeout(toTop, 1400);
                  }
                }
              >
                <FontAwesomeIcon className="menu__icon" icon={faBrain} />
                <span className="menu__hidden-name">skills</span>
              </a>
              <a className="menu__link">
                <FontAwesomeIcon className="menu__icon" icon={faGraduationCap} />
                <span className="menu__hidden-name">education</span>
              </a>
              <a className="menu__link">
                <FontAwesomeIcon className="menu__icon" icon={faPuzzlePiece} />
                <span className="menu__hidden-name">portfolio</span>
              </a>
            </div>
          </nav>
        </div>
      </header>
      <footer className="footer background-box">
        <div className="footer__background-box background-box__wrapper">
          <div className="footer__background-box-container background-box__container">
            <div>
              <ul className="footer__links links">
                <li>
                  <a className="links__item links__item_active">#about</a>
                </li>
                <li>
                  <a className="links__item">#education</a>
                </li>
                <li>
                  <a className="links__item">#experience</a>
                </li>
                <li>
                  <a className="links__item">#portfolio</a>
                </li>
                <li>
                  <a className="links__item">#skills</a>
                </li>
              </ul>
              <p className="footer__copyright">Copyright © 2020 by Dzmitry Tsebruk</p>
            </div>
            <ul className="footer__social social">
              <li className="social__item social__item_linkedin">
                <a><FontAwesomeIcon className="social__icon" icon={faLinkedin} /></a>
              </li>
              <li className="social__item social__item_github">
                <a><FontAwesomeIcon className="social__icon" icon={faGithub} /></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
