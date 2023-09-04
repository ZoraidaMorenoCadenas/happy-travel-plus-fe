import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homepage/HomePage.jsx';
import FormEdit from '../components/formEdit/FormEdit.jsx';
// import Detail from '../components/detail/Detail.jsx';

function Router() {
  return (
    <Routes>
        <Route path="/" element= {<HomePage/>}/> 
        {/*<Route path="/detail/:id" element={<Detail/>}/>*/}
        <Route path="/:id/edit" 
        element= {<FormEdit/>}/>
    </Routes>
  );
}

export default Router;