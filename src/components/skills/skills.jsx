import React from 'react';

import PageContainer from '../page-container';
import Article from '../article';
import Tags from '../tags';

const Skills = () => (
  <PageContainer>
    <Article>
      <h3>Never stop learning</h3>
      <p>
        Nulla a dui nec lectus cursus luctus. Sed aliquam vehicula lacus et varius.
        Nulla at condimentum nunc. Nam ligula eros, condimentum nec dapibus et, aliquet quis nisi.
      </p>
      <p>
        Sed rutrum nulla a augue faucibus tristique. Pellentesque a nulla rhoncus lectus
        tincidunt pharetra. Mauris in nunc vitae ex efficitur dignissim et non ante.
      </p>
    </Article>
    <Tags
      majorTags={['javascript', 'react', 'nodejs', 'aws']}
      regularTags={['corejs', 'ecmascript', 'typescript', 'serverless', 'html', 'css', 'scrum', 'kanban']}
    />
  </PageContainer>
);

export default Skills;
