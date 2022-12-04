import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import React from 'react';
import About from './pages/About';
import Works from './pages/Works';
import Skills from './pages/Skills';

class App extends React.Component {
  render(){

    return (
    <>
      <BrowserRouter>
        <Route exact path='/' component={ Home } />
        <Route path='/about' component={ About } />
        <Route path='/skills' component={ Skills } />
        <Route path='/works' component={ Works } />
        <Route path='/contact' component={ Home }/>
      </BrowserRouter>  
    </>
  );
}
}

export default App;
