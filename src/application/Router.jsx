import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homepage/HomePage.jsx';
import Detail from '../components/detail/Detail.jsx';
import DestinationForm from '../components/destination/Destination.jsx';
import Login from '../pages/loginPage/loginPage.jsx';
import RegisterPage from '../pages/registerPage/RegisterPage.jsx';
import Edit from '../pages/editPage/EditPage.jsx';



function Router() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/> 
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/destination' element={<DestinationForm/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/:id/edit" element={<Edit/>}/>
    </Routes>
  );
}

export default Router;