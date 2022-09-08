import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { Link } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  state = {
    progress:0
  }
  setProgress=(progress){
    this.state.
  }
  render() {
    return (
      <>
        <BrowserRouter>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
         <Navbar />
        <Routes>
          <Route exact  path="/"  element={<News  key="home" pageSize={12} category=""/>}/>
          <Route exact  path="/general"  element={<News key="general"  pageSize={12} category="general"/>}/>
          <Route exact  path="/business"  element={<News key="business"  pageSize={12} category="business"/>}/>
          <Route exact  path="/entertainment"  element={<News key="entertainment"  pageSize={12} category="entertainment"/>}/>
          <Route exact  path="/sports"  element={<News key="sports"  pageSize={12} category="sports"/>}/>
          <Route exact  path="/health"  element={<News key="health"  pageSize={12} category="health"/>}/>
          <Route exact  path="/science"  element={<News key="science"  pageSize={12} category="science"/>}/>
          <Route exact  path="/technology" element={<News key="technology"  pageSize={12} category="technology"/>}/>
        </Routes>
      </BrowserRouter> 
     
      </>
    )
  }
}

