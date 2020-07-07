import React from 'react';

import {
  InteractivePicture,
  Article,
  Tags,
} from '../../components';

import * as youtubeClientWebmSrc from '../../img/youtube-client.webm';
import * as youtubeClientGifSrc from '../../img/youtube-client.gif';
import * as harryPotterWebmSrc from '../../img/harry-potter.webm';
import * as harryPotterGifSrc from '../../img/harry-potter.gif';

const Portfolio = () => (
  <>
    <Article className="main__article">
      <h3 className="article__heading article-heading">
        Youtube Client
      </h3>
      <p className="article__paragraph">
        Single page application that allow you to find videos within YouTube.
        <br />
        <a className="article__link" href="">Go to requirements</a>
      </p>
      <InteractivePicture
        className="article__picture"
        gifSrc={youtubeClientGifSrc}
        webmSrc={youtubeClientWebmSrc}
        alt="Youtube Client Demo"
        href="https://mikhama.art/youtube-client/"
      />
      <Tags
        regularTags={['javascript', 'youtube-api', 'html', 'css']}
      />
    </Article>
    <Article className="main__article">
      <h3 className="article__heading article-heading">
        Harry Potter and the Battle for Hogwarts
      </h3>
      <p className="article__paragraph">
        Game for kids. Single page application.
        <br />
        <a className="article__link" href="">Go to requirements</a>
      </p>
      <InteractivePicture
        className="article__picture"
        gifSrc={harryPotterGifSrc}
        webmSrc={harryPotterWebmSrc}
        alt="Harry Potter Demo"
        href="https://mikhama.art/rs-final-game/"
      />
      <Tags
        regularTags={['javascript', 'canvas', 'html', 'css', 'scss']}
      />
    </Article>
  </>
);

export default Portfolio;
