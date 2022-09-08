import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { Link } from "react-router-dom";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
         <Navbar />
        <Switch>
          <Route exact key={"home"} path="/" element={<News pageSize={12} category=""/>}/>
          <Route exact key={"general"} path="/general"  element={<News pageSize={12} category="general"/>}/>
          <Route exact key={"business"} path="/business"  element={<News pageSize={12} category="business"/>}/>
          <Route exact key={"entertainment"} path="/entertainment"  element={<News pageSize={12} category="entertainment"/>}/>
          <Route exact key={"sports"} path="/sports"  element={<News pageSize={12} category="sports"/>}/>
          <Route exact key={"health"} path="/health"  element={<News pageSize={12} category="health"/>}/>
          <Route exact key={"science"} path="/science"  element={<News pageSize={12} category="science"/>}/>
          <Route exact key={"technology"} path="/technology" element={<News pageSize={12} category="technology"/>}/>
        </Switch>
      </BrowserRouter> 
     
      </>
    )
  }
}

