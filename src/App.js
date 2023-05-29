import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LeapYearCalculator from './components/LeapYearCalculator';
import FibonacciSequence from './components/FibonacciSequence'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<LandingPage/>}> </Route>
      <Route path="/leap" exact element = {<LeapYearCalculator/>} />
      <Route path='/fibonacci' exact element = {<FibonacciSequence/>}/>
      {/* <Route />
      <Route />
      <Route /> */}
    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
