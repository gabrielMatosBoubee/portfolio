import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './componentes/Home';
import React from 'react';

class App extends React.Component {
  render(){

    return (
    <>
      <BrowserRouter>
        <Route exact path='/' component={ Home } />
        <Route path='/about' component={ Home } />
        <Route path='/skills' component={ Home } />
        <Route path='/works' component={ Home } />
        <Route path='/contact' component={ Home }/>
      </BrowserRouter>  
    </>
  );
}
}

export default App;
