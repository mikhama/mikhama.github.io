import React from 'react';

import {
  Article,
} from '../../components';

const Education = () => (
  <>
    <Article className="main__article">
      <h3 className="article__heading article__heading_with-sub-heading article-heading">
        <a className="article__link" href="">Rolling Scopes School</a>
        {' '}
        <span className="article-heading__sub-text">Q3-2018</span>
      </h3>
      <p className="article__sub-heading">
        2018 &mdash; 2019
      </p>
      <p className="article__paragraph">
        Nulla a dui nec lectus cursus luctus. Sed aliquam vehicula lacus et varius.
        Nulla at condimentum nunc. Nam ligula eros, condimentum nec dapibus et, aliquet quis nisi.
      </p>
      <p className="article__paragraph">
        <a className="article__link" href="">View certificate</a>
      </p>
    </Article>
    <Article className="main__article">
      <h3 className="article__heading article__heading_with-sub-heading article-heading">
        <a className="article__link" href="">BSUIR</a>
        {' '}
        <span className="article-heading__sub-text">Minsk, Belarus</span>
      </h3>
      <p className="article__sub-heading">
        2012 &mdash; 2016
      </p>
      <p className="article__paragraph">
        Nulla a dui nec lectus cursus luctus. Sed aliquam vehicula lacus et varius.
        Nulla at condimentum nunc. Nam ligula eros, condimentum nec dapibus et, aliquet quis nisi.
      </p>
      <ul className="article__list">
        <li>
          <span className="article__text article__text_bold">Faculty:</span>
          {' '}
          Distance Education
        </li>
        <li>
          <span className="article__text article__text_bold">Department:</span>
          {' '}
          Professinal Education (Informatics)
        </li>
        <li>
          <span className="article__text article__text_bold">Degree Information:</span>
          {' '}
          Higher Education
        </li>
        <li>
          <span className="article__text article__text_bold">Form:</span>
          {' '}
          Distant
        </li>
      </ul>
    </Article>
    <Article className="main__article">
      <h3 className="article__heading article__heading_with-sub-heading article-heading">
        <a className="article__link" href="">MRC-BSUIR (ex MHSRC)</a>
        {' '}
        <span className="article-heading__sub-text">Minsk, Belarus</span>
      </h3>
      <p className="article__sub-heading">
        2008 &mdash; 2012
      </p>
      <p className="article__paragraph">
        Nulla a dui nec lectus cursus luctus. Sed aliquam vehicula lacus et varius.
        Nulla at condimentum nunc. Nam ligula eros, condimentum nec dapibus et, aliquet quis nisi.
      </p>
      <ul className="article__list">
        <li>
          <span className="article__text article__text_bold">Faculty:</span>
          {' '}
          Programming
        </li>
        <li>
          <span className="article__text article__text_bold">Department:</span>
          {' '}
          Informatics
        </li>
        <li>
          <span className="article__text article__text_bold">Degree Information:</span>
          {' '}
          Technical school
        </li>
        <li>
          <span className="article__text article__text_bold">Form:</span>
          {' '}
          Full-time
        </li>
      </ul>
    </Article>
  </>
);

export default Education;
