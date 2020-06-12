import React from 'react';

const InteractivePicture = ({
  className,
  gifSrc,
  webmSrc,
  alt,
  href,
}) => {
  const isWebmSupported = !!document.createElement('video').canPlayType;

  const fallbackGif = !isWebmSupported
    ? (
      <img
        className="interactive-picture__image"
        src={gifSrc}
        alt={alt}
      />
    )
    : '';
  const webmVideo = isWebmSupported
    ? (
      <video
        className="interactive-picture__video"
        preload="auto"
        poster={gifSrc}
        muted
        loop
        autoPlay
      >
        <source src={webmSrc} type="video/webm" />
      </video>
    )
    : '';

  return (
    <figure className={`${className} interactive-picture`}>
      <a
        className="interactive-picture__link"
        href={href}
        target="__blank"
      >
        {fallbackGif}
        {webmVideo}
      </a>
    </figure>
  );
};

export default InteractivePicture;
