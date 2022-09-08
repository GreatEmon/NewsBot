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
          <Route exa key="home" path="/"  element={<News pageSize={12} category=""/>}/>
          <Route exa key="general" path="/general"  element={<News pageSize={12} category="general"/>}/>
          <Route exa key="business" path="/business"  element={<News pageSize={12} category="business"/>}/>
          <Route exa key="entertainment" path="/entertainment"  element={<News pageSize={12} category="entertainment"/>}/>
          <Route exa key="sports" path="/sports"  element={<News pageSize={12} category="sports"/>}/>
          <Route exa key="health" path="/health"  element={<News pageSize={12} category="health"/>}/>
          <Route exa key="science" path="/science"  element={<News pageSize={12} category="science"/>}/>
          <Route exa key="technology" path="/technology" element={<News pageSize={12} category="technology"/>}/>
        </Routes>
      </BrowserRouter> 
     
      </>
    )
  }
}

