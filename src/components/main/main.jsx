import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import { compose, withAnimation } from '../../hoc-helpers';

import {
  Skills,
  Education,
  Experience,
  Portfolio,
} from '../../pages';

const Main = ({ classNames, isAnimationEnabled, location }) => {
  const { pathname } = location;

  let mainClass = '';
  let mainContainerClass = '';
  if (!isAnimationEnabled && pathname !== '/') {
    mainClass = 'app__main_animation-disabled';
    mainContainerClass = ' app__main-container_animation-disabled';
  }

  return (
    <main className={`main app__main ${classNames.main} ${mainClass}`}>
      <div className={`main__main-container app__main-container ${classNames.mainContainer} ${mainContainerClass}`}>
        <Switch>
          <Route path="/skills" component={Skills} />
          <Route path="/education" component={Education} />
          <Route path="/experience" component={Experience} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    </main>
  );
};

export default compose(withAnimation, withRouter)(Main);
