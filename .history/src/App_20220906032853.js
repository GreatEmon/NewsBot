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
  apiKey="7dad31d0b27d44e8a7d0543b5a521cba";
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
        color='#0275d8'
        progress={this.state.progress}
      />
         <Navbar />
        <Routes>
          <Route exact  path="/"  element={<News setProgress={this.setProgress} api  key="home" pageSize={12} category=""/>}/>
          <Route exact  path="/general"  element={<News setProgress={this.setProgress} api key="general"  pageSize={12} category="general"/>}/>
          <Route exact  path="/business"  element={<News setProgress={this.setProgress} api key="business"  pageSize={12} category="business"/>}/>
          <Route exact  path="/entertainment"  element={<News setProgress={this.setProgress} api key="entertainment"  pageSize={12} category="entertainment"/>}/>
          <Route exact  path="/sports"  element={<News setProgress={this.setProgress} api key="sports"  pageSize={12} category="sports"/>}/>
          <Route exact  path="/health"  element={<News setProgress={this.setProgress} api key="health"  pageSize={12} category="health"/>}/>
          <Route exact  path="/science"  element={<News setProgress={this.setProgress} api key="science"  pageSize={12} category="science"/>}/>
          <Route exact  path="/technology" element={<News setProgress={this.setProgress} api key="technology"  pageSize={12} category="technology"/>}/>
        </Routes>
      </BrowserRouter> 
     
      </>
    )
  }
}

