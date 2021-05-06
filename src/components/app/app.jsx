import React, { Fragment } from 'react';
import Header from '../header/header';
import '../../sass/style.scss';
import Main from '../main/main';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
};

export default App;
