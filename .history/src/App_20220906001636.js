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
          <Route path="/" element={<News pageSize={12} category="business"/>}/>
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}/>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Routes>
      </BrowserRouter>
       <News pageSize={12} category="business"/>
      </>
    )
  }
}

