//Dependecies
import React from 'react';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

//Styles
import './App.scss';

//Components
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

const App = () => (
  <div className="App">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
