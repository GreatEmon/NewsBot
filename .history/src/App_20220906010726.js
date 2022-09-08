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
          <Route key="home" path="/" exact element={<News pageSize={12} category=""/>}/>
          <Route key="general" path="/general" exact element={<News pageSize={12} category="general"/>}/>
          <Route key="home" path="/business" exact element={<News pageSize={12} category="business"/>}/>
          <Route key="home" path="/entertainment" exact element={<News pageSize={12} category="entertainment"/>}/>
          <Route key="home" path="/sports" exact element={<News pageSize={12} category="sports"/>}/>
          <Route key="home" path="/health" exact element={<News pageSize={12} category="health"/>}/>
          <Route key="home" path="/science" exact element={<News pageSize={12} category="science"/>}/>
          <Route key="home" path="/technology" exact element={<News pageSize={12} category="technology"/>}/>
        </Routes>
      </BrowserRouter> 
     
      </>
    )
  }
}

