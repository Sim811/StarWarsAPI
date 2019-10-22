import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from "semantic-ui-react";
import {Switch, Route} from "react-router-dom";
import Home from "./Components/Home";
import Character from "./Components/Character";

const App = () => (
  <>
  <Container>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/character/:id" component={Character}/>
    </Switch>
  </Container>
  </>
)

export default App;
