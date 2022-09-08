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
          <Route exact  path="/"  element={<News  key= pageSize={12} category=""/>}/>
          <Route exact  path="/general"  element={<News key=  pageSize={12} category="general"/>}/>
          <Route exact  path="/business"  element={<News key=  pageSize={12} category="business"/>}/>
          <Route exact  path="/entertainment"  element={<News key=  pageSize={12} category="entertainment"/>}/>
          <Route exact  path="/sports"  element={<News key=  pageSize={12} category="sports"/>}/>
          <Route exact  path="/health"  element={<News key=  pageSize={12} category="health"/>}/>
          <Route exact  path="/science"  element={<News key=  pageSize={12} category="science"/>}/>
          <Route exact  path="/technology" element={<News key=  pageSize={12} category="technology"/>}/>
        </Routes>
      </BrowserRouter> 
     
      </>
    )
  }
}

