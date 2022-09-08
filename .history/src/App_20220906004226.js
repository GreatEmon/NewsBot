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
       {/* <Navbar /> */}
       <div>
      <h1>Home</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link to="about">About</Link>
      </nav>
    </div>
        <BrowserRouter>
        <Routes>
          {/* <Route path="/" exact element={<News pageSize={12} category=""/>}/>
          <Route path="/general" exact element={<News pageSize={12} category="general"/>}/>
          <Route path="/business" exact element={<News pageSize={12} category="business"/>}/>
          <Route path="/entertainment" exact element={<News pageSize={12} category="entertainment"/>}/>
          <Route path="/sports" exact element={<News pageSize={12} category="sports"/>}/>
          <Route path="/health" exact element={<News pageSize={12} category="health"/>}/>
          <Route path="/science" exact element={<News pageSize={12} category="science"/>}/>
          <Route path="/technology" exact element={<News pageSize={12} category="technology"/>}/> */}
          <Route path="/"  element={<News pageSize={12} category="technology"/>}/>
          <Route path="/about" element={<News pageSize={12} category="general"/>}/>
        </Routes>
      </BrowserRouter> 
     
      </>
    )
  }
}

