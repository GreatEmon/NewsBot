import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
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
  setProgress=(progress)=>{
    this.setState({progress : progress})
  }
  render() {
    return (
      <>
        <BrowserRouter>
        <LoadingBar
        height={2}
        color='#f11946'
        progress={this.state.progress}
      />
         <Navbar />
        <Routes>
          <Route exact  path="/"  element={<News setProgress={this.setProgress}  key="home" pageSize={12} category=""/>}/>
          <Route exact  path="/general"  element={<News setProgress={this.setProgress} key="general"  pageSize={12} category="general"/>}/>
          <Route exact  path="/business"  element={<News setProgress={this.setProgress} key="business"  pageSize={12} category="business"/>}/>
          <Route exact  path="/entertainment"  element={<News setProgress={this.setProgress} key="entertainment"  pageSize={12} category="entertainment"/>}/>
          <Route exact  path="/sports"  element={<News setProgress={this.setProgress} key="sports"  pageSize={12} category="sports"/>}/>
          <Route exact  path="/health"  element={<News setProgress={this.setProgress} key="health"  pageSize={12} category="health"/>}/>
          <Route exact  path="/science"  element={<News setProgress={this.setProgress} key="science"  pageSize={12} category="science"/>}/>
          <Route exact  path="/technology" element={<News setProgress={this.setProgress} key="technology"  pageSize={12} category="technology"/>}/>
        </Routes>
      </BrowserRouter> 
     
      </>
    )
  }
}

