import React from 'react';

import {
  Article,
} from '../../components';

const Experience = () => (
  <>
    <Article className="main__article">
      <h3 className="article__heading article__heading_with-sub-heading article-heading">
        <a className="article__link" href="">Software Engineer</a>
        {' '}
        <span className="article-heading__sub-text">at EPAM Systems</span>
      </h3>
      <p className="article__sub-heading">
        2019 February &mdash; Till now
      </p>
      <p className="article__paragraph">
        Nulla a dui nec lectus cursus luctus. Sed aliquam vehicula lacus et varius.
        Nulla at condimentum nunc. Nam ligula eros, condimentum nec dapibus et, aliquet quis nisi.
      </p>
      <p className="article__paragraph">
        Sed rutrum nulla a augue faucibus tristique.
        Pellentesque a nulla rhoncus lectus tincidunt pharetra.
        Mauris in nunc vitae ex efficitur dignissim et non ante.
      </p>
    </Article>
    <Article className="main__article">
      <h3 className="article__heading article__heading_with-sub-heading article-heading">
        <a className="article__link" href="">Engineer</a>
        {' '}
        <span className="article-heading__sub-text">at Belarusfilm</span>
      </h3>
      <p className="article__sub-heading">
        2011 April &mdash; 2019 February
      </p>
      <p className="article__paragraph">
        Nulla a dui nec lectus cursus luctus. Sed aliquam vehicula lacus et varius.
        Nulla at condimentum nunc. Nam ligula eros, condimentum nec dapibus et, aliquet quis nisi.
      </p>
      <p className="article__paragraph">
        Sed rutrum nulla a augue faucibus tristique.
        Pellentesque a nulla rhoncus lectus tincidunt pharetra.
        Mauris in nunc vitae ex efficitur dignissim et non ante.
      </p>
    </Article>
  </>
);

export default Experience;
