import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homepage/HomePage.jsx';
//import Detail from '../components/detail/Detail.jsx';

function Router() {
  return (
    <Routes>
        <Route path="/" element= {<HomePage/>}/> 
        {/*<Route path="/detail/:id" element={<Detail/>}/>*/}
    </Routes>
  );
}

export default Router;