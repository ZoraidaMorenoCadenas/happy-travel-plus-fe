import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homepage/HomePage.jsx';
import Detail from '../components/detail/Detail.jsx';
import DestinationForm from '../components/Destination/Destination.jsx';

function Router() {
  return (
    <Routes>
        <Route path="/" element= {<HomePage/>}/> 
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path='/destination/:id' element={<DestinationForm/>}/>
    </Routes>
  );
}

export default Router;