import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homepage/HomePage.jsx';
import Edit from '../pages/editPage/EditPage.jsx';


function Router() {
  return (
    <Routes>
        <Route path="/" element= {<HomePage/>}/> 
        
        <Route path="/:id/edit" element= {<Edit/>}/>
    </Routes>
  );
}

export default Router;