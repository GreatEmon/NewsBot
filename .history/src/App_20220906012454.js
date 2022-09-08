import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { Link } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
         <Navbar />
        <Routes>
          <Route exact key={"home"} path="/" component={<News pageSize={12} category=""/>}/>
          <Route exact key={"general"} path="/general"  component={<News pageSize={12} category="general"/>}/>
          <Route exact key={"business"} path="/business"  component={<News pageSize={12} category="business"/>}/>
          <Route exact key={"entertainment"} path="/entertainment"  component={<News pageSize={12} category="entertainment"/>}/>
          <Route exact key={"sports"} path="/sports"  component={<News pageSize={12} category="sports"/>}/>
          <Route exact key={"health"} path="/health"  component={<News pageSize={12} category="health"/>}/>
          <Route exact key={"science"} path="/science"  component={<News pageSize={12} category="science"/>}/>
          <Route exact key={"technology"} path="/technology" component={<News pageSize={12} category="technology"/>}/>
        </Routes>
      </BrowserRouter> 
     
      </>
    )
  }
}

