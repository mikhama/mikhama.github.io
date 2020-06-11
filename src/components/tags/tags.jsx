import React from 'react';

const Tags = ({ majorTags, regularTags }) => {
  const renderMajorTags = () => majorTags.map((tag) => (
    <span className="tags__tag tags__tag_major" key={tag}>
      #
      {tag}
    </span>
  ));

  const renderRegularTags = () => regularTags.map((tag) => (
    <span className="tags__tag" key={tag}>
      #
      {tag}
    </span>
  ));

  const regular = regularTags?.length ? <div className="tags__container">{renderRegularTags()}</div> : '';
  const major = majorTags?.length ? <div className="tags__container">{renderMajorTags()}</div> : '';

  return (
    <div className="tags">
      {major}
      {regular}
    </div>
  );
};

export default Tags;
