import './App.css'
import Router from './application/Router';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navBar/Nav-Bar';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Router/>
      </BrowserRouter>
    </>
  )
}

export default App
