import React, { Fragment } from 'react';
import Header from '../header/header';
import '../../sass/style.scss';
import Main from '../main/main';
import Footer from '../footer/footer';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
};

export default App;
