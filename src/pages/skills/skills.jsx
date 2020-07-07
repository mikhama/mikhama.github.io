import React from 'react';

import {
  Article,
  Tags,
} from '../../components';

const Skills = () => (
  <>
    <Article className="main__article main__article_single">
      <h3 className="article__heading article-heading">Never stop learning</h3>
      <p className="article__paragraph">
        Nulla a dui nec lectus cursus luctus. Sed aliquam vehicula lacus et varius.
        Nulla at condimentum nunc. Nam ligula eros, condimentum nec dapibus et, aliquet quis nisi.
      </p>
      <p className="article__paragraph">
        Sed rutrum nulla a augue faucibus tristique. Pellentesque a nulla rhoncus lectus
        tincidunt pharetra. Mauris in nunc vitae ex efficitur dignissim et non ante.
      </p>
    </Article>
    <Tags
      majorTags={['javascript', 'react', 'nodejs', 'aws']}
      regularTags={['corejs', 'ecmascript', 'typescript', 'serverless', 'html', 'css', 'scrum', 'kanban']}
    />
  </>
);

export default Skills;
