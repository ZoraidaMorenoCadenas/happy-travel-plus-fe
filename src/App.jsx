import { useState, useEffect} from 'react'
import './App.css'
import Router from './application/Router';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </>
  )
}

export default App
