import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
       <Navbar />
       <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<News pageSize={12} category="business"/>}/>
          <Route path="/general" exact element={<News pageSize={12} category="business"/>}/>
          <Route path="/" exact element={<News pageSize={12} category="business"/>}/>
          <Route path="/" exact element={<News pageSize={12} category="business"/>}/>
          <Route path="/" exact element={<News pageSize={12} category="business"/>}/>
          <Route path="/" exact element={<News pageSize={12} category="business"/>}/>
          <Route path="/" exact element={<News pageSize={12} category="business"/>}/>
        </Routes>
      </BrowserRouter>
       <News pageSize={12} category="business"/>
      </>
    )
  }
}
