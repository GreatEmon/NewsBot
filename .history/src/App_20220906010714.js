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
          <Route key path="/" exact element={<News pageSize={12} category=""/>}/>
          <Route key path="/general" exact element={<News pageSize={12} category="general"/>}/>
          <Route key path="/business" exact element={<News pageSize={12} category="business"/>}/>
          <Route key path="/entertainment" exact element={<News pageSize={12} category="entertainment"/>}/>
          <Route key path="/sports" exact element={<News pageSize={12} category="sports"/>}/>
          <Route key path="/health" exact element={<News pageSize={12} category="health"/>}/>
          <Route key path="/science" exact element={<News pageSize={12} category="science"/>}/>
          <Route key path="/technology" exact element={<News pageSize={12} category="technology"/>}/>
        </Routes>
      </BrowserRouter> 
     
      </>
    )
  }
}

