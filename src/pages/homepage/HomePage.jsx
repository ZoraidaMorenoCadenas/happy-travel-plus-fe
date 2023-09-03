
import {React, useState, useEffect} from 'react'
import CardDashboard from "../../components/card-dashboard/Card-dashboard"
import NavBar from '../../components/navBar/Nav-Bar';
import Detail from'../detailPage/DetailPage'


export default function HomePage() {

  return (

   <div> 
 
    <NavBar />
    <CardDashboard />
    <Detail />
      
      

</div>
  )
}








