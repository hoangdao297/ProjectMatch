import React from 'react'
import './App.css'
import Header from './Header';
import SwipeButtons from "./SwipeButtons";
import OneCardexample from './OneCardexample';
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App () {
  return (
    <div className='app'>
      {/* Header*/}
      <Header/>
      <OneCardexample/>
      <SwipeButtons/>
    </div>
  );
}

export default App;