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
          <Route path="/business" exact element={<News pageSize={12} category="business"/>}/>
          <Route path="/entertainment" exact element={<News pageSize={12} category="business"/>}/>
          <Route path="/sports" exact element={<News pageSize={12} category="business"/>}/>
          <Route path="/health" exact element={<News pageSize={12} category="business"/>}/>
          <Route path="/science" exact element={<News pageSize={12} category="business"/>}/>
          <Route path="/technology" exact element={<News pageSize={12} category="business"/>}/>
        </Routes>
      </BrowserRouter>
       <News pageSize={12} category="business"/>
      </>
    )
  }
}

